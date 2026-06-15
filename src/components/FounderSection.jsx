import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './FounderSection.css';

const values = [
  {
    title: 'Innovation',
    desc: 'Pushing boundaries with cutting-edge AI solutions.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: 'Excellence',
    desc: 'Enterprise-grade quality in every system we build.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: 'Results',
    desc: 'Measurable ROI and tangible business outcomes.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    title: 'Trust',
    desc: 'Transparent partnerships built on reliability.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function FounderSection() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [avatarRef, avatarVisible] = useScrollReveal({ threshold: 0.2 });
  const [contentRef, contentVisible] = useScrollReveal({ threshold: 0.15 });
  const [valuesRef, valuesVisible] = useScrollReveal({ threshold: 0.2 });

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
                Raja founded XAIVON with a clear vision: to make enterprise-grade AI
                accessible to businesses of every size. With deep expertise in
                automation, AI systems, and business operations, Raja leads
                XAIVON&apos;s mission to transform how companies operate.
              </p>
              <p>
                At XAIVON, we believe that AI isn&apos;t just a tool — it&apos;s the
                infrastructure of modern business. Every system we build is designed
                to reduce complexity, eliminate waste, and create scalable growth.
              </p>
              <p>
                Our commitment is simple: deliver AI solutions that generate real
                business results. No hype. No empty promises. Just intelligent
                systems that work.
              </p>
            </div>

            {/* Values Grid */}
            <div
              ref={valuesRef}
              className={`founder-values reveal ${valuesVisible ? 'visible' : ''}`}
            >
              {values.map((val) => (
                <div className="founder-value-item" key={val.title}>
                  <div className="founder-value-icon">{val.icon}</div>
                  <div className="founder-value-text">
                    <h4>{val.title}</h4>
                    <p>{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>

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
