import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import AIAudit from '../../components/AIAudit';
import PricingSection from '../../components/PricingSection';

const faqData = [
  {
    q: 'What is an AI Agent?',
    a: 'An AI Agent is an autonomous software program that uses LLMs to understand complex goals, plan a sequence of actions, and execute them using external tools like email, CRMs, or databases.'
  },
  {
    q: 'How are agents different from standard automations?',
    a: 'Standard automation (like Zapier) relies on strict "if-this-then-that" rules. If an edge case occurs, it breaks. AI Agents can reason, adapt to unexpected inputs, and handle complex edge cases without human intervention.'
  },
  {
    q: 'Are the agents secure?',
    a: 'Yes. Agents operate within strict permissions. They cannot execute irreversible actions (like sending funds or deleting databases) without explicit human approval thresholds.'
  }
];

export default function AIAgents() {
  const [heroRef, heroVisible] = useScrollReveal();
  const [problemRef, problemVisible] = useScrollReveal({ threshold: 0.1 });
  const [solutionRef, solutionVisible] = useScrollReveal({ threshold: 0.1 });

  useEffect(() => {
    document.title = 'AI Agents | XAIVON';
  }, []);

  return (
    <div className="service-page">
      <section className="service-hero section" style={{ paddingTop: '10rem', textAlign: 'center' }}>
        <div className="container">
          <div ref={heroRef} className={`reveal-scale ${heroVisible ? 'visible' : ''}`}>
            <span className="badge">AI AGENTS</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
              Autonomous <span className="text-gradient-premium">AI Agents</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
              Deploy intelligent digital workers capable of executing complex, multi-step business objectives across your existing software stack.
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
                Traditional software requires constant human management. Even with standard automation tools, employees must handle exceptions, monitor execution, and string together disparate workflows. This results in bottlenecks when volume spikes.
              </p>
            </div>
            <div ref={solutionRef} className={`glass-card reveal-right ${solutionVisible ? 'visible' : ''}`} style={{ borderColor: 'var(--border-accent)' }}>
              <h3 style={{ color: 'var(--color-secondary)', marginBottom: '1rem' }}>The XAIVON Solution</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                We build autonomous agents that act as digital employees. They can research, draft emails, negotiate rates, update CRMs, and solve problems independently, escalating to humans only when defined thresholds are crossed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge">CAPABILITIES</span>
            <h2>What Can AI Agents Do?</h2>
          </div>
          <div className="process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {['Inbox Management', 'Data Extraction', 'Customer Support', 'Sales Outreach'].map((step, i) => (
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
          <h2 className="text-center" style={{ marginBottom: '3rem' }}>AI Agent FAQs</h2>
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
