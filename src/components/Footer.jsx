import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const SERVICES_LINKS = [
  { label: 'AI Automation', path: '/services' },
  { label: 'AI Chatbots', path: '/services' },
  { label: 'AI Voice Agents', path: '/services' },
  { label: 'CRM Automation', path: '/services' },
  { label: 'Website Development', path: '/services' },
];

const SOLUTIONS_LINKS = [
  { label: 'Lead Management', path: '/services' },
  { label: 'Business Automation', path: '/services' },
  { label: 'Workflow Systems', path: '/services' },
  { label: 'Custom AI', path: '/services' },
];

const INDUSTRIES_LINKS = [
  { label: 'Logistics & Freight', path: '/logistics-solutions' },
  { label: 'Insurance', path: '/services' },
  { label: 'Healthcare', path: '/services' },
  { label: 'Real Estate', path: '/services' },
];

const RESOURCES_LINKS = [
  { label: 'Blog', path: '/blog', comingSoon: true },
  { label: 'Case Studies', path: '/blog', comingSoon: true },
  { label: 'Documentation', path: '/services' },
  { label: 'FAQ', path: '/contact' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="footer" id="footer">
      {/* ── Gradient divider ── */}
      <div className="footer__divider" aria-hidden="true" />

      {/* ── Grid pattern overlay ── */}
      <div className="footer__grid-pattern" aria-hidden="true" />

      {/* ── Row 1: 5-Column Links ── */}
      <div className="footer__content">
        <div className="footer__columns">
          {/* Column 1 — Company */}
          <div className="footer__col footer__col--brand">
            <Link to="/" className="footer__logo" aria-label="XAIVON Home">
              <span className="footer__logo-text">XAIVON</span>
            </Link>
            <p className="footer__tagline">AI-Powered Business Infrastructure</p>
            <a href="mailto:raja@xaivon.com" className="footer__email" id="footer-email">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 4L12 13L2 4" />
              </svg>
              raja@xaivon.com
            </a>
          </div>

          {/* Column 2 — Services */}
          <div className="footer__col">
            <h4 className="footer__col-heading">Services</h4>
            <ul className="footer__col-list">
              {SERVICES_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="footer__col-link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Solutions */}
          <div className="footer__col">
            <h4 className="footer__col-heading">Solutions</h4>
            <ul className="footer__col-list">
              {SOLUTIONS_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="footer__col-link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Industries */}
          <div className="footer__col">
            <h4 className="footer__col-heading">Industries</h4>
            <ul className="footer__col-list">
              {INDUSTRIES_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="footer__col-link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 — Resources */}
          <div className="footer__col">
            <h4 className="footer__col-heading">Resources</h4>
            <ul className="footer__col-list">
              {RESOURCES_LINKS.map((link) => (
                <li key={link.label} className="footer__col-link-wrap">
                  <Link to={link.path} className="footer__col-link">{link.label}</Link>
                  {link.comingSoon && (
                    <span className="footer__coming-soon">Coming Soon</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Row 2: Newsletter ── */}
        <div className="footer__newsletter" id="footer-newsletter">
          <div className="footer__newsletter-content">
            <div className="footer__newsletter-info">
              <h4 className="footer__newsletter-title">Stay ahead with AI insights</h4>
              <p className="footer__newsletter-desc">
                Get weekly strategies on AI automation, delivered to your inbox.
              </p>
            </div>
            <form className="footer__newsletter-form" onSubmit={handleSubscribe}>
              <div className="footer__newsletter-input-wrap">
                <input
                  type="email"
                  className="footer__newsletter-input"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Email address for newsletter"
                  id="newsletter-email"
                />
                <button
                  type="submit"
                  className="btn btn-primary btn-sm footer__newsletter-btn"
                  id="newsletter-submit"
                >
                  {subscribed ? 'Subscribed ✓' : 'Subscribe'}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* ── Row 3: Bottom bar ── */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2026 XAIVON. All Rights Reserved.
          </p>

          <div className="footer__social">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="footer__social-link"
              id="social-linkedin"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* Twitter / X */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="footer__social-link"
              id="social-twitter"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:raja@xaivon.com"
              aria-label="Email us"
              className="footer__social-link"
              id="social-email"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 4L12 13L2 4" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
