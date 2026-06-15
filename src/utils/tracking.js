export const trackEvent = (eventName, eventData = {}) => {
  try {
    // Google Analytics 4
    if (window.gtag) {
      window.gtag('event', eventName, eventData);
    }
    
    // Microsoft Clarity (Custom Tags/Events)
    if (window.clarity) {
      window.clarity('set', eventName, JSON.stringify(eventData));
    }

    // Development logging
    if (import.meta.env.DEV) {
      console.log(`[Tracking] Event: ${eventName}`, eventData);
    }
  } catch (error) {
    console.error('Tracking Error:', error);
  }
};
