import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <img src="/logo.png" alt="XAIVON" />
          <h3>XAIVON</h3>
          <p>Enterprise AI automation for logistics operations. Transforming how freight brokers process, quote, and scale.</p>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/blog">Insights</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Solutions</h4>
          <ul>
            <li><Link to="/services">QuoteFlow AI</Link></li>
            <li><Link to="/services">Rate Benchmarking</Link></li>
            <li><Link to="/services">TMS Integration</Link></li>
            <li><Link to="/services">Analytics</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Book a Demo</Link></li>
            <li><a href="mailto:raja@xaivon.com">Support</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} XAIVON. All rights reserved.</p>
        <div className="footer-social">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">𝕏</a>
        </div>
      </div>
    </footer>
  );
}
