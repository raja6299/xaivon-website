export const XAIVON_DATA = {
  identity: {
    brand: 'XAIVON',
    legalName: 'ADABHRA GROUP',
    entityType: 'Sole Proprietorship',
    legalNotice: 'XAIVON is a business brand operated by ADABHRA GROUP (Sole Proprietorship), India.',
    proprietor: 'Raja Babu',
    registeredLocation: 'West Champaran, Bihar, India',
    publicEmail: 'raja@xaivon.com',
    legalEmail: 'raja969384bth@gmail.com',
    publicPhone: '+91 95211 90205',
    publicPhoneTel: 'tel:+919521190205'
  },
  navigation: {
    primary: [
      { name: 'Home', path: '/' },
      {
        name: 'Solutions',
        path: '/solutions',
        dropdown: {
          groups: [
            {
              label: 'Capabilities',
              links: [
                { name: 'Workflow Automation', path: '/solutions#workflow' },
                { name: 'Lead & Email Operations', path: '/solutions#lead' },
                { name: 'CRM & Data Connections', path: '/solutions#crm' },
                { name: 'AI Agents & Assistance', path: '/solutions#agents' },
                { name: 'Voice Systems', path: '/solutions#voice' },
                { name: 'Customer Support', path: '/solutions#support' },
                { name: 'Document Workflows', path: '/solutions#documents' },
                { name: 'Custom Integrations', path: '/solutions#integrations' }
              ]
            },
            {
              label: 'Applications',
              links: [
                { name: 'Logistics & Freight', path: '/industries#logistics' },
                { name: 'Real Estate', path: '/industries#real-estate' },
                { name: 'Customer Operations', path: '/industries#services' },
                { name: 'Commerce & Operations', path: '/industries#commerce' },
                { name: 'Other Industries', path: '/industries#more' }
              ]
            }
          ]
        }
      },
      {
        name: 'Products',
        path: '/products',
        dropdown: {
          groups: [
            {
              label: 'Implementation Capabilities',
              links: [
                { name: 'Chat & Support Systems', path: '/products#chatbot' },
                { name: 'Operational Agents', path: '/products#agent' },
                { name: 'Voice Operations', path: '/products#voice' }
              ]
            },
            {
              label: 'Planned Roadmap',
              links: [
                { name: 'Logistics Workflow Modules', path: '/products#logistics-saas' },
                { name: 'Industry-Specific Suites', path: '/products#industry-saas' },
                { name: 'Connected Operations Layer', path: '/products#roadmap' }
              ]
            }
          ]
        }
      },
      {
        name: 'Industries',
        path: '/industries',
        dropdown: {
          groups: [
            {
              label: 'Industries & Focus',
              links: [
                { name: 'Logistics & Freight (Current focus)', path: '/industries#logistics' },
                { name: 'Real Estate', path: '/industries#real-estate' },
                { name: 'Professional Services', path: '/industries#services' },
                { name: 'Commerce & Operations', path: '/industries#commerce' },
                { name: 'Other Environments', path: '/industries#more' }
              ]
            }
          ]
        }
      },
      {
        name: 'About',
        path: '/about',
        dropdown: {
          groups: [
            {
              label: 'Company & Approach',
              links: [
                { name: 'What We Do', path: '/about#who' },
                { name: 'How We Work', path: '/about#how' },
                { name: 'What Guides Us', path: '/about#principles' },
                { name: 'Current & Future', path: '/about#future' },
                { name: 'Founder Note', path: '/about#founder' }
              ]
            }
          ]
        }
      },
      { name: 'Pricing', path: '/pricing' }
    ],
    cta: {
      name: 'Book an Assessment ↗',
      path: '/contact'
    }
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
      a: 'No. Logistics and freight are an important current focus, but the work we build is not limited to one industry. We first look at your actual process and the systems involved.'
    },
    {
      q: 'Do we need to replace our current software?',
      a: 'Usually, we begin by reviewing what you already use. Where the tools have suitable integrations and permissions, we aim to build around them. If a connection is not possible, we will explain the trade-off before recommending a change.'
    },
    {
      q: 'Do we need an AI agent for every process?',
      a: 'No. Some problems need only clear rules and a reliable workflow. We recommend AI when it adds useful judgment or flexibility—not simply because it is available.'
    },
    {
      q: 'Can you guarantee savings or a launch date?',
      a: 'No two workflows are identical. We assess scope, access, complexity and testing requirements before proposing timelines or potential savings. Any estimate is explained with its assumptions.'
    },
    {
      q: 'How is a project priced?',
      a: 'We publish starting prices for common implementation levels. Your proposal sets out the actual scope, deliverables, support and any separate third-party usage costs.'
    }
  ]
};
