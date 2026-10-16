import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import { InlineWidget } from 'react-calendly';
import { trackEvent } from '../utils/tracking';
import './Contact.css';

const contactFaqData = [
  {
    q: 'How soon can a project begin?',
    a: 'It depends on the scope, access to the required systems and the work already in progress. We will discuss a realistic timeline after reviewing your requirements.'
  },
  {
    q: 'Will XAIVON work with our current tools?',
    a: "We'll check the relevant APIs, permissions and technical limits first. We won't promise a connection before assessing whether it can be implemented safely."
  },
  {
    q: 'What happens if an automated step fails?',
    a: 'We design for the exceptions as well as the ordinary path. Depending on the workflow, that may involve retries, alerts, human review or a manual fallback. The actual safeguards are defined during implementation.'
  },
  {
    q: 'How is business information handled?',
    a: 'Project-specific data handling, access and confidentiality arrangements are agreed during scoping. Our Privacy Policy explains what this website collects when you contact us.'
  },
  {
    q: 'Do you offer fixed implementation prices?',
    a: 'We publish starting prices. A written proposal describes the exact scope, milestones, payment schedule and any separate provider charges.'
  }
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '', website: '' });
  const [submissionId] = useState(() => (typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : ''));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [cooldown, setCooldown] = useState(0);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const formRef = useRef(null);

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

  const handleCopyEmail = () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText('raja@xaivon.com').then(() => {
        setCopied(true);
        setCopyFailed(false);
        setTimeout(() => setCopied(false), 2000);
      }).catch(() => {
        setCopyFailed(true);
        setTimeout(() => setCopyFailed(false), 2500);
      });
    } else {
      setCopyFailed(true);
      setTimeout(() => setCopyFailed(false), 2500);
    }
  };

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check
    if (form.website) {
      return;
    }

    if (!validateEmail(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (form.message.trim().length < 5) {
      setError('Please describe what you would like to improve.');
      return;
    }

    if (cooldown > 0) return;

    setIsSubmitting(true);
    setError('');

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      company: form.company.trim(),
      message: form.message.trim(),
      website: form.website,
      submissionId: submissionId
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.status === 429 || data.rateLimited) {
        setError(data.message || 'Too many requests. Please try again later or email raja@xaivon.com directly for immediate assistance.');
        setCooldown(60);
        return;
      }

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message.');
      }

      trackEvent('contact_form_submit', { company: payload.company });
      setSubmitted(true);
      setCooldown(60);

      // Redirect if specified by server
      if (data.redirect) {
        window.location.href = data.redirect;
      }
    } catch (err) {
      const raw = err.message || '';
      if (raw.toLowerCase().includes('server configuration')) {
        setError("We couldn't send your message right now. Please try again, or email raja@xaivon.com.");
      } else {
        setError(raw || "We couldn't send your message right now. Please try again, or email raja@xaivon.com.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="contact-page">
      <PageMeta />

      {/* Hero */}
      <section className="contact-hero" id="contact-hero" style={{ padding: '80px 0 36px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>CONTACT XAIVON</span>
          <h1 style={{ marginTop: '14px', fontSize: 'clamp(2.25rem, 3.2vw, 3rem)', lineHeight: 1.15 }}>
            Let&apos;s look at the work you&apos;re trying to improve.
          </h1>
          <p style={{ marginTop: '16px', maxWidth: '68ch', marginInline: 'auto', color: 'var(--muted)', fontSize: 'clamp(16px, 1.25vw, 17.5px)', lineHeight: 1.65 }}>
            Tell us what your team handles today, where the work gets stuck and which tools are involved. We&apos;ll review the request and discuss whether automation is a practical fit.
          </p>
        </div>
      </section>

      {/* Primary Contact Card Banner */}
      <section className="section tight">
        <div className="container" style={{ maxWidth: '960px' }}>
          <div className="surface card" style={{ padding: '28px 32px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
            <div>
              <span className="eyebrow">DIRECT CONTACT</span>
              <h2 style={{ fontSize: '20px', margin: '6px 0 4px' }}>Business enquiries</h2>
              <p style={{ fontSize: '14px', color: 'var(--muted)', margin: 0 }}>For new projects, partnerships and general questions.</p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <a href="mailto:raja@xaivon.com" style={{ fontWeight: 650, color: 'var(--accent)' }}>raja@xaivon.com</a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  style={{
                    background: 'var(--bg-soft)',
                    border: '1px solid var(--line)',
                    borderRadius: '6px',
                    padding: '3px 8px',
                    fontSize: '11px',
                    cursor: 'pointer',
                    color: copyFailed ? 'var(--danger)' : 'var(--muted)'
                  }}
                >
                  {copied ? 'Copied' : copyFailed ? 'Failed' : 'Copy'}
                </button>
              </div>
              <span style={{ color: 'var(--line)' }}>|</span>
              <a href="tel:+919521190205" style={{ fontWeight: 650, color: 'var(--ink)' }}>+91 95211 90205</a>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={scrollToForm}
              >
                Send an enquiry ↓
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Two-Column Layout: Form + Scheduling */}
      <section className="contact-section-wrap" id="contact-form-section" ref={formRef}>
        <div className="contact-columns">
          {/* Contact Form */}
          <div className="surface card contact-form-card" style={{ padding: '36px', position: 'relative' }}>
            {!submitted ? (
              <>
                <h2 style={{ fontSize: '22px', marginBottom: '8px' }}>Tell us what you need</h2>
                <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '24px' }}>
                  Provide details about your current process and goals.
                </p>
                <form onSubmit={handleSubmit} id="contact-form">
                  {/* Honeypot Field */}
                  <input type="text" name="website" value={form.website} onChange={handleChange} style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

                  <div className="field" style={{ marginBottom: '16px' }}>
                    <label htmlFor="contact-name" style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                      Your name *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      placeholder="How should we address you?"
                      value={form.name}
                      onChange={handleChange}
                      required
                      maxLength="100"
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--line)', background: 'var(--bg)', color: 'var(--ink)' }}
                    />
                  </div>

                  <div className="field" style={{ marginBottom: '16px' }}>
                    <label htmlFor="contact-email" style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                      Work email *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      maxLength="100"
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--line)', background: 'var(--bg)', color: 'var(--ink)' }}
                    />
                  </div>

                  <div className="field" style={{ marginBottom: '16px' }}>
                    <label htmlFor="contact-company" style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                      Company / organisation (optional)
                    </label>
                    <input
                      type="text"
                      id="contact-company"
                      name="company"
                      placeholder="Company name"
                      value={form.company}
                      onChange={handleChange}
                      maxLength="100"
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--line)', background: 'var(--bg)', color: 'var(--ink)' }}
                    />
                  </div>

                  <div className="field" style={{ marginBottom: '20px' }}>
                    <label htmlFor="contact-message" style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                      What would you like to improve? *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="4"
                      placeholder="Describe the task, how it works today and which systems are involved."
                      value={form.message}
                      onChange={handleChange}
                      required
                      maxLength="2000"
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--line)', background: 'var(--bg)', color: 'var(--ink)', resize: 'vertical' }}
                    />
                  </div>

                  {error && <div className="form-error" style={{ color: 'var(--danger)', fontSize: '13px', marginBottom: '16px' }}>{error}</div>}

                  <p style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '16px', lineHeight: 1.5 }}>
                    We&apos;ll use these details to respond to your enquiry. See our <Link to="/privacy-policy" style={{ textDecoration: 'underline' }}>Privacy Policy</Link>.
                  </p>

                  <button
                    type="submit"
                    className="btn btn-primary form-submit-btn"
                    id="contact-submit"
                    disabled={cooldown > 0 || isSubmitting}
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    {isSubmitting ? 'Sending…' : cooldown > 0 ? `Wait ${cooldown}s` : 'Send enquiry'}
                  </button>
                </form>
              </>
            ) : (
              <div className="form-success" style={{ textAlign: 'center', padding: '32px 16px' }}>
                <span style={{ fontSize: '36px', display: 'block', marginBottom: '16px' }}>✅</span>
                <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Message received</h3>
                <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.6 }}>
                  Thanks. Your message was received. We will review it and contact you using the details you provided.
                </p>
              </div>
            )}
          </div>

          {/* Scheduling Card */}
          <div className="surface card calendly-card" id="calendly-embed" style={{ padding: '36px' }}>
            <div className="calendly-card-header" style={{ marginBottom: '20px' }}>
              <span className="eyebrow">SCHEDULE A MEETING</span>
              <h2 style={{ fontSize: '22px', margin: '8px 0 6px' }}>Prefer a conversation?</h2>
              <p style={{ fontSize: '14px', color: 'var(--muted)', margin: 0, lineHeight: 1.5 }}>
                You can request an assessment of your workflow. Meeting availability depends on the connected scheduling calendar.
              </p>
            </div>
            <div className="calendly-embed-wrapper" style={{ minHeight: '520px', background: 'var(--bg)', borderRadius: '12px', overflow: 'hidden' }}>
              <InlineWidget
                url="https://calendly.com/raja-xaivon/30min"
                styles={{ height: '540px', width: '100%', minWidth: '280px' }}
                pageSettings={{
                  hideEventTypeDetails: false,
                  hideLandingPageDetails: false,
                  hideGdprBanner: true,
                }}
              />
            </div>
            <div style={{ marginTop: '12px', fontSize: '12px', color: 'var(--muted)', textAlign: 'center' }}>
              If the booking calendar does not load in your browser, email us directly at{' '}
              <a href="mailto:raja@xaivon.com" style={{ color: 'var(--accent)', fontWeight: 600 }}>raja@xaivon.com</a>.
            </div>
          </div>
        </div>
      </section>

      {/* Business Identity Block */}
      <section className="section tight">
        <div className="container" style={{ maxWidth: '960px' }}>
          <div className="surface card" style={{ padding: '32px' }}>
            <div className="eyebrow">REGISTRATION &amp; ENTITY DETAILS</div>
            <h2 style={{ fontSize: '20px', margin: '8px 0 12px' }}>Business &amp; legal correspondence</h2>
            <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '20px' }}>
              XAIVON is a business brand operated by ADABHRA GROUP, a sole proprietorship registered as a micro enterprise under India&apos;s Udyam registration system.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', fontSize: '13px' }}>
              <div style={{ padding: '12px 16px', background: 'var(--bg)', borderRadius: '8px', border: '1px solid var(--line)' }}>
                <span style={{ color: 'var(--muted)', display: 'block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>Registered enterprise</span>
                <strong style={{ color: 'var(--ink)' }}>ADABHRA GROUP</strong>
              </div>
              <div style={{ padding: '12px 16px', background: 'var(--bg)', borderRadius: '8px', border: '1px solid var(--line)' }}>
                <span style={{ color: 'var(--muted)', display: 'block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>Legal correspondence email</span>
                <a href="mailto:raja969384bth@gmail.com" style={{ color: 'var(--accent)', fontWeight: 600 }}>raja969384bth@gmail.com</a>
              </div>
              <div style={{ padding: '12px 16px', background: 'var(--bg)', borderRadius: '8px', border: '1px solid var(--line)' }}>
                <span style={{ color: 'var(--muted)', display: 'block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>Registered location</span>
                <span style={{ color: 'var(--ink)' }}>West Champaran, Bihar, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Assistance / Project Support Subsection */}
      <section className="section tight" id="support">
        <div className="container" style={{ maxWidth: '960px' }}>
          <div className="surface card" style={{ padding: '32px', background: 'var(--bg-soft)', border: '1px solid var(--line)' }}>
            <span className="eyebrow">EXISTING ENGAGEMENTS</span>
            <h2 style={{ fontSize: '20px', margin: '8px 0 10px' }}>Need help with an existing project?</h2>
            <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '20px' }}>
              If you&apos;re already working with XAIVON, email us with your project reference and a short description of the issue. Please do not include passwords, API keys or sensitive customer records in your initial message.
            </p>
            <div>
              <a
                className="btn btn-primary btn-sm"
                href="mailto:raja@xaivon.com?subject=XAIVON%20Project%20Support"
              >
                Email support ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact FAQ */}
      <section className="contact-faq section" id="faq">
        <div className="container" style={{ maxWidth: '960px' }}>
          <div className="section-head">
            <div>
              <div className="eyebrow">FAQ</div>
              <h2>Questions before you reach out</h2>
            </div>
          </div>
          <div className="faq-list">
            {contactFaqData.map((item, index) => (
              <details
                className="faq reveal in"
                key={index}
                open={openFaq === index}
                onClick={(e) => {
                  e.preventDefault();
                  toggleFaq(index);
                }}
              >
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
