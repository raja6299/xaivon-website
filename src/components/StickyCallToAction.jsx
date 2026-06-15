import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './StickyCallToAction.css';

export default function StickyCallToAction() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 600);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Link
      to="/contact"
      className={`sticky-cta ${visible ? 'sticky-cta-visible' : ''}`}
      id="sticky-cta-btn"
      aria-label="Book a Call"
    >
      <span className="sticky-cta-icon" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="3" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M1 7H17" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M5 1V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M13 1V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="9" cy="12" r="1.25" fill="currentColor"/>
        </svg>
      </span>
      <span className="sticky-cta-label">Book a Call</span>
      <span className="sticky-cta-pulse" aria-hidden="true"></span>
    </Link>
  );
}
