// src/utils/email-templates.js

export const contactEmailTemplates = {
  // Email sent to customer (confirmation)
  customerConfirmation: (name) => ({
    subject: 'We Received Your Message - XAIVON',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #0a0e27; color: #e4e4e7;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #6366f1; margin: 0;">XAIVON</h1>
          <p style="color: #a1a1aa; margin: 10px 0 0;">AI Infrastructure for Modern Logistics</p>
        </div>
        
        <div style="background: #18181b; padding: 20px; border-radius: 8px; border: 1px solid #27272a;">
          <h2 style="color: #f4f4f5; margin-top: 0;">Thank you, ${name}!</h2>
          <p style="color: #d4d4d8; line-height: 1.6;">
            We've received your message and will review your inquiry within 12 hours.
          </p>
          <p style="color: #d4d4d8; line-height: 1.6;">
            In the meantime, you can:
          </p>
          <ul style="color: #d4d4d8; line-height: 1.8;">
            <li>Schedule a strategy call: <a href="https://calendly.com/raja-xaivon/30min" style="color: #6366f1; text-decoration: none;">calendly.com/raja-xaivon</a></li>
            <li>Learn more: <a href="https://xaivon.com" style="color: #6366f1; text-decoration: none;">xaivon.com</a></li>
            <li>Check our pricing: <a href="https://xaivon.com/pricing" style="color: #6366f1; text-decoration: none;">xaivon.com/pricing</a></li>
          </ul>
        </div>
        
        <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #27272a; color: #71717a; font-size: 12px;">
          <p>© 2025 XAIVON. Enterprise AI Infrastructure.</p>
        </div>
      </div>
    `
  }),
  
  // Email sent to admin (internal notification)
  adminNotification: (data) => ({
    subject: `🔔 New Lead: ${data.name} from ${data.company || 'Unknown'}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #0a0e27; color: #e4e4e7;">
        <h2 style="color: #6366f1;">🎯 New Lead Received</h2>
        
        <div style="background: #18181b; padding: 20px; border-radius: 8px; border-left: 4px solid #6366f1; margin: 20px 0;">
          <p style="margin: 5px 0;"><strong>Name:</strong> ${data.name}</p>
          <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${data.email}" style="color: #6366f1;">${data.email}</a></p>
          <p style="margin: 5px 0;"><strong>Company:</strong> ${data.company || 'Not provided'}</p>
          <p style="margin: 5px 0;"><strong>Submission Time:</strong> ${new Date().toLocaleString()}</p>
        </div>
        
        <h3 style="color: #f4f4f5;">Message:</h3>
        <div style="background: #27272a; padding: 15px; border-radius: 8px; border-left: 4px solid #a1a1aa; color: #d4d4d8; white-space: pre-wrap;">
${data.message}
        </div>
        
        <div style="margin-top: 20px; text-align: center;">
          <a href="https://xaivon.com/dashboard" style="background: #6366f1; color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none; display: inline-block;">View in Dashboard →</a>
        </div>
      </div>
    `
  }),
  
  // Audit form confirmation
  auditConfirmation: (name) => ({
    subject: 'Your AI Infrastructure Assessment - XAIVON',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #0a0e27; color: #e4e4e7;">
        <h2 style="color: #6366f1; margin-top: 0;">Assessment Received, ${name}</h2>
        <p style="color: #d4d4d8; line-height: 1.6;">
          Thank you for submitting your AI Infrastructure Assessment. Our team is analyzing your requirements and will provide a detailed ROI projection within 24 hours.
        </p>
        <p style="color: #a1a1aa; font-size: 12px;">
          If you have urgent questions, schedule a strategy call: <a href="https://calendly.com/raja-xaivon/30min" style="color: #6366f1;">calendly.com/raja-xaivon</a>
        </p>
      </div>
    `
  })
};
