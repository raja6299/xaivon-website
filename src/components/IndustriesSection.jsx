import { useStaggerAnimation } from '../hooks/useScrollAnimation';
import './IndustriesSection.css';

const INDUSTRIES = [
  {
    title: 'Freight Brokers',
    description: 'Automate quoting, carrier sourcing, and dispatch workflows to drastically increase volume capacity.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
        <line x1="6" y1="16" x2="10" y2="16" />
      </svg>
    )
  },
  {
    title: 'Logistics Companies',
    description: 'Eliminate manual data entry and synchronize information seamlessly across your TMS, CRM, and accounting software.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    )
  },
  {
    title: 'Transportation',
    description: 'Optimize route planning, track fleets in real-time, and manage driver communications autonomously.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
      </svg>
    )
  },
  {
    title: 'Dispatch Teams',
    description: 'Deploy AI Voice Agents to handle 24/7 check calls and exception handling without manual intervention.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    )
  },
  {
    title: 'Warehousing',
    description: 'Intelligent inventory forecasting, automated POD processing, and supply chain visibility.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    )
  },
  {
    title: 'Professional Services',
    description: 'Scale client onboarding, document processing, and administrative tasks using reliable AI infrastructure.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  }
];

export default function IndustriesSection() {
  const ref = useStaggerAnimation('.scroll-fade-in');

  return (
    <section className="industries-section section" id="industries">
      <div className="container" ref={ref}>
        {/* Header */}
        <div className="section-header scroll-fade-in">
          <span className="badge">
            <span className="badge-dot"></span>
            Who We Serve
          </span>
          <h2>
            Infrastructure Built For <span className="text-gradient-premium">Complex Operations</span>
          </h2>
          <p>
            We design high-leverage AI systems tailored to environments where speed, accuracy, and volume are critical to the bottom line.
          </p>
        </div>

        {/* Grid */}
        <div className="industries-grid">
          {INDUSTRIES.map((industry, index) => (
            <div key={index} className="industry-card glass-card scroll-fade-in">
              <div className="industry-icon-wrapper">
                {industry.icon}
              </div>
              <h3 className="industry-title">{industry.title}</h3>
              <p className="industry-desc">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
