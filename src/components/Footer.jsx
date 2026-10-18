import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  const [copyStatus, setCopyStatus] = useState('idle'); // 'idle' | 'copied' | 'error'
  const copyTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  const handleCopyEmail = () => {
    if (copyTimeoutRef.current) {
      clearTimeout(copyTimeoutRef.current);
    }

    const email = 'raja@xaivon.com';

    const triggerSuccess = () => {
      setCopyStatus('copied');
      copyTimeoutRef.current = setTimeout(() => {
        setCopyStatus('idle');
      }, 2200);
    };

    const triggerError = () => {
      setCopyStatus('error');
      copyTimeoutRef.current = setTimeout(() => {
        setCopyStatus('idle');
      }, 2500);
    };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email)
        .then(triggerSuccess)
        .catch((err) => {
          console.warn('Clipboard writeText failed, trying fallback:', err);
          fallbackCopy(email, triggerSuccess, triggerError);
        });
    } else {
      fallbackCopy(email, triggerSuccess, triggerError);
    }
  };

  const fallbackCopy = (text, onSuccess, onError) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.setAttribute('readonly', '');
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    textArea.style.top = '-9999px';
    document.body.appendChild(textArea);
    textArea.select();
    try {
      const successful = document.execCommand('copy');
      if (successful) {
        onSuccess();
      } else {
        onError();
      }
    } catch (err) {
      console.warn('Fallback copy command failed:', err);
      onError();
    } finally {
      textArea.remove();
    }
  };

  const handleOpenCookieSettings = () => {
    window.dispatchEvent(new CustomEvent('open-cookie-settings'));
  };

  return (
    <footer className="footer site-footer" id="site-footer" role="contentinfo">
      <div className="container site-footer__container">
        {/* Layer A & B: Brand & Navigation Architecture */}
        <div className="site-footer__grid">
          {/* Layer A: Brand, Purpose & Direct Communication */}
          <div className="site-footer__brand-col">
            <Link to="/" className="site-footer__brand" aria-label="XAIVON home">
              <span className="site-footer__brand-mark" aria-hidden="true">
                <span className="site-footer__brand-mark-inner" />
              </span>
              <span className="site-footer__brand-name">XAIVON</span>
            </Link>

            <p className="site-footer__tagline">
              Business automation and connected systems.
            </p>
            <p className="site-footer__subtext">
              Architecture, integration, and operational software for modern enterprises.
            </p>

            <div className="site-footer__contact-card">
              <div className="site-footer__contact-row">
                <span className="site-footer__contact-label">Direct Inquiry</span>
                <div className="site-footer__email-group">
                  <a href="mailto:raja@xaivon.com" className="site-footer__contact-link">
                    raja@xaivon.com
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className={`site-footer__copy-btn ${
                      copyStatus === 'copied'
                        ? 'site-footer__copy-btn--copied'
                        : copyStatus === 'error'
                        ? 'site-footer__copy-btn--error'
                        : ''
                    }`}
                    aria-label={
                      copyStatus === 'copied'
                        ? 'Email address copied to clipboard'
                        : copyStatus === 'error'
                        ? 'Failed to copy email address'
                        : 'Copy email address to clipboard'
                    }
                  >
                    {copyStatus === 'copied' ? (
                      <>
                        <svg className="site-footer__copy-icon" width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M3 8.5L6.5 12L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Copied</span>
                      </>
                    ) : copyStatus === 'error' ? (
                      <span>Failed</span>
                    ) : (
                      <>
                        <svg className="site-footer__copy-icon" width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <rect x="5" y="5" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M11 5V3a1.5 1.5 0 00-1.5-1.5h-6A1.5 1.5 0 002 3v6a1.5 1.5 0 001.5 1.5H5" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                  <span className="sr-only" aria-live="polite">
                    {copyStatus === 'copied' && 'Email copied to clipboard.'}
                    {copyStatus === 'error' && 'Could not copy email automatically.'}
                  </span>
                </div>
              </div>

              <div className="site-footer__contact-row">
                <span className="site-footer__contact-label">Telephone</span>
                <a href="tel:+919521190205" className="site-footer__contact-link">
                  +91 95211 90205
                </a>
              </div>
            </div>

            {/* Founder Social Connection Module */}
            <div className="site-footer__social-module">
              <span className="site-footer__social-heading">Connect with the Founder</span>
              <div className="site-footer__social-links" role="list">
                <a
                  href="https://x.com/Raja_9693"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-footer__social-link"
                  aria-label="Raja Babu on X (Twitter) — opens in a new tab"
                  role="listitem"
                >
                  <svg className="site-footer__social-icon" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span className="site-footer__social-text">X</span>
                  <svg className="site-footer__social-arrow" width="9" height="9" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/raja9693/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-footer__social-link"
                  aria-label="Raja Babu on LinkedIn — opens in a new tab"
                  role="listitem"
                >
                  <svg className="site-footer__social-icon" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.54a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
                  </svg>
                  <span className="site-footer__social-text">LinkedIn</span>
                  <svg className="site-footer__social-arrow" width="9" height="9" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>

                <a
                  href="https://github.com/raja9693bth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-footer__social-link"
                  aria-label="Raja Babu on GitHub — opens in a new tab"
                  role="listitem"
                >
                  <svg className="site-footer__social-icon" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                  <span className="site-footer__social-text">GitHub</span>
                  <svg className="site-footer__social-arrow" width="9" height="9" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Layer B: Semantic Navigation Columns */}
          <div className="site-footer__nav-group">
            {/* Column 1: Company */}
            <nav className="site-footer__nav-col" aria-label="Company links">
              <h3 className="site-footer__nav-heading">
                <span className="site-footer__nav-index">01</span>
                <span>Company</span>
              </h3>
              <ul className="site-footer__link-list">
                <li><Link to="/about#who">About</Link></li>
                <li><Link to="/about#how">How We Work</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about#future">Future Direction</Link></li>
              </ul>
            </nav>

            {/* Column 2: Explore */}
            <nav className="site-footer__nav-col" aria-label="Explore links">
              <h3 className="site-footer__nav-heading">
                <span className="site-footer__nav-index">02</span>
                <span>Explore</span>
              </h3>
              <ul className="site-footer__link-list">
                <li><Link to="/solutions">Solutions</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/industries">Industries</Link></li>
                <li><Link to="/roi-calculator">ROI Estimator</Link></li>
              </ul>
            </nav>

            {/* Column 3: Legal & Help */}
            <nav className="site-footer__nav-col" aria-label="Legal and support links">
              <h3 className="site-footer__nav-heading">
                <span className="site-footer__nav-index">03</span>
                <span>Legal &amp; Help</span>
              </h3>
              <ul className="site-footer__link-list">
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Service</Link></li>
                <li><Link to="/cookie-policy">Cookie Policy</Link></li>
                <li><Link to="/refund-policy">Refund &amp; Cancellation</Link></li>
                <li><Link to="/contact#support">Support &amp; Contact</Link></li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Layer C: Legal & Bottom Utility Rail */}
        <div className="site-footer__rail">
          <div className="site-footer__copyright">
            © {year} XAIVON. All rights reserved.
          </div>
          <div className="site-footer__operating-entity">
            XAIVON is a business brand operated by ADABHRA GROUP (Sole Proprietorship), India.
          </div>
          <div className="site-footer__settings-wrap">
            <button
              type="button"
              onClick={handleOpenCookieSettings}
              className="site-footer__cookie-btn"
              id="footer-cookie-settings-btn"
            >
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
