import { useScrollReveal } from '../hooks/useScrollReveal';
import './HowItWorks.css';

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description: 'A focused discussion to understand your business model, current bottlenecks, and immediate automation goals.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Workflow Audit',
    description: 'We map your existing operations, identify friction points, and deliver a comprehensive ROI projection.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'AI System Design',
    description: 'Our engineers architect a secure, custom infrastructure plan tailored specifically to your data ecosystem.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Development & Integration',
    description: 'We build your custom models, set up APIs, and seamlessly integrate the AI with your CRM, TMS, or ERP.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Deployment',
    description: 'A phased, controlled rollout ensuring zero disruption to your daily business operations and staff workflows.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
        <line x1="6" y1="16" x2="10" y2="16" />
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Optimization & Support',
    description: 'Continuous monitoring, model fine-tuning, and dedicated enterprise support to ensure peak performance.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  }
];

export default function HowItWorks() {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section className="how-it-works section" id="process" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className={`section-header reveal ${isVisible ? 'visible' : ''}`}>
          <span className="badge">
            <span className="badge-dot"></span>
            Implementation Process
          </span>
          <h2>
            How We Deliver <span className="text-gradient-premium">Results</span>
          </h2>
          <p>
            Enterprise software deployments shouldn't be chaotic. We follow a strict 6-step engineering framework to ensure seamless integration.
          </p>
        </div>

        {/* Steps */}
        <div className="steps-container">
          {/* Vertical line connecting steps (hidden on mobile) */}
          <div className="steps-vertical-line" aria-hidden="true" />

          {steps.map((step, index) => {
            // Setup alternating layout based on even/odd index
            const isEven = index % 2 === 0;
            const animationClass = isEven ? 'reveal-left' : 'reveal-right';

            return (
              <div
                key={step.number}
                className={`step-row ${isVisible ? 'visible' : ''} delay-${index + 1}`}
              >
                {/* Desktop: Content blocks alternate sides. 
                    If even, content is left, empty space is right. */}
                <div className={`step-content-box ${isEven ? 'step-box-left' : 'step-box-right'}`}>
                  <div className={`step-card glass-card ${animationClass} ${isVisible ? 'visible' : ''}`}>
                    <div className="step-card-header">
                      <div className="step-icon-wrap">{step.icon}</div>
                      <span className="step-number-watermark">{step.number}</span>
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>

                {/* Center Node */}
                <div className="step-center-node" aria-hidden="true">
                  <div className="step-node-inner" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
