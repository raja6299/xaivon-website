import { Link } from 'react-router-dom';
import { useStaggerAnimation } from '../hooks/useScrollAnimation';
import './Features.css';

const features = [
  { icon: '⚡', title: 'Instant Quoting', desc: 'Process quote requests in under 30 seconds with AI-powered email parsing and rate calculation.' },
  { icon: '📊', title: 'Rate Benchmarking', desc: 'Compare against historical data, DAT load boards, and market rates for optimal pricing.' },
  { icon: '🔗', title: 'TMS Integration', desc: 'Seamlessly connects with your existing TMS, Gmail, and Outlook without disrupting workflows.' },
  { icon: '🌐', title: '24/7 Processing', desc: 'AI never sleeps. Process quotes around the clock, even during off-hours and weekends.' },
  { icon: '🛤️', title: 'Smart Routing', desc: 'Intelligent lane analysis and carrier matching for maximum efficiency and margin.' },
  { icon: '📈', title: 'Analytics Dashboard', desc: 'Real-time insights on quote volume, win rates, response times, and revenue trends.' },
];

export default function Features() {
  const ref = useStaggerAnimation();
  return (
    <section className="features section-alt" id="features">
      <div className="section-header">
        <span className="badge">Capabilities</span>
        <h2>Enterprise-Grade AI for Logistics</h2>
        <p>Everything your brokerage needs to automate operations and scale efficiently.</p>
      </div>
      <div className="features-grid" ref={ref}>
        {features.map((f, i) => (
          <Link to="/services" className={`glass-card feature-card scroll-fade-in delay-${(i % 3) + 1}`} key={i}>
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
            <div className="feature-link">Explore feature &rarr;</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
