// API Route: POST /api/audit
// Handles AI Infrastructure Assessment form submissions

import { handleCors } from './_cors.js';
import { checkRateLimit } from './_ratelimit.js';

function sanitize(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/<[^>]*>?/gm, '').trim();
}

export default async function handler(req, res) {
  // CORS
  if (handleCors(req, res)) return;

  // Method check
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Rate limiting (Upstash Redis)
  const { limited } = await checkRateLimit(req, res, 'audit');
  if (limited) return;

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

    // Verify API key exists
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set in environment variables');
      return res.status(500).json({ error: 'Email service not configured.' });
    }

    // Email sending via Resend
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);
    const adminTo = process.env.RESEND_CONTACT_EMAIL_TO || 'raja@xaivon.com';

    try {
      // Send detailed report to admin (critical)
      const { data: adminData, error: adminError } = await resend.emails.send({
        from: 'XAIVON Leads <leads@xaivon.com>',
        to: adminTo,
        subject: `Assessment Submitted: ${cleanName} - ${cleanIndustry}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #0a0e27; color: #e4e4e7;">
            <h2 style="color: #6366f1;">AI Infrastructure Assessment</h2>
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

      if (adminError) {
        console.error('Admin assessment email failed:', JSON.stringify(adminError));
        return res.status(500).json({ error: 'Failed to process assessment.' });
      }

      console.log('Admin assessment email sent, ID:', adminData?.id);

      // Send confirmation to user (non-blocking)
      try {
        const { data: userData, error: userError } = await resend.emails.send({
          from: 'XAIVON <leads@xaivon.com>',
          to: cleanEmail,
          subject: 'Your AI Infrastructure Assessment - XAIVON',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #0a0e27; color: #e4e4e7;">
              <h2 style="color: #6366f1; margin-top: 0;">Assessment Received, ${cleanName}</h2>
              <p style="color: #d4d4d8; line-height: 1.6;">
                Thank you for submitting your AI Infrastructure Assessment. Our team is analyzing your requirements and will provide a detailed ROI projection within 24 hours.
              </p>
              <p style="color: #a1a1aa; font-size: 12px;">
                If you have urgent questions, schedule a strategy call: <a href="https://calendly.com/raja-xaivon/30min" style="color: #6366f1;">calendly.com/raja-xaivon</a>
              </p>
            </div>
          `
        });

        if (userError) {
          console.warn('User confirmation email failed (non-critical):', JSON.stringify(userError));
        } else {
          console.log('User confirmation sent, ID:', userData?.id);
        }
      } catch (userErr) {
        console.warn('User confirmation threw (non-critical):', userErr.message);
      }

      console.log('Assessment captured:', cleanName, cleanIndustry);
    } catch (emailError) {
      console.error('Resend Error:', emailError.message, emailError.stack);
      return res.status(500).json({ error: 'Assessment processing failed. Please contact us directly.' });
    }

    return res.status(200).json({ success: true, message: 'Assessment request securely received.' });
  } catch (error) {
    console.error('API Error:', error.message, error.stack);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
