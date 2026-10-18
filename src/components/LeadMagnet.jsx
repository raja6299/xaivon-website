import { useScrollReveal } from '../hooks/useScrollReveal';
import { Link } from 'react-router-dom';
import './LeadMagnet.css';

export default function LeadMagnet() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="lead-magnet-section" ref={sectionRef} aria-labelledby="lead-magnet-heading">
      <div className={`lead-magnet-card ${isVisible ? 'is-visible' : ''}`}>
        <div className="lead-magnet-content">
          <span className="lead-magnet-badge">
            <span className="badge-dot" />
            RESEARCH PREVIEW
          </span>
          <h2 id="lead-magnet-heading" className="lead-magnet-title">
            25 AI Logistics Workflows
          </h2>
          <p className="lead-magnet-desc">
            We are preparing an in-depth architectural breakdown of repeatable automation patterns across dispatch, freight audit, and quoting operations. Discuss your specific workflow bottlenecks with our team today.
          </p>
          <div className="lead-magnet-action">
            <Link to="/contact" className="lead-magnet-btn">
              <span>Discuss This Approach</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <span className="lead-magnet-note">In preparation &bull; Consultation available</span>
          </div>
        </div>
        <div className="lead-magnet-visual">
          <div className="book-mockup-wrapper">
            <div className="book-mockup" role="img" aria-label="Mockup of the upcoming 25 Logistics Workflows Playbook (in preparation)">
              <div className="book-pages" aria-hidden="true" />
              <div className="book-top">
                <span className="book-status-tag">IN PREPARATION</span>
                <span className="book-publisher">XAIVON RESEARCH</span>
              </div>
              <div className="book-body">
                <div className="book-title">25 LOGISTICS<br />WORKFLOWS</div>
                <div className="book-subtitle">Architectural Patterns for Freight &amp; Dispatch</div>
              </div>
              <div className="book-bottom">
                <span className="book-logo">XAIVON</span>
                <span className="book-badge-dot" title="Active Research Topic" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
