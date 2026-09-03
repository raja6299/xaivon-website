import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pageMetadata } from '../src/config/metadata.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITEMAP_PATH = path.resolve(__dirname, '../dist/sitemap.xml');
const BASE_URL = 'https://xaivon.com';

function generateSitemap() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  Object.keys(pageMetadata).forEach(route => {
    if (pageMetadata[route].noindex) return; // Skip noindex

    const url = route === '/' ? BASE_URL + '/' : BASE_URL + route;
    
    xml += `  <url>\n`;
    xml += `    <loc>${url}</loc>\n`;
    
    // Only include lastmod if it's a blog post and we know the date
    if (pageMetadata[route].lastmod) {
      xml += `    <lastmod>${pageMetadata[route].lastmod}</lastmod>\n`;
    }
    
    xml += `  </url>\n`;
  });

  xml += `</urlset>`;

  fs.writeFileSync(SITEMAP_PATH, xml, 'utf-8');
  console.log('✅ Sitemap successfully generated at dist/sitemap.xml');
}

generateSitemap();
