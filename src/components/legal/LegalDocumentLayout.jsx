import { Link } from 'react-router-dom';
import PageMeta from '../PageMeta';
import './LegalDocumentLayout.css';

export default function LegalDocumentLayout({
  title,
  kicker = 'LEGAL & SUPPORT',
  purpose,
  lastUpdated = 'October 15, 2026',
  toc = [],
  actionSlot = null,
  children,
}) {
  return (
    <>
      <PageMeta />
      <div className="legal-doc-page">
        {/* Document Header */}
        <header className="legal-doc-header">
          <div className="legal-doc-header-inner">
            <span className="legal-doc-kicker">{kicker}</span>
            <h1 className="legal-doc-title">{title}</h1>
            {purpose && <p className="legal-doc-purpose">{purpose}</p>}

            <div className="legal-doc-meta-bar">
              <div className="legal-operator-badge">
                <span>Operated by</span>
                <strong>ADABHRA GROUP (Sole Proprietorship), India</strong>
              </div>
              <span>•</span>
              <span className="legal-doc-updated">Last reviewed: {lastUpdated}</span>
              <span>•</span>
              <Link to="/contact#support" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>
                Contact &amp; Support ↗
              </Link>
            </div>
          </div>
        </header>

        {/* Document Container */}
        <div className="legal-doc-container">
          {/* Desktop Sticky Table of Contents */}
          {toc.length > 0 && (
            <aside className="legal-doc-sidebar" aria-label="Table of contents">
              <div className="legal-toc-card">
                <div className="legal-toc-title">On this page</div>
                <ul className="legal-toc-list">
                  {toc.map((item, index) => (
                    <li key={item.id || index}>
                      <a href={`#${item.id}`} className="legal-toc-link">
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          )}

          {/* Main Reading Column */}
          <article className="legal-doc-content" id="legal-content">
            {/* Mobile TOC Accordion */}
            {toc.length > 0 && (
              <details className="legal-toc-mobile">
                <summary>Table of contents ({toc.length} sections)</summary>
                <ul className="legal-toc-list">
                  {toc.map((item, index) => (
                    <li key={item.id || index}>
                      <a href={`#${item.id}`} className="legal-toc-link">
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            )}

            {actionSlot && <div className="legal-doc-action">{actionSlot}</div>}

            {children}

            {/* Questions & Verification Box */}
            <div className="legal-doc-support">
              <h3>Questions about this policy?</h3>
              <p>
                For questions regarding website terms, privacy requests, or professional service agreements, contact our team directly.
              </p>
              <div className="legal-doc-support-links">
                <a
                  href="mailto:raja@xaivon.com"
                  className="btn btn-secondary btn-sm"
                  style={{ textDecoration: 'none' }}
                >
                  raja@xaivon.com
                </a>
                <Link
                  to="/contact"
                  className="btn btn-primary btn-sm"
                  style={{ textDecoration: 'none' }}
                >
                  Contact Page ↗
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
