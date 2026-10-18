import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import { useScrollReveal } from '../hooks/useScrollReveal';
import LeadMagnet from '../components/LeadMagnet';
import './Resources.css';

const resourcesData = [
  {
    category: 'Architecture Brief',
    title: 'Logistics Workflow Automation Architecture',
    description: 'A technical breakdown of how freight brokerages and logistics operators decouple headcount from transaction volume.',
    link: '/contact',
    linkText: 'Discuss This Approach',
    topicTag: 'Enterprise Architecture'
  },
  {
    category: 'Workflow Teardown',
    title: 'AI Quoting & Rate Processing Pipelines',
    description: 'An architectural pattern for handling quote ingestion, rating validation, and dispatch notifications under volume spikes.',
    link: '/contact',
    linkText: 'Discuss This Approach',
    topicTag: 'Operational Software'
  },
  {
    category: 'Implementation Blueprint',
    title: 'Customer Operations & Support Routing',
    description: 'Technical considerations for deploying scoped assistive agents to automate Tier 1 ticketing with human-in-the-loop escalation.',
    link: '/contact',
    linkText: 'Discuss This Approach',
    topicTag: 'Assisted Automation'
  },
  {
    category: 'Integration Strategy',
    title: 'Automated CRM & Operations Data Pipelines',
    description: 'Strategies for eliminating manual re-keying between sales, dispatch, and accounting systems using webhooks and microservices.',
    link: '/contact',
    linkText: 'Discuss This Approach',
    topicTag: 'Systems Integration'
  }
];

export default function Resources() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <div className="resources-page" style={{ paddingTop: '10rem', minHeight: '100vh' }}>
      <PageMeta />
      <div className="container">
        <div ref={headerRef} className={`section-header text-center reveal-scale ${headerVisible ? 'visible' : ''}`}>
          <span className="badge">CONSULTATION TOPICS</span>
          <h1 className="text-gradient">Resources & Playbooks</h1>
          <p className="large-text">Technical topic briefs, workflow patterns, and illustrative implementation strategies.</p>
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
                <span className="resource-time">{res.topicTag}</span>
              </div>
              <h3>{res.title}</h3>
              <p>{res.description}</p>
              <Link to={res.link} className="resource-link">{res.linkText}</Link>
            </div>
          ))}
        </div>
      </div>
      <LeadMagnet />
    </div>
  );
}

