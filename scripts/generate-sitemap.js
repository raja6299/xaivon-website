import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pageMetadata } from '../src/config/metadata.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITEMAP_PATH = path.resolve(__dirname, '../public/sitemap.xml');
const BASE_URL = 'https://xaivon.com';

function generateSitemap() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  const today = new Date().toISOString().split('T')[0];

  Object.keys(pageMetadata).forEach(route => {
    if (pageMetadata[route].noindex) return; // Skip noindex

    const url = route === '/' ? BASE_URL + '/' : BASE_URL + route;
    
    // Simple priority logic
    let priority = '0.8';
    if (route === '/') priority = '1.0';
    else if (route.startsWith('/s/')) priority = '0.6';
    else if (route.startsWith('/blog/')) priority = '0.7';
    else if (['/about', '/solutions', '/products', '/pricing'].includes(route)) priority = '0.9';

    xml += `  <url>\n`;
    xml += `    <loc>${url}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    xml += `  </url>\n`;
  });

  xml += `</urlset>`;

  fs.writeFileSync(SITEMAP_PATH, xml, 'utf-8');
  console.log('? Sitemap successfully generated at public/sitemap.xml');
}

generateSitemap();
