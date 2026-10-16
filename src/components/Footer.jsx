import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText('raja@xaivon.com').then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }).catch(err => {
        console.error('Failed to copy email:', err);
        fallbackCopy('raja@xaivon.com');
      });
    } else {
      fallbackCopy('raja@xaivon.com');
    }
  };

  const fallbackCopy = (text) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'absolute';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Fallback copy failed:', error);
    } finally {
      textArea.remove();
    }
  };

  const handleOpenCookieSettings = () => {
    window.dispatchEvent(new CustomEvent('open-cookie-settings'));
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">XAIVON</div>
            <p>Business automation and connected systems.</p>
            <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <a href="mailto:raja@xaivon.com" style={{ margin: 0, display: 'inline', fontWeight: 600 }}>raja@xaivon.com</a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  style={{
                    background: 'none',
                    border: '1px solid var(--line)',
                    borderRadius: '6px',
                    padding: '2px 8px',
                    fontSize: '11px',
                    color: 'var(--muted)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
              <div>
                <a href="tel:+919521190205" style={{ margin: 0, display: 'inline' }}>+91 95211 90205</a>
              </div>
            </div>
          </div>
          <div>
            <h3>Company</h3>
            <Link to="/about#who">About</Link>
            <Link to="/about#how">How We Work</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about#future">Future Direction</Link>
          </div>
          <div>
            <h3>Explore</h3>
            <Link to="/solutions">Solutions</Link>
            <Link to="/products">Products</Link>
            <Link to="/industries">Industries</Link>
            <Link to="/roi-calculator">ROI Estimator</Link>
          </div>
          <div>
            <h3>Legal &amp; Help</h3>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/cookie-policy">Cookie Policy</Link>
            <Link to="/refund-policy">Refund &amp; Cancellation</Link>
            <Link to="/contact#support">Support &amp; Contact</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© {year} XAIVON. All rights reserved.</div>
          <div style={{ textAlign: 'center' }}>XAIVON is a business brand operated by ADABHRA GROUP (Sole Proprietorship), India.</div>
          <div>
            <button
              type="button"
              onClick={handleOpenCookieSettings}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--muted)',
                fontSize: '13px',
                cursor: 'pointer',
                padding: '4px 8px',
                textDecoration: 'underline'
              }}
            >
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
