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
                <h4>Why XAIVON Exists</h4>
                <p>
                  As companies scale, operations inevitably break. This is the fundamental challenge across the logistics and enterprise sectors. Historically, as transaction volume increases, companies are forced to linearly scale their human capital—throwing more staff at data entry, dispatching, and customer tracking. This traditional approach erodes profit margins, creates critical bottlenecks, and introduces unacceptable error rates. XAIVON exists to decouple your growth from your headcount.
                </p>
              </div>

              <div className="founder-block">
                <h4>Our Mission</h4>
                <p>
                  We build resilient, deeply integrated AI infrastructure that handles the heavy lifting. By systematically automating complex, repetitive workflows, our mission is to eliminate operational friction and restore your profit margins, allowing your team to focus exclusively on high-value strategic execution.
                </p>
              </div>

              <div className="founder-block">
                <h4>Long-Term Vision & Philosophy</h4>
                <p>
                  I founded XAIVON with the conviction that artificial intelligence must transition from a novelty to the core operational infrastructure of modern business. We do not sell hype or generic templates. We partner with serious business owners to design secure, scalable solutions tailored to their exact data ecosystem. Our commitment is entirely tied to your long-term operational success.
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
