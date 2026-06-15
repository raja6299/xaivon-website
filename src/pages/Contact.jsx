import { useState, useEffect } from 'react';
import { InlineWidget } from 'react-calendly';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Contact.css';

const faqData = [
  {
    q: 'How long does it take to set up QuoteFlow AI?',
    a: 'Typically 2–3 weeks from kickoff to going live. This includes integration with your email, TMS, and rate databases. Week 1 is discovery and setup, Week 2 is testing, and Week 3 is go-live with support.',
  },
  {
    q: 'What does it cost?',
    a: 'Pricing is customized based on the scope of your automation needs. We offer a free discovery call to audit your operations and provide a detailed ROI projection and proposal.',
  },
  {
    q: 'Is my data secure?',
    a: 'Absolutely. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We follow enterprise-grade security practices, are SOC 2 compliant, and never share your data with third parties. Your rate data and client information stays 100% private.',
  },
  {
    q: 'Will it work with my existing TMS?',
    a: 'Yes. QuoteFlow AI integrates with most major TMS platforms including Tai TMS, McLeod, TMW, and others. It also works with Gmail, Outlook, and Google Sheets. If you use a custom system, we can build a custom integration.',
  },
  {
    q: 'What if the AI makes a mistake?',
    a: 'You can set confidence thresholds. Low-confidence quotes are flagged for human review before sending. You always maintain full control. Our AI achieves enterprise-grade accuracy and continuously learns from your operations to adapt to edge cases.',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '', website: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [cooldown, setCooldown] = useState(0);
  const [error, setError] = useState('');
  const [calendlyRef, calendlyVisible] = useScrollReveal({ threshold: 0.1 });

  useEffect(() => {
    let timer;
    if (cooldown > 0) {
      timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [cooldown]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Honeypot check for bots
    if (form.website) {
      console.warn("Spam detected.");
      return;
    }

    // Basic sanitization (strip HTML tags)
    const sanitize = (str) => str.replace(/<[^>]*>?/gm, '');
    const sanitizedForm = {
      name: sanitize(form.name),
      email: sanitize(form.email),
      company: sanitize(form.company),
      message: sanitize(form.message),
    };

    if (!validateEmail(sanitizedForm.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (sanitizedForm.message.length < 10) {
      setError('Please provide more details in your message.');
      return;
    }

    if (cooldown > 0) {
      setError(`Please wait ${cooldown}s before submitting again.`);
      return;
    }

    setSubmitted(true);
    setCooldown(60); // 60 second rate limit
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero" id="contact-hero">
        <span className="badge">GET IN TOUCH</span>
        <h1 className="text-gradient">Let's Talk About Your Operations</h1>
        <p className="contact-hero-desc">
          Book a free discovery call or send us a message. We typically respond within 24 hours.
        </p>
      </section>

      {/* Two-Column Layout */}
      <section className="contact-columns" id="contact-form-section">
        {/* Contact Form */}
        <div className="glass-card contact-form-card">
          {!submitted ? (
            <>
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit} id="contact-form">
                {/* Honeypot Field */}
                <input type="text" name="website" value={form.website} onChange={handleChange} style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
                
                <div className="form-group">
                  <label htmlFor="contact-name">Full Name</label>
                  <input type="text" id="contact-name" name="name" placeholder="John Doe" value={form.name} onChange={handleChange} required maxLength="50" />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email</label>
                  <input type="email" id="contact-email" name="email" placeholder="john@example.com" value={form.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-company">Company Name</label>
                  <input type="text" id="contact-company" name="company" placeholder="Acme Logistics" value={form.company} onChange={handleChange} maxLength="50" />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea id="contact-message" name="message" placeholder="Tell us about your operations and what you'd like to automate..." value={form.message} onChange={handleChange} required maxLength="500" />
                </div>
                {error && <div className="form-error" style={{ color: '#ff4d4f', fontSize: '0.9rem', marginBottom: '1rem' }}>{error}</div>}
                <button type="submit" className="btn btn-primary form-submit-btn" id="contact-submit" disabled={cooldown > 0}>
                  {cooldown > 0 ? `Wait ${cooldown}s` : 'Send Message'}
                </button>
              </form>
            </>
          ) : (
            <div className="form-success">
              <span className="form-success-icon">✅</span>
              <h3>Thank you!</h3>
              <p>We've received your message and will get back to you within 24 hours.</p>
            </div>
          )}
        </div>

        {/* Calendly Widget */}
        <div className="glass-card calendly-card" style={{ padding: '1rem', height: '100%' }} ref={calendlyRef}>
          <h2 style={{ marginBottom: '1rem' }}>Schedule a Discovery Call</h2>
          <div className="calendly-skeleton" style={{ width: '100%', height: '700px', borderRadius: '10px', overflow: 'hidden', background: 'rgba(255, 255, 255, 0.02)' }}>
            {calendlyVisible ? (
              <InlineWidget 
                url="https://calendly.com/raja-xaivon/30min"
                styles={{ height: '100%', width: '100%' }}
                pageSettings={{
                  backgroundColor: '0A0D15',
                  hideEventTypeDetails: false,
                  hideLandingPageDetails: false,
                  primaryColor: '60A5FA',
                  textColor: 'FFFFFF'
                }}
              />
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--text-muted)' }}>
                <span className="badge badge-gold"><span className="badge-dot"></span>Loading Scheduler...</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section" id="contact-info">
        <div className="contact-info-grid">
          <div className="glass-card contact-info-card">
            <span className="contact-info-icon" role="img" aria-label="Email">📧</span>
            <p><a href="mailto:raja@xaivon.com">raja@xaivon.com</a></p>
          </div>
          <div className="glass-card contact-info-card">
            <span className="contact-info-icon" role="img" aria-label="Response Time">⏰</span>
            <p>Within 24 hours</p>
          </div>
          <div className="glass-card contact-info-card">
            <span className="contact-info-icon" role="img" aria-label="Location">🌍</span>
            <p>Serving clients worldwide</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="contact-faq" id="faq">
        <div className="faq-header">
          <span className="badge">FAQ</span>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div className={`faq-item${openFaq === index ? ' faq-open' : ''}`} key={index}>
              <button
                className="faq-question"
                onClick={() => toggleFaq(index)}
                aria-expanded={openFaq === index}
                id={`faq-toggle-${index}`}
                type="button"
              >
                <span>{item.q}</span>
                <span className="faq-chevron">▾</span>
              </button>
              <div className="faq-answer-wrapper">
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
