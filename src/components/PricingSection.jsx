import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { XAIVON_DATA } from '../data/xaivonData';
import './PricingSection.css';

export default function PricingSection() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.05 });
  const [activeTab, setActiveTab] = useState(XAIVON_DATA.pricing.categories[0]);

  const currentService = XAIVON_DATA.pricing.services.find(s => s.category === activeTab);
  const currentPlans = currentService ? currentService.tiers : [];

  return (
    <section className="pricing-section section" id="pricing" ref={sectionRef}>
      <div className="pricing-bg-glow" aria-hidden="true" />
      
      <div className="container-wide">
        {/* Section Header */}
        <div className={`section-header reveal ${isVisible ? 'visible' : ''}`}>
          <span className="badge">
            <span className="badge-dot" />
            Investment
          </span>
          <h2>
            Transparent Pricing For <span className="text-gradient-premium">Serious Growth</span>
          </h2>
          <p>
            We don't hide our pricing. Choose the infrastructure tier that matches your operational volume and scaling goals.
          </p>

          {/* Pricing Tabs */}
          <div className="pricing-tabs-scrollable">
            <div className="pricing-tabs" role="tablist">
              {XAIVON_DATA.pricing.categories.map((category) => (
                <button 
                  key={category}
                  className={`pricing-tab ${activeTab === category ? 'active' : ''}`} 
                  onClick={() => setActiveTab(category)} 
                  role="tab" 
                  aria-selected={activeTab === category}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-grid">
          {currentPlans.map((plan, index) => (
            <article 
              key={plan.name} 
              className={`pricing-card glass-card reveal-scale ${isVisible ? 'visible' : ''} ${plan.name === 'Plus' ? 'popular' : ''} delay-${index + 1}`}
            >
              <div className="pricing-header">
                {plan.name === 'Plus' && <div className="popular-badge">MOST POPULAR</div>}
                <h3>{plan.name}</h3>
                <p className="pricing-desc">{plan.purpose}</p>
                <div className="price-block">
                  <span className="price-label">Starting at</span>
                  <span className="price-amount" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.2rem' }}>
                    <span>{plan.price.USD}</span>
                    <span style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>{plan.price.INR}</span>
                  </span>
                </div>
              </div>

              <div className="pricing-features">
                <ul>
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="check-icon">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pricing-cta-wrap">
                <Link to="/contact" className={`btn ${plan.name === 'Plus' ? 'btn-primary' : 'btn-white'} full-width`}>
                  Schedule a Strategy Call
                </Link>
                <p className="trust-indicator">âœ“ We will review and follow up</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


