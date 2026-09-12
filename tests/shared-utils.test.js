import test from 'node:test';
import assert from 'node:assert/strict';
import { escapeHtml } from '../api/_utils.js';

test('shared-utils: escapeHtml correctly escapes special characters', () => {
  assert.strictEqual(escapeHtml(''), '');
  assert.strictEqual(escapeHtml(null), '');
  assert.strictEqual(escapeHtml(undefined), '');
  assert.strictEqual(escapeHtml(123), '');
  assert.strictEqual(escapeHtml('Hello World'), 'Hello World');
  assert.strictEqual(
    escapeHtml('<script>alert("XSS & theft\'s")</script>'),
    '&lt;script&gt;alert(&quot;XSS &amp; theft&#039;s&quot;)&lt;/script&gt;'
  );
});

test('shared-utils: escapeHtml preserves non-HTML characters without modification', () => {
  const sample = 'Operational automation for Freight & Logistics: 100% verified.';
  const expected = 'Operational automation for Freight &amp; Logistics: 100% verified.';
  assert.strictEqual(escapeHtml(sample), expected);
});
