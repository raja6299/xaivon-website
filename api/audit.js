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
  const { success, remaining } = await checkRateLimit(ip);

  if (!success) {
    return res.status(429).json({ 
      error: 'Too many requests. Please try again later.',
      remaining 
    });
  }

  try {
    const data = req.body;

    if (data.website) {
      return res.status(400).json({ error: 'Invalid request' });
    }

    if (!data.name || !data.email || !data.company || !data.industry || !data.challenge) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const cleanName = escapeHtml(data.name.trim());
    const cleanEmail = escapeHtml(data.email.trim());
    const cleanCompany = escapeHtml(data.company.trim());
    const cleanIndustry = escapeHtml(data.industry.trim());
    const cleanChallenge = escapeHtml(data.challenge.trim());

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
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

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: process.env.RESEND_CONTACT_EMAIL_TO,
      subject: `New Audit Request from ${cleanName} at ${cleanCompany}`,
      headers: { 'Idempotency-Key': crypto.createHash('sha256').update(cleanEmail + cleanName).digest('hex') },
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
    });

    if (error) {
      console.error('Resend API Error:', error);
      return res.status(500).json({ error: 'Failed to send message' });
    }

    return res.status(200).json({ success: true, message: 'Assessment request received.' });
  } catch (error) {
    console.error('API Error:', error.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
