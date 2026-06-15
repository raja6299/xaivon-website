import { useScrollReveal } from '../hooks/useScrollReveal';
import './LogisticsSection.css';

const services = [
  {
    title: 'Freight Broker Automation',
    description: 'Automate quote processing, carrier matching, and load booking with intelligent AI agents that work around the clock.',
  },
  {
    title: 'Dispatch Automation',
    description: 'AI-powered dispatch systems for optimal route planning, load assignment, and real-time fleet coordination.',
  },
  {
    title: 'Driver Communication',
    description: 'Automated driver updates, check-ins, and status tracking — keeping everyone in sync without manual calls.',
  },
  {
    title: 'Shipment Tracking',
    description: 'Real-time AI monitoring of shipments and proactive alerts for delays, exceptions, and delivery milestones.',
  },
  {
    title: 'Customer Support AI',
    description: '24/7 AI agents handling customer inquiries, shipment updates, and issue resolution instantly.',
  },
  {
    title: 'Lead Generation',
    description: 'Automated prospecting and lead qualification for freight — identify, engage, and convert high-value shippers.',
  },
  {
    title: 'Document Automation',
    description: 'BOL, POD, and invoice processing with AI extraction — eliminate manual data entry and reduce errors to zero.',
  },
  {
    title: 'CRM Workflows',
    description: 'Automated sales pipelines built for logistics operations — from first touch to closed deal, fully orchestrated.',
  },
];

export default function LogisticsSection() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.05 });

  return (
    <section className="logistics-section section" id="logistics">
      {/* Background accents */}
      <div className="logistics-bg-orb" aria-hidden="true" />
      <div className="logistics-route-lines" aria-hidden="true">
        <svg viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M-50 120 Q 200 80, 400 200 T 800 150 T 1200 250 T 1500 180"
            stroke="rgba(212, 175, 55, 0.07)"
            strokeWidth="1.5"
            strokeDasharray="8 12"
            className="logistics-route-path logistics-route-path-1"
          />
          <path
            d="M-50 300 Q 300 250, 500 350 T 900 280 T 1300 380 T 1550 300"
            stroke="rgba(212, 175, 55, 0.05)"
            strokeWidth="1"
            strokeDasharray="6 10"
            className="logistics-route-path logistics-route-path-2"
          />
          <path
            d="M-50 450 Q 250 400, 450 480 T 850 420 T 1250 500 T 1550 440"
            stroke="rgba(212, 175, 55, 0.04)"
            strokeWidth="1"
            strokeDasharray="4 8"
            className="logistics-route-path logistics-route-path-3"
          />
          <circle cx="400" cy="200" r="3" fill="rgba(212, 175, 55, 0.12)" className="logistics-route-node" />
          <circle cx="800" cy="150" r="3" fill="rgba(212, 175, 55, 0.10)" className="logistics-route-node" />
          <circle cx="1200" cy="250" r="3" fill="rgba(212, 175, 55, 0.08)" className="logistics-route-node" />
          <circle cx="500" cy="350" r="2.5" fill="rgba(212, 175, 55, 0.10)" className="logistics-route-node" />
          <circle cx="900" cy="280" r="2.5" fill="rgba(212, 175, 55, 0.08)" className="logistics-route-node" />
          <circle cx="1300" cy="380" r="2.5" fill="rgba(212, 175, 55, 0.06)" className="logistics-route-node" />
        </svg>
      </div>

      <div className="container">
        <div
          ref={headerRef}
          className={`section-header reveal ${headerVisible ? 'visible' : ''}`}
        >
          <span className="badge badge-gold">
            <span className="badge-dot" />
            Primary Industry Focus
          </span>
          <h2>
            AI Solutions For{' '}
            <span className="text-gradient-gold">Logistics &amp; Freight</span>{' '}
            Companies
          </h2>
          <p>
            Purpose-built AI automation for freight brokers, carriers, 3PLs, and
            logistics companies. Reduce response times, automate dispatch, and
            scale operations.
          </p>
        </div>

        <div
          ref={gridRef}
          className="logistics-grid"
        >
          {services.map((service, index) => (
            <article
              key={index}
              className={`logistics-card reveal ${gridVisible ? 'visible' : ''} delay-${index + 1}`}
              id={`logistics-card-${index}`}
            >
              <div className="logistics-card-border" aria-hidden="true" />
              <div className="logistics-card-content">
                <div className="logistics-card-icon" aria-hidden="true">
                  <span className="logistics-card-dot" />
                </div>
                <h3 className="logistics-card-title">{service.title}</h3>
                <p className="logistics-card-desc">{service.description}</p>
              </div>
              <div className="logistics-card-shimmer" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
