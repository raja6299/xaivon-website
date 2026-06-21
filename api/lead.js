// API Route: POST /api/lead
// Handles lead magnet email capture with full security + Resend delivery

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
  const { limited } = await checkRateLimit(req, res, 'lead');
  if (limited) return;

  try {
    const data = req.body;

    // Honeypot check
    if (data.website) {
      return res.status(400).json({ error: 'Invalid request' });
    }

    // Validate required fields
    if (!data.email || !data.resource) {
      return res.status(400).json({ error: 'Email and resource are required.' });
    }

    // Sanitize
    const cleanEmail = sanitize(data.email).toLowerCase();
    const cleanResource = sanitize(data.resource);

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return res.status(400).json({ error: 'Invalid email format.' });
    }

    // Length limits
    if (cleanEmail.length > 100 || cleanResource.length > 200) {
      return res.status(400).json({ error: 'Input length exceeded.' });
    }

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
      // Admin notification (critical)
      const { data: adminData, error: adminError } = await resend.emails.send({
        from: 'XAIVON Leads <leads@xaivon.com>',
        to: adminTo,
        subject: `Lead Magnet Download: ${cleanResource}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #0a0e27; color: #e4e4e7;">
            <h2 style="color: #6366f1;">Lead Magnet Download</h2>
            <div style="background: #18181b; padding: 20px; border-radius: 8px; border-left: 4px solid #10b981; margin: 20px 0;">
              <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${cleanEmail}" style="color: #6366f1;">${cleanEmail}</a></p>
              <p style="margin: 5px 0;"><strong>Resource:</strong> ${cleanResource}</p>
              <p style="margin: 5px 0;"><strong>Time:</strong> ${new Date().toISOString()}</p>
            </div>
          </div>
        `
      });

      if (adminError) {
        console.error('Admin lead email failed:', JSON.stringify(adminError));
        return res.status(500).json({ error: 'Failed to process request.' });
      }

      console.log('Admin lead notification sent, ID:', adminData?.id);

      // User confirmation email (non-blocking)
      try {
        const { data: userData, error: userError } = await resend.emails.send({
          from: 'XAIVON <leads@xaivon.com>',
          to: cleanEmail,
          subject: `Your ${cleanResource} - XAIVON`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #0a0e27; color: #e4e4e7;">
              <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #6366f1; margin: 0;">XAIVON</h1>
              </div>
              <div style="background: #18181b; padding: 20px; border-radius: 8px; border: 1px solid #27272a;">
                <h2 style="color: #f4f4f5; margin-top: 0;">Your download is ready!</h2>
                <p style="color: #d4d4d8; line-height: 1.6;">Thank you for your interest in <strong>${cleanResource}</strong>. Our team will follow up with the resource shortly.</p>
                <p style="color: #d4d4d8; line-height: 1.6;">Want to discuss implementation?</p>
                <p><a href="https://calendly.com/raja-xaivon/30min" style="color: #6366f1; font-weight: bold;">Schedule a Strategy Call →</a></p>
              </div>
              <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #27272a; color: #71717a; font-size: 12px;">
                <p>2025 XAIVON. Enterprise AI Infrastructure.</p>
              </div>
            </div>
          `
        });

        if (userError) {
          console.warn('User lead email failed (non-critical):', JSON.stringify(userError));
        } else {
          console.log('User lead confirmation sent, ID:', userData?.id);
        }
      } catch (userErr) {
        console.warn('User lead email threw (non-critical):', userErr.message);
      }

      console.log('[LEAD MAGNET] Captured:', cleanEmail, cleanResource);
    } catch (emailError) {
      console.error('Resend Error:', emailError.message, emailError.stack);
      return res.status(500).json({ error: 'Email delivery failed.' });
    }

    return res.status(200).json({
      success: true,
      message: 'Playbook sent successfully.',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Lead capture error:', error.message, error.stack);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
