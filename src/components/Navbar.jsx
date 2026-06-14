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
    setMenuOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="main-nav">
      <Link to="/" className="navbar-logo" aria-label="XAIVON Home">
        <img src="/logo.png" alt="XAIVON Logo" />
        <span>XAIVON</span>
      </Link>

      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/" className={isActive('/')}>Home</Link></li>
        <li><Link to="/about" className={isActive('/about')}>About</Link></li>
        <li><Link to="/services" className={isActive('/services')}>Services</Link></li>
        <li><Link to="/blog" className={isActive('/blog')}>Insights</Link></li>
        <li><Link to="/contact" className={isActive('/contact')}>Contact</Link></li>
        <li className="mobile-cta">
          <Link to="/contact" className="btn btn-primary">Book a Call</Link>
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
