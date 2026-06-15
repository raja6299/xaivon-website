import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ExitIntentPopup.css';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    // Check if user has already dismissed or converted
    if (localStorage.getItem('xaivon_exit_intent_dismissed')) {
      return;
    }

    const handleMouseLeave = (e) => {
      // Trigger if mouse leaves top of screen
      if (e.clientY <= 0 && !hasTriggered) {
        setIsVisible(true);
        setHasTriggered(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasTriggered]);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('xaivon_exit_intent_dismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="exit-popup-overlay">
      <div className="exit-popup-card glass-card">
        <button 
          className="exit-popup-close" 
          onClick={handleClose}
          aria-label="Close dialog"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div className="exit-popup-content">
          <span className="badge badge-gold">
            <span className="badge-dot"></span>
            Wait! Before You Go
          </span>
          <h3>Get Your Free <span className="text-gradient-gold">AI Audit</span></h3>
          <p>Find out exactly how much time and money AI could save your business. No commitment, completely free analysis.</p>
          
          <div className="exit-popup-actions">
            <Link 
              to="/contact" 
              className="btn btn-gold btn-lg" 
              onClick={handleClose}
            >
              Claim My Free Audit →
            </Link>
          </div>
          <p className="exit-popup-trust">Trusted by enterprise logistics & operations</p>
        </div>
      </div>
    </div>
  );
}
