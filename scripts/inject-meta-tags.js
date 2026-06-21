import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pageMetadata } from '../src/config/metadata.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');
const INDEX_HTML_PATH = path.join(DIST_DIR, 'index.html');

// Verify dist/index.html exists
if (!fs.existsSync(INDEX_HTML_PATH)) {
  console.error(`❌ ERROR: dist/index.html not found at ${INDEX_HTML_PATH}`);
  process.exit(1);
}

console.log(`📖 Reading base index.html from: ${INDEX_HTML_PATH}`);
let baseHTML = fs.readFileSync(INDEX_HTML_PATH, 'utf-8');
console.log(`✓ Base HTML size: ${baseHTML.length} bytes\n`);

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

function generateMetaTags(route, metadata) {
  const ogUrl = `https://xaivon.com${route}`;
  const ogTitle = escapeHtml(metadata.title);
  const ogDescription = escapeHtml(metadata.description);
  const ogImage = metadata.image;

  return `    <title>${ogTitle}</title>
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
}

function injectMetaTagsForRoute(route, metadata) {
  const routePath = route === '/' ? '' : route;
  const outputDir = path.join(DIST_DIR, routePath);
  const outputIndexPath = path.join(outputDir, 'index.html');

  // Ensure directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log(`  📁 Created directory: ${outputDir}`);
  }

  // Clone base HTML
  let html = baseHTML;

  // STEP 1: Remove old dynamic meta tags and title
  html = html.replace(/<title>[^<]*<\/title>/gi, '');
  html = html.replace(/<meta\s+name="description"[^>]*>/gi, '');
  html = html.replace(/<meta\s+property="og:[^"]*"[^>]*>/gi, '');
  html = html.replace(/<meta\s+name="twitter:[^"]*"[^>]*>/gi, '');
  html = html.replace(/<link\s+rel="canonical"[^>]*>/gi, '');

  // STEP 2: Find </head> and insert new meta tags before it
  const metaTags = generateMetaTags(route, metadata);

  if (html.includes('</head>')) {
    const buildStamp = `<!-- build: ${new Date().toISOString()} -->`;
    html = html.replace('</head>', metaTags + '\n    ' + buildStamp + '\n  </head>');
  } else {
    console.warn(`  ⚠️  Warning: No </head> found in HTML for route ${route}`);
  }

  // STEP 3: Write to output file
  fs.writeFileSync(outputIndexPath, html, 'utf-8');
  const ogUrl = `https://xaivon.com${route}`;
  console.log(`  ✓ Injected: ${route}`);
  console.log(`  📄 File size: ${fs.statSync(outputIndexPath).size} bytes | og:url verified: ${html.includes(`og:url" content="${ogUrl}"`)}`);
}

// MAIN EXECUTION
console.log('🔄 Injecting meta tags for all routes...\n');

const routes = Object.keys(pageMetadata);
console.log(`Found ${routes.length} routes to process:\n`);

routes.forEach((route) => {
  try {
    injectMetaTagsForRoute(route, pageMetadata[route]);
  } catch (error) {
    console.error(`  ❌ ERROR on route ${route}:`, error.message);
  }
});

console.log(`\n✅ Meta tag injection complete!`);
console.log(`\n📊 Output files created:`);
console.log(`  • dist/index.html (home)`);
Object.keys(pageMetadata).forEach((route) => {
  if (route !== '/') {
    const routePath = route.replace(/^\//, '');
    console.log(`  • dist/${routePath}/index.html`);
  }
});
console.log(`\n🧪 Next: Deploy and test with opengraph.xyz`);
