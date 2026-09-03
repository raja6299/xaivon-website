import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import { useScrollReveal } from '../hooks/useScrollReveal';
import LeadMagnet from '../components/LeadMagnet';
import './Resources.css';

const resourcesData = [
  {
    category: 'Guide',
    title: 'The Ultimate Guide to Logistics Automation in 2026',
    description: 'A comprehensive technical breakdown of how leading brokerages are using AI to decouple headcount from revenue.',
    link: '/contact',
    linkText: 'Discuss This Approach',
    readTime: '12 min read'
  },
  {
    category: 'Case Study',
    title: 'How AI Quoting Can Reduce Response Times',
    description: 'An illustrative example of how AI-assisted quoting helps brokerages handle volume spikes.',
    link: '/contact',
    linkText: 'Discuss This Approach',
    readTime: '5 min read'
  },
  {
    category: 'Playbook',
    title: 'Implementing AI Agents in Customer Support',
    description: 'Step-by-step instructions on deploying LLM-based autonomous agents to handle common Tier 1 support tickets.',
    link: '/contact',
    linkText: 'Discuss This Approach',
    readTime: '8 min read'
  },
  {
    category: 'Industry Insight',
    title: 'The Hidden Costs of Manual Data Entry in CRMs',
    description: 'Why your sales team is spending significant time on repetitive tasks, and how to build automated pipelines using webhooks and Python.',
    link: '/contact',
    linkText: 'Discuss This Approach',
    readTime: '6 min read'
  }
];

export default function Resources() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <div className="resources-page" style={{ paddingTop: '10rem', minHeight: '100vh' }}>
      <PageMeta 
        title="Resources — AI Automation Guides & Tools"
        description="Guides, case studies, and tools for implementing AI automation in your enterprise."
        url="https://xaivon.com/resources"
      />
      <div className="container">
        <div ref={headerRef} className={`section-header text-center reveal-scale ${headerVisible ? 'visible' : ''}`}>
          <span className="badge">KNOWLEDGE BASE</span>
          <h1 className="text-gradient">Resources & Playbooks</h1>
          <p className="large-text">Technical guides, workflow diagrams, and illustrative implementation strategies.</p>
        </div>

        <div ref={gridRef} className="resources-grid mt-4">
          {resourcesData.map((res, i) => (
            <div 
              key={i} 
              className={`resource-card glass-panel reveal-fade-up ${gridVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="resource-meta">
                <span className="resource-category">{res.category}</span>
                <span className="resource-time">{res.readTime}</span>
              </div>
              <h3>{res.title}</h3>
              <p>{res.description}</p>
              <Link to={res.link} className="resource-link">{res.linkText} ?</Link>
            </div>
          ))}
        </div>
      </div>
      <LeadMagnet />
    </div>
  );
}
