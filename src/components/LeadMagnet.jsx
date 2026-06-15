import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { trackEvent } from '../utils/tracking';

export default function LeadMagnet() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState('');
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, resource: '25-logistics-workflows' })
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe.');
      }

      setStatus('success');
      trackEvent('lead_magnet_download', { resource: '25-logistics-workflows' });
      setEmail('');
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section className="section-alt" ref={sectionRef} id="lead-magnet">
      <div className="container">
        <div className={`glass-card reveal-scale ${isVisible ? 'visible' : ''}`} style={{ padding: '4rem 2rem', textAlign: 'center', borderColor: 'var(--border-accent)' }}>
          <span className="badge badge-gold"><span className="badge-dot"></span>FREE PLAYBOOK</span>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', marginTop: '1.5rem' }}>
            25 Logistics Workflows You Should <span className="text-gradient-premium">Automate Today</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Stop wasting headcount on manual data entry. Download our executive playbook detailing the 25 highest-ROI automations currently used by leading freight brokers.
          </p>

          {status === 'success' ? (
            <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '1.5rem', borderRadius: 'var(--radius-md)', display: 'inline-block' }}>
              <h3 style={{ color: '#10b981', marginBottom: '0.5rem' }}>Success! Playbook Sent.</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Check your inbox in the next 5 minutes.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '500px', margin: '0 auto' }}>
              <input 
                type="email" 
                placeholder="Enter your work email..." 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-input"
                style={{ flex: '1', minWidth: '250px' }}
                disabled={status === 'submitting'}
              />
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending...' : 'Get The Playbook'}
              </button>
            </form>
          )}

          {status === 'error' && (
            <p style={{ color: '#ff4d4f', marginTop: '1rem', fontSize: '0.9rem' }}>{errorMessage}</p>
          )}

          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '1.5rem' }}>
            🔒 We respect your privacy. No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
