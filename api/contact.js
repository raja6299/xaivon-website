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
      // Spam bot filled the hidden field
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

    // Email sending via Resend
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    // Import email templates
    const { contactEmailTemplates } = await import('../src/utils/email-templates.js');

    try {
      // Send email to customer (confirmation)
      const customerEmail = await resend.emails.send({
        from: 'leads@xaivon.com',
        to: cleanEmail,
        subject: 'We Received Your Message - XAIVON',
        html: contactEmailTemplates.customerConfirmation(cleanName).html
      });

      // Send email to admin (internal notification)
      const adminEmail = await resend.emails.send({
        from: 'leads@xaivon.com',
        to: process.env.RESEND_CONTACT_EMAIL_TO || 'raja@xaivon.com',
        subject: `🔔 New Lead: ${cleanName} from ${cleanCompany || 'Unknown'}`,
        html: contactEmailTemplates.adminNotification({
          name: cleanName,
          email: cleanEmail,
          company: cleanCompany,
          message: cleanMessage
        }).html
      });

      // Verify both emails sent
      if (!customerEmail.id || !adminEmail.id) {
        console.error('Email send failed:', { customerEmail, adminEmail });
        return res.status(500).json({ error: 'Failed to send confirmation email. Please try again.' });
      }

      // Log success
      console.log(`✅ Lead captured: ${cleanName} (${cleanEmail}) from ${cleanCompany}`);
    } catch (emailError) {
      console.error('❌ Resend Error:', emailError.message);
      return res.status(500).json({ error: 'Email delivery failed. Our team will follow up manually.' });
    }

    return res.status(200).json({ success: true, message: 'Message received securely.' });
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
