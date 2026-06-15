import { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './AIAudit.css';

const INDUSTRIES = [
  'Logistics & Freight',
  'Insurance',
  'Healthcare',
  'Real Estate',
  'E-Commerce',
  'Professional Services',
  'Other',
];

const BENEFITS = [
  'Complete operations analysis',
  'AI automation opportunity map',
  'Cost savings projections',
  'Custom implementation roadmap',
  'ROI estimate for your business',
];

export default function AIAudit() {
  const [sectionRef, sectionVisible] = useScrollReveal();
  const [leftRef, leftVisible] = useScrollReveal();
  const [rightRef, rightVisible] = useScrollReveal();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    industry: '',
    challenge: '',
    website: '', // honeypot
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    let timer;
    if (cooldown > 0) {
      timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [cooldown]);

  function validate() {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.industry) {
      newErrors.industry = 'Please select an industry';
    }

    if (!formData.challenge.trim()) {
      newErrors.challenge = 'Please describe your challenge';
    }

    return newErrors;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (formData.website) {
      console.warn("Spam detected.");
      return;
    }

    if (cooldown > 0) {
      setErrors({ form: `Please wait ${cooldown}s before submitting again.` });
      return;
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setSubmitted(true);
    setCooldown(60);
  }

  return (
    <section
      className="ai-audit section"
      id="ai-audit"
      ref={sectionRef}
    >
      {/* Removed background accents for a cleaner enterprise look */}

      <div className="container">
        <div className={`section-header reveal ${sectionVisible ? 'visible' : ''}`}>
          <span className="badge badge-gold">
            <span className="badge-dot"></span>
            Infrastructure Assessment
          </span>
          <h2>
            Request A <span className="text-gradient-gold">Free</span> AI Infrastructure Assessment
          </h2>
          <p>
            Discover how custom AI infrastructure can transform your operational margins. Our engineering team will analyze your existing workflows and deliver a comprehensive automation roadmap.
          </p>
        </div>

        <div className="ai-audit-grid">
          {/* Left Column — Benefits */}
          <div
            className={`ai-audit-benefits reveal-left ${leftVisible ? 'visible' : ''}`}
            ref={leftRef}
          >
            <h3 className="ai-audit-benefits-heading">Your Assessment Deliverables:</h3>
            <ul className="ai-audit-benefits-list">
              {BENEFITS.map((benefit, i) => (
                <li key={i} className={`ai-audit-benefit-item delay-${i + 1}`}>
                  <span className="ai-audit-check" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 10.5L8 14.5L16 6.5" stroke="var(--color-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <p className="ai-audit-trust-text">
              ✦ No obligation. 100% free. Results in 48 hours.
            </p>
          </div>

          {/* Right Column — Form */}
          <div
            className={`ai-audit-form-card glass-card reveal-right ${rightVisible ? 'visible' : ''}`}
            ref={rightRef}
          >
            {submitted ? (
              <div className="ai-audit-success">
                <div className="ai-audit-success-icon" aria-hidden="true">
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="28" cy="28" r="26" stroke="var(--color-luxury)" strokeWidth="2" className="ai-audit-success-circle"/>
                    <path d="M18 28L25 35L38 22" stroke="var(--color-luxury)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ai-audit-success-check"/>
                  </svg>
                </div>
                <h3 className="ai-audit-success-title">Thank You!</h3>
                <p className="ai-audit-success-msg">
                  We will contact you within 48 hours.
                </p>
              </div>
            ) : (
              <form
                className="ai-audit-form"
                onSubmit={handleSubmit}
                noValidate
                id="ai-audit-form"
              >
                {/* Honeypot Field */}
                <input type="text" name="website" value={formData.website} onChange={handleChange} style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
                
                {errors.form && <div className="form-error" style={{ color: '#ff4d4f', fontSize: '0.9rem', marginBottom: '1rem' }}>{errors.form}</div>}
                <div className="form-group">
                  <label className="form-label" htmlFor="audit-name">Name</label>
                  <input
                    className={`form-input ${errors.name ? 'form-input-error' : ''}`}
                    type="text"
                    id="audit-name"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  {errors.name && <span className="ai-audit-error">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="audit-company">Company</label>
                  <input
                    className={`form-input ${errors.company ? 'form-input-error' : ''}`}
                    type="text"
                    id="audit-company"
                    name="company"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                  {errors.company && <span className="ai-audit-error">{errors.company}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="audit-email">Email</label>
                  <input
                    className={`form-input ${errors.email ? 'form-input-error' : ''}`}
                    type="email"
                    id="audit-email"
                    name="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && <span className="ai-audit-error">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="audit-industry">Industry</label>
                  <select
                    className={`form-select ${errors.industry ? 'form-input-error' : ''}`}
                    id="audit-industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select your industry</option>
                    {INDUSTRIES.map((ind) => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                  {errors.industry && <span className="ai-audit-error">{errors.industry}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="audit-challenge">Biggest Challenge</label>
                  <textarea
                    className={`form-textarea ${errors.challenge ? 'form-input-error' : ''}`}
                    id="audit-challenge"
                    name="challenge"
                    placeholder="Tell us about your biggest operational challenge..."
                    value={formData.challenge}
                    onChange={handleChange}
                    required
                  ></textarea>
                  {errors.challenge && <span className="ai-audit-error">{errors.challenge}</span>}
                </div>

                <button
                  type="submit"
                  className="btn btn-gold btn-lg ai-audit-submit"
                  id="audit-submit-btn"
                  disabled={cooldown > 0}
                >
                  {cooldown > 0 ? `Wait ${cooldown}s` : 'Request Assessment →'}
                </button>

                <p className="ai-audit-form-disclaimer">
                  Your information is secure and will never be shared.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
