import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pageMetadata } from '../src/config/metadata.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');
const SITEMAP_PATH = path.resolve(DIST_DIR, 'sitemap.xml');

let errors = 0;
const titles = new Map();

function error(msg) {
  console.error(`❌ ${msg}`);
  errors++;
}

function countOccurrences(html, pattern) {
  const matches = html.match(pattern);
  return matches ? matches.length : 0;
}

console.log('🔍 Verifying SEO metadata in dist directory...\n');

// ─── Sitemap Checks ─────────────────────────────────────────────────
if (!fs.existsSync(SITEMAP_PATH)) {
  error('sitemap.xml missing from dist/');
} else {
  const sitemap = fs.readFileSync(SITEMAP_PATH, 'utf-8');
  const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
  const uniqueUrls = new Set(sitemapUrls);
  
  if (sitemapUrls.length !== uniqueUrls.size) {
    error(`Sitemap contains duplicate URLs (${sitemapUrls.length} total, ${uniqueUrls.size} unique)`);
  }

  Object.keys(pageMetadata).forEach(route => {
    const meta = pageMetadata[route];
    const url = route === '/' ? 'https://xaivon.com/' : `https://xaivon.com${route}`;

    if (meta.noindex && sitemap.includes(`<loc>${url}</loc>`)) {
      error(`Noindex route ${route} found in sitemap`);
    }
    if (!meta.noindex && !sitemap.includes(`<loc>${url}</loc>`)) {
      error(`Indexable route ${route} missing from sitemap`);
    }
  });
}

// ─── Per-Route HTML Checks ──────────────────────────────────────────
Object.keys(pageMetadata).forEach(route => {
  const meta = pageMetadata[route];
  const routePath = route === '/' ? '' : route;
  const htmlPath = path.join(DIST_DIR, routePath, 'index.html');
  const url = route === '/' ? 'https://xaivon.com/' : `https://xaivon.com${route}`;

  if (!fs.existsSync(htmlPath)) {
    error(`Missing HTML for route ${route}: ${htmlPath}`);
    return;
  }

  const html = fs.readFileSync(htmlPath, 'utf-8');

  // Title
  const titleCount = countOccurrences(html, /<title>[^<]*<\/title>/g);
  if (titleCount === 0) error(`${route}: no <title> tag`);
  if (titleCount > 1) error(`${route}: ${titleCount} <title> tags (expected 1)`);
  
  const titleMatch = html.match(/<title>([^<]*)<\/title>/);
  if (titleMatch) {
    if (titles.has(titleMatch[1]) && !meta.noindex) {
      error(`${route}: duplicate title "${titleMatch[1]}" (also used by ${titles.get(titleMatch[1])})`);
    }
    titles.set(titleMatch[1], route);
  }

  // Description
  const descCount = countOccurrences(html, /<meta\s+name="description"[^>]*>/gi);
  if (descCount === 0) error(`${route}: no meta description`);
  if (descCount > 1) error(`${route}: ${descCount} meta descriptions (expected 1)`);

  // Canonical
  const canonicalCount = countOccurrences(html, /<link\s+rel="canonical"[^>]*>/gi);
  if (canonicalCount === 0) error(`${route}: no canonical link`);
  if (canonicalCount > 1) error(`${route}: ${canonicalCount} canonical links (expected 1)`);
  if (!html.includes(`<link rel="canonical" href="${url}" />`)) {
    error(`${route}: canonical URL mismatch (expected ${url})`);
  }

  // Robots / noindex
  if (meta.noindex) {
    if (!html.includes('name="robots" content="noindex')) {
      error(`${route}: noindex route missing noindex robots tag`);
    }
  }

  // OG title
  const ogTitleCount = countOccurrences(html, /<meta\s+property="og:title"[^>]*>/gi);
  if (ogTitleCount === 0) error(`${route}: no og:title`);
  if (ogTitleCount > 1) error(`${route}: ${ogTitleCount} og:title tags`);

  // OG description
  const ogDescCount = countOccurrences(html, /<meta\s+property="og:description"[^>]*>/gi);
  if (ogDescCount === 0) error(`${route}: no og:description`);
  if (ogDescCount > 1) error(`${route}: ${ogDescCount} og:description tags`);

  // OG URL
  const ogUrlCount = countOccurrences(html, /<meta\s+property="og:url"[^>]*>/gi);
  if (ogUrlCount === 0) error(`${route}: no og:url`);
  if (!html.includes(`property="og:url" content="${url}"`)) {
    error(`${route}: og:url mismatch (expected ${url})`);
  }

  // OG image — verify file existence
  const ogImageCount = countOccurrences(html, /<meta\s+property="og:image"[^>]*>/gi);
  if (ogImageCount === 0) error(`${route}: no og:image`);
  const ogImageMatch = html.match(/property="og:image" content="https:\/\/xaivon\.com\/([^"]+)"/);
  if (ogImageMatch) {
    const imgPath = path.join(DIST_DIR, ogImageMatch[1]);
    if (!fs.existsSync(imgPath)) {
      error(`${route}: og:image file does not exist: ${ogImageMatch[1]}`);
    }
  }

  // Twitter
  if (!html.includes('name="twitter:card"')) error(`${route}: no twitter:card`);
  if (!html.includes('name="twitter:title"')) error(`${route}: no twitter:title`);
  if (!html.includes('name="twitter:description"')) error(`${route}: no twitter:description`);
  if (!html.includes('name="twitter:image"')) error(`${route}: no twitter:image`);
});

// ─── Result ─────────────────────────────────────────────────────────
console.log(`\nChecked ${Object.keys(pageMetadata).length} routes.`);
if (errors > 0) {
  console.error(`\n💥 SEO verification FAILED with ${errors} error(s).`);
  process.exit(1);
} else {
  console.log('✅ All SEO metadata, sitemap, and OG image verifications passed.');
  process.exit(0);
}
