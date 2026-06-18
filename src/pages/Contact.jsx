import { useState, useEffect } from 'react';
import { PopupButton } from 'react-calendly';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { trackEvent } from '../utils/tracking';
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
    a: 'Absolutely. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We follow enterprise-grade security practices, and never share your data with third parties. Your rate data and client information stays 100% private.',
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

  useEffect(() => {
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', 'https://xaivon.com' + window.location.pathname);
    return () => {
      if (link && link.parentNode) link.parentNode.removeChild(link);
    };
  }, []);

  const [form, setForm] = useState({ name: '', email: '', company: '', message: '', website: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Honeypot check for bots
    if (form.website) {
      console.warn("Spam detected.");
      return;
    }

    if (!validateEmail(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (form.message.length < 10) {
      setError('Please provide more details in your message.');
      return;
    }

    if (cooldown > 0) {
      setError(`Please wait ${cooldown}s before submitting again.`);
      return;
    }

    try {
      setError('');
      setIsSubmitting(true);
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit message.');
      }

      setSubmitted(true);
      setCooldown(60); // 60 second rate limit
      trackEvent('contact_form_submit', { company: form.company });
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
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
          Book a free discovery call or send us a message. We respond within 12 hours.
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
                  <input type="text" id="contact-name" name="name" placeholder="Sarah Smith" value={form.name} onChange={handleChange} required maxLength="50" />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Work Email</label>
                  <input type="email" id="contact-email" name="email" placeholder="sarah@apexlogistics.com" value={form.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-company">Company Name</label>
                  <input type="text" id="contact-company" name="company" placeholder="Apex Freight Brokerage" value={form.company} onChange={handleChange} maxLength="50" />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea id="contact-message" name="message" placeholder="We process 500+ quotes daily and want to automate our rate extraction..." value={form.message} onChange={handleChange} required maxLength="500" />
                </div>
                {error && <div className="form-error" style={{ color: '#ff4d4f', fontSize: '0.9rem', marginBottom: '1rem' }}>{error}</div>}
                
                <div className="contact-trust-message" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  <span>Your information is protected by enterprise-grade security protocols.</span>
                </div>

                <button type="submit" className="btn btn-primary form-submit-btn" id="contact-submit" disabled={cooldown > 0 || isSubmitting}>
                  {isSubmitting ? 'Sending...' : cooldown > 0 ? `Wait ${cooldown}s` : 'Send Message'}
                </button>
              </form>
            </>
          ) : (
            <div className="form-success">
              <span className="form-success-icon">✅</span>
              <h3>Thank you!</h3>
              <p>We've received your message and will get back to you within 12 hours.</p>
            </div>
          )}
        </div>

        {/* Calendly Widget */}
        <div className="glass-card calendly-card" style={{ padding: '3rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }} ref={calendlyRef}>
          <h2 style={{ marginBottom: '1rem' }}>Schedule a Strategy Call</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '400px' }}>
            Choose a time that works for you. We'll discuss your current operations, identify bottlenecks, and build a custom ROI projection.
          </p>
          <div className="calendly-trigger-wrapper">
            {calendlyVisible ? (
              <PopupButton
                url="https://calendly.com/raja-xaivon/30min"
                rootElement={document.getElementById('root')}
                text="Schedule a Strategy Call"
                className="btn btn-primary btn-lg"
                styles={{ width: '100%', maxWidth: '300px' }}
              />
            ) : (
              <button className="btn btn-primary btn-lg" disabled style={{ opacity: 0.7 }}>
                Loading Scheduler...
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section" id="contact-info">
        <div className="contact-info-grid">
          <div className="glass-card contact-info-card">
            <span className="contact-info-icon" role="img" aria-label="Response Time">⏱️</span>
            <p>Response Time &lt; 12 Hours</p>
          </div>
          <div className="glass-card contact-info-card">
            <span className="contact-info-icon" role="img" aria-label="Strategy">📞</span>
            <p>Free Strategy Call</p>
          </div>
          <div className="glass-card contact-info-card">
            <span className="contact-info-icon" role="img" aria-label="Global Support">🌍</span>
            <p>Global Support</p>
          </div>
          <div className="glass-card contact-info-card">
            <span className="contact-info-icon" role="img" aria-label="Security">🔒</span>
            <p>Enterprise-Grade Security</p>
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
