import { checkRateLimit } from '../src/lib/ratelimit.js';
import { setCorsHeaders, handleCorsOptions } from './_cors.js';

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
    const { email, resource } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Valid email is required.' });
    }

    if (!resource) {
      return res.status(400).json({ error: 'Resource identifier is required.' });
    }

    const sanitizedEmail = email.trim().toLowerCase();
    console.log(`[LEAD MAGNET] Resource: ${resource} | Email: ${sanitizedEmail}`);

    await new Promise(resolve => setTimeout(resolve, 800));

    return res.status(200).json({ 
      success: true, 
      message: 'Playbook sent successfully.',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Lead capture error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
