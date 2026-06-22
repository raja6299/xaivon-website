import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Analytics() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-FKYVMSFM5B', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  // Calendly GA4 Tracking Logic
  useEffect(() => {
    function handleCalendlyMessage(e) {
      if (e.data.event && e.data.event.indexOf('calendly') === 0) {
        if (e.data.event === 'calendly.event_scheduled') {
          if (window.gtag) {
            window.gtag('event', 'calendly_booking', {
              'event_category': 'Booking',
              'event_label': 'Strategy Call Success'
            });
            console.log('Calendly booking event successfully tracked in GA4');
          }
        }
      }
    }
    window.addEventListener('message', handleCalendlyMessage);
    return () => window.removeEventListener('message', handleCalendlyMessage);
  }, []);

  return null;
}
