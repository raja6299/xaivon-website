import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import { XAIVON_DATA } from '../data/xaivonData';

export default function Pricing() {
  const [activeCategory, setActiveCategory] = useState(XAIVON_DATA.pricing.categories[0]);
  const [currency, setCurrency] = useState(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return (tz === 'Asia/Calcutta' || tz === 'Asia/Kolkata') ? 'INR' : 'USD';
  });

  const activeService =
    XAIVON_DATA.pricing.services.find(s => s.category === activeCategory) ||
    XAIVON_DATA.pricing.services[0];

  return (
    <div className="pricing-page">
      <PageMeta
        title="XAIVON - Pricing & Plans"
        description="Choose the level of automation you need. Transparent starting prices."
        url="https://xaivon.com/pricing"
      />

      {/* Page hero */}
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Pricing Architecture</div>
          <h1>Choose the level of automation you need.</h1>
          <p>
            Start with one focused workflow, build a production-ready AI system,
            or scope a more complex operation.
          </p>
        </div>
      </section>

      {/* Category tabs + currency toggle */}
      <section className="section tight">
        <div className="container">
          <div className="pricing-toolbar">
            {/* Category tabs */}
            <div className="pricing-tabs" role="tablist" aria-label="Service categories">
              {XAIVON_DATA.pricing.categories.map(cat => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={activeCategory === cat}
                  className="pricing-tab"
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Currency toggle */}
            <div style={{ display: 'flex', gap: '7px' }}>
              {['USD', 'INR'].map(curr => (
                <button
                  key={curr}
                  aria-pressed={currency === curr}
                  className={`btn btn-secondary${currency === curr ? ' btn-dark' : ''}`}
                  style={{ minHeight: '40px', padding: '8px 14px', fontSize: '11px', fontWeight: '820' }}
                  onClick={() => setCurrency(curr)}
                >
                  {curr}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing cards */}
          <div className="pricing-grid">
            {activeService.tiers.map((tier, idx) => (
              <div
                key={idx}
                className="surface price-card"
                style={tier.popular ? { borderColor: 'var(--accent)', boxShadow: '0 0 0 1px var(--accent)' } : {}}
              >
                {/* Fixed-height badge row keeps h2 aligned across all three cards */}
                <div style={{ height: '28px', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                  {tier.popular && (
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '5px 10px',
                        borderRadius: '999px',
                        background: 'var(--accent)',
                        color: 'var(--white)',
                        fontSize: '10px',
                        fontWeight: '850',
                        letterSpacing: '.1em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Most Popular
                    </div>
                  )}
                </div>

                <h2>{tier.name}</h2>
                <p className="subtitle">{tier.purpose}</p>

                <div className="price">
                  {currency === 'USD' ? tier.price.USD : tier.price.INR}
                  <small> starting</small>
                </div>

                <ul className="price-list">
                  {tier.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`btn ${tier.popular ? 'btn-primary' : 'btn-secondary'}`}
                >
                  Book Assessment
                </Link>

                <p className="price-source">
                  Project-scoped pricing. Final investment confirmed after discovery.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
