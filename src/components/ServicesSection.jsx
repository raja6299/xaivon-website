import { useScrollReveal } from '../hooks/useScrollReveal';
import './ServicesSection.css';

const services = [
  {
    title: 'Logistics & Freight Automation',
    description:
      'Scale your brokerage capacity without hiring. We deploy QuoteFlow AI, automated email parsing, and intelligent dispatch workflows that integrate directly with your TMS.',
    features: [
      'QuoteFlow AI',
      'Dispatch Automation',
      'Email Parsing',
      'TMS Integrations',
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
    title: 'AI Business Automation',
    description:
      'Reduce manual work and increase efficiency. We systematically extract, classify, and sync data across your CRM, accounting software, and operational databases.',
    features: [
      'Workflow Automation',
      'CRM Integration',
      'Data Synchronization',
      'Process Standardization',
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: '24/7 Lead Capture & Support',
    description:
      'Provide instant responses at any time of day. Our AI Chatbots and Voice Agents handle inbound inquiries, qualify leads, and follow up autonomously.',
    features: [
      'AI Voice Dispatchers',
      'Lead Qualification',
      'Instant Responses',
      'Automated Nurture',
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: 'Premium Website Development',
    description:
      'Your digital infrastructure needs to convert. We build high-performance, SEO-optimized, luxury websites designed to generate and capture high-ticket B2B leads.',
    features: [
      'Conversion Optimization',
      'Premium UI/UX',
      'Advanced SEO',
      'High-Speed Architecture',
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.05 });

  return (
    <section className="services-section section" id="services" ref={sectionRef}>

      <div className="container-wide">
        {/* Section Header */}
        <div className={`section-header reveal ${isVisible ? 'visible' : ''}`}>
          <span className="badge">
            <span className="badge-dot" />
            Our Services
          </span>
          <h2>
            Enterprise AI Infrastructure <span className="text-gradient-premium">That Scales</span>
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
