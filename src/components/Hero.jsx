import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Animated background layers */}
      <div className="hero-mesh"></div>
      <div className="hero-grid"></div>
      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>
      <div className="hero-orb hero-orb-3"></div>

      {/* Floating particles */}
      <div className="hero-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      <div className="hero-content">
        <span className="hero-badge">
          <span className="hero-badge-dot"></span>
          AI-Powered Logistics Automation
        </span>
        <h1>
          Automate Your Freight Brokerage.
          <span className="highlight">10x Your Quote Capacity.</span>
        </h1>
        <p className="hero-desc">
          XAIVON builds Agentic AI systems that read emails, benchmark rates, and generate quotes — in under 30 seconds. Scale your logistics operations without adding headcount.
        </p>
        <div className="hero-buttons">
          <Link to="/contact" className="btn btn-primary" id="hero-cta-primary">Get Started →</Link>
          <Link to="/services" className="btn btn-secondary" id="hero-cta-secondary">Watch Demo</Link>
        </div>

        {/* Stats */}
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-number text-gradient-brand">30s</div>
            <div className="hero-stat-label">Quote Processing</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number text-gradient-brand">90%</div>
            <div className="hero-stat-label">Time Saved</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number text-gradient-brand">24/7</div>
            <div className="hero-stat-label">AI Processing</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number text-gradient-brand">10x</div>
            <div className="hero-stat-label">Quote Capacity</div>
          </div>
        </div>

        <div className="hero-trust">
          <p>Trusted by logistics leaders</p>
          <div className="hero-trust-logos">
            <span>ACME Freight</span>
            <span>Pacific Logistics</span>
            <span>Atlas Transport</span>
            <span>NorthStar 3PL</span>
            <span>Summit Carriers</span>
          </div>
        </div>
      </div>
    </section>
  );
}
