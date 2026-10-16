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

      {/* Shared Sections to drive conversion */}
      <PricingSection />
      <AIAudit />
    </div>
  );
}
