export function setCorsHeaders(req, res) {
  const allowedOrigins = [
    'https://xaivon.com',
    'https://www.xaivon.com',
    'https://xaivon-website.vercel.app',
  ];

  const origin = req.headers.origin || '';

  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Content-Type, X-Requested-With'
    );
    res.setHeader('Access-Control-Allow-Credentials', 'true');
  }

  return res;
}

export function handleCorsOptions(req, res) {
  if (req.method === 'OPTIONS') {
    setCorsHeaders(req, res);
    res.status(200).end();
    return true;
  }
  return false;
}
