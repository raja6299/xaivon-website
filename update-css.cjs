const fs = require('fs');
const files = [
  'src/components/LogisticsSection.css',
  'src/components/ServicesSection.css',
  'src/pages/LogisticsSolutions.css'
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    let c = fs.readFileSync(f, 'utf-8');
    c = c.replace(/--shadow-glow-gold/g, '--shadow-lg');
    c = c.replace(/gold/gi, 'accent');
    c = c.replace(/--color-primary/g, '--accent');
    fs.writeFileSync(f, c);
  }
});
