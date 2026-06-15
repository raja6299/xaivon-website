import { useScrollReveal } from '../hooks/useScrollReveal';
import './LogisticsSection.css';

const services = [
  {
    title: 'Automated Freight Dispatch',
    description: 'Streamline load matching. Systems execute optimal route planning and systematic load assignment without manual intervention.',
  },
  {
    title: 'AI Document Processing',
    description: 'Automate BOL, POD, and invoice extraction. Reduce manual data entry and systematically shorten Days Sales Outstanding (DSO).',
  },
  {
    title: 'Intelligent Customer Support',
    description: 'Provide shippers and carriers with 24/7 real-time tracking updates and proactive issue resolution, without increasing headcount.',
  },
  {
    title: 'Sales Pipeline Automation',
    description: 'Automate prospecting, lead qualification, and CRM workflows to capture and convert high-ticket enterprise shippers.',
  },
  {
    title: 'Dynamic Quote Processing',
    description: 'Rapidly analyze market rates and capacity to deliver accurate freight quotes, increasing win rates without margin erosion.',
  },
  {
    title: 'Proactive Exception Management',
    description: 'Real-time AI monitoring detects delays and route deviations instantly, alerting dispatchers before customers even notice.',
  },
  {
    title: 'Carrier Network Optimization',
    description: 'Automate carrier onboarding, compliance verification, and performance tracking to build a highly reliable, high-margin asset network.',
  },
  {
    title: 'Enterprise Operational Analytics',
    description: 'Transform fragmented TMS and CRM data into unified, actionable insights that drive margin expansion and structural efficiency.',
  },
];

export default function LogisticsSection() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.05 });

  return (
    <section className="logistics-section section" id="logistics">
      {/* Removed background orbs and route lines for enterprise cleanliness */}

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
            Purpose-built infrastructure for freight brokers, carriers, 3PLs, and
            logistics companies. Improve visibility, streamline dispatch workflows, and
            increase operational scalability.
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
