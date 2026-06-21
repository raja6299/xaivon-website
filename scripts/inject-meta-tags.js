import fs from 'fs';
import path from 'path';
import { pageMetadata } from '../src/config/metadata.js';

const DIST_DIR = 'dist';
const INDEX_HTML_PATH = path.join(DIST_DIR, 'index.html');

function generateMetaTags(route, metadata) {
  const url = `https://xaivon.com${route === '/' ? '' : route}`;
  return `
    <title>${metadata.title}</title>
    <meta name="description" content="${metadata.description}" />
    <link rel="canonical" href="${url}" />
    <meta property="og:title" content="${metadata.title}" />
    <meta property="og:description" content="${metadata.description}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${metadata.image}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:title" content="${metadata.title}" />
    <meta name="twitter:description" content="${metadata.description}" />
    <meta name="twitter:image" content="${metadata.image}" />`;
}

function injectMetaTagsForRoute(route, metadata) {
  const routePath = route === '/' ? '' : route;
  const outputDir = path.join(DIST_DIR, routePath);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  let html = fs.readFileSync(INDEX_HTML_PATH, 'utf-8');

  // Strip existing tags that we'll replace
  html = html.replace(/<title>.*?<\/title>/s, '');
  html = html.replace(/<meta name="description"[^>]*>/g, '');
  html = html.replace(/<link rel="canonical"[^>]*>/g, '');
  html = html.replace(/<meta property="og:title"[^>]*>/g, '');
  html = html.replace(/<meta property="og:description"[^>]*>/g, '');
  html = html.replace(/<meta property="og:url"[^>]*>/g, '');
  html = html.replace(/<meta property="og:image"[^>]*>/g, '');
  html = html.replace(/<meta property="og:image:width"[^>]*>/g, '');
  html = html.replace(/<meta property="og:image:height"[^>]*>/g, '');
  html = html.replace(/<meta name="twitter:title"[^>]*>/g, '');
  html = html.replace(/<meta name="twitter:description"[^>]*>/g, '');
  html = html.replace(/<meta name="twitter:image"[^>]*>/g, '');

  // Inject new tags right before </head>
  const metaTags = generateMetaTags(route, metadata);
  html = html.replace('</head>', metaTags + '\n  </head>');

  const filePath = path.join(outputDir, 'index.html');
  fs.writeFileSync(filePath, html, 'utf-8');
  console.log(`  ✓ ${filePath}`);
}

console.log('🔄 Injecting per-route meta tags...\n');

Object.keys(pageMetadata).forEach((route) => {
  injectMetaTagsForRoute(route, pageMetadata[route]);
});

console.log('\n✅ Meta tags injected for all routes!');
