import { useScrollReveal } from '../hooks/useScrollReveal';
import { Link } from 'react-router-dom';
import './CaseStudiesSection.css';

const CASE_STUDIES = [
  {
    id: 'freight-brokerage-capacity',
    category: 'Freight Brokerage Automation',
    title: 'Scaling Capacity by 300% Without Adding Headcount',
    description: 'How an emerging 3PL deployed QuoteFlow AI and automated dispatch to handle triple their standard volume without hiring additional back-office staff.',
    tags: ['QuoteFlow AI', 'TMS Integration', 'Email Parsing']
  },
  {
    id: 'ai-dispatch-optimization',
    category: 'AI Dispatch Optimization',
    title: 'Eliminating After-Hours Check Calls with Voice Agents',
    description: 'Implementing autonomous AI Voice Dispatchers to handle 24/7 driver check calls, reducing manual dispatch work by over 40 hours per week.',
    tags: ['AI Voice Agents', '24/7 Operations', 'Carrier Comms']
  },
  {
    id: 'lead-management-systems',
    category: 'Lead Management Systems',
    title: 'Automating the Sales Pipeline for Logistics Growth',
    description: 'Transforming inbound shipper requests into qualified, actively nurtured CRM leads without any manual data entry.',
    tags: ['CRM Automation', 'Lead Routing', 'Revenue Growth']
  }
];

export default function CaseStudiesSection() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.05 });

  return (
    <section className="case-studies-section section" id="case-studies" ref={sectionRef}>
      <div className="container-wide">
        {/* Section Header */}
        <div className={`section-header reveal ${isVisible ? 'visible' : ''}`}>
          <span className="badge">
            <span className="badge-dot" />
            Proven Outcomes
          </span>
          <h2>
            Infrastructure Built For <span className="text-gradient-premium">Results</span>
          </h2>
          <p>
            Explore how we build and deploy resilient AI systems to solve complex operational bottlenecks in high-volume environments.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="case-studies-grid">
          {CASE_STUDIES.map((study, index) => (
            <article 
              key={study.id} 
              className={`case-study-card glass-card reveal-scale ${isVisible ? 'visible' : ''} delay-${index + 1}`}
            >
              <div className="case-study-content">
                <span className="case-study-category">{study.category}</span>
                <h3 className="case-study-title">{study.title}</h3>
                <p className="case-study-desc">{study.description}</p>
                
                <div className="case-study-tags">
                  {study.tags.map(tag => (
                    <span key={tag} className="case-study-tag">{tag}</span>
                  ))}
                </div>
              </div>
              
              <div className="case-study-footer">
                <Link to={`/blog/${study.id}`} className="case-study-link">
                  Read Full Case Study
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        {/* Footer CTA */}
        <div className={`case-studies-cta reveal ${isVisible ? 'visible' : ''} delay-4`}>
          <Link to="/contact" className="btn btn-primary">
            Schedule a Strategy Call
          </Link>
          <p className="trust-indicator" style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            ✓ Strategy-First Approach • Built For Long-Term Growth
          </p>
        </div>
      </div>
    </section>
  );
}
