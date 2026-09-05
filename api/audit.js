import { checkRateLimit } from '../src/lib/ratelimit.js';
import { setCorsHeaders, handleCorsOptions } from './_cors.js';
import { Resend } from 'resend';
import crypto from 'crypto';

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return str.replace(/[&<>"']/g, function(m) { return map[m]; });
}

export default async function handler(req, res) {
  setCorsHeaders(req, res);
  if (handleCorsOptions(req, res)) return;

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket?.remoteAddress || 'unknown';
  const { success, remaining, error: ratelimitError } = await checkRateLimit(ip);

  if (ratelimitError) {
    return res.status(503).json({ error: 'Service temporarily unavailable. Please try again later.' });
  }

  if (!success) {
    return res.status(429).json({
      error: 'Too many requests. Please try again later.',
      remaining
    });
  }

  try {
    const body = req.body;

    if (body.website) {
      return res.status(400).json({ error: 'Invalid request' });
    }

    if (!body.name || !body.email || !body.company || !body.industry || !body.challenge) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    if (
      typeof body.name !== 'string' ||
      typeof body.email !== 'string' ||
      typeof body.company !== 'string' ||
      typeof body.industry !== 'string' ||
      typeof body.challenge !== 'string' ||
      (body.submissionId && typeof body.submissionId !== 'string')
    ) {
      return res.status(400).json({ error: 'Invalid field types' });
    }

    const rawEmail = body.email.trim();
    const cleanName = escapeHtml(body.name.trim());
    const cleanEmail = escapeHtml(rawEmail);
    const cleanCompany = escapeHtml(body.company.trim());
    const cleanIndustry = escapeHtml(body.industry.trim());
    const cleanChallenge = escapeHtml(body.challenge.trim());

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(rawEmail)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    if (
      cleanName.length > 100 ||
      cleanEmail.length > 100 ||
      cleanCompany.length > 100 ||
      cleanIndustry.length > 100 ||
      cleanChallenge.length > 2000
    ) {
      return res.status(400).json({ error: 'Input length exceeded' });
    }

    if (!process.env.RESEND_FROM_EMAIL || !process.env.RESEND_CONTACT_EMAIL_TO) {
      console.error('Missing Resend environment configuration');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    let baseId;
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (body.submissionId && body.submissionId.length === 36 && uuidRegex.test(body.submissionId)) {
      baseId = body.submissionId;
    } else {
      baseId = crypto.createHash('sha256').update(rawEmail + cleanChallenge).digest('hex');
    }
    const idempotencyKey = `${baseId}:audit-internal`;
    const customerIdempotencyKey = `${baseId}:audit-customer`;

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: process.env.RESEND_CONTACT_EMAIL_TO,
      subject: `New Audit Request from ${cleanName} at ${cleanCompany}`,
      html: `
        <h2>New Automation Audit Request</h2>
        <p><strong>Name:</strong> ${cleanName}</p>
        <p><strong>Email:</strong> ${cleanEmail}</p>
        <p><strong>Company:</strong> ${cleanCompany}</p>
        <p><strong>Industry:</strong> ${cleanIndustry}</p>
        <p><strong>Challenge:</strong></p>
        <p>${cleanChallenge.replace(/\n/g, '<br>')}</p>
        <p><small>Submitted from IP: ${escapeHtml(ip)}</small></p>
      `,
    }, { idempotencyKey });

    if (error) {
      console.error('Resend API Error:', error);
      return res.status(500).json({ error: 'Failed to send message' });
    }

    // Secondary Customer Acknowledgement
    try {
      const { error: customerError } = await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL,
        to: rawEmail,
        subject: 'AI Infrastructure Assessment Request Received — XAIVON',
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f8; color: #1a1a1a;">
            <p style="margin-bottom: 16px;">Hello ${cleanName},</p>
            <p style="margin-bottom: 16px;">Thank you for requesting an XAIVON AI Infrastructure Assessment.</p>
            <p style="margin-bottom: 16px;">We’ve received your request and the XAIVON team will review the information you provided.</p>
            <p style="margin-bottom: 24px;">We’ll follow up with you regarding the next step.</p>
            <p style="margin-bottom: 4px;">Regards,</p>
            <p style="font-weight: 600; margin-top: 0; margin-bottom: 4px;">XAIVON</p>
            <p style="color: #9c6c4c; font-size: 14px; margin-top: 0;">AI Infrastructure & Business Automation</p>
          </div>
        `,
        text: `Hello ${cleanName},\n\nThank you for requesting an XAIVON AI Infrastructure Assessment.\n\nWe’ve received your request and the XAIVON team will review the information you provided.\n\nWe’ll follow up with you regarding the next step.\n\nRegards,\nXAIVON\nAI Infrastructure & Business Automation`
      }, { idempotencyKey: customerIdempotencyKey });

      if (customerError) {
        console.error('Resend Customer API Error:', customerError);
      }
    } catch (customerCatchErr) {
      console.error('Customer Acknowledgement Error:', customerCatchErr.message);
    }

    return res.status(200).json({ success: true, message: 'Assessment request received.' });
  } catch (error) {
    console.error('API Error:', error.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
