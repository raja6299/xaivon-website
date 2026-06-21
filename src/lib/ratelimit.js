import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(3, '60 s'),
});

export async function checkRateLimit(ip) {
  try {
    const { success, limit, remaining, reset } = await ratelimit.limit(ip);
    return { success, limit, remaining, reset };
  } catch (error) {
    console.error('Rate limit check failed:', error);
    return { success: true, limit: 3, remaining: 3, reset: 0 };
  }
}
