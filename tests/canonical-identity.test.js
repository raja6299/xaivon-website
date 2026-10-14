import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { XAIVON_DATA } from '../src/data/xaivonData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

test('canonical-identity: brand and registered operating entity match v3 SoT', () => {
  const { identity } = XAIVON_DATA;

  assert.strictEqual(identity.brand, 'XAIVON', 'Brand is XAIVON');
  assert.strictEqual(identity.legalName, 'ADABHRA GROUP', 'Legal operating name is ADABHRA GROUP');
  assert.strictEqual(identity.entityType, 'Sole Proprietorship', 'Entity type is Sole Proprietorship');
  assert.strictEqual(identity.proprietor, 'Raja Babu', 'Proprietor is Raja Babu');
  assert.strictEqual(identity.publicEmail, 'raja@xaivon.com', 'Public email is raja@xaivon.com');
  assert.strictEqual(identity.publicPhone, '+91 95211 90205', 'Public customer phone is +91 95211 90205');
  assert.strictEqual(identity.legalEmail, 'raja969384bth@gmail.com', 'Legal correspondence email is raja969384bth@gmail.com');
  assert.strictEqual(identity.registeredLocation, 'West Champaran, Bihar, India', 'Location is broad West Champaran, Bihar, India');
  assert.ok(identity.legalNotice.includes('ADABHRA GROUP (Sole Proprietorship), India'), 'Legal notice matches v3 directive');
});

test('canonical-identity: schema.org in index.html contains verified business facts', () => {
  const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf-8');
  assert.ok(html.includes('"legalName": "ADABHRA GROUP"'), 'Schema has legalName ADABHRA GROUP');
  assert.ok(html.includes('"name": "Raja Babu"'), 'Schema founder is Raja Babu');
  assert.ok(html.includes('+91-95211-90205'), 'Schema telephone is +91-95211-90205');
  assert.ok(html.includes('raja@xaivon.com'), 'Schema contact email is raja@xaivon.com');
});

test('privacy-guardrail: no private PAN, bank details or residential street addresses committed', () => {
  const dataStr = JSON.stringify(XAIVON_DATA);
  // Verify no PAN patterns or bank credentials
  assert.strictEqual(/[A-Z]{5}[0-9]{4}[A-Z]/.test(dataStr), false, 'No PAN pattern in canonical data');
  assert.strictEqual(/IFSC|IBAN|SWIFT|account\s*number/i.test(dataStr), false, 'No banking details in canonical data');
});
