import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { XAIVON_DATA } from '../data/xaivonData';
import './PremiumNav.css';

export default function PremiumNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    closeMenu();
  }, [location]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [mobileMenuOpen]);

  const navItems = XAIVON_DATA.navigation.primary;

  return (
    <header className="premium-nav-wrapper">
      <nav className="premium-nav">
        <Link className="premium-brand" to="/" aria-label="XAIVON home" onClick={closeMenu}>
          <span className="premium-brand-mark" aria-hidden="true">
            <span className="premium-brand-mark-inner"></span>
          </span>
          <span className="premium-brand-text">XAIVON</span>
        </Link>
        <div className="premium-nav-links">
          {navItems.map((item, i) => (
            <Link className="premium-nav-link" to={item.path || '#'} key={i} onClick={closeMenu}>
              {item.name}
            </Link>
          ))}
        </div>
        <Link className="premium-nav-cta" to="/contact" onClick={closeMenu}>
          Book an Assessment <span>↗</span>
        </Link>
        <button
          className="premium-mobile-trigger"
          type="button"
          aria-expanded={mobileMenuOpen}
          aria-label="Open mobile navigation"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Panel */}
      <div className={`premium-mobile-panel ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="premium-mobile-inner">
          {navItems.map((item, i) => (
             <Link className="premium-mobile-link" to={item.path || '#'} key={i} onClick={closeMenu}>
               {item.name}
             </Link>
          ))}
          <div className="premium-mobile-action">
            <Link className="premium-btn-primary" to="/contact" onClick={closeMenu}>
              Book an Assessment ↗
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
