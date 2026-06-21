// Shared CORS helper for all API routes
// Restricts origins to XAIVON domains only

const ALLOWED_ORIGINS = [
  'https://xaivon.com',
  'https://www.xaivon.com',
  'https://xaivon-website.vercel.app',
];

export function setCorsHeaders(req, res) {
  const origin = req.headers.origin;
  if (ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
}

export function handleCors(req, res) {
  setCorsHeaders(req, res);
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return true;
  }
  return false;
}
