import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pageMetadata } from '../src/config/metadata.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');

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

console.log('🔍 Verifying meta tag injection...\n');

let allPassed = true;

Object.entries(pageMetadata).forEach(([route, metadata]) => {
  const routePath = route === '/' ? '' : route;
  const filePath = path.join(DIST_DIR, routePath, 'index.html');

  if (!fs.existsSync(filePath)) {
    console.log(`❌ ${route}: File NOT found at ${filePath}`);
    allPassed = false;
    return;
  }

  const html = fs.readFileSync(filePath, 'utf-8');

  const ogTitleMatch = html.match(/<meta\s+property="og:title"\s+content="([^"]*)"/);
  const ogUrlMatch = html.match(/<meta\s+property="og:url"\s+content="([^"]*)"/);
  const ogDescMatch = html.match(/<meta\s+property="og:description"\s+content="([^"]*)"/);

  const expectedUrl = `https://xaivon.com${route}`;
  const expectedTitle = escapeHtml(metadata.title);
  const expectedDesc = escapeHtml(metadata.description);

  const urlCorrect = ogUrlMatch && ogUrlMatch[1] === expectedUrl;
  const titleCorrect = ogTitleMatch && ogTitleMatch[1] === expectedTitle;
  const descCorrect = ogDescMatch && ogDescMatch[1] === expectedDesc;

  const status = (urlCorrect && titleCorrect && descCorrect) ? '✅' : '❌';
  if (status === '❌') allPassed = false;

  console.log(`${status} ${route}`);
  if (ogTitleMatch) console.log(`   og:title: ${ogTitleMatch[1].substring(0, 60)}`);
  if (ogUrlMatch) console.log(`   og:url: ${ogUrlMatch[1]}`);
  if (!urlCorrect) console.log(`   ⚠️  Expected og:url: ${expectedUrl}`);
  if (!titleCorrect && ogTitleMatch) console.log(`   ⚠️  Expected og:title: ${expectedTitle}`);
  console.log('');
});

if (allPassed) {
  console.log('✅ All routes verified successfully!');
} else {
  console.log('⚠️  Some routes had mismatches — review above.');
}
