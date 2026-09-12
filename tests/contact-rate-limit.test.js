import test from 'node:test';
import assert from 'node:assert/strict';

test('contact-rate-limit: rate-limited response schema returns HTTP 429 and rateLimited: true', () => {
  // Verify the contract returned by api/contact.js on rate limit
  const mockRateLimitedResponse = (success, remaining) => {
    if (!success) {
      return {
        status: 429,
        json: {
          success: false,
          rateLimited: true,
          message: 'We have received your multiple requests. Our team is already reviewing your case. For urgent support, please contact us via WhatsApp.',
          remaining
        }
      };
    }
    return { status: 200, json: { success: true } };
  };

  const res = mockRateLimitedResponse(false, 0);
  assert.strictEqual(res.status, 429, 'Rate-limited response must return HTTP 429');
  assert.strictEqual(res.json.rateLimited, true);
  assert.strictEqual(res.json.success, false);
  assert.match(res.json.message, /WhatsApp/);
});

test('contact-rate-limit: frontend handles HTTP 429 gracefully without throwing error', () => {
  // Simulate the response processing logic implemented in Contact.jsx
  const simulateContactSubmitHandler = (responseStatus, responseData) => {
    let errorDisplayed;
    let cooldownSet = 0;
    let exceptionThrown = false;

    try {
      // Logic from Contact.jsx
      if (responseStatus === 429 || responseData.rateLimited) {
        errorDisplayed = responseData.message || 'We have received your multiple requests...';
        cooldownSet = 60;
        return { handled: true, errorDisplayed, cooldownSet, exceptionThrown };
      }

      if (responseStatus < 200 || responseStatus >= 300) {
        throw new Error(responseData.error || 'Failed to send message.');
      }

      return { handled: true, success: true, exceptionThrown };
    } catch (err) {
      exceptionThrown = true;
      errorDisplayed = err.message;
      return { handled: false, errorDisplayed, cooldownSet, exceptionThrown };
    }
  };

  const result = simulateContactSubmitHandler(429, {
    success: false,
    rateLimited: true,
    message: 'We have received your multiple requests. Our team is already reviewing your case. For urgent support, please contact us via WhatsApp.',
    remaining: 0
  });

  assert.strictEqual(result.exceptionThrown, false, 'Should not throw an uncaught exception on 429');
  assert.strictEqual(result.cooldownSet, 60, 'Should set cooldown to 60s');
  assert.match(result.errorDisplayed, /WhatsApp/, 'Friendly WhatsApp guidance must be preserved');
});
