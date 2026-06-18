import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './LogisticsSolutions.css';

const SOLUTIONS = [
  {
    title: 'Freight Broker Automation',
    desc: 'Automate the entire freight brokerage workflow — from quote requests to carrier matching, rate negotiation, and load booking.',
    features: ['Quote Processing', 'Carrier Matching', 'Rate Optimization', 'Load Booking'],
  },
  {
    title: 'Dispatch Automation',
    desc: 'AI-powered dispatch systems that optimize routes, assign drivers, and manage exceptions in real-time.',
    features: ['Route Optimization', 'Driver Assignment', 'Real-time Tracking', 'Exception Handling'],
  },
  {
    title: 'AI Voice Dispatch',
    desc: 'AI voice agents that handle dispatch calls, driver check-ins, and customer updates with natural conversation.',
    features: ['Driver Check-ins', 'Customer Updates', 'Scheduling', 'Status Calls'],
  },
  {
    title: 'Driver Communication',
    desc: 'Automated systems for driver updates, delivery confirmations, ETA notifications, and compliance reminders.',
    features: ['Status Updates', 'ETA Notifications', 'Compliance Reminders', 'Multi-channel'],
  },
  {
    title: 'Customer Support AI',
    desc: '24/7 AI agents handling shipper and carrier inquiries, shipment tracking, and issue resolution.',
    features: ['Shipment Tracking', 'Claims Processing', 'Rate Inquiries', 'Issue Resolution'],
  },
  {
    title: 'Lead Generation & Sales',
    desc: 'Automated prospecting, outreach, and lead qualification built for freight and logistics sales teams.',
    features: ['Automated Prospecting', 'Lead Scoring', 'Follow-up Sequences', 'Pipeline Management'],
  },
  {
    title: 'Document Automation',
    desc: 'AI-powered processing for BOLs, PODs, rate confirmations, invoices, and compliance paperwork.',
    features: ['BOL Processing', 'POD Verification', 'Invoice Extraction', 'Compliance Filing'],
  },
  {
    title: 'Operations Dashboard',
    desc: 'Custom AI-powered dashboards providing real-time visibility into operations, KPIs, and business intelligence.',
    features: ['Real-time KPIs', 'Performance Metrics', 'Cost Analysis', 'Trend Reporting'],
  },
];

const ADVANTAGES = [
  {
    title: 'Built For Logistics',
    desc: 'Every solution is purpose-built for the freight and logistics industry. We understand your operations.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 14h12V4H1z" /><path d="M13 8h4l3 4v6h-3" /><path d="M1 18h1" /><circle cx="6" cy="18" r="2" /><circle cx="18" cy="18" r="2" /><path d="M10 18h5" />
      </svg>
    ),
  },
  {
    title: 'Rapid Deployment',
    desc: 'Most solutions deployed within 2–4 weeks. Start seeing operational improvements fast.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: 'Measurable ROI',
    desc: 'Track every operational improvement with detailed reporting and analytics on real business impact.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" />
      </svg>
    ),
  },
];

export default function LogisticsSolutions() {

  useEffect(() => {
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', 'https://xaivon.com' + window.location.pathname);
    return () => {
      if (link && link.parentNode) link.parentNode.removeChild(link);
    };
  }, []);

  const [heroRef, heroVisible] = useScrollReveal({ threshold: 0.1 });
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.05 });
  const [advRef, advVisible] = useScrollReveal({ threshold: 0.1 });
  const [ctaRef, ctaVisible] = useScrollReveal({ threshold: 0.2 });

  useEffect(() => {
    document.title = 'Logistics & Freight AI Solutions — XAIVON';
  }, []);

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="logistics-hero" ref={heroRef}>
        <div className="logistics-hero-orb-1" aria-hidden="true" />
        <div className="logistics-hero-orb-2" aria-hidden="true" />
        <div className={`logistics-hero-content container ${heroVisible ? 'visible' : ''}`}>
          <span className="badge badge-gold">
            <span className="badge-dot"></span>
            Industry Specialization
          </span>
          <h1>
            AI Automation For{' '}
            <span className="text-gradient-gold">Logistics & Freight</span>
          </h1>
          <p className="logistics-hero-sub">
            Purpose-built AI systems for freight brokers, carriers, 3PLs, and logistics companies.
            Automate operations, reduce response times, and scale your business.
          </p>
          <div className="logistics-hero-btns">
            <Link to="/contact" className="btn btn-gold btn-lg" id="logistics-hero-cta">
              Book Strategy Call
            </Link>
            <a href="#solutions" className="btn btn-secondary btn-lg">
              See Solutions
            </a>
          </div>
        </div>
      </section>

      {/* ── Solutions Grid ── */}
      <section className="section" id="solutions" ref={gridRef}>
        <div className="container">
          <div className="section-header">
            <span className="badge badge-gold">
              <span className="badge-dot"></span>
              Solutions
            </span>
            <h2>Comprehensive Logistics AI Solutions</h2>
            <p>End-to-end automation built specifically for freight and logistics operations.</p>
          </div>

          <div className="logistics-solutions-grid">
            {SOLUTIONS.map((sol, i) => (
              <div
                key={sol.title}
                className={`logistics-solution-card reveal ${gridVisible ? 'visible' : ''} delay-${(i % 4) + 1}`}
              >
                <div className="logistics-solution-dot" aria-hidden="true" />
                <h3>{sol.title}</h3>
                <p>{sol.desc}</p>
                <ul className="logistics-solution-features">
                  {sol.features.map((f) => (
                    <li key={f}>
                      <span className="logistics-feature-bullet" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Advantages ── */}
      <section className="section-alt" ref={advRef}>
        <div className="container">
          <div className="section-header">
            <h2>Why Logistics Companies Choose XAIVON</h2>
          </div>
          <div className="logistics-advantages">
            {ADVANTAGES.map((adv, i) => (
              <div
                key={adv.title}
                className={`logistics-advantage-card glass-card reveal ${advVisible ? 'visible' : ''} delay-${i + 1}`}
              >
                <div className="logistics-advantage-icon">{adv.icon}</div>
                <h3>{adv.title}</h3>
                <p>{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="logistics-cta-section section" ref={ctaRef}>
        <div className={`container logistics-cta-inner ${ctaVisible ? 'visible' : ''}`}>
          <h2>Transform Your Logistics Operations</h2>
          <p>Book a free strategy call to see how AI can automate your freight business.</p>
          <Link to="/contact" className="btn btn-gold btn-lg" id="logistics-bottom-cta">
            Book Strategy Call
          </Link>
          <span className="logistics-cta-trust">
            Free consultation · No obligation · Results-driven approach
          </span>
        </div>
      </section>
    </>
  );
}
