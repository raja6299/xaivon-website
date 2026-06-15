import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './WhyXaivon.css';

const traditionalItems = [
  'Slow response times (hours or days)',
  'High operational costs & overhead',
  'Manual data entry & human errors',
  'Limited to business hours only',
  'Difficult to scale efficiently',
  'Reactive problem solving',
];

const aiPoweredItems = [
  'Sub-second automated response times',
  'Measurable reduction in operational overhead',
  'Near-zero data entry discrepancies',
  'Continuous 24/7 system uptime',
  'Systems built to handle volume spikes',
  'Predictable, data-driven optimization',
];

export default function WhyXaivon() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [leftRef, leftVisible] = useScrollReveal({ threshold: 0.15 });
  const [rightRef, rightVisible] = useScrollReveal({ threshold: 0.15 });
  const [ctaRef, ctaVisible] = useScrollReveal();

  return (
    <section className="why-xaivon section" id="why-xaivon">
      <div className="container">
        <div
          ref={headerRef}
          className={`section-header reveal ${headerVisible ? 'visible' : ''}`}
        >
          <span className="badge">
            <span className="badge-dot" />
            Why Choose XAIVON
          </span>
          <h2>
            Traditional Operations vs{' '}
            <span className="text-gradient-premium">AI-Powered</span> Operations
          </h2>
        </div>

        <div className="why-xaivon-comparison">
          {/* Traditional Column */}
          <div
            ref={leftRef}
            className={`why-xaivon-column why-xaivon-traditional reveal-left ${leftVisible ? 'visible' : ''}`}
          >
            <div className="why-xaivon-column-header">
              <div className="why-xaivon-icon-badge why-xaivon-icon-badge--muted">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="why-xaivon-column-title">Traditional Operations</h3>
            </div>
            <ul className="why-xaivon-list">
              {traditionalItems.map((item, index) => (
                <li
                  key={index}
                  className={`why-xaivon-item why-xaivon-item--negative reveal ${leftVisible ? 'visible' : ''} delay-${index + 1}`}
                >
                  <span className="why-xaivon-item-icon why-xaivon-item-icon--muted" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="why-xaivon-item-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* AI-Powered Column */}
          <div
            ref={rightRef}
            className={`why-xaivon-column why-xaivon-ai-powered reveal-right ${rightVisible ? 'visible' : ''}`}
          >
            <div className="why-xaivon-column-header">
              <div className="why-xaivon-icon-badge why-xaivon-icon-badge--primary">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M16.667 5L7.5 14.167 3.333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="why-xaivon-column-title">
                AI-Powered with{' '}
                <span className="text-gradient-premium">XAIVON</span>
              </h3>
            </div>
            <ul className="why-xaivon-list">
              {aiPoweredItems.map((item, index) => (
                <li
                  key={index}
                  className={`why-xaivon-item why-xaivon-item--positive reveal ${rightVisible ? 'visible' : ''} delay-${index + 1}`}
                >
                  <span className="why-xaivon-item-icon why-xaivon-item-icon--primary" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.333 4L6 11.333 2.667 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="why-xaivon-item-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust & Security Layer */}
        <div className="security-trust-bar reveal-scale">
          <div className="security-trust-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <div className="security-trust-text">
              <h4>Bank-Grade Security</h4>
              <p>SOC2 Compliant Infrastructure</p>
            </div>
          </div>
          <div className="security-trust-divider"></div>
          <div className="security-trust-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            </svg>
            <div className="security-trust-text">
              <h4>Data Sovereignty</h4>
              <p>Your Data Never Trains Public Models</p>
            </div>
          </div>
          <div className="security-trust-divider"></div>
          <div className="security-trust-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            <div className="security-trust-text">
              <h4>99.99% Uptime</h4>
              <p>Enterprise SLA Guarantees</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          ref={ctaRef}
          className={`why-xaivon-cta reveal ${ctaVisible ? 'visible' : ''}`}
        >
          <Link to="/contact" className="btn btn-primary btn-lg" id="why-xaivon-cta-btn">
            Request Assessment
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M4.167 10H15.833M15.833 10L10.833 5M15.833 10L10.833 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
