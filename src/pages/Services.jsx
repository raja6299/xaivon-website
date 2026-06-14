import { Link } from 'react-router-dom';
import { useStaggerAnimation } from '../hooks/useScrollAnimation';
import './Services.css';

const quoteflowFeatures = [
  'AI-powered email parsing',
  'Real-time rate benchmarking',
  'Automatic quote generation',
  'TMS & CRM integration',
  '24/7 autonomous processing',
  'Full audit trail & analytics',
];

const integrations = [
  { name: 'Gmail', icon: '📧' },
  { name: 'Outlook', icon: '📬' },
  { name: 'Google Sheets', icon: '📊' },
  { name: 'Slack', icon: '💬' },
  { name: 'n8n', icon: '⚡' },
  { name: 'Make.com', icon: '🔗' },
];

const comingSoon = [
  {
    icon: '🛡️',
    title: 'Insurance AI',
    desc: 'Automated claims processing and policy matching for insurance agents.',
  },
  {
    icon: '🏥',
    title: 'Healthcare AI',
    desc: 'Patient scheduling, record management, and billing automation.',
  },
  {
    icon: '🏠',
    title: 'Real Estate AI',
    desc: 'Lead qualification, property matching, and document processing.',
  },
];

export default function Services() {
  const staggerRef = useStaggerAnimation('.scroll-fade-in');

  return (
    <div className="services-page" ref={staggerRef}>
      {/* Hero */}
      <section className="services-hero" id="services-hero">
        <div className="scroll-fade-in">
          <span className="badge">OUR SERVICES</span>
          <h1 className="text-gradient">AI-Powered Solutions for Modern Logistics</h1>
          <p className="services-hero-desc">
            We build custom Agentic AI systems that automate your most time-consuming operations.
          </p>
        </div>
      </section>

      {/* Featured — QuoteFlow AI */}
      <section className="services-featured" id="quoteflow-ai">
        <div className="glass-card featured-card scroll-fade-in">
          <span className="featured-badge">FLAGSHIP PRODUCT</span>
          <h2 className="text-gradient">QuoteFlow AI</h2>
          <p className="featured-subtitle">Automated Quote Processing for Freight Brokers</p>
          <p className="featured-desc">
            QuoteFlow AI reads incoming RFQ emails, extracts load details, benchmarks against market rates, generates professional quotes, and sends them back — all in under 30 seconds.
          </p>
          <ul className="featured-list">
            {quoteflowFeatures.map((feature) => (
              <li key={feature}>
                <span className="featured-check">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn btn-primary" id="quoteflow-cta">
            Book a Demo →
          </Link>
        </div>
      </section>

      {/* Integration Partners */}
      <section className="services-integrations" id="integrations">
        <div className="scroll-fade-in">
          <div className="integrations-header">
            <h3>Integrates with the tools you already use</h3>
          </div>
          <div className="integrations-strip">
            {integrations.map((tool) => (
              <span className="integration-pill" key={tool.name}>
                <span className="integration-pill-icon">{tool.icon}</span>
                {tool.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="services-coming-soon" id="coming-soon">
        <div className="coming-soon-header scroll-fade-in">
          <span className="badge">COMING SOON</span>
          <h2>Expanding Our <span className="text-gradient-brand">AI Capabilities</span></h2>
        </div>
        <div className="coming-soon-grid">
          {comingSoon.map((item, i) => (
            <div className={`glass-card coming-soon-card scroll-fade-in delay-${i + 1}`} key={item.title}>
              <span className="coming-soon-card-icon" role="img" aria-label={item.title}>{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span className="coming-soon-tag">Coming Soon</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta" id="services-cta">
        <div className="scroll-fade-in">
          <h2>Ready to <span className="text-gradient">Automate?</span></h2>
          <p>See how QuoteFlow AI can transform your freight brokerage operations.</p>
          <Link to="/contact" className="btn btn-primary" id="services-book-call">
            Book a Call →
          </Link>
        </div>
      </section>
    </div>
  );
}
