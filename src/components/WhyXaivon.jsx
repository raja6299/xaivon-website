import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './WhyXaivon.css';

const pillars = [
  {
    title: 'Technical Expertise',
    description: 'We don\'t just wrap APIs. We architect custom LLM pipelines, fine-tune models on your proprietary data, and build secure, isolated infrastructures that handle high-volume enterprise workloads without rate-limiting bottlenecks.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/>
        <rect x="9" y="9" width="6" height="6"/>
        <line x1="9" y1="1" x2="9" y2="4"/>
        <line x1="15" y1="1" x2="15" y2="4"/>
        <line x1="9" y1="20" x2="9" y2="23"/>
        <line x1="15" y1="20" x2="15" y2="23"/>
        <line x1="20" y1="9" x2="23" y2="9"/>
        <line x1="20" y1="14" x2="23" y2="14"/>
        <line x1="1" y1="9" x2="4" y2="9"/>
        <line x1="1" y1="14" x2="4" y2="14"/>
      </svg>
    ),
  },
  {
    title: 'AI Infrastructure',
    description: 'True automation requires robust plumbing. We deploy security-first, single-tenant AI environments with integrated vector databases, automated fallback logic, and real-time observability, ensuring 99.99% system uptime.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
  },
  {
    title: 'Automation Methodology',
    description: 'We map your entire operational lifecycle before writing a line of code. By identifying manual bottlenecks and legacy system constraints, we build precise, deterministic workflows that augment your human workforce rather than breaking existing processes.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    title: 'Long-Term Impact',
    description: 'We position you to scale revenue without scaling headcount. Our solutions reduce human error to near-zero, cut response times from hours to milliseconds, and transform your cost centers into intelligent, profit-generating engines.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
];

export default function WhyXaivon() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.1 });
  const [ctaRef, ctaVisible] = useScrollReveal();

  return (
    <section className="why-xaivon section" id="why-xaivon">
      <div className="container">
        <div
          ref={headerRef}
          className={`section-header text-center reveal ${headerVisible ? 'visible' : ''}`}
        >
          <span className="badge">
            <span className="badge-dot" />
            The XAIVON Advantage
          </span>
          <h2>
            Building Enterprise-Grade <br/>
            <span className="text-gradient">AI Systems</span>
          </h2>
          <p className="why-xaivon-subtitle">
            We are a technology partner that builds robust AI infrastructure, not a marketing agency selling chatbots. 
            We solve deep operational friction so you can scale efficiently.
          </p>
        </div>

        <div 
          ref={gridRef}
          className={`why-xaivon-grid reveal-scale ${gridVisible ? 'visible' : ''}`}
        >
          {pillars.map((pillar, idx) => (
            <div key={idx} className="why-xaivon-card glass-card">
              <div className="why-xaivon-card-icon">
                {pillar.icon}
              </div>
              <h3 className="why-xaivon-card-title">{pillar.title}</h3>
              <p className="why-xaivon-card-desc">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          ref={ctaRef}
          className={`why-xaivon-cta text-center reveal ${ctaVisible ? 'visible' : ''}`}
        >
          <Link to="/contact" className="btn btn-primary btn-lg" id="why-xaivon-cta-btn">
            Schedule a Strategy Call
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ marginLeft: '8px' }}>
              <path d="M4.167 10H15.833M15.833 10L10.833 5M15.833 10L10.833 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
