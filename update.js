const fs = require('fs');
let code = fs.readFileSync('api/contact.js', 'utf-8');
code = code.replace("import { Resend } from 'resend';", "import { Resend } from 'resend';\nimport crypto from 'crypto';");
code = code.replace("await checkRateLimit(cleanEmail);", "await checkRateLimit(`${ip}_${cleanEmail}`);");
code = code.replace("html: `", "headers: { 'Idempotency-Key': crypto.createHash('sha256').update(cleanEmail + cleanMessage).digest('hex') },\n      html: `");
fs.writeFileSync('api/contact.js', code);
