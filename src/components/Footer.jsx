import { Link, useLocation } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  return (
    <footer className="footer" id="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-top">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <Link 
              to="/" 
              className="footer-logo"
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              <img src="/xaivon-logo.svg" alt="XAIVON Logo" className="footer-logo-icon" width="40" height="40" loading="lazy" decoding="async" />
              <span>XAIVON</span>
            </Link>
            <p className="footer-desc">
              Enterprise AI infrastructure and logistics automation. We build scalable systems that eliminate operational friction and accelerate growth.
            </p>
              {/* Socials removed per request until official accounts exist */}
          </div>

          {/* Links Columns */}
          <div className="footer-links-wrapper">
            <div className="footer-nav-col">
              <h4 className="footer-heading">Solutions</h4>
              <ul className="footer-links">
                <li><Link to="/quoteflow-ai">QuoteFlow AI</Link></li>
                <li><Link to="/ai-agents">AI Agents</Link></li>
                <li><Link to="/ai-automation">AI Automation</Link></li>
                <li><Link to="/ai-chatbots">AI Chatbots</Link></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-links">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/resources">Resources</Link></li>
                <li><Link to="/blog">Blog</Link></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <h4 className="footer-heading">Contact</h4>
              <ul className="footer-links">
                <li><Link to="/contact">Schedule a Call</Link></li>
                <li><a href="mailto:raja@xaivon.com">raja@xaivon.com</a></li>
                <li><a href="mailto:partnerships@xaivon.com">partnerships@xaivon.com</a></li>
              </ul>
              
              <div className="footer-trust-badge" style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginTop: '1rem', color: 'var(--text-muted)' }}>
                <span>✓ Enterprise Security Standards</span>
                <span>✓ Built For Long-Term Growth</span>
                <span>✓ Response Within 12 Hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; {currentYear} XAIVON LLC. All rights reserved.
          </div>
          <div className="footer-legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span className="footer-separator"></span>
            <Link to="/terms">Terms & Conditions</Link>
            <span className="footer-separator"></span>
            <Link to="/cookie-policy">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
