// Minimal in-memory rate limiting map for this serverless instance
const ipRequests = new Map();

// Helper to sanitize input (basic HTML strip)
function sanitize(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/<[^>]*>?/gm, '').trim();
}

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // IP extraction for rate limiting
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
  const now = Date.now();
  
  // Clean up old IP entries (older than 1 minute)
  for (const [key, timestamp] of ipRequests.entries()) {
    if (now - timestamp > 60000) ipRequests.delete(key);
  }

  // Rate Limiting: 2 requests per minute per IP
  if (ipRequests.has(ip)) {
    const lastRequest = ipRequests.get(ip);
    if (now - lastRequest < 60000) {
      return res.status(429).json({ error: 'Too many requests. Please try again later.' });
    }
  }

  try {
    const data = req.body;

    // 1. Honeypot check
    if (data.website) {
      return res.status(400).json({ error: 'Invalid request' });
    }

    // 2. Validate required fields
    if (!data.name || !data.email || !data.message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // 3. Sanitize inputs
    const cleanName = sanitize(data.name);
    const cleanEmail = sanitize(data.email);
    const cleanCompany = sanitize(data.company);
    const cleanMessage = sanitize(data.message);

    // 4. Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // 5. Length constraints
    if (cleanName.length > 100 || cleanEmail.length > 100 || cleanCompany.length > 100 || cleanMessage.length > 2000) {
      return res.status(400).json({ error: 'Input length exceeded' });
    }

    // Log the IP as successfully submitting
    ipRequests.set(ip, now);

    // Verify API key exists
    if (!process.env.RESEND_API_KEY) {
      console.error('❌ RESEND_API_KEY is not set in environment variables');
      return res.status(500).json({ error: 'Email service not configured.' });
    }

    // Email sending via Resend
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);
    const adminTo = process.env.RESEND_CONTACT_EMAIL_TO || 'raja@xaivon.com';

    try {
      // Send email to admin (internal notification) — this is the critical one
      const { data: adminData, error: adminError } = await resend.emails.send({
        from: 'XAIVON Leads <leads@xaivon.com>',
        to: adminTo,
        subject: `New Lead: ${cleanName} from ${cleanCompany || 'Unknown'}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #0a0e27; color: #e4e4e7;">
            <h2 style="color: #6366f1;">New Lead Received</h2>
            <div style="background: #18181b; padding: 20px; border-radius: 8px; border-left: 4px solid #6366f1; margin: 20px 0;">
              <p style="margin: 5px 0;"><strong>Name:</strong> ${cleanName}</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${cleanEmail}" style="color: #6366f1;">${cleanEmail}</a></p>
              <p style="margin: 5px 0;"><strong>Company:</strong> ${cleanCompany || 'Not provided'}</p>
              <p style="margin: 5px 0;"><strong>Submission Time:</strong> ${new Date().toISOString()}</p>
            </div>
            <h3 style="color: #f4f4f5;">Message:</h3>
            <div style="background: #27272a; padding: 15px; border-radius: 8px; border-left: 4px solid #a1a1aa; color: #d4d4d8; white-space: pre-wrap;">${cleanMessage}</div>
          </div>
        `
      });

      if (adminError) {
        console.error('Admin email failed:', JSON.stringify(adminError));
        return res.status(500).json({ error: 'Failed to process your message. Please try again.' });
      }

      console.log('Admin email sent, ID:', adminData?.id);

      // Send confirmation to customer (non-blocking — don't fail the request if this errors)
      try {
        const { data: custData, error: custError } = await resend.emails.send({
          from: 'XAIVON <leads@xaivon.com>',
          to: cleanEmail,
          subject: 'We Received Your Message - XAIVON',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #0a0e27; color: #e4e4e7;">
              <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #6366f1; margin: 0;">XAIVON</h1>
                <p style="color: #a1a1aa; margin: 10px 0 0;">AI Infrastructure for Modern Logistics</p>
              </div>
              <div style="background: #18181b; padding: 20px; border-radius: 8px; border: 1px solid #27272a;">
                <h2 style="color: #f4f4f5; margin-top: 0;">Thank you, ${cleanName}!</h2>
                <p style="color: #d4d4d8; line-height: 1.6;">We have received your message and will review your inquiry within 12 hours.</p>
                <p style="color: #d4d4d8; line-height: 1.6;">In the meantime, you can:</p>
                <ul style="color: #d4d4d8; line-height: 1.8;">
                  <li>Schedule a strategy call: <a href="https://calendly.com/raja-xaivon/30min" style="color: #6366f1;">calendly.com/raja-xaivon</a></li>
                  <li>Learn more: <a href="https://xaivon.com" style="color: #6366f1;">xaivon.com</a></li>
                </ul>
              </div>
              <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #27272a; color: #71717a; font-size: 12px;">
                <p>2025 XAIVON. Enterprise AI Infrastructure.</p>
              </div>
            </div>
          `
        });

        if (custError) {
          console.warn('Customer confirmation email failed (non-critical):', JSON.stringify(custError));
        } else {
          console.log('Customer confirmation sent, ID:', custData?.id);
        }
      } catch (custErr) {
        console.warn('Customer confirmation threw (non-critical):', custErr.message);
      }

      console.log('Lead captured:', cleanName, cleanEmail, cleanCompany);
    } catch (emailError) {
      console.error('Resend Error:', emailError.message, emailError.stack);
      return res.status(500).json({ error: 'Email delivery failed. Our team will follow up manually.' });
    }

    return res.status(200).json({ success: true, message: 'Message received securely.' });
  } catch (error) {
    console.error('API Error:', error.message, error.stack);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
