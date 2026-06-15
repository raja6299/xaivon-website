import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// TODO: Replace with your actual IDs
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // e.g. G-1234567890
const CLARITY_PROJECT_ID = 'XXXXXXXXXX'; // e.g. abcdefgh12

export default function Analytics() {
  const location = useLocation();

  useEffect(() => {
    // 1. Initialize Google Analytics 4
    if (!window.gtag && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(){ window.dataLayer.push(arguments); }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
      });
    }

    // 2. Initialize Microsoft Clarity
    if (!window.clarity && CLARITY_PROJECT_ID !== 'XXXXXXXXXX') {
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", CLARITY_PROJECT_ID);
    }
  }, []);

  // Track page views on route change
  useEffect(() => {
    if (window.gtag && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
}
