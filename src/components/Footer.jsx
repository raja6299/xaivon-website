import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-top">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-logo">
              XAIVON
            </Link>
            <p className="footer-desc">
              Enterprise AI infrastructure and logistics automation. We build scalable systems that eliminate operational friction and accelerate growth.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="footer-links-wrapper">
            <div className="footer-nav-col">
              <h4 className="footer-heading">Solutions</h4>
              <ul className="footer-links">
                <li><Link to="/services">All Services</Link></li>
                <li><Link to="/s/logistics-automation">Logistics Automation</Link></li>
                <li><Link to="/s/ai-automation">AI Business Automation</Link></li>
                <li><Link to="/s/ai-chatbots">Voice & Chat Agents</Link></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-links">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><a href="/#case-studies">Case Studies</a></li>
                <li><Link to="/blog">Blog & Resources</Link></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <h4 className="footer-heading">Contact</h4>
              <ul className="footer-links">
                <li><Link to="/contact">Schedule a Call</Link></li>
                <li><a href="mailto:raja@xaivon.com">raja@xaivon.com</a></li>
              </ul>
              
              <div className="footer-trust-badge">
                <span>✓ SOC 2 Compliant Infrastructure</span>
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
            <Link to="/privacy">Privacy Policy</Link>
            <span className="footer-separator"></span>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
