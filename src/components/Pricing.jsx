import { Link } from 'react-router-dom';
import { useStaggerAnimation } from '../hooks/useScrollAnimation';
import './Pricing.css';

export default function Pricing() {
  const ref = useStaggerAnimation('.scroll-fade-in');

  return (
    <section className="pricing-section" id="pricing">
      <div className="section-header scroll-fade-in">
        <span className="badge">Transparent Pricing</span>
        <h2>Plans That Scale With You</h2>
        <p>Enterprise-grade AI automation without the enterprise overhead.</p>
      </div>

      <div className="pricing-grid" ref={ref}>
        {/* Starter Plan */}
        <div className="glass-card pricing-card scroll-fade-in delay-1">
          <div className="pricing-header">
            <span className="pricing-icon">◈</span>
            <h3 className="pricing-tier">Starter</h3>
            <p className="pricing-desc">Automate manual quoting for small brokerages.</p>
          </div>
          <div className="pricing-price">
            <span className="price-currency">$</span>
            <span className="price-amount">999</span>
            <span className="price-period">/mo</span>
          </div>
          <Link to="/contact" className="btn btn-secondary pricing-btn">Start Free Trial</Link>
          
          <div className="pricing-divider"></div>

          <ul className="pricing-features">
        </div>

        {/* Professional Plan (Highlighted) */}
        <div className="glass-card pricing-card pricing-card-popular scroll-fade-in delay-2">
          <div className="popular-badge">Most Popular</div>
          <div className="pricing-header">
            <span className="pricing-icon">❖</span>
            <h3 className="pricing-tier text-gradient-brand">Professional</h3>
            <p className="pricing-desc">Rapidly scale operations and win more freight.</p>
          </div>
          <div className="pricing-price">
            <span className="price-currency">$</span>
            <span className="price-amount">2,499</span>
            <span className="price-period">/mo</span>
          </div>
          <Link to="/contact" className="btn btn-primary pricing-btn">Choose Professional</Link>

          <div className="pricing-divider"></div>

          <ul className="pricing-features">
            <li><span className="feature-check">✓</span> Up to 500 Quotes/day</li>
            <li><span className="feature-check">✓</span> Advanced Smart Routing</li>
            <li><span className="feature-check">✓</span> Full TMS Integration (Tai, McLeod)</li>
            <li><span className="feature-check">✓</span> Priority 24/7 Support</li>
            <li><span className="feature-check">✓</span> Custom Quoting Rules</li>
          </ul>
        </div>

        {/* Enterprise Plan */}
        <div className="glass-card pricing-card scroll-fade-in delay-3">
          <div className="pricing-header">
            <span className="pricing-icon">⟡</span>
            <h3 className="pricing-tier">Enterprise</h3>
            <p className="pricing-desc">Custom models and dedicated infrastructure.</p>
          </div>
          <div className="pricing-price">
            <span className="custom-price">Custom</span>
          </div>
          <Link to="/contact" className="btn btn-secondary pricing-btn">Contact Sales</Link>

          <div className="pricing-divider"></div>

          <ul className="pricing-features">
            <li><span className="feature-check">✓</span> Unlimited Quote Processing</li>
            <li><span className="feature-check">✓</span> Custom AI Model Training</li>
            <li><span className="feature-check">✓</span> Dedicated Account Manager</li>
            <li><span className="feature-check">✓</span> On-Premise Deployment Options</li>
            <li><span className="feature-check">✓</span> Advanced Analytics & BI Access</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
