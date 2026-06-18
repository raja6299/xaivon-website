import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import LeadMagnet from '../components/LeadMagnet';
import './Resources.css';

const resourcesData = [
  {
    category: 'Guide',
    title: 'The Ultimate Guide to Logistics Automation in 2026',
    description: 'A comprehensive technical breakdown of how Top 100 brokerages are using AI to decouple headcount from revenue.',
    link: '#',
    readTime: '12 min read'
  },
  {
    category: 'Case Study',
    title: 'How Acme Freight Reduced Quote Times by 85%',
    description: 'Learn how a mid-sized brokerage implemented QuoteFlow AI and handled a 3x volume spike without hiring.',
    link: '#',
    readTime: '5 min read'
  },
  {
    category: 'Playbook',
    title: 'Implementing AI Agents in Customer Support',
    description: 'Step-by-step instructions on deploying LLM-based autonomous agents to handle 80% of Tier 1 support tickets.',
    link: '#',
    readTime: '8 min read'
  },
  {
    category: 'Industry Insight',
    title: 'The Hidden Costs of Manual Data Entry in CRMs',
    description: 'Why your sales team is losing 15 hours a week, and how to build automated pipelines using webhooks and Python.',
    link: '#',
    readTime: '6 min read'
  }
];

export default function Resources() {

  useEffect(() => {
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', 'https://xaivon.com' + window.location.pathname);
    return () => {
      if (link && link.parentNode) link.parentNode.removeChild(link);
    };
  }, []);

  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.1 });

  useEffect(() => {
    document.title = 'Resources & Insights | XAIVON';
  }, []);

  return (
    <div className="resources-page" style={{ paddingTop: '10rem', minHeight: '100vh' }}>
      <div className="container">
        <div ref={headerRef} className={`section-header text-center reveal-scale ${headerVisible ? 'visible' : ''}`}>
          <span className="badge">KNOWLEDGE BASE</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
            Infrastructure <span className="text-gradient-premium">Insights</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
            Deep-dive technical guides, case studies, and strategic playbooks on deploying AI and automation at the enterprise level.
          </p>
        </div>

        <div ref={gridRef} className={`resources-grid reveal ${gridVisible ? 'visible' : ''}`} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
          {resourcesData.map((res, i) => (
            <a href={res.link} key={i} className="glass-card resource-card" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', transition: 'all 0.3s ease' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', alignItems: 'center' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-secondary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>{res.category}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{res.readTime}</span>
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{res.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', flexGrow: 1 }}>{res.description}</p>
              <div style={{ marginTop: '1.5rem', color: 'var(--color-secondary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Read Article
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </a>
          ))}
        </div>
      </div>

      <LeadMagnet />
    </div>
  );
}
