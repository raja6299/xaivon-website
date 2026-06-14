import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Menu closes automatically on mobile when a link is clicked,
    // so we don't strictly need a location effect, but we can safely sync it here.
    if (menuOpen) {
      setTimeout(() => setMenuOpen(false), 0);
    }
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="main-nav">
      <Link to="/" className="navbar-logo" aria-label="XAIVON Home">
        <img src="/logo.png" alt="XAIVON Logo" />
        <span>XAIVON</span>
      </Link>

      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/" className={isActive('/')} onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" className={isActive('/about')} onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/services" className={isActive('/services')} onClick={() => setMenuOpen(false)}>Services</Link></li>
        <li><Link to="/blog" className={isActive('/blog')} onClick={() => setMenuOpen(false)}>Insights</Link></li>
        <li><Link to="/contact" className={isActive('/contact')} onClick={() => setMenuOpen(false)}>Contact</Link></li>
        <li className="mobile-cta">
          <Link to="/contact" className="btn btn-primary" onClick={() => setMenuOpen(false)}>Book a Call</Link>
        </li>
      </ul>

      <div className="navbar-cta">
        <Link to="/contact" className="btn btn-primary" id="nav-cta">
          Book Discovery Call
        </Link>
      </div>

      <button
        className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        id="menu-toggle"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
