import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './FounderSection.css';

// Removed generic values array to focus on an authentic founder letter.

export default function FounderSection() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [avatarRef, avatarVisible] = useScrollReveal({ threshold: 0.2 });
  const [contentRef, contentVisible] = useScrollReveal({ threshold: 0.15 });

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
            Leadership
          </span>
          <h2>
            Meet <span className="text-gradient-premium">Raja</span>
          </h2>
        </div>

        {/* Two-Column Layout */}
        <div className="founder-grid">
          {/* Left — Visual */}
          <div
            ref={avatarRef}
            className={`founder-visual reveal-left ${avatarVisible ? 'visible' : ''}`}
          >
            <div className="founder-avatar-wrapper">
              {/* Animated ring */}
              <div className="founder-ring" aria-hidden="true" />
              <div className="founder-ring founder-ring-2" aria-hidden="true" />

              <div className="glass-card founder-avatar-card">
                <div className="founder-avatar-gradient" aria-hidden="true" />
                <span className="founder-initial text-gradient-cyan">R</span>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div
            ref={contentRef}
            className={`founder-content reveal-right ${contentVisible ? 'visible' : ''}`}
          >
            <h3 className="founder-title">Founder &amp; CEO, XAIVON</h3>
            <p className="founder-subtitle">AI-Powered Business Infrastructure</p>

            <div className="founder-bio">
              <p>
                <strong>Operations break at scale.</strong> That is the fundamental problem I saw across the logistics and enterprise sector. As volume increases, companies throw more human capital at data entry, dispatching, and customer tracking. 
              </p>
              <p>
                This traditional approach destroys margins. It creates bottlenecks, high error rates, and employee burnout. I founded XAIVON because I realized that artificial intelligence shouldn&apos;t just be a tool for writing emails — it should be the core operational infrastructure of modern business.
              </p>
              <p>
                At XAIVON, we don&apos;t sell hype. We build resilient, deeply integrated AI systems that do the heavy lifting. By automating your most complex and repetitive workflows, we help you achieve unprecedented operational efficiency. Our vision is to build the infrastructure that allows your business to scale infinitely, without scaling your headcount.
              </p>
              <p className="founder-signature">
                — Raja
              </p>
            </div>

            {/* Values Grid Removed */}

            {/* CTA */}
            <Link to="/contact" className="btn btn-primary btn-lg founder-cta" id="founder-cta">
              Build With Us
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
