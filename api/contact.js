import { checkRateLimit } from '../src/lib/ratelimit.js';
import { setCorsHeaders, handleCorsOptions } from './_cors.js';
import { Resend } from 'resend';

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

  try {
    const data = req.body;

    if (data.website) {
      return res.status(400).json({ error: 'Invalid request' });
    }

    if (!data.name || !data.email || !data.message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const cleanName = escapeHtml(data.name.trim());
    const cleanEmail = escapeHtml(data.email.trim());
    const cleanCompany = escapeHtml((data.company || '').trim());
    const cleanMessage = escapeHtml(data.message.trim());

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
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

    const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket?.remoteAddress || 'unknown';
    const { success, remaining } = await checkRateLimit(cleanEmail);

    if (!success) {
      return res.status(200).json({
        success: false,
        rateLimited: true,
        message: 'We have received your multiple requests. Our team is already reviewing your case. For urgent support, please contact us via WhatsApp.'
      });
    }

    if (!process.env.RESEND_FROM_EMAIL || !process.env.RESEND_CONTACT_EMAIL_TO) {
      console.error('Missing Resend environment configuration');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: process.env.RESEND_CONTACT_EMAIL_TO,
      subject: `New Contact Form Submission from ${cleanName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${cleanName}</p>
        <p><strong>Email:</strong> ${cleanEmail}</p>
        <p><strong>Company:</strong> ${cleanCompany}</p>
        <p><strong>Message:</strong></p>
        <p>${cleanMessage.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Submitted from IP: ${escapeHtml(ip)}</small></p>
        <p><small>Remaining submissions in window: ${remaining}</small></p>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return res.status(500).json({ error: 'Failed to send message' });
    }

    return res.status(200).json({
      success: true,
      rateLimited: false,
      message: 'Message received securely.',
      redirect: '/ai-consultation'
    });
  } catch (error) {
    console.error('API Error:', error.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
