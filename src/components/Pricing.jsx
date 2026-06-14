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
          <h3 className="pricing-tier">Starter</h3>
          <p className="pricing-desc">Perfect for small brokerages looking to automate manual quoting.</p>
          <div className="pricing-price">
            <span className="price-currency">$</span>
            <span className="price-amount">999</span>
            <span className="price-period">/mo</span>
          </div>
          <ul className="pricing-features">
            <li><span className="feature-check">✓</span> Up to 100 Quotes/day</li>
            <li><span className="feature-check">✓</span> Automated Email Parsing</li>
            <li><span className="feature-check">✓</span> Standard DAT Integration</li>
            <li><span className="feature-check">✓</span> Standard Support (24h SLA)</li>
          </ul>
          <Link to="/contact" className="btn btn-secondary pricing-btn">Start Free Trial</Link>
        </div>

        {/* Professional Plan (Highlighted) */}
        <div className="glass-card pricing-card pricing-card-popular scroll-fade-in delay-2">
          <div className="popular-badge">Most Popular</div>
          <h3 className="pricing-tier text-gradient-brand">Professional</h3>
          <p className="pricing-desc">Everything you need to rapidly scale operations and win more freight.</p>
          <div className="pricing-price">
            <span className="price-currency">$</span>
            <span className="price-amount">2,499</span>
            <span className="price-period">/mo</span>
          </div>
          <ul className="pricing-features">
            <li><span className="feature-check">✓</span> Up to 500 Quotes/day</li>
            <li><span className="feature-check">✓</span> Advanced Smart Routing</li>
            <li><span className="feature-check">✓</span> Full TMS Integration (Tai, McLeod)</li>
            <li><span className="feature-check">✓</span> Priority 24/7 Support</li>
            <li><span className="feature-check">✓</span> Custom Quoting Rules</li>
          </ul>
          <Link to="/contact" className="btn btn-primary pricing-btn">Choose Professional</Link>
        </div>

        {/* Enterprise Plan */}
        <div className="glass-card pricing-card scroll-fade-in delay-3">
          <h3 className="pricing-tier">Enterprise</h3>
          <p className="pricing-desc">For large 3PLs requiring custom AI models and dedicated infrastructure.</p>
          <div className="pricing-price">
            <span className="custom-price">Custom</span>
          </div>
          <ul className="pricing-features">
            <li><span className="feature-check">✓</span> Unlimited Quote Processing</li>
            <li><span className="feature-check">✓</span> Custom AI Model Training</li>
            <li><span className="feature-check">✓</span> Dedicated Account Manager</li>
            <li><span className="feature-check">✓</span> On-Premise Deployment Options</li>
            <li><span className="feature-check">✓</span> Advanced Analytics & BI Access</li>
          </ul>
          <Link to="/contact" className="btn btn-secondary pricing-btn">Contact Sales</Link>
        </div>
      </div>
    </section>
  );
}
