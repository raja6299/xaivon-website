import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pageMetadata } from '../src/config/metadata.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');
const INDEX_HTML_PATH = path.join(DIST_DIR, 'index.html');

if (!fs.existsSync(INDEX_HTML_PATH)) {
  console.error(`❌ ERROR: dist/index.html not found at ${INDEX_HTML_PATH}`);
  process.exit(1);
}

console.log(`📡 Reading base index.html from: ${INDEX_HTML_PATH}`);
let baseHTML = fs.readFileSync(INDEX_HTML_PATH, 'utf-8');

function escapeHtml(text) {
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

function generateMetaTags(route, metadata) {
  const ogUrl = `https://xaivon.com${route}`;
  const ogTitle = escapeHtml(metadata.title);
  const ogDescription = escapeHtml(metadata.description);
  const ogImage = metadata.image;

  let tags = `    <title>${ogTitle}</title>
    <meta name="description" content="${ogDescription}" />
    <link rel="canonical" href="${ogUrl}" />
    <meta property="og:title" content="${ogTitle}" />
    <meta property="og:description" content="${ogDescription}" />
    <meta property="og:url" content="${ogUrl}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:type" content="website" />
    <meta name="twitter:title" content="${ogTitle}" />
    <meta name="twitter:description" content="${ogDescription}" />
    <meta name="twitter:image" content="${ogImage}" />
    <meta name="twitter:card" content="summary_large_image" />`;

  if (metadata.noindex) {
    tags += `\n    <meta name="robots" content="noindex, nofollow" />`;
  }

  return tags;
}

function injectMetaTagsForRoute(route, metadata) {
  const routePath = route === '/' ? '' : route;
  const outputDir = path.join(DIST_DIR, routePath);
  const outputIndexPath = path.join(outputDir, 'index.html');

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  let html = baseHTML;
  html = html.replace(/<title>[^<]*<\/title>/gi, '');
  html = html.replace(/<meta\s+name="description"[^>]*>/gi, '');
  html = html.replace(/<meta\s+property="og:[^"]*"[^>]*>/gi, '');
  html = html.replace(/<meta\s+name="twitter:[^"]*"[^>]*>/gi, '');
  html = html.replace(/<link\s+rel="canonical"[^>]*>/gi, '');
  html = html.replace(/<meta\s+name="robots"[^>]*>/gi, '');

  const metaTags = generateMetaTags(route, metadata);

  if (html.includes('</head>')) {
    html = html.replace('</head>', metaTags + '\n  </head>');
  }

  fs.writeFileSync(outputIndexPath, html, 'utf-8');
}

Object.keys(pageMetadata).forEach((route) => {
  injectMetaTagsForRoute(route, pageMetadata[route]);
});
console.log('✅ Meta tag injection complete!');
