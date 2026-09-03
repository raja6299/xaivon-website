import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pageMetadata } from '../src/config/metadata.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');
const SITEMAP_PATH = path.resolve(DIST_DIR, 'sitemap.xml');

let hasError = false;

function error(msg) {
  console.error(`❌ ERROR: ${msg}`);
  hasError = true;
}

console.log('🔍 Verifying SEO and Metadata in dist directory...\n');

if (!fs.existsSync(SITEMAP_PATH)) {
  error('sitemap.xml is missing in dist folder.');
} else {
  const sitemap = fs.readFileSync(SITEMAP_PATH, 'utf-8');
  
  Object.keys(pageMetadata).forEach(route => {
    const isNoIndex = pageMetadata[route].noindex;
    const url = route === '/' ? 'https://xaivon.com/' : `https://xaivon.com${route}`;
    
    // Check sitemap inclusion
    if (isNoIndex && sitemap.includes(`<loc>${url}</loc>`)) {
      error(`noindex route ${route} is present in sitemap.`);
    }
    if (!isNoIndex && !sitemap.includes(`<loc>${url}</loc>`)) {
      error(`Indexable route ${route} is missing from sitemap.`);
    }

    // Check HTML file
    const routePath = route === '/' ? '' : route;
    const htmlPath = path.join(DIST_DIR, routePath, 'index.html');
    
    if (!fs.existsSync(htmlPath)) {
      error(`Missing HTML file for route: ${route} at ${htmlPath}`);
      return;
    }

    const html = fs.readFileSync(htmlPath, 'utf-8');

    // Title
    if (!html.includes(`<title>${pageMetadata[route].title.replace(/[&<>"']/g, m => ({'&': '&amp;','<': '&lt;','>': '&gt;','"': '&quot;',"'": '&#039;'}[m]))}</title>`)) {
      error(`Missing or incorrect <title> for route: ${route}`);
    }

    // Description
    if (!html.includes('name="description"')) {
      error(`Missing meta description for route: ${route}`);
    }

    // Canonical
    if (!html.includes(`<link rel="canonical" href="${url}" />`)) {
      error(`Missing or incorrect canonical link for route: ${route}`);
    }

    // OG Tags
    if (!html.includes('property="og:title"')) error(`Missing og:title for route: ${route}`);
    if (!html.includes('property="og:description"')) error(`Missing og:description for route: ${route}`);
    if (!html.includes(`property="og:url" content="${url}"`)) error(`Missing or incorrect og:url for route: ${route}`);
    
    // Check Image Exists
    const ogImageMatch = html.match(/property="og:image" content="https:\/\/xaivon\.com\/(.+?)"/);
    if (!ogImageMatch) {
      error(`Missing og:image for route: ${route}`);
    } else {
      const imgPath = path.join(DIST_DIR, ogImageMatch[1]);
      if (!fs.existsSync(imgPath)) {
        error(`OG Image file does not exist: ${imgPath}`);
      }
    }
    
    // Twitter
    if (!html.includes('name="twitter:title"')) error(`Missing twitter:title for route: ${route}`);

    // Robots / noindex
    if (isNoIndex) {
      if (!html.includes('name="robots" content="noindex')) {
        error(`noindex route ${route} is missing noindex robots tag.`);
      }
    }
  });
}

if (hasError) {
  console.error('\n💥 SEO verification FAILED. Build should be halted.');
  process.exit(1);
} else {
  console.log('✅ All SEO metadata, sitemap, and OG images verifications passed successfully.');
  process.exit(0);
}
