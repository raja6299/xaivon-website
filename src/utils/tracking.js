export const initTracking = () => {
  // Tracking scripts (GA4) are now strictly handled
  // directly in index.html and Analytics.jsx.
  // This utility is safely cleared to prevent duplicate script injections.
  console.log('Tracking initialized via index.html');
};

export const trackEvent = (eventName, eventParams = {}) => {
  let hasConsent = false;
  try {
    hasConsent = localStorage.getItem('xaivon_cookie_consent') === 'granted';
  } catch {
    // Ignore storage errors in restricted contexts
  }

  if (hasConsent && typeof window !== 'undefined' && window.gtag) {
    // Sanitize event parameters to prevent accidental PII leakage into analytics
    const sanitizedParams = { ...eventParams };
    const piiKeys = ['name', 'email', 'phone', 'telephone', 'company', 'message', 'website'];
    for (const key of piiKeys) {
      delete sanitizedParams[key];
    }
    window.gtag('event', eventName, sanitizedParams);
  }
};
