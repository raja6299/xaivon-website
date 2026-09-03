import { useScrollReveal } from '../hooks/useScrollReveal';
import { Link } from 'react-router-dom';

export default function LeadMagnet() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="lead-magnet-section" ref={sectionRef}>
      <div className={`lead-magnet-container glass-panel reveal-fade-up ${isVisible ? 'is-visible' : ''}`}>
        <div className="lead-magnet-content">
          <span className="badge badge-gold"><span className="badge-dot"></span>RESOURCE HUB</span>
          <h2>Top 25 AI Logistics Workflows</h2>
          <p>
            We are building a comprehensive guide to the highest-ROI logistics automations. 
            Discuss your specific workflow bottlenecks with our team today.
          </p>
          <div className="lead-magnet-form">
            <Link to="/contact" className="btn btn-primary" style={{ display: 'inline-block', width: 'auto' }}>
              Discuss This Approach
            </Link>
          </div>
        </div>
        <div className="lead-magnet-visual">
          <div className="book-mockup">
            <div className="book-cover">
              <span className="book-label">AUTOMATION PLAYBOOK</span>
              <div className="book-title">25 LOGISTICS<br/>WORKFLOWS</div>
              <div className="book-logo">XAIVON</div>
            </div>
            <div className="book-pages"></div>
          </div>
        </div>
      </div>
    </section>
  );
}