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
    <div className="resources-page">
      <PageMeta />
      <div className="container resources-container">
        <header
          ref={headerRef}
          className={`resources-header ${headerVisible ? 'is-visible' : ''}`}
        >
          <span className="badge">
            <span className="badge-dot" />
            CONSULTATION TOPICS
          </span>
          <h1 className="resources-title">
            Resources &amp; <span className="text-gradient">Playbooks</span>
          </h1>
          <p className="resources-subtitle">
            Technical topic briefs, workflow patterns, and illustrative implementation strategies.
          </p>
        </header>

        <section
          ref={gridRef}
          className={`resources-grid ${gridVisible ? 'is-visible' : ''}`}
          aria-label="Technical Consultation Topics"
        >
          {resourcesData.map((res, i) => (
            <article
              key={i}
              className="resource-card"
              style={{ '--card-index': i }}
            >
              <div className="resource-meta">
                <span className="resource-category">{res.category}</span>
                <span className="resource-topic">{res.topicTag}</span>
              </div>
              <h2 className="resource-card-title">{res.title}</h2>
              <p className="resource-desc">{res.description}</p>
              <div className="resource-footer">
                <Link to={res.link} className="resource-link">
                  <span>{res.linkText}</span>
                  <svg className="resource-link-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </section>

        <LeadMagnet />
      </div>
    </div>
  );
}
