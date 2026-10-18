import test from 'node:test';
import assert from 'node:assert/strict';

// Set test environment configuration before importing API handler
process.env.RESEND_API_KEY = process.env.RESEND_API_KEY || 're_mock_test_key_1234567890';
process.env.UPSTASH_REDIS_REST_URL = process.env.UPSTASH_REDIS_REST_URL || 'https://mock-redis.upstash.io';
process.env.UPSTASH_REDIS_REST_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN || 'mock_token';

const { Resend } = await import('resend');
const { ratelimit } = await import('../src/lib/ratelimit.js');
const { default: contactHandler } = await import('../api/contact.js');

function createMockReqRes({ method = 'POST', headers = {}, body = null }) {
  let statusCode = 200;
  let responseData = null;
  const resHeaders = {};

  const req = {
    method,
    headers: {
      'x-forwarded-for': '198.51.100.77',
      ...headers
    },
    socket: { remoteAddress: '198.51.100.77' },
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

test('contact-handler-real: rejects non-POST with 405 Method Not Allowed', async () => {
  const { req, res, getStatus, getData } = createMockReqRes({ method: 'GET' });
  await contactHandler(req, res);
  assert.strictEqual(getStatus(), 405);
  assert.strictEqual(getData().error, 'Method Not Allowed');
});

test('contact-handler-real: rejects null, undefined, and non-object bodies with 400 Bad Request', async () => {
  for (const invalidBody of [null, undefined, 'string', 123, []]) {
    const { req, res, getStatus, getData } = createMockReqRes({ method: 'POST', body: invalidBody });
    await contactHandler(req, res);
    assert.strictEqual(getStatus(), 400, `Body ${JSON.stringify(invalidBody)} must return 400`);
    assert.strictEqual(getData().error, 'Invalid or missing request body');
  }
});

test('contact-handler-real: rejects honeypot website field with 400 Invalid request', async () => {
  const { req, res, getStatus, getData } = createMockReqRes({
    method: 'POST',
    body: {
      name: 'Spam Bot',
      email: 'bot@spam.com',
      message: 'Spam message',
      website: 'http://spam.example.com'
    }
  });
  await contactHandler(req, res);
  assert.strictEqual(getStatus(), 400);
  assert.strictEqual(getData().error, 'Invalid request');
});

test('contact-handler-real: rejects missing required fields with 400', async () => {
  const base = { name: 'John Doe', email: 'john@example.com', message: 'Hello' };

  for (const field of ['name', 'email', 'message']) {
    const body = { ...base };
    delete body[field];
    const { req, res, getStatus, getData } = createMockReqRes({ method: 'POST', body });
    await contactHandler(req, res);
    assert.strictEqual(getStatus(), 400, `Missing ${field} must return 400`);
    assert.strictEqual(getData().error, 'Missing required fields');
  }
});

test('contact-handler-real: rejects invalid email with 400', async () => {
  const { req, res, getStatus, getData } = createMockReqRes({
    method: 'POST',
    body: {
      name: 'John Doe',
      email: 'not-an-email',
      message: 'Hello XAIVON'
    }
  });
  await contactHandler(req, res);
  assert.strictEqual(getStatus(), 400);
  assert.strictEqual(getData().error, 'Invalid email format');
});

test('contact-handler-real: rejects oversized inputs with 400', async () => {
  const { req, res, getStatus, getData } = createMockReqRes({
    method: 'POST',
    body: {
      name: 'A'.repeat(101),
      email: 'valid@example.com',
      message: 'Hello'
    }
  });
  await contactHandler(req, res);
  assert.strictEqual(getStatus(), 400);
  assert.strictEqual(getData().error, 'Input length exceeded');
});

test('contact-handler-real: returns 503 with email fallback when Redis is unreachable', async () => {
  const originalLimit = ratelimit.limit;
  ratelimit.limit = async () => {
    throw new Error('ECONNREFUSED: Upstash Redis connection failed');
  };

  try {
    const { req, res, getStatus, getData } = createMockReqRes({
      method: 'POST',
      body: {
        name: 'Jane Doe',
        email: 'jane@enterprise.com',
        message: 'Need architecture consultation'
      }
    });

    await contactHandler(req, res);
    assert.strictEqual(getStatus(), 503);
    assert.strictEqual(getData().success, false);
    assert.match(getData().message, /raja@xaivon\.com/);
  } finally {
    ratelimit.limit = originalLimit;
  }
});

test('contact-handler-real: returns 429 when rate limit exceeded', async () => {
  const originalLimit = ratelimit.limit;
  ratelimit.limit = async () => ({
    success: false,
    limit: 5,
    remaining: 0,
    reset: Date.now() + 60000
  });

  try {
    const { req, res, getStatus, getData } = createMockReqRes({
      method: 'POST',
      body: {
        name: 'Rapid Submitter',
        email: 'rapid@spam.com',
        message: 'Spam 1'
      }
    });

    await contactHandler(req, res);
    assert.strictEqual(getStatus(), 429);
    assert.strictEqual(getData().success, false);
    assert.strictEqual(getData().rateLimited, true);
    assert.match(getData().message, /raja@xaivon\.com/);
  } finally {
    ratelimit.limit = originalLimit;
  }
});

test('contact-handler-real: valid request returns 200 OK and dispatches emails', async () => {
  const origLimit = ratelimit.limit;
  const sampleResend = new Resend('re_test');
  const proto = Object.getPrototypeOf(sampleResend.emails);
  const origSend = proto.send;
  const sentEmails = [];

  try {
    process.env.RESEND_FROM_EMAIL = 'XAIVON <notifications@xaivon.com>';
    process.env.RESEND_CONTACT_EMAIL_TO = 'raja@xaivon.com';

    ratelimit.limit = async () => ({
      success: true,
      limit: 5,
      remaining: 4,
      reset: Date.now() + 60000
    });

    proto.send = async (payload) => {
      sentEmails.push(payload);
      return { data: { id: `msg_${Date.now()}` }, error: null };
    };

    const { req, res, getStatus, getData } = createMockReqRes({
      method: 'POST',
      body: {
        name: 'Sarah Connor',
        email: 'sarah@skynet-defense.com',
        company: 'Resistance Inc',
        message: 'We need help securing our workflow pipelines against rogue processes.'
      }
    });

    await contactHandler(req, res);
    assert.strictEqual(getStatus(), 200);
    assert.strictEqual(getData().success, true);
    assert.match(getData().message, /received/i);
    assert.strictEqual(sentEmails.length, 2, 'Must dispatch notification and acknowledgment emails');
  } finally {
    ratelimit.limit = origLimit;
    proto.send = origSend;
  }
});
