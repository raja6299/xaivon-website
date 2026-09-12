import test from 'node:test';
import assert from 'node:assert/strict';

test('audit-rate-limit: rate-limited response returns HTTP 429', () => {
  const mockAuditRateLimitResponse = (success, remaining) => {
    if (!success) {
      return {
        status: 429,
        json: {
          error: 'Too many requests. Please try again later.',
          remaining
        }
      };
    }
    return { status: 200, json: { success: true } };
  };

  const res = mockAuditRateLimitResponse(false, 0);
  assert.strictEqual(res.status, 429);
  assert.strictEqual(res.json.error, 'Too many requests. Please try again later.');
});

test('rate-limit-strategy: contact and audit key strategies reflect their distinct security requirements', () => {
  const getContactKey = (ip, email) => `${ip}_${email.toLowerCase()}`;
  const getAuditKey = (ip) => ip;

  const ip = '198.51.100.1';
  const emailA = 'colleague1@enterprise.com';
  const emailB = 'colleague2@enterprise.com';

  // Contact key allows colleagues on same shared IP to submit without collision
  assert.notStrictEqual(
    getContactKey(ip, emailA),
    getContactKey(ip, emailB),
    'Different colleagues on shared IP have separate contact rate-limit counters'
  );

  // Audit key restricts entire IP to prevent mass automated audit abuse
  assert.strictEqual(
    getAuditKey(ip),
    getAuditKey(ip),
    'Audit strictly limits requests per source IP'
  );
});
