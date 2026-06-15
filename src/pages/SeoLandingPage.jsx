import { useParams, Navigate, Link } from 'react-router-dom';
import { useStaggerAnimation } from '../hooks/useScrollAnimation';
import PricingSection from '../components/PricingSection';
import AIAudit from '../components/AIAudit';

const SEO_CONTENT = {
  'ai-automation': {
    title: 'Enterprise AI Automation Solutions',
    description: 'Replace manual back-office work with autonomous AI infrastructure. Scale your capacity without scaling headcount.',
    badge: 'AI AUTOMATION'
  },
  'logistics-automation': {
    title: 'Logistics & Freight Automation Systems',
    description: 'Automate quoting, dispatching, and carrier communications with AI systems built specifically for 3PLs and freight brokers.',
    badge: 'LOGISTICS AUTOMATION'
  },
  'freight-automation': {
    title: 'Freight Brokerage Automation',
    description: 'Transform your freight brokerage with QuoteFlow AI. Process rates instantly and increase your win rate without adding operational overhead.',
    badge: 'FREIGHT AUTOMATION'
  },
  'ai-chatbots': {
    title: 'AI Chatbots & Voice Agents',
    description: 'Provide instant, 24/7 responses to your customers and carriers. Capture leads and handle customer support autonomously.',
    badge: 'AI CHATBOTS'
  },
  'workflow-automation': {
    title: 'Intelligent Workflow Automation',
    description: 'Connect siloed systems. Extract, classify, and sync data across your CRM, TMS, and accounting software automatically.',
    badge: 'WORKFLOW AUTOMATION'
  },
  'crm-automation': {
    title: 'CRM Data Automation',
    description: 'Eliminate manual CRM data entry. Our AI systems automatically parse incoming emails and update your CRM records in real-time.',
    badge: 'CRM AUTOMATION'
  }
};

export default function SeoLandingPage() {
  const { slug } = useParams();
  const ref = useStaggerAnimation('.scroll-fade-in');

  const content = SEO_CONTENT[slug];

  if (!content) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="seo-page" ref={ref} style={{ paddingTop: 'var(--nav-height)' }}>
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
            <span>✓ Secure & Encrypted</span>
            <span>✓ Response Within 12 Hours</span>
            <span>✓ Built For Long-Term Growth</span>
          </div>
        </div>
      </section>

      {/* Shared Sections to drive conversion */}
      <PricingSection />
      <AIAudit />
    </div>
  );
}
