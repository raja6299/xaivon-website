import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { XAIVON_DATA } from '../data/xaivonData';
import './PremiumNav.css';

export default function PremiumNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const navRef = useRef(null);
  const closeTimerRef = useRef(null);

  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, []);

  // Close on route change — legitimate setState needed to sync nav with router
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    closeMenu();
  }, [location, closeMenu]);

  // Body scroll lock for mobile
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [mobileMenuOpen]);

  // Click-outside handler
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const navItems = XAIVON_DATA.navigation.primary;

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const handleMouseEnter = (name) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const handleDropdownMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const handleDropdownMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const handleKeyDown = (e, name) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleDropdown(name);
    } else if (e.key === 'Escape') {
      setOpenDropdown(null);
    }
  };

  const toggleMobileAccordion = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <header className="premium-nav-wrapper" ref={navRef}>
      <nav className="premium-nav" aria-label="Main navigation">
        <Link className="premium-brand" to="/" aria-label="XAIVON home" onClick={closeMenu}>
          <span className="premium-brand-mark" aria-hidden="true">
            <span className="premium-brand-mark-inner"></span>
          </span>
          <span className="premium-brand-text">XAIVON</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="premium-nav-links">
          {navItems.map((item, i) => (
            <div key={i} className={`pnav-item ${openDropdown === item.name ? 'is-open' : ''}`}>
              {item.dropdown ? (
                <>
                  <button
                    className="pnav-trigger"
                    aria-haspopup="true"
                    aria-expanded={openDropdown === item.name}
                    onClick={() => toggleDropdown(item.name)}
                    onKeyDown={(e) => handleKeyDown(e, item.name)}
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.name}
                    <svg className="pnav-chevron" width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path d="M2.5 3.5L5 6L7.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <div
                    className={`mega-menu ${item.dropdown.groups.length > 1 ? 'mega-menu--wide' : ''} ${openDropdown === item.name ? 'mega-menu--open' : ''}`}
                    role="menu"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <div className="mega-menu-inner">
                      {item.dropdown.groups.map((group, gi) => (
                        <div key={gi} className="mega-group">
                          <div className="mega-label">{group.label}</div>
                          <ul className="mega-links">
                            {group.links.map((link, li) => (
                              <li key={li}>
                                <Link
                                  className="mega-link"
                                  to={link.path}
                                  onClick={closeMenu}
                                  role="menuitem"
                                >
                                  {link.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link className="pnav-link" to={item.path || '#'} onClick={closeMenu}>
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link className="premium-nav-cta" to="/contact" onClick={closeMenu}>
          Book an Assessment <span className="cta-arrow">↗</span>
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="premium-mobile-trigger"
          type="button"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className={`hamburger-icon ${mobileMenuOpen ? 'is-active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </nav>

      {/* Mobile Panel */}
      <div className={`premium-mobile-panel ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="premium-mobile-inner">
          {navItems.map((item, i) => (
            <div key={i} className="mobile-nav-item">
              {item.dropdown ? (
                <div className="mobile-accordion">
                  <button
                    className={`mobile-accordion-trigger ${openDropdown === item.name ? 'is-expanded' : ''}`}
                    type="button"
                    aria-expanded={openDropdown === item.name}
                    onClick={() => toggleMobileAccordion(item.name)}
                  >
                    <span>{item.name}</span>
                    <svg className="mobile-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <div className={`mobile-accordion-content ${openDropdown === item.name ? 'is-open' : ''}`}>
                    {item.dropdown.groups.map((group, gi) => (
                      <div key={gi} className="mobile-group">
                        <div className="mobile-group-label">{group.label}</div>
                        <ul className="mobile-group-links">
                          {group.links.map((link, li) => (
                            <li key={li}>
                              <Link className="mobile-link" to={link.path} onClick={closeMenu}>
                                {link.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <Link className="mobile-nav-link" to={item.path || '#'} onClick={closeMenu}>
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <div className="premium-mobile-action">
            <Link className="premium-mobile-cta" to="/contact" onClick={closeMenu}>
              Book an Assessment <span>↗</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
