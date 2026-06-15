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

    // TODO: Connect to Resend or preferred ESP here

    await new Promise(resolve => setTimeout(resolve, 800));

    return res.status(200).json({ success: true, message: 'Assessment request securely received.' });
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
