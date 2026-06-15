import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './FAQ.css';

const faqData = [
  {
    q: 'What industries does XAIVON serve?',
    a: 'We specialize in logistics and freight companies, but our AI solutions serve businesses across multiple industries including insurance, healthcare, real estate, e-commerce, and professional services. Our core expertise is in building AI infrastructure that works for any operation-heavy business.',
  },
  {
    q: 'How long does it take to implement AI automation?',
    a: 'Most projects are completed within 2-6 weeks depending on complexity. Simple automations can be deployed in as little as 5 business days, while comprehensive AI infrastructure projects may take 4-8 weeks. We provide a detailed timeline during our strategy phase.',
  },
  {
    q: 'What is an AI Voice Agent?',
    a: 'An AI Voice Agent is an intelligent system that handles phone calls — both inbound and outbound — with natural, human-like conversation. They can schedule appointments, qualify leads, provide customer support, and handle dispatch communications 24/7.',
  },
  {
    q: 'How much does AI automation cost?',
    a: 'Our pricing is customized based on the scope of your project. We offer solutions starting from targeted automations to full enterprise AI infrastructure. Book a free strategy call to get a detailed proposal tailored to your specific needs and budget.',
  },
  {
    q: 'Do I need technical knowledge to use your AI systems?',
    a: 'Absolutely not. We build user-friendly systems with simple dashboards and interfaces. We also provide training and ongoing support to ensure your team can manage everything confidently.',
  },
  {
    q: 'What is a Free AI Audit?',
    a: 'Our Free AI Audit is a comprehensive analysis of your current business operations where we identify automation opportunities, potential cost savings, and efficiency improvements. You receive a custom report with actionable recommendations.',
  },
  {
    q: 'Can XAIVON integrate with our existing tools?',
    a: 'Yes. We integrate with popular platforms including GoHighLevel, HubSpot, Zapier, Make.com, Calendly, Slack, Twilio, Stripe, Google Workspace, and many more. If you use a custom tool, we can build custom integrations.',
  },
  {
    q: 'What makes XAIVON different from other AI agencies?',
    a: "XAIVON is not an agency — we are an AI-Powered Business Infrastructure Company. We don't just build automations; we build comprehensive AI systems that become the operational backbone of your business. Our focus on enterprise-grade quality and measurable ROI sets us apart.",
  },
  {
    q: 'Do you offer ongoing support?',
    a: 'Yes. We offer dedicated support and maintenance packages to ensure your AI systems continue performing optimally. Our team monitors, optimizes, and updates your systems as your business evolves.',
  },
  {
    q: 'How do I get started?',
    a: "Simple — book a free strategy call. We'll discuss your business, identify opportunities, and create a custom plan. There's no obligation, and you'll walk away with valuable insights regardless.",
  },
];

function FAQItem({ item, index, isOpen, onToggle }) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });
  const delayClass = `delay-${(index % 8) + 1}`;

  return (
    <div
      ref={ref}
      className={`faq-item reveal ${delayClass} ${isVisible ? 'visible' : ''} ${isOpen ? 'faq-item-active' : ''}`}
    >
      <button
        className="faq-question"
        onClick={onToggle}
        id={`faq-toggle-${index}`}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="faq-question-text">{item.q}</span>
        <span className="faq-icon" aria-hidden="true">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" className="faq-icon-vertical" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>
      <div
        className="faq-answer-wrapper"
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-toggle-${index}`}
      >
        <div className="faq-answer">
          <p>{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [headerRef, headerVisible] = useScrollReveal();

  function handleToggle(index) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section className="section faq-section" id="faq">
      <div className="container">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`section-header reveal ${headerVisible ? 'visible' : ''}`}
        >
          <span className="badge">
            <span className="badge-dot" />
            FAQ
          </span>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about working with XAIVON.</p>
        </div>

        {/* FAQ List */}
        <div className="faq-list">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
