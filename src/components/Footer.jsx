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
