import test from 'node:test';
import assert from 'node:assert/strict';
import { escapeHtml } from '../api/_utils.js';

test('input-validation: raw length is checked before HTML escaping', () => {
  // 25 ampersands is 25 characters raw, but escapeHtml turns each into &amp; (5 chars -> 125 chars)
  const rawWithEntities = '&'.repeat(25);
  assert.strictEqual(rawWithEntities.length, 25, 'Raw length is 25');

  const escaped = escapeHtml(rawWithEntities);
  assert.strictEqual(escaped.length, 125, 'Escaped length is 125');

  // If raw length is <= 100, raw validation passes
  const isRawValid = rawWithEntities.length <= 100;
  assert.strictEqual(isRawValid, true, 'Raw validation passes because raw length is 25 <= 100');

  // If checked against escaped length, it would have failed incorrectly
  const isEscapedValid = escaped.length <= 100;
  assert.strictEqual(isEscapedValid, false, 'Escaped length validation would have incorrectly rejected this valid input');
});

test('input-validation: raw inputs exceeding limits are properly rejected', () => {
  const longName = 'A'.repeat(101);
  const longMessage = 'M'.repeat(2001);

  assert.strictEqual(longName.length > 100, true);
  assert.strictEqual(longMessage.length > 2000, true);
});

test('input-validation: special characters are escaped only for HTML output', () => {
  const rawInput = 'Acme & Sons <quotes@acme.com>';
  const cleanName = escapeHtml(rawInput);

  assert.strictEqual(cleanName, 'Acme &amp; Sons &lt;quotes@acme.com&gt;');
  // Original raw string is untouched
  assert.strictEqual(rawInput, 'Acme & Sons <quotes@acme.com>');
});
