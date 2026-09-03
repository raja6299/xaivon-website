import { useState, useCallback } from 'react';

function getStoredConsent() {
  try {
    return localStorage.getItem('xaivon_cookie_consent');
  } catch {
    return null;
  }
}

function updateGtagConsent(status) {
  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  gtag('consent', 'update', {
    analytics_storage: status === 'granted' ? 'granted' : 'denied'
  });
}

// Initialize consent state on first render
const storedConsent = getStoredConsent();
if (storedConsent) {
  updateGtagConsent(storedConsent);
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(!storedConsent);
  const [hasConsented, setHasConsented] = useState(!!storedConsent);

  const handleAccept = useCallback(() => {
    localStorage.setItem('xaivon_cookie_consent', 'granted');
    updateGtagConsent('granted');
    setIsVisible(false);
    setHasConsented(true);
  }, []);

  const handleReject = useCallback(() => {
    localStorage.setItem('xaivon_cookie_consent', 'denied');
    updateGtagConsent('denied');
    setIsVisible(false);
    setHasConsented(true);
  }, []);

  const handleReopen = useCallback(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {isVisible && (
        <div role="dialog" aria-label="Cookie consent" style={{
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          right: '20px',
          maxWidth: '400px',
          backgroundColor: 'var(--surface, #fffdf9)',
          border: '1px solid var(--line, #d8d0c3)',
          borderRadius: '8px',
          padding: '20px',
          zIndex: 10000,
          boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)',
          color: 'var(--ink, #171713)',
          fontSize: '0.9rem'
        }}>
          <h3 style={{ margin: '0 0 10px 0', fontSize: '1.1rem' }}>We Value Your Privacy</h3>
          <p style={{ margin: '0 0 15px 0', color: 'var(--muted, #6f6a61)' }}>
            We use analytics cookies to understand how visitors interact with our site. You can accept or reject non-essential cookies.
          </p>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={handleAccept} className="btn btn-primary" style={{ flex: 1, padding: '8px', fontSize: '0.9rem' }}>Accept</button>
            <button onClick={handleReject} className="btn btn-outline" style={{ flex: 1, padding: '8px', fontSize: '0.9rem' }}>Reject</button>
          </div>
        </div>
      )}
      {hasConsented && !isVisible && (
        <button
          onClick={handleReopen}
          aria-label="Cookie settings"
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '20px',
            zIndex: 9998,
            backgroundColor: 'var(--surface, #fffdf9)',
            border: '1px solid var(--line, #d8d0c3)',
            borderRadius: '20px',
            padding: '6px 14px',
            fontSize: '0.75rem',
            color: 'var(--muted, #6f6a61)',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            transition: 'opacity 0.2s',
            opacity: 0.7
          }}
          onMouseOver={(e) => { e.currentTarget.style.opacity = '1'; }}
          onMouseOut={(e) => { e.currentTarget.style.opacity = '0.7'; }}
        >
          Cookie Settings
        </button>
      )}
    </>
  );
}
