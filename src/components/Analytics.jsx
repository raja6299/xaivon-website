import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Analytics() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        send_to: 'G-FKYVMSFM5B',
      });
    }
  }, [location.pathname, location.search]);

  // Calendly GA4 Tracking Logic
  useEffect(() => {
    function handleCalendlyMessage(e) {
      if (e.origin !== 'https://calendly.com') return;

      if (e.data?.event && e.data.event.indexOf('calendly') === 0) {
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
