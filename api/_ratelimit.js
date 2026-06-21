// Upstash Redis rate limiter for serverless API routes
// Uses sliding window algorithm with automatic TTL expiry

import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

let ratelimit = null;

function getRatelimit() {
  if (ratelimit) return ratelimit;

  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    console.warn('⚠️ Upstash credentials not set — rate limiting disabled');
    return null;
  }

  ratelimit = new Ratelimit({
    redis: new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    }),
    limiter: Ratelimit.slidingWindow(3, '60 s'), // 3 requests per 60 seconds
    analytics: true,
    prefix: 'xaivon',
  });

  return ratelimit;
}

/**
 * Check rate limit for a given request.
 * Returns { limited: true, res } if blocked, { limited: false } if allowed.
 */
export async function checkRateLimit(req, res, prefix = 'api') {
  const limiter = getRatelimit();
  if (!limiter) return { limited: false }; // graceful fallback if no credentials

  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
             req.socket?.remoteAddress ||
             'unknown';
  const identifier = `${prefix}:${ip}`;

  try {
    const { success, remaining, reset } = await limiter.limit(identifier);
    if (!success) {
      const retryAfter = Math.ceil((reset - Date.now()) / 1000);
      res.setHeader('Retry-After', String(retryAfter));
      res.status(429).json({ error: 'Too many requests. Please try again later.' });
      return { limited: true };
    }
    return { limited: false, remaining };
  } catch (err) {
    console.error('Rate limit check failed:', err.message);
    return { limited: false }; // fail open — don't block users if Redis is down
  }
}
