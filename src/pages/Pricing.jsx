import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import { XAIVON_DATA } from '../data/xaivonData';

export default function Pricing() {
  const [activeCategory, setActiveCategory] = useState(XAIVON_DATA.pricing.categories[0]);
  const [currency, setCurrency] = useState('USD');

  useEffect(() => {
    // Simple mock detection for India timezone
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz && tz.toLowerCase().includes('kolkata')) {
      setCurrency('INR');
    }
  }, []);

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

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="pricing-toolbar">
            <div className="pricing-tabs" role="tablist">
              {XAIVON_DATA.pricing.categories.map((cat, i) => (
                <button 
                  key={i} 
                  className="pricing-tab" 
                  aria-selected={activeCategory === cat} 
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="pricing-currency-switch" style={{ display: 'flex', gap: '5px' }}>
              <button 
                onClick={() => setCurrency('INR')}
                className={`btn btn-sm ${currency === 'INR' ? 'btn-dark' : 'btn-secondary'}`}
                style={{ minHeight: '34px', padding: '6px 12px' }}
              >
                ₹ INR
              </button>
              <button 
                onClick={() => setCurrency('USD')}
                className={`btn btn-sm ${currency === 'USD' ? 'btn-dark' : 'btn-secondary'}`}
                style={{ minHeight: '34px', padding: '6px 12px' }}
              >
                $ USD
              </button>
            </div>
          </div>

          <div className="pricing-grid">
            {activeService.tiers.map((tier, i) => (
              <article className="surface price-card reveal in" key={i}>
                <span className="tag" style={{ alignSelf: 'flex-start', padding: '4px 8px', borderRadius: '4px', background: 'var(--bg-soft)', fontSize: '11px', fontWeight: 'bold' }}>{tier.name}</span>
                {tier.popular && (
                  <span className="data-badge" style={{ position: 'absolute', top: '27px', right: '27px', background: 'var(--accent-soft)', borderColor: '#f0c7b3', color: 'var(--accent-dark)' }}>
                    Most Popular
                  </span>
                )}
                <h2>{tier.name}</h2>
                <p className="subtitle">{tier.purpose}</p>
                <div className="price">
                  {tier.price[currency]} <small>starting price</small>
                </div>
                <ul className="price-list">
                  {tier.features.map((feature, j) => (
                    <li key={j}>{feature}</li>
                  ))}
                </ul>
                <Link className="btn btn-primary" to="/contact" style={{ marginTop: 'auto' }}>
                  Discuss this solution ↗
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
