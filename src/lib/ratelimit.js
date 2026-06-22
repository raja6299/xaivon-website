import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// ─── Redis Connection ───────────────────────────────────────────────
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

// ─── Sliding Window Rate Limiter ────────────────────────────────────
// Agency-grade: 3 submissions per email within a 6-hour sliding window.
// This prevents spam while allowing genuine follow-up messages.
export const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(3, '6 h'),
});

/**
 * Check rate limit by email (primary) or IP (fallback).
 * Uses email as the identifier so the limit follows the user,
 * not the network — fairer for shared office IPs.
 *
 * @param {string} identifier - The user's email address or IP
 * @returns {{ success: boolean, remaining: number }} 
 */
export async function checkRateLimit(identifier) {
  try {
    const { success, limit, remaining, reset } = await ratelimit.limit(identifier);
    return { success, limit, remaining, reset };
  } catch (error) {
    console.error('Rate limit check failed:', error);
    // Fail-open: allow submission if Redis is down
    return { success: true, limit: 3, remaining: 3, reset: 0 };
  }
}
