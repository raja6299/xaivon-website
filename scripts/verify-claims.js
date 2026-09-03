import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SRC_DIR = path.resolve(__dirname, '../src');

// ─── Explicit Allowlist ─────────────────────────────────────────────
// Each entry: { file: partial path match, text: exact matched string, reason: why it's approved }
const ALLOWLIST = [
  // ROI Calculator — explicitly an illustrative estimation tool
  { file: 'ROICalculator', text: '*', reason: 'ROI Calculator is explicitly labelled as illustrative estimation tool' },
  { file: 'RoiCalculatorPage', text: '*', reason: 'ROI Calculator page is explicitly labelled as illustrative estimation tool' },
  // Valid capability descriptors
  { file: 'FAQ.jsx', text: 'enterprise-grade', reason: 'Approved capability descriptor in FAQ answer' },
  { file: 'WhyXaivon.jsx', text: 'Enterprise-Grade', reason: 'Approved section heading for capability positioning' },
  { file: 'metadata.js', text: 'enterprise-grade', reason: 'SEO description — approved capability language' },
  { file: 'AIAutomation.jsx', text: 'enterprise-grade', reason: 'Service page capability descriptor' },
  // Contact page — remaining approved uses
  { file: 'Contact.jsx', text: 'enterprise-grade', reason: 'FAQ answer about security practices' },
  { file: 'Contact.jsx', text: 'Enterprise-Grade', reason: 'Section heading' },
  // Chatbot descriptions — always-on is a valid product capability
  { file: 'metadata.js', text: '24/7', reason: 'SEO description for chatbot capability — valid product feature' },
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
  /100% secure/gi
];

// CSS/style numeric values to ignore (e.g., width: 100%, opacity: 50%)
const CSS_CONTEXT_REGEX = /(?:width|height|opacity|scale|transform|max-width|min-width|flex|border-radius|padding|margin|gap|font-size|line-height|top|left|right|bottom|grid|overflow|vh|vw|calc|rgba?|hsla?)[\s(:]*\d+%/i;

function isAllowlisted(filePath, matchedText) {
  return ALLOWLIST.some(entry => {
    if (!filePath.includes(entry.file)) return false;
    if (entry.text === '*') return true;
    return matchedText.toLowerCase() === entry.text.toLowerCase();
  });
}

function isCssContext(content, matchIndex, matchedText) {
  // Check if the % match is in a CSS/style context
  const contextStart = Math.max(0, matchIndex - 60);
  const contextEnd = Math.min(content.length, matchIndex + matchedText.length + 20);
  const context = content.substring(contextStart, contextEnd);
  return CSS_CONTEXT_REGEX.test(context);
}

function isCommentOrImport(content, matchIndex) {
  const lineStart = content.lastIndexOf('\n', matchIndex) + 1;
  const lineContent = content.substring(lineStart, matchIndex).trim();
  return lineContent.startsWith('//') || lineContent.startsWith('*') || lineContent.startsWith('import ') || lineContent.startsWith('console.');
}

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

let foundClaims = false;
console.log('🔍 Auditing claims in source code...\n');

walkDir(SRC_DIR, function(filePath) {
  if (!filePath.endsWith('.jsx') && !filePath.endsWith('.js')) return;

  const content = fs.readFileSync(filePath, 'utf-8');
  const relativePath = filePath.replace(SRC_DIR, '');

  SUSPICIOUS_PATTERNS.forEach(regex => {
    let match;
    while ((match = regex.exec(content)) !== null) {
      const matchedText = match[0];

      // Skip if allowlisted
      if (isAllowlisted(relativePath, matchedText)) continue;

      // Skip CSS/style percentage values
      if (matchedText.match(/\d+%/) && isCssContext(content, match.index, matchedText)) continue;

      // Skip comments and imports
      if (isCommentOrImport(content, match.index)) continue;

      // Skip 100% in literal contexts like "100% free"
      if (matchedText === '100%') {
        const after = content.substring(match.index, match.index + 10).toLowerCase();
        if (after.includes('free')) continue;
      }

      const lineNumber = content.substring(0, match.index).split('\n').length;
      console.log(`⚠️  UNAPPROVED: "${matchedText}" in ${relativePath}:${lineNumber}`);
      foundClaims = true;
    }
  });
});

if (foundClaims) {
  console.error('\n💥 Claim verification FAILED. Unapproved public claims remain.');
  process.exit(1);
} else {
  console.log('✅ All claims verified against allowlist. No unapproved claims found.');
  process.exit(0);
}
