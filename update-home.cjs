const fs = require('fs');
let c = fs.readFileSync('src/pages/Home.jsx', 'utf-8');
c = c.replace(/leverage/gi, 'use');
fs.writeFileSync('src/pages/Home.jsx', c);
