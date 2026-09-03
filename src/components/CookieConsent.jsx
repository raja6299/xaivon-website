import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('xaivon_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    } else {
      updateGtagConsent(consent);
    }
  }, []);

  const updateGtagConsent = (status) => {
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: status === 'granted' ? 'granted' : 'denied'
      });
    }
  };

  const handleAccept = () => {
    localStorage.setItem('xaivon_cookie_consent', 'granted');
    updateGtagConsent('granted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('xaivon_cookie_consent', 'denied');
    updateGtagConsent('denied');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      left: '20px',
      right: '20px',
      maxWidth: '400px',
      backgroundColor: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: '8px',
      padding: '20px',
      zIndex: 10000,
      boxShadow: '0 10px 25px -5px rgba(0,0,0,0.5)',
      color: 'var(--text-primary)',
      fontSize: '0.9rem'
    }}>
      <h3 style={{ margin: '0 0 10px 0', fontSize: '1.1rem' }}>We Value Your Privacy</h3>
      <p style={{ margin: '0 0 15px 0', color: 'var(--text-secondary)' }}>
        We use cookies to measure how our site is used. You can choose to accept or reject non-essential cookies.
      </p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={handleAccept} className="btn btn-primary" style={{ flex: 1, padding: '8px', fontSize: '0.9rem' }}>Accept</button>
        <button onClick={handleReject} className="btn btn-outline" style={{ flex: 1, padding: '8px', fontSize: '0.9rem' }}>Reject</button>
      </div>
    </div>
  );
}
