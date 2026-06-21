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

  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
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

    const cleanName = sanitize(data.name);
    const cleanEmail = sanitize(data.email);
    const cleanCompany = sanitize(data.company);
    const cleanIndustry = sanitize(data.industry);
    const cleanChallenge = sanitize(data.challenge);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
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

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'leads@xaivon.com',
      to: process.env.RESEND_CONTACT_EMAIL_TO || 'raja@xaivon.com',
      subject: `New Audit Request from ${cleanName} at ${cleanCompany}`,
      html: `
        <h2>New Automation Audit Request</h2>
        <p><strong>Name:</strong> ${cleanName}</p>
        <p><strong>Email:</strong> ${cleanEmail}</p>
        <p><strong>Company:</strong> ${cleanCompany}</p>
        <p><strong>Industry:</strong> ${cleanIndustry}</p>
        <p><strong>Challenge:</strong></p>
        <p>${cleanChallenge.replace(/\n/g, '<br>')}</p>
        <p><small>Submitted from: ${ip}</small></p>
      `,
    });

    await new Promise(resolve => setTimeout(resolve, 800));

    return res.status(200).json({ success: true, message: 'Assessment request securely received.' });
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
