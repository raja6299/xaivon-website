import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/logistics-solutions', label: 'Logistics Solutions' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  /* ── Scroll detection ── */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── Lock body scroll when mobile menu is open ── */
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  /* ── Close mobile menu on route change ── */
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--menu-open' : ''}`}
      id="main-nav"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="navbar__inner">
        {/* ── Logo ── */}
        <Link to="/" className="navbar__logo" aria-label="XAIVON Home" onClick={closeMenu}>
          <img src="/xaivon-logo.svg" alt="XAIVON Logo" className="navbar__logo-icon" width="32" height="32" />
          <span className="navbar__logo-text">XAIVON</span>
        </Link>

        {/* ── Desktop Navigation ── */}
        <nav className="navbar__nav" aria-label="Primary">
          <ul className="navbar__links">
            {NAV_LINKS.map((link) => (
              <li key={link.path} className="navbar__link-item">
                <Link
                  to={link.path}
                  className={`navbar__link ${isActive(link.path) ? 'navbar__link--active' : ''}`}
                >
                  {link.label}
                  <span className="navbar__link-dot" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Desktop CTA ── */}
        <div className="navbar__cta">
          <Link to="/contact" className="btn btn-primary btn-sm" id="nav-cta">
            Schedule a Strategy Call
          </Link>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          id="menu-toggle"
        >
          <span className="navbar__hamburger-bar" aria-hidden="true" />
          <span className="navbar__hamburger-bar" aria-hidden="true" />
          <span className="navbar__hamburger-bar" aria-hidden="true" />
        </button>
      </div>

      {/* ── Mobile Overlay ── */}
      <div
        className={`navbar__overlay ${menuOpen ? 'navbar__overlay--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav className="navbar__overlay-nav" aria-label="Mobile navigation">
          <ul className="navbar__overlay-links">
            {NAV_LINKS.map((link, index) => (
              <li
                key={link.path}
                className={`navbar__overlay-item ${menuOpen ? 'navbar__overlay-item--visible' : ''}`}
                style={{ transitionDelay: menuOpen ? `${0.08 + index * 0.06}s` : '0s' }}
              >
                <Link
                  to={link.path}
                  className={`navbar__overlay-link ${isActive(link.path) ? 'navbar__overlay-link--active' : ''}`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div
            className={`navbar__overlay-cta ${menuOpen ? 'navbar__overlay-cta--visible' : ''}`}
            style={{ transitionDelay: menuOpen ? `${0.08 + NAV_LINKS.length * 0.06}s` : '0s' }}
          >
            <Link to="/contact" className="btn btn-primary" onClick={closeMenu}>
              Schedule a Strategy Call
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
