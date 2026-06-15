import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function NotFound() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div className="not-found-page" style={{ 
      minHeight: '80vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      textAlign: 'center',
      padding: 'var(--section-px)'
    }}>
      <div ref={ref} className={`reveal-scale ${isVisible ? 'visible' : ''}`} style={{ maxWidth: '600px' }}>
        <span className="badge" style={{ marginBottom: '1.5rem' }}>
          <span className="badge-dot" />
          Error 404
        </span>
        <h1 className="text-gradient" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1, marginBottom: '1rem' }}>
          404
        </h1>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
          System Path Not Found
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
          The requested infrastructure endpoint does not exist. It may have been moved, deleted, or you might have mistyped the URL.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary">
            Return to Dashboard
          </Link>
          <Link to="/contact" className="btn btn-white">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
