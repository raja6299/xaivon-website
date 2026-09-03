import { BLOG_POSTS } from '../data/blogData.js';

export const defaultMetadata = {
  title: 'XAIVON — Global AI Infrastructure & Business Automation',
  description: 'Replace manual operational work with autonomous AI infrastructure. Scale your capacity and increase efficiency with intelligent workflow systems.',
  url: 'https://xaivon.com',
  image: 'https://xaivon.com/og-image.png',
  keywords: 'AI Automation, Workflow Automation, AI Agents, Business Systems'
};

export const pageMetadata = {
  '/': {
    title: defaultMetadata.title,
    description: defaultMetadata.description,
    image: defaultMetadata.image
  },
  '/about': {
    title: 'About XAIVON - AI Infrastructure & Business Automation',
    description: 'Learn about XAIVON’s mission to build autonomous infrastructure for modern businesses and freight operations.',
    image: 'https://xaivon.com/og-image.png'
  },
  '/solutions': {
    title: 'Solutions - XAIVON AI Capabilities',
    description: 'Explore our AI solutions: workflow automation, voice agents, data syncing, and freight quoting infrastructure.',
    image: 'https://xaivon.com/og-image.png'
  },
  '/products': {
    title: 'Products & Roadmap - XAIVON',
    description: 'Discover XAIVON’s live products like QuoteFlow AI and view our upcoming platform roadmap.',
    image: 'https://xaivon.com/og-image.png'
  },
  '/industries': {
    title: 'Industries - XAIVON',
    description: 'See how XAIVON’s AI infrastructure powers logistics, freight, and future enterprise sectors.',
    image: 'https://xaivon.com/og-image.png'
  },
  '/services': {
    title: 'Services — AI Automation, Voice Agents, Chatbots',
    description: 'Implementation and infrastructure services for autonomous AI agents, automated quoting, and CRM data automation.',
    image: 'https://xaivon.com/og-image.png'
  },
  '/pricing': {
    title: 'Pricing — AI Automation Solutions',
    description: 'Transparent starting prices for AI Agents, Voice AI, CRM Automation, and Business Process Automation systems.',
    image: 'https://xaivon.com/og-image.png'
  },
  '/contact': {
    title: 'Contact XAIVON — Book an Assessment',
    description: 'Schedule a technical assessment to discover the highest ROI automation opportunities in your business operations.',
    image: 'https://xaivon.com/og-image.png'
  },
  '/blog': {
    title: 'Blog — AI Automation Insights & Guides',
    description: 'Expert perspectives and technical guides on transforming business operations with artificial intelligence.',
    image: 'https://xaivon.com/og-image.png'
  },
  '/resources': {
    title: 'Resources — AI Automation Guides',
    description: 'In-depth case studies, workflow examples, and implementation guides for autonomous business systems.',
    image: 'https://xaivon.com/og-image.png'
  },
  '/privacy-policy': {
    title: 'Privacy Policy — XAIVON',
    description: 'Learn how XAIVON protects your data and privacy.',
    image: 'https://xaivon.com/og-image.png'
  },
  '/terms': {
    title: 'Terms of Service — XAIVON',
    description: 'Terms and conditions for using XAIVON’s website and services.',
    image: 'https://xaivon.com/og-image.png'
  },
  '/cookie-policy': {
    title: 'Cookie Policy — XAIVON',
    description: 'Information about how XAIVON uses cookies and analytics.',
    image: 'https://xaivon.com/og-image.png'
  },
  '/ai-consultation': {
    title: 'AI Consultation Received — XAIVON',
    description: 'Thank you for booking an assessment with XAIVON.',
    image: 'https://xaivon.com/og-image.png',
    noindex: true
  },
  '/roi-calculator': {
    title: 'AI Automation ROI Calculator — XAIVON',
    description: 'Estimate the potential time and cost savings of replacing manual workflows with XAIVON autonomous AI infrastructure.',
    image: 'https://xaivon.com/og-image.png'
  },
  '/logistics-solutions': {
    title: 'Logistics Solutions — XAIVON',
    description: 'Purpose-built AI automation for 3PLs and freight brokers. Scale your capacity and win more freight.',
    image: 'https://xaivon.com/og-image.png'
  },
  '/quoteflow-ai': {
    title: 'QuoteFlow AI — Automated Freight Quoting',
    description: 'Process RFQs instantly. QuoteFlow AI reads emails, calculates margins, and responds to shippers autonomously.',
    image: 'https://xaivon.com/og-image.png'
  },
  '/ai-agents': {
    title: 'AI Agents — XAIVON',
    description: 'Deploy autonomous AI agents that act as independent digital workers for dispatching, quoting, and data entry.',
    image: 'https://xaivon.com/og-image.png'
  },
  '/ai-automation': {
    title: 'AI Automation — XAIVON',
    description: 'Transform manual cost centers into efficient, automated workflows with enterprise-grade AI infrastructure.',
    image: 'https://xaivon.com/og-image.png'
  },
  '/ai-chatbots': {
    title: 'AI Chatbots — XAIVON',
    description: 'Provide instant, 24/7 intelligent customer support and lead capture with conversational AI systems.',
    image: 'https://xaivon.com/og-image.png'
  }
};

Object.keys(BLOG_POSTS).forEach(id => {
  pageMetadata['/blog/' + id] = {
    title: BLOG_POSTS[id].title + ' — XAIVON Blog',
    description: BLOG_POSTS[id].excerpt,
    image: 'https://xaivon.com/og-image.png'
  };
});

const SEO_CONTENT = {
  'ai-automation': { title: 'Enterprise AI Automation Solutions', description: 'Replace manual back-office work with autonomous AI infrastructure. Scale your capacity without scaling headcount.' },
  'logistics-automation': { title: 'Logistics & Freight Automation Systems', description: 'Automate quoting, dispatching, and carrier communications with AI systems built specifically for 3PLs and freight brokers.' },
  'freight-automation': { title: 'Freight Brokerage Automation', description: 'Transform your freight brokerage with QuoteFlow AI. Process rates instantly and increase your win rate without adding operational overhead.' },
  'ai-chatbots': { title: 'AI Chatbots & Voice Agents', description: 'Provide instant, 24/7 responses to your customers and carriers. Capture leads and handle customer support autonomously.' },
  'workflow-automation': { title: 'Intelligent Workflow Automation', description: 'Connect siloed systems. Extract, classify, and sync data across your CRM, TMS, and accounting software automatically.' },
  'crm-automation': { title: 'CRM Data Automation', description: 'Eliminate manual CRM data entry. Our AI systems automatically parse incoming emails and update your CRM records in real-time.' }
};

Object.keys(SEO_CONTENT).forEach(slug => {
  pageMetadata['/s/' + slug] = {
    title: SEO_CONTENT[slug].title + ' — XAIVON',
    description: SEO_CONTENT[slug].description,
    image: 'https://xaivon.com/og-image.png'
  };
});

