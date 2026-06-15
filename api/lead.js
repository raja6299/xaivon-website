// Vercel Serverless Function for Lead Magnet Email Capture
// Endpoint: POST /api/lead

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { email, resource } = req.body;

    // Basic Validation
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Valid email is required.' });
    }

    if (!resource) {
      return res.status(400).json({ error: 'Resource identifier is required.' });
    }

    // Sanitize inputs
    const sanitizedEmail = email.trim().toLowerCase();

    // Log the download request securely (in a real app, save to DB and trigger email provider)
    console.log(`[LEAD MAGNET] Resource: ${resource} | Email: ${sanitizedEmail}`);

    // Future integration point for Resend / ConvertKit
    // await sendEmailWithAttachment(sanitizedEmail, resource);
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 800));

    // Return success response
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
