import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './PricingSection.css';

const PRICING_DATA = {
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
        'Fast Loading Website',
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
        'Conversion Optimization',
        'Advanced SEO Setup',
        'AI Chat Assistant',
        '30 Days Support'
      ]
    },
    {
      id: 'web-premium',
      name: 'Premium Business Website',
      price: '$1499',
      description: 'High-performance infrastructure for established enterprises.',
      isPopular: false,
      features: [
        'Custom Design',
        'Unlimited Pages',
        'Premium Animations',
        'Advanced Integrations',
        'CRM Integration',
        'AI Chatbot Setup',
        'Advanced SEO Foundation',
        'Performance Optimization',
        'Security Hardening',
        'Priority Support'
      ]
    }
  ],
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
        'Priority Support'
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
          <div className="pricing-tabs" role="tablist">
            <button
              className={`pricing-tab ${activeTab === 'logistics' ? 'active' : ''}`}
              onClick={() => setActiveTab('logistics')}
              role="tab"
              aria-selected={activeTab === 'logistics'}
            >
              Logistics Automation
            </button>
            <button
              className={`pricing-tab ${activeTab === 'website' ? 'active' : ''}`}
              onClick={() => setActiveTab('website')}
              role="tab"
              aria-selected={activeTab === 'website'}
            >
              Website Development
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-grid">
          {currentPlans.map((plan, index) => (
            <article 
              key={plan.id} 
              className={`pricing-card glass-card reveal-scale ${isVisible ? 'visible' : ''} ${plan.isPopular ? 'popular' : ''} delay-${index + 1}`}
            >
              {plan.isPopular && <div className="popular-badge">MOST POPULAR</div>}
              
              <div className="pricing-header">
                <h3>{plan.name}</h3>
                <p className="pricing-desc">{plan.description}</p>
                <div className="price-block">
                  <span className="price-label">Starting at</span>
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
                <Link to="/contact" className={`btn ${plan.isPopular ? 'btn-primary' : 'btn-outline'} full-width`}>
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
