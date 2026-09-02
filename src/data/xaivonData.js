export const XAIVON_DATA = {
  navigation: {
    primary: [
      { name: 'Home', path: '/' },
      {
        name: 'Solutions',
        path: '#',
        dropdown: {
          groups: [
            {
              label: 'Capabilities',
              links: [
                { name: 'AI Workflow Automation', path: '/solutions#workflow' },
                { name: 'Lead & Email Automation', path: '/solutions#lead' },
                { name: 'CRM Automation', path: '/solutions#crm' },
                { name: 'AI Agents', path: '/solutions#agents' },
                { name: 'Custom Integrations', path: '/solutions#integrations' }
              ]
            },
            {
              label: 'Applications',
              links: [
                { name: 'Logistics & Freight', path: '/industries#logistics' },
                { name: 'Real Estate', path: '/industries#real-estate' },
                { name: 'Healthcare', path: '/industries#healthcare' },
                { name: 'Finance', path: '/industries#finance' },
                { name: 'More industries', path: '/industries#more' }
              ]
            }
          ]
        }
      },
      {
        name: 'Products',
        path: '#',
        dropdown: {
          groups: [
            {
              label: 'AI products',
              links: [
                { name: 'AI Chatbot', path: '/products#chatbot' },
                { name: 'AI Agent', path: '/products#agent' },
                { name: 'Voice AI', path: '/products#voice' }
              ]
            },
            {
              label: 'Roadmap',
              links: [
                { name: 'Logistics SaaS Platform', path: '/products#logistics-saas' },
                { name: 'Industry-specific SaaS', path: '/products#industry-saas' },
                { name: 'Platform roadmap', path: '/about#roadmap' }
              ]
            }
          ]
        }
      },
      {
        name: 'Industries',
        path: '#',
        dropdown: {
          groups: [
            {
              label: 'Current + future',
              links: [
                { name: 'Logistics', path: '/industries#logistics' },
                { name: 'Real Estate', path: '/industries#real-estate' },
                { name: 'Healthcare', path: '/industries#healthcare' },
                { name: 'Finance', path: '/industries#finance' },
                { name: 'Other industries', path: '/industries#more' }
              ]
            }
          ]
        }
      },
      {
        name: 'About',
        path: '#',
        dropdown: {
          groups: [
            {
              label: 'Company',
              links: [
                { name: 'Who We Are', path: '/about#who' },
                { name: 'How We Work', path: '/about#how' },
                { name: 'Integrations', path: '/about#integrations' },
                { name: 'Future', path: '/about#future' },
                { name: 'FAQ', path: '/about#faq' }
              ]
            }
          ]
        }
      },
      { name: 'Pricing', path: '/pricing' }
    ]
  },
  pricing: {
    categories: [
      'Workflow & Automation',
      'AI Agents',
      'Voice AI',
      'Chatbot & Customer Support',
      'CRM, Lead & Data Automation',
      'Document & Business Process Automation'
    ],
    services: [
      {
        name: 'Workflow & Automation',
        category: 'Workflow & Automation',
        tiers: [
          {
            name: 'Starter',
            purpose: 'Focused implementation',
            price: { USD: '$749', INR: '₹29,000' },
            features: [
              'One bounded workflow',
              'Limited integrations',
              'Basic business rules',
              'Standard testing',
              'Basic deployment',
              'Defined support period'
            ]
          },
          {
            name: 'Plus',
            purpose: 'Connected business automation',
            price: { USD: '$1,249', INR: '₹49,999' },
            popular: true,
            features: [
              'Multiple workflow steps',
              'Multiple integrations',
              'CRM/email/data connectivity',
              'Conditional logic',
              'Validation & error handling',
              'Human handoff/approval'
            ]
          },
          {
            name: 'Premium',
            purpose: 'Complex operational systems',
            price: { USD: '$3,499', INR: '₹1,49,000' },
            features: [
              'Complex multi-step workflows',
              'Multiple systems/tools',
              'Advanced routing/rules',
              'Broader monitoring',
              'Stronger evaluation/testing',
              'Advanced integrations'
            ]
          }
        ]
      },
      {
        name: 'AI Agents',
        category: 'AI Agents',
        tiers: [
          {
            name: 'Starter',
            purpose: 'Focused implementation',
            price: { USD: '$2,499', INR: '₹99,000' },
            features: [
              'One bounded agent',
              'Limited tool access',
              'Basic business rules',
              'Standard testing',
              'Basic deployment',
              'Defined support period'
            ]
          },
          {
            name: 'Plus',
            purpose: 'Connected business automation',
            price: { USD: '$5,499', INR: '₹2,49,000' },
            popular: true,
            features: [
              'Multiple connected agents',
              'Multiple integrations',
              'CRM/data connectivity',
              'Conditional logic',
              'Validation & error handling',
              'Human handoff/approval'
            ]
          },
          {
            name: 'Premium',
            purpose: 'Complex operational systems',
            price: { USD: '$12,000', INR: '₹5,99,000' },
            features: [
              'Complex multi-agent workflows',
              'Multiple systems/tools',
              'Advanced routing/rules',
              'Broader monitoring',
              'Stronger evaluation/testing',
              'Advanced integrations'
            ]
          }
        ]
      },
      {
        name: 'Voice AI',
        category: 'Voice AI',
        tiers: [
          {
            name: 'Starter',
            purpose: 'Focused implementation',
            price: { USD: '$2,999', INR: '₹1,25,000' },
            features: [
              'One bounded voice agent',
              'Limited integrations',
              'Basic routing rules',
              'Standard testing',
              'Basic deployment',
              'Defined support period'
            ]
          },
          {
            name: 'Plus',
            purpose: 'Connected business automation',
            price: { USD: '$5,499', INR: '₹1,99,000' },
            popular: true,
            features: [
              'Advanced voice agent',
              'Multiple integrations',
              'CRM connectivity',
              'Conditional logic',
              'Validation & error handling',
              'Human handoff/approval'
            ]
          },
          {
            name: 'Premium',
            purpose: 'Complex operational systems',
            price: { USD: '$15,000+', INR: '₹6,99,000' },
            features: [
              'Complex multi-step workflows',
              'Multiple systems/tools',
              'Advanced routing/rules',
              'Broader monitoring',
              'Stronger evaluation/testing',
              'Advanced integrations'
            ]
          }
        ]
      },
      {
        name: 'Chatbot & Customer Support',
        category: 'Chatbot & Customer Support',
        tiers: [
          {
            name: 'Starter',
            purpose: 'Focused implementation',
            price: { USD: '$1,249', INR: '₹49,000' },
            features: [
              'Basic FAQ chatbot',
              'Limited knowledge base',
              'Basic business rules',
              'Standard testing',
              'Basic deployment',
              'Defined support period'
            ]
          },
          {
            name: 'Plus',
            purpose: 'Connected business automation',
            price: { USD: '$2,499', INR: '₹99,000' },
            popular: true,
            features: [
              'Advanced support chatbot',
              'Multiple integrations',
              'CRM/email connectivity',
              'Conditional logic',
              'Validation & error handling',
              'Human handoff/approval'
            ]
          },
          {
            name: 'Premium',
            purpose: 'Complex operational systems',
            price: { USD: '$6,000', INR: '₹2,49,000' },
            features: [
              'Omnichannel support systems',
              'Multiple systems/tools',
              'Advanced routing/rules',
              'Broader monitoring',
              'Stronger evaluation/testing',
              'Advanced integrations'
            ]
          }
        ]
      },
      {
        name: 'CRM, Lead & Data Automation',
        category: 'CRM, Lead & Data Automation',
        tiers: [
          {
            name: 'Starter',
            purpose: 'Focused implementation',
            price: { USD: '$999', INR: '₹45,000' },
            features: [
              'Basic CRM sync',
              'Limited integrations',
              'Basic data rules',
              'Standard testing',
              'Basic deployment',
              'Defined support period'
            ]
          },
          {
            name: 'Plus',
            purpose: 'Connected business automation',
            price: { USD: '$2,499', INR: '₹1,09,000' },
            popular: true,
            features: [
              'Multi-system CRM sync',
              'Lead routing & enrichment',
              'Email automation connectivity',
              'Conditional logic',
              'Validation & error handling',
              'Human handoff/approval'
            ]
          },
          {
            name: 'Premium',
            purpose: 'Complex operational systems',
            price: { USD: '$6,000', INR: '₹2,49,000' },
            features: [
              'Complex data pipelines',
              'Multiple systems/tools',
              'Advanced routing/rules',
              'Broader monitoring',
              'Stronger evaluation/testing',
              'Advanced integrations'
            ]
          }
        ]
      },
      {
        name: 'Document & Business Process Automation',
        category: 'Document & Business Process Automation',
        tiers: [
          {
            name: 'Starter',
            purpose: 'Focused implementation',
            price: { USD: '$1,499', INR: '₹59,000' },
            features: [
              'Basic document extraction',
              'Limited integrations',
              'Basic business rules',
              'Standard testing',
              'Basic deployment',
              'Defined support period'
            ]
          },
          {
            name: 'Plus',
            purpose: 'Connected business automation',
            price: { USD: '$2,999', INR: '₹1,29,000' },
            popular: true,
            features: [
              'Advanced document processing',
              'Multiple integrations',
              'ERP/Data connectivity',
              'Conditional logic',
              'Validation & error handling',
              'Human handoff/approval'
            ]
          },
          {
            name: 'Premium',
            purpose: 'Complex operational systems',
            price: { USD: '$7,000', INR: '₹2,99,000' },
            features: [
              'Complex process automation',
              'Multiple systems/tools',
              'Advanced routing/rules',
              'Broader monitoring',
              'Stronger evaluation/testing',
              'Advanced integrations'
            ]
          }
        ]
      }
    ]
  },
  faq: [
    {
      q: 'Does XAIVON only work with logistics companies?',
      a: "No. XAIVON's core capability is business automation. Logistics is the current first-market focus documented in the company plan; other industries are planned expansion areas."
    },
    {
      q: 'Are the future SaaS products already live?',
      a: 'No. The documented roadmap describes them as planned products derived from validated service workflows.'
    },
    {
      q: 'Is the ROI calculator a guarantee?',
      a: 'No. It is a user-input planning model. Verified customer outcomes should be presented separately with their methodology and source.'
    }
  ]
};
