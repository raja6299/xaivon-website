import { useScrollReveal } from '../hooks/useScrollReveal';
import './TrustBar.css';

const TRUST_ITEMS = [
  {
    label: 'AI Automation',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-secondary)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
        <path d="M9 21h6" />
        <path d="M10 17v4" />
        <path d="M14 17v4" />
        <path d="M12 2v3" />
        <circle cx="12" cy="9" r="2" />
        <path d="M8.5 6.5L10 8" />
        <path d="M15.5 6.5L14 8" />
      </svg>
    ),
  },
  {
    label: 'Business Systems',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-secondary)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="10" width="18" height="12" rx="1" />
        <path d="M7 10V7a5 5 0 0 1 10 0v3" />
        <path d="M3 14h18" />
        <path d="M9 14v8" />
        <path d="M15 14v8" />
        <path d="M7 3h10" />
        <line x1="12" y1="3" x2="12" y2="7" />
      </svg>
    ),
  },
  {
    label: 'Logistics Automation',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-secondary)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M1 14h12V4H1z" />
        <path d="M13 8h4l3 4v6h-3" />
        <path d="M1 18h1" />
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
        <path d="M10 18h5" />
      </svg>
    ),
  },
  {
    label: 'CRM Solutions',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-secondary)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: 'Lead Management',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-secondary)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
        <line x1="12" y1="2" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="2" y1="12" x2="6" y2="12" />
        <line x1="18" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
  {
    label: 'Enterprise Workflows',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-secondary)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="6" height="5" rx="1" />
        <rect x="16" y="4" width="6" height="5" rx="1" />
        <rect x="9" y="15" width="6" height="5" rx="1" />
        <path d="M5 9v2a2 2 0 0 0 2 2h4v2" />
        <path d="M19 9v2a2 2 0 0 1-2 2h-4v2" />
      </svg>
    ),
  },
];

export default function TrustBar() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.15 });

  return (
    <section className="trustbar" ref={sectionRef} id="trust-bar">
      <div className="section-divider-accent" />

      <div className="trustbar-inner container-wide">
        <div className={`early-partner-banner reveal ${isVisible ? 'visible' : ''}`} style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', letterSpacing: '0.5px' }}>
            <span style={{ color: 'var(--color-luxury)', marginRight: '8px' }}>✦</span>
            Currently onboarding a limited number of businesses seeking AI-powered operational transformation.
            <span style={{ color: 'var(--color-luxury)', marginLeft: '8px' }}>✦</span>
          </p>
        </div>
        <div className="trustbar-track">
          {TRUST_ITEMS.map((item, index) => (
            <div
              className={`trustbar-card reveal-scale ${isVisible ? 'visible' : ''} delay-${index + 1}`}
              key={item.label}
            >
              <span className="trustbar-icon">{item.icon}</span>
              <span className="trustbar-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider-accent" />
    </section>
  );
}
