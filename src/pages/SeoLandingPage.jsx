import { useParams, Navigate, Link } from 'react-router-dom';
import { useStaggerAnimation } from '../hooks/useScrollAnimation';
import PricingSection from '../components/PricingSection';
import AIAudit from '../components/AIAudit';
import PageMeta from '../components/PageMeta';
import { SEO_CONTENT } from '../data/seoContent';

export default function SeoLandingPage() {
  const { slug } = useParams();
  const ref = useStaggerAnimation('.scroll-fade-in');

  const content = SEO_CONTENT[slug];

  if (!content) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="seo-page" ref={ref} style={{ paddingTop: 'var(--nav-height)' }}>
      <PageMeta
        title={`${content.title} — XAIVON`}
        description={content.description}
        url={`https://xaivon.com/s/${slug}`}
      />
      {/* Dynamic Hero */}
      <section className="seo-hero section" style={{ textAlign: 'center', padding: '6rem 1rem 4rem' }}>
        <div className="container scroll-fade-in">
          <span className="badge">
            <span className="badge-dot"></span>
            {content.badge}
          </span>
          <h1 className="text-gradient" style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
            {content.title}
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 2.5rem', lineHeight: '1.6' }}>
            {content.description}
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Schedule a Strategy Call
            </Link>
            <Link to="/contact" className="btn btn-secondary btn-lg">
              Get a Free AI Infrastructure Assessment
            </Link>
          </div>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', color: 'var(--text-muted)', fontSize: '0.85rem', flexWrap: 'wrap' }}>
            <span>✓ Encrypted Transit</span>
            <span>✓ Scoped Implementations</span>
            <span>✓ Built For Practical Operations</span>
          </div>
        </div>
      </section>

      {/* Architectural Pillars & Operational Scope */}
      {content.pillars && (
        <section className="section" style={{ padding: '3rem 1rem 4rem', borderTop: '1px solid var(--line)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="badge">SYSTEM ARCHITECTURE</span>
              <h2 style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)', marginTop: '0.75rem', marginBottom: '0.75rem' }}>
                Operational Scope & Design Principles
              </h2>
              {content.overview && (
                <p style={{ color: 'var(--text-secondary)', maxWidth: '680px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.6' }}>
                  {content.overview}
                </p>
              )}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: '1080px', margin: '0 auto' }}>
              {content.pillars.map((pillar, idx) => (
                <div key={idx} className="glass-panel" style={{ padding: '1.75rem', borderRadius: '16px', border: '1px solid var(--line)', background: 'var(--surface)' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--accent-soft)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '13px', marginBottom: '1rem' }}>
                    0{idx + 1}
                  </div>
                  <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', color: 'var(--ink)' }}>{pillar.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.5', margin: 0 }}>{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Operator FAQ */}
      {content.faqs && (
        <section className="section-alt" style={{ padding: '3rem 1rem 4rem', borderTop: '1px solid var(--line)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span className="badge">OPERATOR FAQ</span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.2vw, 2rem)', marginTop: '0.75rem', marginBottom: '0.5rem' }}>
                Frequently Asked Technical Questions
              </h2>
            </div>
            <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {content.faqs.map((faq, idx) => (
                <div key={idx} style={{ padding: '1.5rem', borderRadius: '14px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
                  <h3 style={{ fontSize: '1.05rem', color: 'var(--ink)', marginBottom: '0.5rem' }}>{faq.q}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.5', margin: 0 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Shared Sections to drive conversion */}
      <PricingSection />
      <AIAudit />
    </div>
  );
}
