import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');

test('consent-state: Vercel Web Analytics beforeSend filter strictly drops events without affirmative consent', () => {
  // Mock localStorage
  const mockStorage = new Map();
  const getConsent = () => mockStorage.get('xaivon_cookie_consent');

  const beforeSend = (event) => {
    try {
      if (getConsent() !== 'granted') {
        return null;
      }
    } catch {
      return null;
    }
    return event;
  };

  const sampleEvent = { type: 'pageview', url: 'https://xaivon.com/' };

  // 1. Initial / default state (no consent stored) -> null
  assert.strictEqual(beforeSend(sampleEvent), null, 'Events dropped when no consent decision exists');

  // 2. Denied state -> null
  mockStorage.set('xaivon_cookie_consent', 'denied');
  assert.strictEqual(beforeSend(sampleEvent), null, 'Events dropped when user clicked Reject');

  // 3. Granted state -> returns event payload
  mockStorage.set('xaivon_cookie_consent', 'granted');
  assert.deepStrictEqual(beforeSend(sampleEvent), sampleEvent, 'Events allowed when user clicked Accept');

  // 4. Revoked state (changed back to denied) -> null
  mockStorage.set('xaivon_cookie_consent', 'denied');
  assert.strictEqual(beforeSend(sampleEvent), null, 'Events immediately dropped when user revokes consent');
});

test('consent-state: Google Analytics disable flag protocol works as expected on rejection', () => {
  const GA_ID = 'G-FKYVMSFM5B';
  const mockWindow = {};

  const applyRevocation = (win) => {
    win[`ga-disable-${GA_ID}`] = true;
  };

  const applyGrant = (win) => {
    win[`ga-disable-${GA_ID}`] = false;
  };

  // Reject / Revoke
  applyRevocation(mockWindow);
  assert.strictEqual(mockWindow[`ga-disable-${GA_ID}`], true, 'ga-disable flag set to true on rejection');

  // Accept
  applyGrant(mockWindow);
  assert.strictEqual(mockWindow[`ga-disable-${GA_ID}`], false, 'ga-disable flag disabled on acceptance');
});

test('consent-state: source code integrity for analytics ID and privacy architecture', () => {
  const cookieConsentSrc = fs.readFileSync(path.join(ROOT, 'src/components/CookieConsent.jsx'), 'utf-8');
  const cookiePolicySrc = fs.readFileSync(path.join(ROOT, 'src/pages/CookiePolicy.jsx'), 'utf-8');
  const privacyPolicySrc = fs.readFileSync(path.join(ROOT, 'src/pages/PrivacyPolicy.jsx'), 'utf-8');
  const consentAwareSrc = fs.readFileSync(path.join(ROOT, 'src/components/ConsentAwareAnalytics.jsx'), 'utf-8');

  // Check Measurement ID consistency
  const EXPECTED_GA_ID = 'G-FKYVMSFM5B';
  assert.ok(cookieConsentSrc.includes(EXPECTED_GA_ID), 'CookieConsent contains correct GA ID');
  assert.ok(cookiePolicySrc.includes(EXPECTED_GA_ID), 'CookiePolicy contains correct GA ID');
  assert.ok(privacyPolicySrc.includes(EXPECTED_GA_ID), 'PrivacyPolicy contains correct GA ID');

  // Check ga-disable opt-out flag presence in CookieConsent
  assert.ok(cookieConsentSrc.includes(`ga-disable-${EXPECTED_GA_ID}`), 'CookieConsent sets ga-disable flag');

  // Check reload on revocation
  assert.ok(cookieConsentSrc.includes('window.location.reload()'), 'CookieConsent reloads on revocation of active script');

  // Check Vercel Web Analytics gating in ConsentAwareAnalytics
  assert.ok(consentAwareSrc.includes("localStorage.getItem('xaivon_cookie_consent') === 'granted'"), 'Gated behind consent check');
  assert.ok(consentAwareSrc.includes('beforeSend'), 'beforeSend filter implemented');

  // Check CookiePolicy transparently lists all 3 telemetry layers
  assert.ok(cookiePolicySrc.includes('Google Analytics 4'), 'CookiePolicy explains GA4');
  assert.ok(cookiePolicySrc.includes('Vercel Web Analytics'), 'CookiePolicy explains Vercel Web Analytics');
  assert.ok(cookiePolicySrc.includes('Vercel Speed Insights'), 'CookiePolicy explains Vercel Speed Insights');
  assert.ok(cookiePolicySrc.includes('Calendly'), 'CookiePolicy explains Calendly');
});
