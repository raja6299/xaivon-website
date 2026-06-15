import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import AIAudit from '../../components/AIAudit';
import PricingSection from '../../components/PricingSection';

const faqData = [
  {
    q: 'How does QuoteFlow AI extract data from emails?',
    a: 'It uses advanced LLMs fine-tuned for logistics terminology to accurately parse unstructured emails, PDFs, and rate sheets into structured JSON data.'
  },
  {
    q: 'Does it integrate with my TMS?',
    a: 'Yes, QuoteFlow AI is designed to integrate via API directly into modern TMS platforms like Tai, McLeod, and others.'
  },
  {
    q: 'What happens if the AI is unsure about a quote?',
    a: 'We implement confidence thresholds. If a quote falls below the 95% confidence mark, it is flagged for manual human review, ensuring you never send out a bad rate.'
  }
];

export default function QuoteFlowAI() {
  const [heroRef, heroVisible] = useScrollReveal();
  const [problemRef, problemVisible] = useScrollReveal({ threshold: 0.1 });
  const [solutionRef, solutionVisible] = useScrollReveal({ threshold: 0.1 });

  useEffect(() => {
    document.title = 'QuoteFlow AI — Freight Automation | XAIVON';
  }, []);

  return (
    <div className="service-page">
      {/* Hero */}
      <section className="service-hero section" style={{ paddingTop: '10rem', textAlign: 'center' }}>
        <div className="container">
          <div ref={heroRef} className={`reveal-scale ${heroVisible ? 'visible' : ''}`}>
            <span className="badge badge-gold"><span className="badge-dot"></span>FLAGSHIP PRODUCT</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
              QuoteFlow <span className="text-gradient-premium">AI</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
              The definitive AI infrastructure for freight brokers. Automate quoting, parsing, and dispatching. Scale your capacity without scaling headcount.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">Schedule a Strategy Call</Link>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="section-alt">
        <div className="container">
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <div ref={problemRef} className={`glass-card reveal-left ${problemVisible ? 'visible' : ''}`}>
              <h3 style={{ color: '#ff4d4f', marginBottom: '1rem' }}>The Problem</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Freight brokerages are bottlenecked by manual data entry. Your brokers spend 60% of their day reading emails, typing data into the TMS, and calculating margins. This limits how many quotes you can process and introduces human error.
              </p>
            </div>
            <div ref={solutionRef} className={`glass-card reveal-right ${solutionVisible ? 'visible' : ''}`} style={{ borderColor: 'var(--border-accent)' }}>
              <h3 style={{ color: 'var(--color-secondary)', marginBottom: '1rem' }}>The XAIVON Solution</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                QuoteFlow AI ingests your inbox in real-time. It reads the email, extracts the lane data, pings your TMS for historical rates, calculates your margin, and drafts the reply. Your broker simply clicks "Approve."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge">IMPLEMENTATION</span>
            <h2>How We Deploy QuoteFlow AI</h2>
          </div>
          <div className="process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {['Discovery & Audit', 'Custom AI Training', 'TMS Integration', 'Testing & Go-Live'].map((step, i) => (
              <div key={i} className="glass-card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', color: 'var(--color-luxury)', marginBottom: '1rem', fontWeight: '700' }}>0{i+1}</div>
                <h4>{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-alt text-center">
        <div className="container">
          <h2>Projected <span className="text-gradient-premium">Outcomes</span></h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', marginTop: '3rem' }}>
            <div>
              <div style={{ fontSize: '3rem', color: 'var(--color-secondary)', fontWeight: '700' }}>3x</div>
              <div style={{ color: 'var(--text-secondary)' }}>Quote Volume</div>
            </div>
            <div>
              <div style={{ fontSize: '3rem', color: 'var(--color-secondary)', fontWeight: '700' }}>85%</div>
              <div style={{ color: 'var(--text-secondary)' }}>Less Manual Entry</div>
            </div>
            <div>
              <div style={{ fontSize: '3rem', color: 'var(--color-secondary)', fontWeight: '700' }}>12s</div>
              <div style={{ color: 'var(--text-secondary)' }}>Average Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ marginBottom: '3rem' }}>QuoteFlow AI FAQs</h2>
          <div className="faq-list">
            {faqData.map((faq, i) => (
              <div key={i} className="glass-card" style={{ marginBottom: '1rem', padding: '1.5rem' }}>
                <h4 style={{ marginBottom: '0.5rem' }}>{faq.q}</h4>
                <p style={{ color: 'var(--text-secondary)' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PricingSection />
      <AIAudit />
    </div>
  );
}
