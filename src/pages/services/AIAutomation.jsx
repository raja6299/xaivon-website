import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import AIAudit from '../../components/AIAudit';
import PricingSection from '../../components/PricingSection';

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

export default function AIAutomation() {
  const [heroRef, heroVisible] = useScrollReveal();
  const [problemRef, problemVisible] = useScrollReveal({ threshold: 0.1 });
  const [solutionRef, solutionVisible] = useScrollReveal({ threshold: 0.1 });

  useEffect(() => {
    document.title = 'AI Automation | XAIVON';
  }, []);

  return (
    <div className="service-page">
      <section className="service-hero section" style={{ paddingTop: '10rem', textAlign: 'center' }}>
        <div className="container">
          <div ref={heroRef} className={`reveal-scale ${heroVisible ? 'visible' : ''}`}>
            <span className="badge">AI AUTOMATION</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
              Business <span className="text-gradient-premium">Process Automation</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
              Connect your siloed software systems, eliminate manual data entry, and streamline your operations with intelligent, resilient automated workflows.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">Schedule a Strategy Call</Link>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <div ref={problemRef} className={`glass-card reveal-left ${problemVisible ? 'visible' : ''}`}>
              <h3 style={{ color: '#ff4d4f', marginBottom: '1rem' }}>The Problem</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Your business relies on 5-10 different software tools that don't talk to each other. Employees waste hours manually copying data from emails to CRMs, or from spreadsheets to accounting software. This creates friction and limits scalability.
              </p>
            </div>
            <div ref={solutionRef} className={`glass-card reveal-right ${solutionVisible ? 'visible' : ''}`} style={{ borderColor: 'var(--border-accent)' }}>
              <h3 style={{ color: 'var(--color-secondary)', marginBottom: '1rem' }}>The XAIVON Solution</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                We build the connective tissue between your systems. By mapping your existing processes, we deploy automations that extract, format, and sync data instantly across your tech stack with zero human intervention.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge">PROCESS</span>
            <h2>How We Automate</h2>
          </div>
          <div className="process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {['Process Mapping', 'API Integration', 'Logic Building', 'Testing & QA'].map((step, i) => (
              <div key={i} className="glass-card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', color: 'var(--color-luxury)', marginBottom: '1rem', fontWeight: '700' }}>0{i+1}</div>
                <h4>{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="text-center" style={{ marginBottom: '3rem' }}>Automation FAQs</h2>
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
