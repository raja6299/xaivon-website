import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import { XAIVON_DATA } from '../data/xaivonData';

export default function Pricing() {
  const [activeCategory, setActiveCategory] = useState(XAIVON_DATA.pricing.categories[0]);
  const [currency, setCurrency] = useState('USD');

  const handleCurrencyChange = (curr) => {
    setCurrency(curr);
  };

  const activeService = XAIVON_DATA.pricing.services.find(s => s.category === activeCategory) || XAIVON_DATA.pricing.services[0];

  return (
    <div className="pricing-page">
      <PageMeta 
        title="XAIVON - Pricing & Plans"
        description="Choose the level of automation you need. Transparent starting prices."
        url="https://xaivon.com/pricing"
      />

      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Pricing Architecture</div>
          <h1>Choose the level of automation you need.</h1>
          <p>Start with one focused workflow, build a production-ready AI system, or scope a more complex operation.</p>
        </div>
      </section>

      <section className="pricing-tabs-section container">
        <div className="pricing-header-controls">
          <div className="currency-toggle">
            <button className={`currency-btn ${currency === 'USD' ? 'active' : ''}`} onClick={() => handleCurrencyChange('USD')}>USD</button>
            <button className={`currency-btn ${currency === 'INR' ? 'active' : ''}`} onClick={() => handleCurrencyChange('INR')}>INR</button>
          </div>
        </div>

        <div className="pricing-category-tabs">
          {XAIVON_DATA.pricing.categories.map(cat => (
            <button 
              key={cat} 
              className={`pricing-cat-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="pricing-cards-grid">
          {activeService.tiers.map((tier, idx) => (
            <div className={`pricing-card glass-panel ${tier.name === 'Plus' ? 'popular' : ''}`} key={idx}>
              {tier.name === 'Plus' && <div className="popular-badge">Most Popular</div>}
              <h3>{tier.name}</h3>
              <div className="price-display">
                <span className="price-symbol">{currency === 'USD' ? '$' : '?'}</span>
                <span className="price-amount">{currency === 'USD' ? tier.priceUSD : tier.priceINR}</span>
              </div>
              <p className="price-label">Starting Price</p>
              
              <div className="tier-features">
                <h4>What's Included:</h4>
                <ul>
                  {tier.features.map((f, i) => (
                    <li key={i}><span className="check">?</span> {f}</li>
                  ))}
                </ul>
              </div>
              
              <Link to="/contact" className={`btn ${tier.name === 'Plus' ? 'btn-primary' : 'btn-secondary'} full-width`}>
                Book Assessment
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
