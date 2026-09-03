import { checkRateLimit } from '../src/lib/ratelimit.js';
import { setCorsHeaders, handleCorsOptions } from './_cors.js';

export default async function handler(req, res) {
  setCorsHeaders(req, res);
  if (handleCorsOptions(req, res)) return;

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
    req.socket?.remoteAddress || 'unknown';
  const { success, remaining } = await checkRateLimit(`lead:${ip}`);

  if (!success) {
    return res.status(429).json({
      error: 'Too many requests. Please try again later.',
      remaining
    });
  }

  try {
    const { email, resource } = req.body || {};

    // Honeypot
    if (req.body?.website) {
      return res.status(400).json({ error: 'Invalid request' });
    }

    if (!email || typeof email !== 'string') {
      return res.status(400).json({ error: 'Valid email is required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const sanitizedEmail = email.trim().toLowerCase();

    if (!emailRegex.test(sanitizedEmail) || sanitizedEmail.length > 200) {
      return res.status(400).json({ error: 'Valid email is required.' });
    }

    if (!resource || typeof resource !== 'string' || resource.length > 100) {
      return res.status(400).json({ error: 'Resource identifier is required.' });
    }

    // Valid resource whitelist
    const validResources = ['25-logistics-workflows'];
    if (!validResources.includes(resource)) {
      return res.status(400).json({ error: 'Unknown resource.' });
    }

    // Log interest (no email body logged for privacy)
    console.log(`[LEAD] Interest registered: ${resource} from ${ip}`);

    return res.status(200).json({
      success: true,
      message: 'You have been added to the early access list.',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Lead capture error:', error.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
