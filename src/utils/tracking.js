export const initTracking = () => {
  // Tracking scripts (GA4) are now strictly handled 
  // directly in index.html and Analytics.jsx.
  // This utility is safely cleared to prevent duplicate script injections.
  console.log('Tracking initialized via index.html');
};

export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

