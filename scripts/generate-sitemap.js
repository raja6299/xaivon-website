// Sitemap Generator for XAIVON
// Run with: node scripts/generate-sitemap.js
// This outputs public/sitemap.xml and public/robots.txt

import { writeFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE_URL = 'https://xaivon.com';

const pages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/services', priority: '0.9', changefreq: 'monthly' },
  { path: '/pricing', priority: '0.9', changefreq: 'monthly' },
  { path: '/contact', priority: '0.9', changefreq: 'monthly' },
  { path: '/resources', priority: '0.8', changefreq: 'weekly' },
  { path: '/blog', priority: '0.7', changefreq: 'weekly' },
  // Dedicated Service Pages
  { path: '/quoteflow-ai', priority: '0.9', changefreq: 'monthly' },
  { path: '/ai-agents', priority: '0.9', changefreq: 'monthly' },
  { path: '/ai-automation', priority: '0.9', changefreq: 'monthly' },
  { path: '/ai-chatbots', priority: '0.9', changefreq: 'monthly' },
  // SEO Landing Pages
  { path: '/s/logistics-automation', priority: '0.8', changefreq: 'monthly' },
  { path: '/s/freight-automation', priority: '0.8', changefreq: 'monthly' },
  { path: '/s/ai-automation', priority: '0.8', changefreq: 'monthly' },
  { path: '/s/ai-chatbots', priority: '0.8', changefreq: 'monthly' },
  { path: '/s/workflow-automation', priority: '0.8', changefreq: 'monthly' },
  { path: '/s/crm-automation', priority: '0.8', changefreq: 'monthly' },
  // Legal
  { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms', priority: '0.3', changefreq: 'yearly' },
  { path: '/cookie-policy', priority: '0.3', changefreq: 'yearly' },
];

const today = new Date().toISOString().split('T')[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${BASE_URL}${p.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

const robots = `User-agent: *
Allow: /
Sitemap: ${BASE_URL}/sitemap.xml
`;

const publicDir = resolve(__dirname, '..', 'public');
writeFileSync(resolve(publicDir, 'sitemap.xml'), sitemap);
writeFileSync(resolve(publicDir, 'robots.txt'), robots);

console.log('✅ sitemap.xml generated');
console.log('✅ robots.txt generated');
