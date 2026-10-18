import { BLOG_POSTS } from '../data/blogData.js';
import { SEO_CONTENT } from '../data/seoContent.js';

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
    description: 'Implementation and infrastructure services for enterprise AI assistance, automated quoting, and CRM data automation.',
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
    title: 'Resources — Automation Architecture Topics',
    description: 'Technical topic briefs, workflow diagrams, and consultation discussion guides for modern enterprise automation.',
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
    description: 'Estimate potential operational time and cost savings from modernizing manual workflows with tailored software automation.',
    image: 'https://xaivon.com/og-image.png'
  },
  '/logistics-solutions': {
    title: 'Logistics Solutions — XAIVON',
    description: 'Workflow software and automation architecture for 3PLs and freight teams to streamline quote handling and load coordination.',
    image: 'https://xaivon.com/og-image.png'
  },
  '/quoteflow-ai': {
    title: 'QuoteFlow AI — Structured Freight Workflow Integration',
    description: 'Explore custom quote processing and operational workflows designed to assist freight teams with repetitive data tasks.',
    image: 'https://xaivon.com/og-image.png'
  },
  '/ai-agents': {
    title: 'AI Agents — Scoped Digital Workers',
    description: 'Deploy scoped AI agents for dispatch assistance, quote parsing, and back-office data entry with human oversight.',
    image: 'https://xaivon.com/og-image.png'
  },
  '/ai-automation': {
    title: 'AI Automation — XAIVON',
    description: 'Transform manual cost centers into efficient, automated workflows with enterprise-grade system integrations.',
    image: 'https://xaivon.com/og-image.png'
  },
  '/ai-chatbots': {
    title: 'Conversational Support & AI Chatbots — XAIVON',
    description: 'Provide reliable, automated customer support intake and structured lead routing with conversational AI systems.',
    image: 'https://xaivon.com/og-image.png'
  },
  '/404': {
    title: 'Page Not Found — XAIVON',
    description: 'The requested system path or infrastructure page could not be found.',
    image: 'https://xaivon.com/og-image.png',
    noindex: true
  }
};

Object.keys(BLOG_POSTS).forEach(id => {
  pageMetadata['/blog/' + id] = {
    title: BLOG_POSTS[id].title + ' — XAIVON Blog',
    description: BLOG_POSTS[id].excerpt,
    image: 'https://xaivon.com/og-image.png'
  };
});

Object.keys(SEO_CONTENT).forEach(slug => {
  pageMetadata['/s/' + slug] = {
    title: SEO_CONTENT[slug].title + ' — XAIVON',
    description: SEO_CONTENT[slug].description,
    image: 'https://xaivon.com/og-image.png'
  };
});
