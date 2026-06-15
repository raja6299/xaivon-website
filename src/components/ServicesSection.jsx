import { useScrollReveal } from '../hooks/useScrollReveal';
import './ServicesSection.css';

const services = [
  {
    title: 'Reduce Operational Costs',
    description:
      'Streamline resource allocation and drastically reduce manual overhead with intelligent systems that run 24/7 without fatigue.',
    features: [
      'Overhead Reduction',
      'Resource Optimization',
      'Margin Expansion',
      'Predictable Scaling',
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: 'Eliminate Manual Work',
    description:
      'Achieve near-zero error rates by automatically extracting, classifying, and syncing data across your TMS, CRM, and accounting software.',
    features: [
      'Zero Data Entry',
      'Automated Extraction',
      'Cross-Platform Sync',
      'Error Elimination',
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
      </svg>
    ),
  },
  {
    title: 'Improve Response Times',
    description:
      'Provide instant, context-aware responses to customers, carriers, and shippers at any time of day, ensuring you win more freight.',
    features: [
      'Instant Quoting',
      '24/7 Availability',
      'Automated Updates',
      'Exception Handling',
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: 'Scale Without Hiring',
    description:
      'Handle massive volume spikes in quoting, dispatching, and tracking without the need to linearly increase your back-office headcount.',
    features: [
      'Volume Resilience',
      'Automated Dispatch',
      'Capacity Sourcing',
      'Elastic Operations',
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    title: 'Capture More Leads',
    description:
      'Ensure no opportunity slips through the cracks with automated prospect engagement, qualification, and targeted CRM follow-ups.',
    features: [
      'Lead Qualification',
      'Automated Nurture',
      'Pipeline Velocity',
      'Conversion Tracking',
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    title: 'Increase Efficiency',
    description:
      'Orchestrate complex, multi-step business logic into seamless, automated pipelines from first touch to final delivery.',
    features: [
      'Process Mapping',
      'Logic Automation',
      'Bottleneck Removal',
      'Continuous Uptime',
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: 'Accelerate Cash Flow',
    description:
      'Automate invoicing, rate confirmations, POD processing, and payment reminders to significantly reduce Days Sales Outstanding (DSO).',
    features: [
      'Automated Invoicing',
      'POD Verification',
      'DSO Reduction',
      'Payment Reminders',
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
        <line x1="6" y1="16" x2="10" y2="16" />
      </svg>
    ),
  },
  {
    title: 'Unify Fragmented Systems',
    description:
      'Connect siloed software tools (TMS, CRM, ERP) to create a single source of truth and eliminate redundant work.',
    features: [
      'API Integrations',
      'System Syncing',
      'Data Consolidation',
      'Architecture Design',
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.05 });

  return (
    <section className="services-section section" id="services" ref={sectionRef}>
      {/* Background ambient glow */}
      <div className="services-section__bg-glow" aria-hidden="true" />

      <div className="container-wide">
        {/* Section Header */}
        <div className={`section-header reveal ${isVisible ? 'visible' : ''}`}>
          <span className="badge">
            <span className="badge-dot" />
            Our Services
          </span>
          <h2>
            Enterprise AI Infrastructure <span className="text-gradient-cyan">That Scales</span>
          </h2>
          <p>
            We build intelligent operational backbones that eliminate manual work, reduce costs, and allow your business to scale without adding complexity.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-section__grid">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`services-section__card glass-card reveal-scale ${
                isVisible ? 'visible' : ''
              } delay-${index + 1}`}
              id={`service-card-${index + 1}`}
            >
              {/* Top gradient accent line */}
              <div
                className={`services-section__card-accent ${
                  index % 2 === 0
                    ? 'services-section__card-accent--cyan'
                    : 'services-section__card-accent--gold'
                }`}
                aria-hidden="true"
              />

              {/* Icon */}
              <div className="services-section__icon-wrap">
                {service.icon}
              </div>

              {/* Content */}
              <h4 className="services-section__title">{service.title}</h4>
              <p className="services-section__desc">{service.description}</p>

              {/* Features */}
              <ul className="services-section__features">
                {service.features.map((feature) => (
                  <li key={feature} className="services-section__feature">
                    <span className="services-section__feature-dot" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
