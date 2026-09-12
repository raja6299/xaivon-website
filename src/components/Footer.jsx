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

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">XAIVON</div>
            <p>Global AI Infrastructure &amp; Business Automation</p>
            <p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '8px' }}>Business name: XAIVON</p>
          </div>
          <div>
            <h3>Company</h3>
            <Link to="/about#who">About</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about#future">Roadmap</Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
              <a href="mailto:raja@xaivon.com" style={{ margin: 0, display: 'inline' }}>raja@xaivon.com</a>
              <button
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                style={{
                  background: 'none',
                  border: '1px solid var(--line)',
                  borderRadius: '6px',
                  padding: '2px 6px',
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
          </div>
          <div>
            <h3>Explore</h3>
            <Link to="/solutions">Solutions</Link>
            <Link to="/products">Products</Link>
            <Link to="/industries">Industries</Link>
          </div>
          <div>
            <h3>Legal</h3>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/cookie-policy">Cookie Policy</Link>
            <Link to="/refund-policy">Refund &amp; Cancellation</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© {year} XAIVON</div>
          <div>No fabricated evidence</div>
        </div>
      </div>
    </footer>
  );
}
