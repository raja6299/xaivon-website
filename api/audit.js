// Minimal in-memory rate limiting map for this serverless instance
const ipRequests = new Map();

function sanitize(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/<[^>]*>?/gm, '').trim();
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
  const now = Date.now();
  
  // Clean up
  for (const [key, timestamp] of ipRequests.entries()) {
    if (now - timestamp > 60000) ipRequests.delete(key);
  }

  // Rate Limiting
  if (ipRequests.has(ip)) {
    const lastRequest = ipRequests.get(ip);
    if (now - lastRequest < 60000) {
      return res.status(429).json({ error: 'Too many requests. Please try again later.' });
    }
  }

  try {
    const data = req.body;

    // Honeypot
    if (data.website) {
      return res.status(400).json({ error: 'Invalid request' });
    }

    // Required fields for Audit
    if (!data.name || !data.email || !data.company || !data.industry || !data.challenge) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const cleanName = sanitize(data.name);
    const cleanEmail = sanitize(data.email);
    const cleanCompany = sanitize(data.company);
    const cleanIndustry = sanitize(data.industry);
    const cleanChallenge = sanitize(data.challenge);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    if (cleanName.length > 100 || cleanEmail.length > 100 || cleanCompany.length > 100 || cleanIndustry.length > 100 || cleanChallenge.length > 2000) {
      return res.status(400).json({ error: 'Input length exceeded' });
    }

    ipRequests.set(ip, now);

    // Email sending via Resend
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const { contactEmailTemplates } = await import('../src/utils/email-templates.js');

    try {
      // Send confirmation to user
      const userEmail = await resend.emails.send({
        from: 'leads@xaivon.com',
        to: cleanEmail,
        subject: 'Your AI Infrastructure Assessment - XAIVON',
        html: contactEmailTemplates.auditConfirmation(cleanName).html
      });

      // Send detailed report to admin
      const adminEmail = await resend.emails.send({
        from: 'leads@xaivon.com',
        to: process.env.RESEND_CONTACT_EMAIL_TO || 'raja@xaivon.com',
        subject: `🔔 Assessment Submitted: ${cleanName} - ${cleanIndustry}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #0a0e27; color: #e4e4e7;">
            <h2 style="color: #6366f1;">📋 AI Infrastructure Assessment</h2>
            <div style="background: #18181b; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${cleanName}</p>
              <p><strong>Email:</strong> <a href="mailto:${cleanEmail}" style="color: #6366f1;">${cleanEmail}</a></p>
              <p><strong>Company:</strong> ${cleanCompany}</p>
              <p><strong>Industry:</strong> ${cleanIndustry}</p>
              <p><strong>Challenge:</strong></p>
              <div style="background: #27272a; padding: 15px; border-radius: 6px; color: #d4d4d8; white-space: pre-wrap;">${cleanChallenge}</div>
            </div>
          </div>
        `
      });

      if (!userEmail.id || !adminEmail.id) {
        console.error('Assessment email failed:', { userEmail, adminEmail });
        return res.status(500).json({ error: 'Failed to process assessment.' });
      }

      console.log(`✅ Assessment captured: ${cleanName} (${cleanIndustry})`);
    } catch (emailError) {
      console.error('❌ Resend Error:', emailError.message);
      return res.status(500).json({ error: 'Assessment processing failed. Please contact us directly.' });
    }

    return res.status(200).json({ success: true, message: 'Assessment request securely received.' });
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
