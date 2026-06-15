import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './FounderSection.css';

export default function FounderSection() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [contentRef, contentVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="section-alt founder-section" id="founder">
      <div className="container">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`section-header reveal ${headerVisible ? 'visible' : ''}`}
        >
          <span className="badge badge-gold">
            <span className="badge-dot" />
            Company Leadership
          </span>
          <h2>
            Message From <span className="text-gradient-premium">The Founder</span>
          </h2>
        </div>

        {/* Single-Column Authoritative Layout */}
        <div
          ref={contentRef}
          className={`founder-content-wrapper reveal-scale ${contentVisible ? 'visible' : ''}`}
        >
          <div className="founder-letter glass-card">
            <h3 className="founder-title">Raja — Founder &amp; CEO, XAIVON</h3>
            <p className="founder-subtitle">AI-Powered Business Infrastructure</p>

            <div className="founder-bio">
              <div className="founder-block">
                <h4>The Industry Perspective</h4>
                <p>
                  <strong>Operations break at scale.</strong> That is the fundamental problem across the logistics and enterprise sector. As volume increases, companies throw more human capital at data entry, dispatching, and customer tracking. This traditional approach destroys margins, creates bottlenecks, and leads to high error rates.
                </p>
              </div>

              <div className="founder-block">
                <h4>Our Vision</h4>
                <p>
                  I founded XAIVON because I realized that artificial intelligence shouldn&apos;t just be a tool for writing emails — it must be the core operational infrastructure of modern business. We envision a future where businesses scale systematically and securely, without being constrained by human limitations.
                </p>
              </div>

              <div className="founder-block">
                <h4>Our Philosophy</h4>
                <p>
                  At XAIVON, we don&apos;t sell hype. We build resilient, deeply integrated AI systems that do the heavy lifting. By automating complex and repetitive workflows, we help companies remove operational friction and restore their profit margins.
                </p>
              </div>

              <p className="founder-signature">
                — Raja
              </p>
            </div>

            {/* CTA */}
            <div className="founder-cta-wrapper">
              <Link to="/contact" className="btn btn-primary btn-lg founder-cta" id="founder-cta">
                Discuss Your Operations
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
