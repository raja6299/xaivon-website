import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const SRC_DIR = path.resolve(ROOT, 'src');

// ─── Explicit Allowlist ─────────────────────────────────────────────
// Each entry: { file, text, reason }
// text must match exactly (case-insensitive). No wildcards.
const ALLOWLIST = [
  // Capability descriptors — approved business positioning language
  { file: 'FAQ.jsx', text: 'enterprise-grade', reason: 'FAQ answer — approved capability descriptor' },
  { file: 'WhyXaivon.jsx', text: 'Enterprise-Grade', reason: 'Section heading — approved capability positioning' },
  { file: 'metadata.js', text: 'enterprise-grade', reason: 'SEO meta description — approved capability language' },
  { file: 'AIAutomation.jsx', text: 'enterprise-grade', reason: 'Service page capability descriptor' },
  { file: 'Contact.jsx', text: 'enterprise-grade', reason: 'FAQ answer about security practices' },
  { file: 'Contact.jsx', text: 'Enterprise-Grade', reason: 'Section heading' },
  // ROI Calculator — specific UI slider boundary labels
  { file: 'ROICalculator', text: '20%', reason: 'Slider min label' },
  { file: 'ROICalculator', text: '80%', reason: 'Slider max label' },
  // Chatbot SEO description — valid product capability
  { file: 'metadata.js', text: '24/7', reason: 'SEO description for chatbot — valid product capability' },
];

const SUSPICIOUS_PATTERNS = [
  /\b\d{2,3}%\b/g,
  /\b99\.9+%\b/g,
  /enterprise-grade/gi,
  /flawless/gi,
  /\b\d+\s*hours?\b/gi,
  /near-zero/gi,
  /\bguaranteed\b/gi,
  /\b10x\b/gi,
  /500\+/g,
  /15K/gi,
  /24\/7/g,
  /2-4 weeks/gi,
  /100% private/gi,
  /100% secure/gi,
];

const CSS_KEYWORDS = /(?:width|height|opacity|scale|transform|max-width|min-width|flex|border-radius|padding|margin|gap|font-size|line-height|top|left|right|bottom|grid|overflow|vh|vw|calc|rgba?|hsla?|translateY|translateX|scaleX|scaleY)\s*[:(]\s*\d/i;

function isAllowlisted(filePath, matchedText) {
  return ALLOWLIST.some(entry => {
    if (!filePath.includes(entry.file)) return false;
    return matchedText.toLowerCase() === entry.text.toLowerCase();
  });
}

function isCssContext(content, idx, text) {
  const start = Math.max(0, idx - 80);
  const end = Math.min(content.length, idx + text.length + 20);
  const ctx = content.substring(start, end);
  return CSS_KEYWORDS.test(ctx);
}

function isCommentOrImport(content, idx) {
  const lineStart = content.lastIndexOf('\n', idx) + 1;
  const linePrefix = content.substring(lineStart, idx).trim();
  return linePrefix.startsWith('//') || linePrefix.startsWith('*') || linePrefix.startsWith('import ') || linePrefix.startsWith('console.');
}

function scanFile(filePath, label) {
  const content = fs.readFileSync(filePath, 'utf-8');
  let found = false;

  SUSPICIOUS_PATTERNS.forEach(regex => {
    regex.lastIndex = 0;
    let match;
    while ((match = regex.exec(content)) !== null) {
      const text = match[0];
      if (isAllowlisted(label, text)) continue;
      if (text.match(/\d+%/) && isCssContext(content, match.index, text)) continue;
      if (isCommentOrImport(content, match.index)) continue;

      const line = content.substring(0, match.index).split('\n').length;
      console.log(`⚠️  UNAPPROVED: "${text}" in ${label}:${line}`);
      found = true;
    }
  });
  return found;
}

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) walkDir(p, callback);
    else callback(p);
  });
}

console.log('🔍 Auditing claims in source code and public content...\n');
let hasFailures = false;

// Scan src/**/*.{js,jsx}
walkDir(SRC_DIR, (filePath) => {
  if (!filePath.endsWith('.jsx') && !filePath.endsWith('.js')) return;
  const label = path.relative(ROOT, filePath);
  if (scanFile(filePath, label)) hasFailures = true;
});

// Scan index.html (public claim source)
const indexPath = path.resolve(ROOT, 'index.html');
if (fs.existsSync(indexPath)) {
  if (scanFile(indexPath, 'index.html')) hasFailures = true;
}

if (hasFailures) {
  console.error('\n💥 Claim verification FAILED. Unapproved public claims remain.');
  process.exit(1);
} else {
  console.log('✅ All claims verified against allowlist. No unapproved claims found.');
  process.exit(0);
}
