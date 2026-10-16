import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

/**
 * ConsentAwareAnalytics
 *
 * - SpeedInsights: First-party Core Web Vitals telemetry (no cookies, anonymous performance metrics)
 * - Analytics: Strictly gated behind user consent ('xaivon_cookie_consent' === 'granted')
 */
export default function ConsentAwareAnalytics() {
  const [hasConsent, setHasConsent] = useState(() => {
    try {
      return localStorage.getItem('xaivon_cookie_consent') === 'granted';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const handleConsentUpdate = () => {
      try {
        setHasConsent(localStorage.getItem('xaivon_cookie_consent') === 'granted');
      } catch {
        setHasConsent(false);
      }
    };

    window.addEventListener('storage', handleConsentUpdate);
    window.addEventListener('xaivon-consent-change', handleConsentUpdate);

    return () => {
      window.removeEventListener('storage', handleConsentUpdate);
      window.removeEventListener('xaivon-consent-change', handleConsentUpdate);
    };
  }, []);

  return (
    <>
      {/* Vercel Speed Insights (Performance telemetry, no tracking cookies) */}
      <SpeedInsights />

      {/* Vercel Web Analytics (Strictly opt-in: only mounted and dispatched if user granted consent) */}
      {hasConsent && (
        <Analytics
          beforeSend={(event) => {
            try {
              if (localStorage.getItem('xaivon_cookie_consent') !== 'granted') {
                return null;
              }
            } catch {
              return null;
            }
            return event;
          }}
        />
      )}
    </>
  );
}
