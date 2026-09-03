import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SRC_DIR = path.resolve(__dirname, '../src');

const SUSPICIOUS_CLAIMS = [
  /\b\d{2,3}%\b/g, // Percentages like 70%, 100%, 300%
  /\b99\.9+%\b/g, // Uptime or accuracy
  /enterprise-grade/gi,
  /flawless/gi,
  /\b12 hours\b/gi,
  /\b24 hours\b/gi,
  /\b48 hours\b/gi,
  /near-zero/gi,
  /\bguaranteed\b/gi,
  /100% private/gi,
  /100% secure/gi
];

const IGNORED_FILES = ['ROICalculator.jsx'];

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

let foundClaims = false;
console.log('🔍 Auditing claims in source code...\n');

walkDir(SRC_DIR, function(filePath) {
  if (IGNORED_FILES.some(ignored => filePath.endsWith(ignored))) return;
  if (!filePath.endsWith('.jsx') && !filePath.endsWith('.js')) return;

  const content = fs.readFileSync(filePath, 'utf-8');
  let fileClaims = [];

  SUSPICIOUS_CLAIMS.forEach(regex => {
    let match;
    while ((match = regex.exec(content)) !== null) {
      fileClaims.push(`"${match[0]}" at index ${match.index}`);
      foundClaims = true;
    }
  });

  if (fileClaims.length > 0) {
    console.log(`⚠️  Found potential claims in ${filePath.replace(SRC_DIR, '')}:`);
    fileClaims.forEach(c => console.log(`   - ${c}`));
  }
});

if (!foundClaims) {
  console.log('✅ No unsupported claims found.');
} else {
  console.log('\n⚠️  Please review the above claims manually. Not failing build automatically.');
}
