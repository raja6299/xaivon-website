import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// ─── Redis Connection ───────────────────────────────────────────────
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

// ─── Sliding Window Rate Limiter ────────────────────────────────────
// 3 submissions per identifier within a 6-hour sliding window.
// This prevents spam while allowing genuine follow-up messages.
export const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(3, '6 h'),
});

/**
 * Check rate limit using a composite identifier (IP + email).
 * Fails safely (503 Service Unavailable) if Redis is unavailable.
 *
 * @param {string} identifier - Composite key (e.g. IP_email)
 * @returns {{ success: boolean, remaining: number, error?: boolean }}
 */
export async function checkRateLimit(identifier) {
  try {
    const { success, limit, remaining, reset } = await ratelimit.limit(identifier);
    return { success, limit, remaining, reset };
  } catch (error) {
    console.error('Rate limit check failed:', error);
    // Fail-safe: return error flag so API can respond with 503
    return { success: false, limit: 0, remaining: 0, reset: 0, error: true };
  }
}
