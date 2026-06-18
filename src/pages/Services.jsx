import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import './Services.css';

/* ── SVG Icon components for each service ── */
function IconAutomation() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="svc-icon-svg">
      <rect x="8" y="18" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="2" />
      <rect x="48" y="18" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="2" />
      <rect x="28" y="46" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="2" />
      <path d="M32 30H48" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
      <path d="M20 42V50C20 50 20 58 28 58" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
      <path d="M60 42V50C60 50 60 58 52 58" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
      <circle cx="40" cy="10" r="3" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

function IconChatbot() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="svc-icon-svg">
      <rect x="12" y="12" width="56" height="42" rx="8" stroke="currentColor" strokeWidth="2" />
      <path d="M24 60L32 54H12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="28" cy="33" r="3" fill="currentColor" />
      <circle cx="40" cy="33" r="3" fill="currentColor" />
      <circle cx="52" cy="33" r="3" fill="currentColor" />
      <path d="M22 24H58" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <path d="M22 42H58" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
    </svg>
  );
}

function IconVoice() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="svc-icon-svg">
      <rect x="30" y="12" width="20" height="36" rx="10" stroke="currentColor" strokeWidth="2" />
      <path d="M20 38C20 49.046 28.954 58 40 58C51.046 58 60 49.046 60 38" stroke="currentColor" strokeWidth="2" />
      <line x1="40" y1="58" x2="40" y2="68" stroke="currentColor" strokeWidth="2" />
      <line x1="30" y1="68" x2="50" y2="68" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M34 28H46" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <path d="M34 34H46" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <circle cx="62" cy="22" r="2" fill="currentColor" opacity="0.4" />
      <circle cx="66" cy="18" r="1.5" fill="currentColor" opacity="0.25" />
      <circle cx="18" cy="22" r="2" fill="currentColor" opacity="0.4" />
      <circle cx="14" cy="18" r="1.5" fill="currentColor" opacity="0.25" />
    </svg>
  );
}

function IconCRM() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="svc-icon-svg">
      <circle cx="40" cy="24" r="10" stroke="currentColor" strokeWidth="2" />
      <path d="M20 60C20 48.954 28.954 40 40 40C51.046 40 60 48.954 60 60" stroke="currentColor" strokeWidth="2" />
      <path d="M52 20L62 16" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <rect x="58" y="10" width="14" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <path d="M62 15H69" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <path d="M62 18H67" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <circle cx="56" cy="50" r="6" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.5" />
      <path d="M54 50L56 52L59 48" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    </svg>
  );
}

function IconLeadManagement() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="svc-icon-svg">
      <path d="M16 60L16 24C16 20.686 18.686 18 22 18H58C61.314 18 64 20.686 64 24V60C64 63.314 61.314 66 58 66H22C18.686 66 16 63.314 16 60Z" stroke="currentColor" strokeWidth="2" />
      <path d="M16 30H64" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="31" cy="24" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="38" cy="24" r="2" fill="currentColor" opacity="0.5" />
      <rect x="24" y="38" width="32" height="4" rx="2" fill="currentColor" opacity="0.3" />
      <rect x="24" y="46" width="24" height="4" rx="2" fill="currentColor" opacity="0.2" />
      <rect x="24" y="54" width="28" height="4" rx="2" fill="currentColor" opacity="0.15" />
      <path d="M50 44L54 48L62 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconWebDev() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="svc-icon-svg">
      <rect x="8" y="14" width="64" height="44" rx="6" stroke="currentColor" strokeWidth="2" />
      <path d="M8 26H72" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="20" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="23" cy="20" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="30" cy="20" r="2" fill="currentColor" opacity="0.5" />
      <line x1="30" y1="58" x2="50" y2="58" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="40" y1="58" x2="40" y2="66" stroke="currentColor" strokeWidth="2" />
      <line x1="28" y1="66" x2="52" y2="66" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M28 36L20 42L28 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
      <path d="M52 36L60 42L52 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
      <path d="M44 32L36 52" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

function IconBPA() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="svc-icon-svg">
      <rect x="10" y="10" width="20" height="26" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M15 18H25" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <path d="M15 22H22" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <path d="M15 26H24" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <path d="M15 30H20" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
      <path d="M30 23H38" stroke="currentColor" strokeWidth="2" strokeDasharray="3 2" />
      <polygon points="38,20 44,23 38,26" fill="currentColor" opacity="0.6" />
      <circle cx="54" cy="23" r="10" stroke="currentColor" strokeWidth="2" />
      <path d="M50 23L53 26L59 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M54 33V44" stroke="currentColor" strokeWidth="2" strokeDasharray="3 2" />
      <polygon points="51,44 54,50 57,44" fill="currentColor" opacity="0.6" />
      <rect x="40" y="50" width="28" height="18" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M46 56H62" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <path d="M46 60H58" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <path d="M46 64H55" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
    </svg>
  );
}

function IconWorkflow() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="svc-icon-svg">
      <circle cx="16" cy="20" r="8" stroke="currentColor" strokeWidth="2" />
      <circle cx="64" cy="20" r="8" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="60" r="8" stroke="currentColor" strokeWidth="2" />
      <circle cx="64" cy="60" r="8" stroke="currentColor" strokeWidth="2" />
      <rect x="30" y="30" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="2" />
      <path d="M24 16L30 30" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
      <path d="M56 16L50 30" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
      <path d="M24 64L30 50" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
      <path d="M56 64L50 50" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
      <path d="M36 38L40 42L44 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="20" r="3" fill="currentColor" opacity="0.3" />
      <circle cx="64" cy="20" r="3" fill="currentColor" opacity="0.3" />
      <circle cx="16" cy="60" r="3" fill="currentColor" opacity="0.3" />
      <circle cx="64" cy="60" r="3" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="svc-check-icon">
      <circle cx="10" cy="10" r="9" stroke="var(--color-secondary)" strokeWidth="1.5" opacity="0.3" />
      <path d="M6 10L9 13L14 7" stroke="var(--color-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Service Data ── */
const SERVICES = [
  {
    id: 'ai-automation',
    number: '01',
    title: 'AI Automation',
    overview: 'Intelligent automation systems that handle repetitive tasks, streamline workflows, and optimize business processes without human intervention.',
    benefits: [
      'Reduce manual work by 90%',
      'Eliminate human errors',
      'Scale operations without hiring',
      '24/7 automated processing',
    ],
    useCases: ['Email automation', 'Data processing', 'Report generation', 'Scheduling'],
    Icon: IconAutomation,
  },
  {
    id: 'ai-chatbots',
    number: '02',
    title: 'AI Chatbots',
    overview: 'Deploy AI-powered chatbots that engage visitors, qualify leads, book appointments, and provide instant customer support across all channels.',
    benefits: [
      'Instant response times',
      '24/7 availability',
      'Higher conversion rates',
      'Reduced support costs',
    ],
    useCases: ['Website chat', 'Lead qualification', 'FAQ automation', 'Appointment booking'],
    Icon: IconChatbot,
  },
  {
    id: 'ai-voice-agents',
    number: '03',
    title: 'AI Voice Agents',
    overview: 'Human-like AI voice agents that handle phone calls, schedule appointments, qualify prospects, and provide support with natural conversation.',
    benefits: [
      'Handle unlimited calls',
      'Natural conversation',
      'No hold times',
      'Perfect recall',
    ],
    useCases: ['Inbound support', 'Outbound sales', 'Appointment scheduling', 'Dispatch calls'],
    Icon: IconVoice,
  },
  {
    id: 'crm-automation',
    number: '04',
    title: 'CRM Automation',
    overview: 'Automate your entire customer relationship pipeline from initial contact through conversion with intelligent CRM workflows.',
    benefits: [
      'Automated follow-ups',
      'Lead scoring',
      'Pipeline visibility',
      'Faster close rates',
    ],
    useCases: ['Lead nurturing', 'Sales pipelines', 'Customer onboarding', 'Retention campaigns'],
    Icon: IconCRM,
  },
  {
    id: 'lead-management',
    number: '05',
    title: 'Lead Management Systems',
    overview: 'Capture, qualify, score, and nurture leads automatically with AI-powered lead management infrastructure.',
    benefits: [
      'Higher quality leads',
      'Automated qualification',
      'Faster response',
      'Better conversion',
    ],
    useCases: ['Lead capture forms', 'Auto-qualification', 'Drip campaigns', 'Attribution tracking'],
    Icon: IconLeadManagement,
  },
  {
    id: 'website-development',
    number: '06',
    title: 'Website Development',
    overview: 'Premium, conversion-optimized websites built with modern design principles and integrated with your AI automation stack.',
    benefits: [
      'Higher conversion rates',
      'Professional brand image',
      'Mobile optimized',
      'SEO ready',
    ],
    useCases: ['Landing pages', 'Corporate sites', 'Sales funnels', 'Booking platforms'],
    Icon: IconWebDev,
  },
  {
    id: 'business-process-automation',
    number: '07',
    title: 'Business Process Automation',
    overview: 'End-to-end automation of complex business processes including document handling, reporting, compliance, and data management.',
    benefits: [
      'Faster processing',
      'Reduced errors',
      'Better compliance',
      'Cost savings',
    ],
    useCases: ['Invoice processing', 'Compliance checks', 'Data entry', 'Report generation'],
    Icon: IconBPA,
  },
  {
    id: 'workflow-automation',
    number: '08',
    title: 'Workflow Automation',
    overview: 'Connect your entire tech stack and create automated multi-step workflows that eliminate manual handoffs and bottlenecks.',
    benefits: [
      'Seamless integration',
      'Faster execution',
      'Better visibility',
      'Reduced bottlenecks',
    ],
    useCases: ['Multi-tool workflows', 'Notification systems', 'Approval processes', 'Data sync'],
    Icon: IconWorkflow,
  },
];

/* ── Individual Service Section ── */
function ServiceSection({ service, index }) {
  const [contentRef, contentVisible] = useScrollReveal({ threshold: 0.15 });
  const [visualRef, visualVisible] = useScrollReveal({ threshold: 0.15 });
  const isReversed = index % 2 !== 0;

  return (
    <>
      {index > 0 && (
        <div className="container">
          <div className="section-divider-accent" />
        </div>
      )}
      <section
        className={`svc-detail section ${isReversed ? 'svc-detail--reversed' : ''}`}
        id={`service-${service.id}`}
      >
        <div className="container">
          <div className="svc-detail__grid">
            {/* Content Column */}
            <div
              ref={contentRef}
              className={`svc-detail__content ${isReversed ? 'reveal-right' : 'reveal-left'} ${contentVisible ? 'visible' : ''}`}
            >
              <span className="svc-detail__number">{service.number}</span>
              <h2 className="svc-detail__title">
                <span className="text-gradient-cyan">{service.title}</span>
              </h2>
              <p className="svc-detail__overview">{service.overview}</p>

              <div className="svc-detail__benefits">
                <h4 className="svc-detail__subtitle">Key Benefits</h4>
                <ul className="svc-detail__benefits-list">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="svc-detail__benefit-item">
                      <CheckIcon />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="svc-detail__usecases">
                <h4 className="svc-detail__subtitle">Use Cases</h4>
                <div className="svc-detail__usecases-grid">
                  {service.useCases.map((useCase) => (
                    <div key={useCase} className="svc-detail__usecase-item">
                      <span className="svc-detail__usecase-dot" />
                      {useCase}
                    </div>
                  ))}
                </div>
              </div>

              <Link to="/contact" className="svc-detail__cta" id={`cta-${service.id}`}>
                Get Started
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M4 9H14M14 9L10 5M14 9L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            {/* Visual Column */}
            <div
              ref={visualRef}
              className={`svc-detail__visual ${isReversed ? 'reveal-left' : 'reveal-right'} ${visualVisible ? 'visible' : ''}`}
            >
              <div className="svc-detail__visual-card glass-card">
                <div className="svc-detail__visual-bg" />
                <div className="svc-detail__visual-icon">
                  <service.Icon />
                </div>
                <div className="svc-detail__visual-label">{service.title}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Main Page Component ── */
export default function Services() {

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
  const [ctaRef, ctaVisible] = useScrollReveal({ threshold: 0.2 });

  useEffect(() => {
    document.title = 'Services — XAIVON | AI Solutions For Modern Businesses';
  }, []);

  return (
    <div className="services-page">
      {/* ─── Hero ─── */}
      <section className="svc-hero" id="services-hero">
        <div className="svc-hero__orb svc-hero__orb--1" />
        <div className="svc-hero__orb svc-hero__orb--2" />
        <div className="svc-hero__orb svc-hero__orb--3" />

        <div className="container" ref={heroRef}>
          <div className={`svc-hero__content reveal ${heroVisible ? 'visible' : ''}`}>
            <span className="badge">
              <span className="badge-dot" />
              Our Services
            </span>
            <h1 className="svc-hero__title">
              <span className="text-gradient-cyan">AI Solutions</span> For Modern Businesses
            </h1>
            <p className="svc-hero__subtitle">
              Comprehensive AI automation services designed to transform operations, reduce costs, and accelerate growth for businesses of every size.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Service Detail Sections ─── */}
      {SERVICES.map((service, index) => (
        <ServiceSection key={service.id} service={service} index={index} />
      ))}

      {/* ─── Bottom CTA ─── */}
      <section className="svc-bottom-cta section-alt" id="services-cta">
        <div className="svc-bottom-cta__orb svc-bottom-cta__orb--1" />
        <div className="svc-bottom-cta__orb svc-bottom-cta__orb--2" />

        <div className="container" ref={ctaRef}>
          <div className={`svc-bottom-cta__inner reveal-scale ${ctaVisible ? 'visible' : ''}`}>
            <h2 className="svc-bottom-cta__title">Ready to Transform Your Operations?</h2>
            <p className="svc-bottom-cta__subtitle">
              Book a free strategy call to discuss your specific automation needs.
            </p>
            <div className="svc-bottom-cta__actions">
              <Link to="/contact" className="btn btn-primary btn-lg" id="services-book-call">
                Book Strategy Call
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-lg" id="services-contact-us">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
