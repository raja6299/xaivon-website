import { BLOG_POSTS } from '../data/blogData.js';

export const defaultMetadata = {
  title: 'XAIVON | Business Automation & AI Infrastructure',
  description: 'Make everyday work easier to run. XAIVON designs automation, connected systems and practical AI assistance around real business operations.',
  url: 'https://xaivon.com',
  image: 'https://xaivon.com/og-image.png',
  keywords: 'Business Automation, Workflow Automation, AI Agents, Connected Systems'
};

export const pageMetadata = {
  '/': {
    title: defaultMetadata.title,
    description: defaultMetadata.description,
    image: defaultMetadata.image
  },
  '/about': {
    title: 'About XAIVON | Our Approach to Business Systems',
    description: 'Learn why XAIVON exists, how we design practical automation and who operates the business.',
    image: 'https://xaivon.com/og-image.png'
  },
  '/solutions': {
    title: 'Business Automation Solutions | XAIVON',
    description: 'Explore workflow automation, CRM connections, lead and email operations, document processing and scoped AI agents for business teams.',
    image: 'https://xaivon.com/og-image.png'
  },
  '/products': {
    title: 'Products & Roadmap | XAIVON',
    description: "See XAIVON's implementation capabilities and planned reusable business software. Current work and future plans are clearly distinguished.",
    image: 'https://xaivon.com/og-image.png'
  },
  '/industries': {
    title: 'Industries & Use Cases | XAIVON',
    description: 'Explore how workflow design and connected systems can support logistics and other business operations, with scope assessed case by case.',
    image: 'https://xaivon.com/og-image.png'
  },
  '/services': {
    title: 'Services — AI Automation, Voice Agents, Chatbots',
    description: 'Implementation and infrastructure services for autonomous AI agents, automated quoting, and CRM data automation.',
    image: 'https://xaivon.com/og-image.png'
  },
  '/pricing': {
    title: 'Automation Services Pricing | XAIVON',
    description: 'Review starting prices for workflow automation, AI agents, voice, support, CRM and document automation. Final quotes reflect your scope.',
    image: 'https://xaivon.com/og-image.png'
  },
  '/contact': {
    title: 'Contact XAIVON | Discuss Your Business Workflow',
    description: 'Speak with XAIVON about repetitive work, disconnected tools and potential automation. Send an enquiry or request an assessment.',
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
    title: 'Privacy Policy | XAIVON',
    description: 'How XAIVON handles information provided through this website and its contact and assessment features.',
    image: 'https://xaivon.com/og-image.png'
  },
  '/terms': {
    title: 'Terms of Service | XAIVON',
    description: 'Terms for use of the XAIVON website, enquiries and general service information.',
    image: 'https://xaivon.com/og-image.png'
  },
  '/cookie-policy': {
    title: 'Cookie Policy | XAIVON',
    description: 'Review website cookie preferences and information about optional analytics and browser storage.',
    image: 'https://xaivon.com/og-image.png'
  },
  '/refund-policy': {
    title: 'Refund & Cancellation Policy | XAIVON',
    description: "General cancellation and refund information for XAIVON's scoped professional services.",
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

