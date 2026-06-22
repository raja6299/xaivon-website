import { checkRateLimit } from '../src/lib/ratelimit.js';
import { setCorsHeaders, handleCorsOptions } from './_cors.js';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function sanitize(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/<[^>]*>?/gm, '').trim();
}

export default async function handler(req, res) {
  setCorsHeaders(req, res);
  if (handleCorsOptions(req, res)) return;

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const data = req.body;

    // ─── Honeypot Check ───────────────────────────────────────────
    if (data.website) {
      return res.status(400).json({ error: 'Invalid request' });
    }

    // ─── Field Validation ─────────────────────────────────────────
    if (!data.name || !data.email || !data.message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const cleanName = sanitize(data.name);
    const cleanEmail = sanitize(data.email);
    const cleanCompany = sanitize(data.company);
    const cleanMessage = sanitize(data.message);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    if (
      cleanName.length > 100 ||
      cleanEmail.length > 100 ||
      cleanCompany.length > 100 ||
      cleanMessage.length > 2000
    ) {
      return res.status(400).json({ error: 'Input length exceeded' });
    }

    // ─── Sliding Window Rate Limit (by email, 3 per 6 hours) ────
    // We check AFTER validation so invalid submissions don't
    // consume the user's rate-limit budget.
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
    const { success, remaining } = await checkRateLimit(cleanEmail);

    if (!success) {
      // ─── Rate-Limited Response (soft, not an error) ───────────
      // Return 200 so the frontend can distinguish this from a
      // real server error and show the WhatsApp notification.
      return res.status(200).json({
        success: false,
        rateLimited: true,
        message: 'We have received your multiple requests. Our team is already reviewing your case. For urgent support, please contact us via WhatsApp.'
      });
    }

    // ─── Send Lead Email via Resend ─────────────────────────────
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'leads@xaivon.com',
      to: process.env.RESEND_CONTACT_EMAIL_TO || 'raja@xaivon.com',
      subject: `New Contact Form Submission from ${cleanName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${cleanName}</p>
        <p><strong>Email:</strong> ${cleanEmail}</p>
        <p><strong>Company:</strong> ${cleanCompany}</p>
        <p><strong>Message:</strong></p>
        <p>${cleanMessage.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Submitted from IP: ${ip}</small></p>
        <p><small>Remaining submissions in window: ${remaining}</small></p>
      `,
    });

    // ─── Success: email delivered, tell frontend to redirect ────
    return res.status(200).json({
      success: true,
      rateLimited: false,
      message: 'Message received securely.',
      redirect: '/ai-consultation'
    });
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
