import test from 'node:test';
import assert from 'node:assert/strict';

// Set test environment configuration before importing API handler
process.env.RESEND_API_KEY = process.env.RESEND_API_KEY || 're_mock_test_key_1234567890';
process.env.UPSTASH_REDIS_REST_URL = process.env.UPSTASH_REDIS_REST_URL || 'https://mock-redis.upstash.io';
process.env.UPSTASH_REDIS_REST_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN || 'mock_token';

const { Resend } = await import('resend');
const { ratelimit } = await import('../src/lib/ratelimit.js');
const { default: auditHandler } = await import('../api/audit.js');

function createMockReqRes({ method = 'POST', headers = {}, body = null }) {
  let statusCode = 200;
  let responseData = null;
  const resHeaders = {};

  const req = {
    method,
    headers: {
      'x-forwarded-for': '198.51.100.55',
      ...headers
    },
    socket: { remoteAddress: '198.51.100.55' },
    body
  };

  const res = {
    setHeader(key, val) {
      resHeaders[key] = val;
      return res;
    },
    status(code) {
      statusCode = code;
      return res;
    },
    json(data) {
      responseData = data;
      return res;
    },
    end() {
      return res;
    }
  };

  return {
    req,
    res,
    getStatus: () => statusCode,
    getData: () => responseData,
    getHeaders: () => resHeaders
  };
}

test('audit-handler-real: rejects non-POST with 405 Method Not Allowed', async () => {
  const { req, res, getStatus, getData } = createMockReqRes({ method: 'GET' });
  await auditHandler(req, res);
  assert.strictEqual(getStatus(), 405);
  assert.strictEqual(getData().error, 'Method Not Allowed');
});

test('audit-handler-real: rejects malformed bodies with 400 Bad Request', async () => {
  const { req, res, getStatus, getData } = createMockReqRes({ method: 'POST', body: null });
  await auditHandler(req, res);
  assert.strictEqual(getStatus(), 400);
  assert.strictEqual(getData().error, 'Invalid request body');
});

test('audit-handler-real: rejects honeypot website field with 400 Invalid request', async () => {
  const { req, res, getStatus, getData } = createMockReqRes({
    method: 'POST',
    body: {
      name: 'Spam Bot',
      email: 'bot@spam.com',
      company: 'Spam Co',
      industry: 'Logistics',
      challenge: 'Spamming',
      website: 'https://spambot.net'
    }
  });
  await auditHandler(req, res);
  assert.strictEqual(getStatus(), 400);
  assert.strictEqual(getData().error, 'Invalid request');
});

test('audit-handler-real: rejects missing required fields with 400', async () => {
  const { req, res, getStatus, getData } = createMockReqRes({
    method: 'POST',
    body: {
      name: 'John Doe',
      email: 'john@example.com'
    }
  });
  await auditHandler(req, res);
  assert.strictEqual(getStatus(), 400);
  assert.strictEqual(getData().error, 'Missing required fields');
});

test('audit-handler-real: rejects invalid email with 400', async () => {
  const { req, res, getStatus, getData } = createMockReqRes({
    method: 'POST',
    body: {
      name: 'John Doe',
      email: 'not-an-email-address',
      company: 'Logistics Inc',
      industry: 'Freight',
      challenge: 'TMS integration'
    }
  });
  await auditHandler(req, res);
  assert.strictEqual(getStatus(), 400);
  assert.strictEqual(getData().error, 'Invalid email format');
});

test('audit-handler-real: returns 503 with email fallback when Redis is unreachable', async () => {
  const origLimit = ratelimit.limit;
  try {
    // Simulate Redis network outage throwing connection exception
    ratelimit.limit = async () => {
      throw new Error('ECONNREFUSED: Upstash Redis connection failed');
    };

    const { req, res, getStatus, getData } = createMockReqRes({
      method: 'POST',
      body: {
        name: 'Enterprise Client',
        email: 'client@logistics.com',
        company: 'Freight Hub Corp',
        industry: 'Logistics & Supply Chain',
        challenge: 'Automating legacy TMS EDI 204 ingestion'
      }
    });

    await auditHandler(req, res);
    assert.strictEqual(getStatus(), 503);
    assert.match(getData().error, /raja@xaivon\.com/);
  } finally {
    ratelimit.limit = origLimit;
  }
});

test('audit-handler-real: returns 429 when rate limit exceeded', async () => {
  const origLimit = ratelimit.limit;
  try {
    // Simulate rate limit exceeded
    ratelimit.limit = async () => ({
      success: false,
      limit: 3,
      remaining: 0,
      reset: Date.now() + 10000
    });

    const { req, res, getStatus, getData } = createMockReqRes({
      method: 'POST',
      body: {
        name: 'Enterprise Client',
        email: 'client@logistics.com',
        company: 'Freight Hub Corp',
        industry: 'Logistics & Supply Chain',
        challenge: 'Automating legacy TMS EDI 204 ingestion'
      }
    });

    await auditHandler(req, res);
    assert.strictEqual(getStatus(), 429);
    assert.match(getData().error, /raja@xaivon\.com/);
    assert.strictEqual(getData().remaining, 0);
  } finally {
    ratelimit.limit = origLimit;
  }
});

test('audit-handler-real: returns 500 when Resend configuration is missing', async () => {
  const origLimit = ratelimit.limit;
  const origFrom = process.env.RESEND_FROM_EMAIL;
  const origTo = process.env.RESEND_CONTACT_EMAIL_TO;
  try {
    ratelimit.limit = async () => ({
      success: true,
      limit: 3,
      remaining: 2,
      reset: Date.now() + 10000
    });
    delete process.env.RESEND_FROM_EMAIL;
    delete process.env.RESEND_CONTACT_EMAIL_TO;

    const { req, res, getStatus, getData } = createMockReqRes({
      method: 'POST',
      body: {
        name: 'Enterprise Client',
        email: 'client@logistics.com',
        company: 'Freight Hub Corp',
        industry: 'Logistics & Supply Chain',
        challenge: 'Automating legacy TMS EDI 204 ingestion'
      }
    });

    await auditHandler(req, res);
    assert.strictEqual(getStatus(), 500);
    assert.strictEqual(getData().error, 'Server configuration error');
  } finally {
    ratelimit.limit = origLimit;
    if (origFrom) process.env.RESEND_FROM_EMAIL = origFrom;
    if (origTo) process.env.RESEND_CONTACT_EMAIL_TO = origTo;
  }
});

test('audit-handler-real: returns 500 when Resend API returns error', async () => {
  const origLimit = ratelimit.limit;
  const sampleResend = new Resend('re_test');
  const proto = Object.getPrototypeOf(sampleResend.emails);
  const origSend = proto.send;

  try {
    process.env.RESEND_FROM_EMAIL = 'XAIVON <notifications@xaivon.com>';
    process.env.RESEND_CONTACT_EMAIL_TO = 'raja@xaivon.com';

    ratelimit.limit = async () => ({
      success: true,
      limit: 3,
      remaining: 2,
      reset: Date.now() + 10000
    });

    proto.send = async () => ({
      data: null,
      error: { message: 'Authentication failed: Invalid API key', name: 'validation_error' }
    });

    const { req, res, getStatus, getData } = createMockReqRes({
      method: 'POST',
      body: {
        name: 'Enterprise Client',
        email: 'client@logistics.com',
        company: 'Freight Hub Corp',
        industry: 'Logistics & Supply Chain',
        challenge: 'Automating legacy TMS EDI 204 ingestion'
      }
    });

    await auditHandler(req, res);
    assert.strictEqual(getStatus(), 500);
    assert.strictEqual(getData().error, 'Failed to send message');
  } finally {
    ratelimit.limit = origLimit;
    proto.send = origSend;
  }
});

test('audit-handler-real: valid request returns 200 OK and dispatches internal & customer emails', async () => {
  const origLimit = ratelimit.limit;
  const sampleResend = new Resend('re_test');
  const proto = Object.getPrototypeOf(sampleResend.emails);
  const origSend = proto.send;
  const dispatchedEmails = [];

  try {
    process.env.RESEND_FROM_EMAIL = 'XAIVON <notifications@xaivon.com>';
    process.env.RESEND_CONTACT_EMAIL_TO = 'raja@xaivon.com';

    ratelimit.limit = async () => ({
      success: true,
      limit: 3,
      remaining: 2,
      reset: Date.now() + 10000
    });

    proto.send = async (emailPayload, options) => {
      dispatchedEmails.push({ payload: emailPayload, options });
      return { data: { id: `email_${Date.now()}` }, error: null };
    };

    const { req, res, getStatus, getData } = createMockReqRes({
      method: 'POST',
      body: {
        name: 'Logistics Executive',
        email: 'exec@freightcarrier.com',
        company: 'Apex Freight Systems',
        industry: 'Logistics & Supply Chain',
        challenge: 'Need automated TMS rate intake and BOL document processing.'
      }
    });

    await auditHandler(req, res);

    assert.strictEqual(getStatus(), 200);
    assert.strictEqual(getData().success, true);
    assert.strictEqual(getData().message, 'Assessment request received.');

    // Verify exactly 2 emails were dispatched: internal notification + customer acknowledgment
    assert.strictEqual(dispatchedEmails.length, 2, 'Must dispatch internal lead notice + customer confirmation');

    // Email 1: Internal team notification
    const internalEmail = dispatchedEmails[0];
    assert.strictEqual(internalEmail.payload.to, 'raja@xaivon.com');
    assert.match(internalEmail.payload.subject, /Apex Freight Systems/);
    assert.match(internalEmail.payload.html, /Logistics Executive/);
    assert.match(internalEmail.options.idempotencyKey, /:audit-internal$/);

    // Email 2: Customer acknowledgment
    const customerEmail = dispatchedEmails[1];
    assert.strictEqual(customerEmail.payload.to, 'exec@freightcarrier.com');
    assert.match(customerEmail.payload.subject, /Assessment Request Received/);
    assert.match(customerEmail.options.idempotencyKey, /:audit-customer$/);
  } finally {
    ratelimit.limit = origLimit;
    proto.send = origSend;
  }
});
