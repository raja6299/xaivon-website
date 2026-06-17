import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './PricingSection.css';

const PRICING_DATA = {
  logistics: [
    {
      id: 'log-starter',
      name: 'Logistics Starter',
      price: '$1499',
      description: 'Foundational automation for small brokerage operations.',
      isPopular: false,
      features: [
        'Workflow Audit',
        'Email Automation',
        'Lead Tracking',
        'CRM Setup',
        'Basic Dispatch Automation',
        '14 Days Support'
      ]
    },
    {
      id: 'log-growth',
      name: 'Logistics Growth',
      price: '$2499',
      description: 'Complete back-office automation to scale capacity without headcount.',
      isPopular: true,
      features: [
        'QuoteFlow AI Setup',
        'Email Parsing',
        'Advanced Lead Management',
        'Dispatch Workflow Automation',
        'AI Customer Support',
        'Reporting Dashboard',
        '30 Days Support'
      ]
    },
    {
      id: 'log-enterprise',
      name: 'Logistics Enterprise',
      price: '$4999+',
      description: 'Custom AI infrastructure deeply integrated into your existing TMS.',
      isPopular: false,
      features: [
        'TMS Integration',
        'Custom AI Infrastructure',
        'AI Agents',
        'Advanced Analytics',
        'Multi-Workflow Automation',
        'Dedicated Optimization',
        'Priority SLA Support'
      ]
    }
  ],
  website: [
    {
      id: 'web-starter',
      name: 'Starter Website',
      price: '$699',
      description: 'Best for small businesses establishing their digital presence.',
      isPopular: false,
      features: [
        'Up to 5 Pages',
        'Mobile Responsive Design',
        'Contact Forms',
        'Basic SEO Setup',
        'WhatsApp Integration',
        'SSL Ready',
        '14 Days Support'
      ]
    },
    {
      id: 'web-growth',
      name: 'Growth Website',
      price: '$999',
      description: 'Ideal for businesses focused on scaling and lead generation.',
      isPopular: true,
      features: [
        'Up to 10 Pages',
        'Premium UI/UX',
        'Blog Setup',
        'Calendly Integration',
        'Lead Capture Forms',
        'Advanced SEO Setup',
        '30 Days Support'
      ]
    },
    {
      id: 'web-premium',
      name: 'Premium Website',
      price: '$2499+',
      description: 'High-performance infrastructure for established enterprises.',
      isPopular: false,
      features: [
        'Custom Web App',
        'Unlimited Pages',
        'Database Integration',
        'User Authentication',
        'CRM Integration',
        'Performance Optimization',
        'Priority SLA Support'
      ]
    }
  ],
  chatbots: [
    {
      id: 'bot-starter',
      name: 'Basic Chatbot',
      price: '$499',
      description: 'Rule-based chatbot for answering basic customer questions.',
      isPopular: false,
      features: [
        'Website Integration',
        'FAQ Automation',
        'Lead Capture',
        'Business Hours Routing',
        '14 Days Support'
      ]
    },
    {
      id: 'bot-growth',
      name: 'AI Support Assistant',
      price: '$1299',
      description: 'LLM-powered assistant trained on your company knowledge base.',
      isPopular: true,
      features: [
        'Custom Knowledge Base',
        'Contextual Conversations',
        'CRM Lead Sync',
        'Live Agent Handoff',
        'Multi-language Support',
        '30 Days Optimization'
      ]
    },
    {
      id: 'bot-enterprise',
      name: 'Omnichannel Voice AI',
      price: 'Custom',
      description: 'Inbound and outbound AI voice agents and omnichannel chatbots.',
      isPopular: false,
      features: [
        'Voice AI Agents',
        'Phone System Integration',
        'SMS & WhatsApp Integration',
        'Custom API Actions',
        'Sentiment Analysis',
        'Priority SLA Support'
      ]
    }
  ],
  automation: [
    {
      id: 'auto-starter',
      name: 'Workflow Starter',
      price: '$799',
      description: 'Automate repetitive data entry and basic notifications.',
      isPopular: false,
      features: [
        'Up to 3 Workflows',
        'Zapier/Make Setup',
        'Email Notifications',
        'Basic CRM Sync',
        '14 Days Support'
      ]
    },
    {
      id: 'auto-growth',
      name: 'Business Automation',
      price: '$1999',
      description: 'End-to-end automation of your core business processes.',
      isPopular: true,
      features: [
        'Up to 10 Workflows',
        'Advanced API Integrations',
        'Automated Invoicing',
        'Onboarding Automation',
        'Error Handling',
        '30 Days Optimization'
      ]
    },
    {
      id: 'auto-enterprise',
      name: 'Enterprise Infrastructure',
      price: 'Custom',
      description: 'Deep backend automation for complex, multi-system environments.',
      isPopular: false,
      features: [
        'Unlimited Workflows',
        'Custom Python Scripts',
        'Database Syncing',
        'Legacy System Integration',
        'Dedicated Server Infrastructure',
        'Priority SLA Support'
      ]
    }
  ],
  agents: [
    {
      id: 'agent-starter',
      name: 'Single AI Agent',
      price: '$1499',
      description: 'One specialized AI agent to handle a specific department task.',
      isPopular: false,
      features: [
        'Specialized System Prompt',
        'Tool Use (Email, Search)',
        'Standard LLM Access',
        'Basic Memory',
        '14 Days Support'
      ]
    },
    {
      id: 'agent-growth',
      name: 'Multi-Agent Team',
      price: '$3499',
      description: 'A team of collaborating AI agents executing complex objectives.',
      isPopular: true,
      features: [
        'Multi-Agent Orchestration',
        'Advanced RAG Integration',
        'Custom Tool Creation',
        'Long-term Memory',
        'Slack/Discord Integration',
        '30 Days Optimization'
      ]
    },
    {
      id: 'agent-enterprise',
      name: 'Autonomous Operations',
      price: 'Custom',
      description: 'Fully autonomous AI workforce operating your backend systems.',
      isPopular: false,
      features: [
        'Company-wide Deployment',
        'Local LLM Options',
        'Secure Data Enclaves',
        'Continuous Learning',
        'Executive Dashboards',
        'Priority SLA Support'
      ]
    }
  ]
};

export default function PricingSection() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.05 });
  const [activeTab, setActiveTab] = useState('logistics');

  const currentPlans = PRICING_DATA[activeTab];

  return (
    <section className="pricing-section section" id="pricing" ref={sectionRef}>
      <div className="pricing-bg-glow" aria-hidden="true" />
      
      <div className="container-wide">
        {/* Section Header */}
        <div className={`section-header reveal ${isVisible ? 'visible' : ''}`}>
          <span className="badge">
            <span className="badge-dot" />
            Investment
          </span>
          <h2>
            Transparent Pricing For <span className="text-gradient-premium">Serious Growth</span>
          </h2>
          <p>
            We don't hide our pricing. Choose the infrastructure tier that matches your operational volume and scaling goals.
          </p>

          {/* Pricing Tabs */}
          <div className="pricing-tabs-scrollable">
            <div className="pricing-tabs" role="tablist">
              <button className={`pricing-tab ${activeTab === 'logistics' ? 'active' : ''}`} onClick={() => setActiveTab('logistics')} role="tab" aria-selected={activeTab === 'logistics'}>Logistics Automation</button>
              <button className={`pricing-tab ${activeTab === 'website' ? 'active' : ''}`} onClick={() => setActiveTab('website')} role="tab" aria-selected={activeTab === 'website'}>Website Development</button>
              <button className={`pricing-tab ${activeTab === 'chatbots' ? 'active' : ''}`} onClick={() => setActiveTab('chatbots')} role="tab" aria-selected={activeTab === 'chatbots'}>AI Chatbots</button>
              <button className={`pricing-tab ${activeTab === 'automation' ? 'active' : ''}`} onClick={() => setActiveTab('automation')} role="tab" aria-selected={activeTab === 'automation'}>AI Automation</button>
              <button className={`pricing-tab ${activeTab === 'agents' ? 'active' : ''}`} onClick={() => setActiveTab('agents')} role="tab" aria-selected={activeTab === 'agents'}>AI Agents</button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-grid">
          {currentPlans.map((plan, index) => (
            <article 
              key={plan.id} 
              className={`pricing-card glass-card reveal-scale ${isVisible ? 'visible' : ''} ${plan.isPopular ? 'popular' : ''} delay-${index + 1}`}
            >
              <div className="pricing-header">
                {plan.isPopular && <div className="popular-badge">MOST POPULAR</div>}
                <h3>{plan.name}</h3>
                <p className="pricing-desc">{plan.description}</p>
                <div className="price-block">
                  {plan.price !== 'Custom' && <span className="price-label">Starting at</span>}
                  <span className="price-amount">{plan.price}</span>
                </div>
              </div>

              <div className="pricing-features">
                <ul>
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="check-icon">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pricing-cta-wrap">
                <Link to="/contact" className={`btn ${plan.isPopular ? 'btn-primary' : 'btn-white'} full-width`}>
                  Schedule a Strategy Call
                </Link>
                <p className="trust-indicator">✓ Response Within 12 Hours</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
