import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const targetId = hash.replace(/^#/, '');

    const scrollToTarget = () => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return true;
      }
      return false;
    };

    // Attempt immediate scroll if element is already mounted
    if (scrollToTarget()) {
      return;
    }

    // Handle lazy-loaded route components with bounded retry interval
    let attempts = 0;
    const maxAttempts = 20; // 20 * 50ms = 1s max
    const interval = setInterval(() => {
      attempts += 1;
      if (scrollToTarget() || attempts >= maxAttempts) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [pathname, hash]);

  return null;
}
