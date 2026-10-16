import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import { XAIVON_DATA } from '../data/xaivonData';

export default function Pricing() {
  const [activeCategory, setActiveCategory] = useState(XAIVON_DATA.pricing.categories[0]);
  const [currency, setCurrency] = useState(() => {
    try {
      const saved = localStorage.getItem('xaivon-pricing-currency');
      if (saved === 'INR' || saved === 'USD') return saved;
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      return (tz === 'Asia/Calcutta' || tz === 'Asia/Kolkata') ? 'INR' : 'USD';
    } catch {
      return 'USD';
    }
  });

  const handleCurrencyChange = (curr) => {
    setCurrency(curr);
    try {
      localStorage.setItem('xaivon-pricing-currency', curr);
    } catch {
      // Ignore localStorage access failures in restricted environments
    }
  };

  const activeService =
    XAIVON_DATA.pricing.services.find(s => s.category === activeCategory) ||
    XAIVON_DATA.pricing.services[0];

  return (
    <div className="pricing-page">
      <PageMeta />

      {/* Page hero */}
      <section className="page-hero" style={{ padding: '80px 0 40px' }}>
        <div className="container">
          <div className="eyebrow">PRICING</div>
          <h1 style={{ marginTop: '12px', fontSize: 'clamp(2.25rem, 3.2vw, 3rem)', lineHeight: 1.15 }}>
            Choose the level of automation you need.
          </h1>
          <p style={{ marginTop: '18px', maxWidth: '72ch', color: 'var(--muted)', fontSize: 'clamp(16px, 1.25vw, 17.5px)', lineHeight: 1.65 }}>
            Start with one focused workflow, connect several systems, or scope a more involved operation. The right level depends on the work—not a checklist of buzzwords.
          </p>
        </div>
      </section>

      {/* Category tabs + currency toggle */}
      <section className="section tight">
        <div className="container">
          <div className="pricing-toolbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
            {/* Category tabs */}
            <div className="pricing-tabs" role="tablist" aria-label="Service categories" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {XAIVON_DATA.pricing.categories.map(cat => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={activeCategory === cat}
                  className="pricing-tab"
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '8px 14px',
                    borderRadius: '8px',
                    border: '1px solid var(--line)',
                    background: activeCategory === cat ? 'var(--tab-copper-active-bg)' : 'var(--surface)',
                    color: activeCategory === cat ? 'var(--tab-copper-active-text)' : 'var(--ink)',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Currency toggle */}
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', color: 'var(--muted)', marginRight: '4px' }}>Currency:</span>
              {['USD', 'INR'].map(curr => (
                <button
                  key={curr}
                  aria-pressed={currency === curr}
                  type="button"
                  style={{
                    minHeight: '36px',
                    padding: '6px 12px',
                    fontSize: '12px',
                    fontWeight: 700,
                    borderRadius: '8px',
                    border: '1px solid var(--line)',
                    background: currency === curr ? 'var(--btn-toggle-active-bg)' : 'var(--surface)',
                    color: currency === curr ? 'var(--btn-toggle-active-text)' : 'var(--ink)',
                    cursor: 'pointer'
                  }}
                  onClick={() => handleCurrencyChange(curr)}
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
                <div style={{ height: '28px', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                  {tier.popular && (
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '4px 10px',
                        borderRadius: '999px',
                        background: 'var(--accent-soft)',
                        color: 'var(--accent)',
                        fontSize: '11px',
                        fontWeight: 800,
                        letterSpacing: '.06em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Recommended for connected workflows
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
                  style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}
                >
                  Request a Scope &amp; Quote ↗
                </Link>

                <p className="price-source">
                  Starting price for implementation. Final scope defined in proposal.
                </p>
              </div>
            ))}
          </div>

          {/* Required Disclosures */}
          <div style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-soft)', borderRadius: '14px', border: '1px solid var(--line)' }}>
            <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: 'var(--ink)', lineHeight: 1.6 }}>
              <strong>Important Scope Note:</strong> These are starting prices for implementation, not fixed prices for every project. Your proposal will describe the agreed scope, deliverables, support, payment milestones and relevant third-party costs.
            </p>
            {activeCategory === 'Voice AI' && (
              <p style={{ margin: 0, fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6 }}>
                <strong>Voice Note:</strong> Voice projects may involve separate telephony, AI model, messaging and provider usage charges. Those costs are not included unless they appear in your written proposal.
              </p>
            )}
          </div>

          {/* Pricing FAQ */}
          <div style={{ marginTop: '48px' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '20px' }}>Pricing Questions</h3>
            <div style={{ display: 'grid', gap: '16px' }}>
              <div style={{ padding: '18px', background: 'var(--surface)', borderRadius: '10px', border: '1px solid var(--line)' }}>
                <strong style={{ fontSize: '15px', display: 'block', marginBottom: '6px' }}>Is the listed price the final price?</strong>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--muted)', lineHeight: 1.6 }}>
                  No. Each figure is a starting point. We quote against the work, integrations and support you actually need.
                </p>
              </div>
              <div style={{ padding: '18px', background: 'var(--surface)', borderRadius: '10px', border: '1px solid var(--line)' }}>
                <strong style={{ fontSize: '15px', display: 'block', marginBottom: '6px' }}>Are ongoing usage charges included?</strong>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--muted)', lineHeight: 1.6 }}>
                  Not automatically. Third-party services and consumption charges will be identified separately where relevant.
                </p>
              </div>
              <div style={{ padding: '18px', background: 'var(--surface)', borderRadius: '10px', border: '1px solid var(--line)' }}>
                <strong style={{ fontSize: '15px', display: 'block', marginBottom: '6px' }}>Can we begin with one process?</strong>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--muted)', lineHeight: 1.6 }}>
                  Yes. A focused first implementation can help define a sensible next step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
