import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import PageMeta from '../../components/PageMeta';
import AIAudit from '../../components/AIAudit';
import PricingSection from '../../components/PricingSection';
import './AIAutomation.css';

const faqData = [
  {
    q: 'How is this different from Zapier?',
    a: 'While we utilize tools like Zapier and Make for simple integrations, our AI automation encompasses custom Python scripts, database architectures, and LLM integrations that allow systems to process unstructured data, not just pass exact variables between APIs.'
  },
  {
    q: 'How long does implementation take?',
    a: 'Typical automation workflows are deployed within 2 to 4 weeks depending on the complexity of your legacy systems and API availability.'
  },
  {
    q: 'Do I need to maintain the automation?',
    a: 'No. Our Growth and Enterprise tiers include ongoing maintenance and optimization to ensure workflows do not break when third-party APIs update.'
  }
];

const beforeAfterData = [
  {
    before: { label: 'Data Entry', detail: '4+ hours daily of manual copy-paste between systems' },
    after: { label: 'Auto-Sync', detail: 'Real-time data flow across your entire tech stack' },
  },
  {
    before: { label: 'Error-Prone', detail: 'Human mistakes cost $15K+ annually in rework' },
    after: { label: '99.9% Accuracy', detail: 'AI validates, formats, and routes data flawlessly' },
  },
  {
    before: { label: 'Slow Scaling', detail: 'Hiring more staff to handle growing volume' },
    after: { label: 'Infinite Scale', detail: 'Process 10x volume without adding headcount' },
  },
  {
    before: { label: 'Siloed Tools', detail: '5-10 disconnected apps with no shared context' },
    after: { label: 'Unified Ops', detail: 'One intelligent layer connecting all your software' },
  },
];

const processSteps = [
  {
    num: '01',
    title: 'Audit & Strategy',
    desc: 'We map your existing workflows, identify bottlenecks, and design a custom automation blueprint with clear ROI projections.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Custom AI Development',
    desc: 'Our engineers build your automations using Python, LLMs, and enterprise-grade APIs — not drag-and-drop templates.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Deployment & Scaling',
    desc: 'We deploy, monitor, and continuously optimize your automations. As your business grows, the system scales with you.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
];

export default function AIAutomation() {
  const [heroRef, heroVisible] = useScrollReveal();
  const [compareRef, compareVisible] = useScrollReveal({ threshold: 0.1 });
  const [processRef, processVisible] = useScrollReveal({ threshold: 0.1 });
  const [ctaRef, ctaVisible] = useScrollReveal({ threshold: 0.1 });
  const [faqOpenIndex, setFaqOpenIndex] = useState(null);

  useEffect(() => {
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', 'https://xaivon.com/ai-automation');
    return () => {
      if (link && link.parentNode) link.parentNode.removeChild(link);
    };
  }, []);

  return (
    <div className="ai-automation-page">
      <PageMeta
        title="AI Automation — Intelligent Business Process Automation | XAIVON"
        description="Eliminate manual data entry and connect siloed systems with custom AI-powered automation workflows. 70% cost reduction guaranteed."
        url="https://xaivon.com/ai-automation"
      />

      {/* ═══════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════ */}
      <section className="aa-hero" id="aa-hero">
        <div className="aa-hero-glow"></div>
        <div className="container">
          <div ref={heroRef} className={`aa-hero-inner reveal-scale ${heroVisible ? 'visible' : ''}`}>
            <span className="badge">
              <span className="badge-dot"></span>
              AI AUTOMATION
            </span>
            <h1>
              Intelligent <span className="text-gradient-premium">AI Automation</span>
            </h1>
            <p className="aa-hero-subtitle">
              Connect siloed software, eliminate manual data entry, and deploy resilient automated workflows — powered by custom AI, not drag-and-drop templates.
            </p>
            <div className="aa-hero-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">Schedule a Strategy Call</Link>
              <Link to="/roi-calculator" className="btn btn-white btn-lg">Calculate Your Savings</Link>
            </div>
            <div className="aa-hero-proof">
              <div className="aa-proof-item">
                <span className="aa-proof-value">70%</span>
                <span className="aa-proof-label">Cost Reduction</span>
              </div>
              <div className="aa-proof-divider"></div>
              <div className="aa-proof-item">
                <span className="aa-proof-value">2-4 wk</span>
                <span className="aa-proof-label">Deployment</span>
              </div>
              <div className="aa-proof-divider"></div>
              <div className="aa-proof-item">
                <span className="aa-proof-value">99.9%</span>
                <span className="aa-proof-label">Accuracy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          BEFORE vs AFTER
      ═══════════════════════════════════════════════════════════ */}
      <section className="aa-compare section" id="aa-compare">
        <div className="container">
          <div className={`section-header reveal ${compareVisible ? 'visible' : ''}`} ref={compareRef}>
            <span className="badge">
              <span className="badge-dot"></span>
              The Transformation
            </span>
            <h2>Manual Workflows vs. <span className="text-gradient-premium">XAIVON AI</span></h2>
            <p>See exactly what changes when you deploy intelligent automation.</p>
          </div>

          <div className="aa-compare-grid">
            {beforeAfterData.map((item, i) => (
              <div
                key={i}
                className={`aa-compare-row reveal-scale ${compareVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
              >
                <div className="aa-compare-before">
                  <div className="aa-compare-tag aa-tag-before">Before</div>
                  <h4>{item.before.label}</h4>
                  <p>{item.before.detail}</p>
                </div>

                <div className="aa-compare-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>

                <div className="aa-compare-after">
                  <div className="aa-compare-tag aa-tag-after">After</div>
                  <h4>{item.after.label}</h4>
                  <p>{item.after.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          OUR PROCESS
      ═══════════════════════════════════════════════════════════ */}
      <section className="aa-process section" id="aa-process">
        <div className="container">
          <div className={`section-header reveal ${processVisible ? 'visible' : ''}`} ref={processRef}>
            <span className="badge">
              <span className="badge-dot"></span>
              Our Process
            </span>
            <h2>From Audit to <span className="text-gradient-premium">Automation</span></h2>
            <p>A proven 3-step framework that eliminates risk and maximizes ROI.</p>
          </div>

          <div className="aa-process-timeline">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className={`aa-process-step reveal-scale ${processVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${0.15 + i * 0.15}s` }}
              >
                <div className="aa-step-icon-wrap">
                  <div className="aa-step-num">{step.num}</div>
                  <div className="aa-step-icon">{step.icon}</div>
                </div>
                {i < processSteps.length - 1 && <div className="aa-step-connector"></div>}
                <div className="aa-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════════════════ */}
      <section className="aa-faq section" id="aa-faq">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section-header">
            <span className="badge">
              <span className="badge-dot"></span>
              FAQ
            </span>
            <h2>Automation FAQs</h2>
          </div>
          <div className="aa-faq-list">
            {faqData.map((faq, i) => (
              <div key={i} className={`aa-faq-item ${faqOpenIndex === i ? 'aa-faq-open' : ''}`}>
                <button
                  className="aa-faq-question"
                  onClick={() => setFaqOpenIndex(faqOpenIndex === i ? null : i)}
                  aria-expanded={faqOpenIndex === i}
                  type="button"
                >
                  <span>{faq.q}</span>
                  <span className="aa-faq-chevron">▾</span>
                </button>
                <div className="aa-faq-answer-wrap">
                  <div className="aa-faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          BOTTOM CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="aa-bottom-cta section" id="aa-cta">
        <div className="aa-cta-glow"></div>
        <div className="container">
          <div ref={ctaRef} className={`aa-cta-inner reveal-scale ${ctaVisible ? 'visible' : ''}`}>
            <h2>Ready to Automate Your Operations?</h2>
            <p>
              Book a free strategy call. We'll audit your workflows, identify the highest-ROI automation opportunities, and build a custom projection — no obligation.
            </p>
            <div className="aa-cta-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Schedule a Strategy Call
              </Link>
            </div>
            <div className="aa-cta-trust">
              <span>✓ Free Strategy Call</span>
              <span>✓ Custom ROI Projection</span>
              <span>✓ No Obligation</span>
            </div>
          </div>
        </div>
      </section>

      <PricingSection />
      <AIAudit />
    </div>
  );
}
