import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import AIAudit from '../../components/AIAudit';
import PricingSection from '../../components/PricingSection';

const faqData = [
  {
    q: 'How is this different from old chatbots?',
    a: 'Old chatbots relied on rigid decision trees (press 1 for X, press 2 for Y). Our chatbots use Large Language Models (LLMs) trained on your specific business data. They understand natural language, intent, and context, providing human-like responses.'
  },
  {
    q: 'Can the chatbot capture leads?',
    a: 'Yes. Our chatbots are designed to identify intent. If a user asks about pricing or services, the bot can naturally ask for their email or phone number and push that data directly into your CRM.'
  },
  {
    q: 'What happens if the AI does not know the answer?',
    a: 'We configure strict fallbacks. If the chatbot cannot confidently answer based on its training data, it seamlessly escalates the conversation to a human agent.'
  }
];

export default function AIChatbots() {
  const [heroRef, heroVisible] = useScrollReveal();
  const [problemRef, problemVisible] = useScrollReveal({ threshold: 0.1 });
  const [solutionRef, solutionVisible] = useScrollReveal({ threshold: 0.1 });

  useEffect(() => {
    document.title = 'AI Chatbots & Voice Agents | XAIVON';
  }, []);

  return (
    <div className="service-page">
      <section className="service-hero section" style={{ paddingTop: '10rem', textAlign: 'center' }}>
        <div className="container">
          <div ref={heroRef} className={`reveal-scale ${heroVisible ? 'visible' : ''}`}>
            <span className="badge">AI CHATBOTS</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
              Omnichannel <span className="text-gradient-premium">AI Assistants</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
              Deploy intelligent chatbots and voice agents that provide 24/7 customer support, capture leads, and resolve issues autonomously.
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
                Providing 24/7 customer support requires immense headcount and operational overhead. Missed calls or delayed email responses outside of business hours directly result in lost revenue and dissatisfied customers.
              </p>
            </div>
            <div ref={solutionRef} className={`glass-card reveal-right ${solutionVisible ? 'visible' : ''}`} style={{ borderColor: 'var(--border-accent)' }}>
              <h3 style={{ color: 'var(--color-secondary)', marginBottom: '1rem' }}>The XAIVON Solution</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                We deploy AI agents trained exclusively on your knowledge base. They engage customers on your website, via SMS, or over the phone, instantly answering FAQs, capturing leads, and booking appointments 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge">DEPLOYMENT</span>
            <h2>Supported Channels</h2>
          </div>
          <div className="process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {['Website Widget', 'Inbound Voice AI', 'SMS & WhatsApp', 'Social Media DMs'].map((step, i) => (
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
          <h2 className="text-center" style={{ marginBottom: '3rem' }}>Chatbot FAQs</h2>
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
