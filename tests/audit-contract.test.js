import test from 'node:test';
import assert from 'node:assert/strict';
import crypto from 'crypto';

// Simulation of api/audit.js request processing pipeline
function processAuditRequest({ method, body, rateLimitResult, env, resendMock }) {
  if (method !== 'POST') {
    return { status: 405, json: { error: 'Method Not Allowed' } };
  }

  if (!body || typeof body !== 'object') {
    return { status: 400, json: { error: 'Invalid request body' } };
  }

  if (body.website) {
    return { status: 400, json: { error: 'Invalid request' } };
  }

  if (!body.name || !body.email || !body.company || !body.industry || !body.challenge) {
    return { status: 400, json: { error: 'Missing required fields' } };
  }

  if (
    typeof body.name !== 'string' ||
    typeof body.email !== 'string' ||
    typeof body.company !== 'string' ||
    typeof body.industry !== 'string' ||
    typeof body.challenge !== 'string' ||
    (body.submissionId && typeof body.submissionId !== 'string')
  ) {
    return { status: 400, json: { error: 'Invalid field types' } };
  }

  const rawName = body.name.trim();
  const rawEmail = body.email.trim();
  const rawCompany = body.company.trim();
  const rawIndustry = body.industry.trim();
  const rawChallenge = body.challenge.trim();

  if (
    rawName.length > 100 ||
    rawEmail.length > 100 ||
    rawCompany.length > 100 ||
    rawIndustry.length > 100 ||
    rawChallenge.length > 2000
  ) {
    return { status: 400, json: { error: 'Input length exceeded' } };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(rawEmail)) {
    return { status: 400, json: { error: 'Invalid email format' } };
  }

  // Rate limit check
  if (rateLimitResult?.error) {
    return {
      status: 503,
      json: { error: 'Service temporarily unavailable. Please try again later or email us at raja@xaivon.com.' }
    };
  }

  if (!rateLimitResult?.success) {
    return {
      status: 429,
      json: {
        error: 'Too many requests. Please try again later or email us at raja@xaivon.com.',
        remaining: rateLimitResult?.remaining ?? 0
      }
    };
  }

  // Environment variable validation
  if (!env?.RESEND_FROM_EMAIL || !env?.RESEND_CONTACT_EMAIL_TO) {
    return { status: 500, json: { error: 'Server configuration error' } };
  }

  // Resend transmission
  if (resendMock?.fail) {
    return { status: 500, json: { error: 'Failed to send message' } };
  }

  let baseId;
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  if (body.submissionId && body.submissionId.length === 36 && uuidRegex.test(body.submissionId)) {
    baseId = body.submissionId;
  } else {
    baseId = crypto.createHash('sha256').update(rawEmail + rawChallenge).digest('hex');
  }

  return {
    status: 200,
    json: { success: true, message: 'Assessment request received.' },
    idempotencyKey: `${baseId}:audit-internal`
  };
}

// ─── Test Suite ─────────────────────────────────────────────────────────────

test('audit-contract: non-POST returns 405 Method Not Allowed', () => {
  const res = processAuditRequest({ method: 'GET' });
  assert.strictEqual(res.status, 405);
  assert.strictEqual(res.json.error, 'Method Not Allowed');
});

test('audit-contract: empty or non-object body returns 400', () => {
  assert.strictEqual(processAuditRequest({ method: 'POST', body: null }).status, 400);
  assert.strictEqual(processAuditRequest({ method: 'POST', body: 'string' }).status, 400);
});

test('audit-contract: honeypot website field returns 400 Invalid request', () => {
  const res = processAuditRequest({
    method: 'POST',
    body: {
      name: 'Bot',
      email: 'bot@spam.com',
      company: 'Spam Co',
      industry: 'Logistics',
      challenge: 'Spamming',
      website: 'https://spam.org'
    }
  });
  assert.strictEqual(res.status, 400);
  assert.strictEqual(res.json.error, 'Invalid request');
});

test('audit-contract: missing required fields returns 400 Missing required fields', () => {
  const res = processAuditRequest({
    method: 'POST',
    body: { name: 'Raja', email: 'raja@xaivon.com' }
  });
  assert.strictEqual(res.status, 400);
  assert.strictEqual(res.json.error, 'Missing required fields');
});

test('audit-contract: invalid email format returns 400 Invalid email format', () => {
  const res = processAuditRequest({
    method: 'POST',
    body: {
      name: 'Raja',
      email: 'not-an-email',
      company: 'XAIVON',
      industry: 'Logistics',
      challenge: 'Automating legacy TMS'
    }
  });
  assert.strictEqual(res.status, 400);
  assert.strictEqual(res.json.error, 'Invalid email format');
});

test('audit-contract: input length exceeded returns 400', () => {
  const res = processAuditRequest({
    method: 'POST',
    body: {
      name: 'A'.repeat(101),
      email: 'valid@company.com',
      company: 'XAIVON',
      industry: 'Logistics',
      challenge: 'Valid challenge text'
    }
  });
  assert.strictEqual(res.status, 400);
  assert.strictEqual(res.json.error, 'Input length exceeded');
});

test('audit-contract: Redis failure returns 503 with direct email fallback', () => {
  const res = processAuditRequest({
    method: 'POST',
    body: {
      name: 'Enterprise Client',
      email: 'client@enterprise.com',
      company: 'Freight Inc',
      industry: 'Logistics & Supply Chain',
      challenge: 'We need to automate incoming load tender parsing from EDI 204'
    },
    ip: '198.51.100.25',
    rateLimitResult: { error: new Error('ECONNREFUSED: Upstash Redis connection failed') }
  });
  assert.strictEqual(res.status, 503);
  assert.match(res.json.error, /raja@xaivon\.com/, 'Must supply direct email fallback on Redis outage');
});

test('audit-contract: rate limit exceeded returns 429 with direct email fallback', () => {
  const res = processAuditRequest({
    method: 'POST',
    body: {
      name: 'Enterprise Client',
      email: 'client@enterprise.com',
      company: 'Freight Inc',
      industry: 'Logistics & Supply Chain',
      challenge: 'We need to automate incoming load tender parsing'
    },
    ip: '198.51.100.25',
    rateLimitResult: { success: false, remaining: 0 }
  });
  assert.strictEqual(res.status, 429);
  assert.match(res.json.error, /raja@xaivon\.com/, 'Must supply direct email fallback on 429');
});

test('audit-contract: missing Resend environment variables returns 500', () => {
  const res = processAuditRequest({
    method: 'POST',
    body: {
      name: 'Enterprise Client',
      email: 'client@enterprise.com',
      company: 'Freight Inc',
      industry: 'Logistics & Supply Chain',
      challenge: 'Automating load tenders'
    },
    ip: '198.51.100.25',
    rateLimitResult: { success: true, remaining: 2 },
    env: { RESEND_FROM_EMAIL: '', RESEND_CONTACT_EMAIL_TO: '' }
  });
  assert.strictEqual(res.status, 500);
  assert.strictEqual(res.json.error, 'Server configuration error');
});

test('audit-contract: Resend API failure returns 500', () => {
  const res = processAuditRequest({
    method: 'POST',
    body: {
      name: 'Enterprise Client',
      email: 'client@enterprise.com',
      company: 'Freight Inc',
      industry: 'Logistics & Supply Chain',
      challenge: 'Automating load tenders'
    },
    ip: '198.51.100.25',
    rateLimitResult: { success: true, remaining: 2 },
    env: {
      RESEND_FROM_EMAIL: 'notifications@xaivon.com',
      RESEND_CONTACT_EMAIL_TO: 'raja@xaivon.com'
    },
    resendMock: { fail: true }
  });
  assert.strictEqual(res.status, 500);
  assert.strictEqual(res.json.error, 'Failed to send message');
});

test('audit-contract: valid submission succeeds with HTTP 200 and idempotency key', () => {
  const submissionId = 'a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d';
  const res = processAuditRequest({
    method: 'POST',
    body: {
      name: 'Enterprise Client',
      email: 'client@enterprise.com',
      company: 'Freight Logistics Corp',
      industry: 'Logistics & Supply Chain',
      challenge: 'Need TMS integration for freight quotes',
      submissionId
    },
    ip: '198.51.100.25',
    rateLimitResult: { success: true, remaining: 2 },
    env: {
      RESEND_FROM_EMAIL: 'notifications@xaivon.com',
      RESEND_CONTACT_EMAIL_TO: 'raja@xaivon.com'
    },
    resendMock: { fail: false }
  });
  assert.strictEqual(res.status, 200);
  assert.strictEqual(res.json.success, true);
  assert.strictEqual(res.json.message, 'Assessment request received.');
  assert.strictEqual(res.idempotencyKey, `${submissionId}:audit-internal`);
});

test('audit-contract: frontend AIAudit error state renders direct email fallback', () => {
  const simulateFrontendErrorHandler = (error) => {
    const msg = error.message || 'Something went wrong.';
    return {
      formError: `${msg} You can also email us directly at raja@xaivon.com.`
    };
  };

  const state = simulateFrontendErrorHandler(new Error('Service temporarily unavailable.'));
  assert.match(state.formError, /raja@xaivon\.com/);
});
