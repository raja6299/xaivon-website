import React from 'react';

/**
 * XAIVON — Production React Error Boundary
 *
 * Catches render and lifecycle errors in child component trees, logs them
 * securely without exposing sensitive internal details to users, and displays
 * an accessible, brand-aligned fallback UI with clear recovery options.
 *
 * Built using React.createElement for zero-dependency testability across both
 * Vite production bundling and Node native test runner.
 */
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorId: null
    };
  }

  static getDerivedStateFromError() {
    const errorId = typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID().slice(0, 8)
      : Math.random().toString(36).substring(2, 10);
    return { hasError: true, errorId };
  }

  componentDidCatch(error, errorInfo) {
    console.error(`[ErrorBoundary] Render crash (${this.state.errorId}):`, error, errorInfo);
    if (typeof this.props.onError === 'function') {
      try {
        this.props.onError(error, errorInfo, this.state.errorId);
      } catch (loggingErr) {
        console.error('[ErrorBoundary] Error handler failed:', loggingErr);
      }
    }
  }

  handleReload = () => {
    if (typeof window !== 'undefined' && window.location) {
      window.location.reload();
    }
  };

  handleReset = () => {
    this.setState({ hasError: false, errorId: null });
  };

  handleGoHome = () => {
    if (typeof window !== 'undefined' && window.location) {
      window.location.href = '/';
    }
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        if (typeof this.props.fallback === 'function') {
          return this.props.fallback({
            errorId: this.state.errorId,
            reset: this.handleReset,
            reload: this.handleReload
          });
        }
        return this.props.fallback;
      }

      return React.createElement(
        'div',
        {
          role: 'alert',
          'aria-live': 'assertive',
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh',
            padding: '2rem 1.5rem',
            background: 'transparent',
            color: '#f9f9f8',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
          }
        },
        React.createElement(
          'div',
          {
            style: {
              maxWidth: '520px',
              width: '100%',
              padding: '2.5rem',
              backgroundColor: 'rgba(20, 20, 22, 0.95)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.6)',
              textAlign: 'center'
            }
          },
          React.createElement(
            'div',
            {
              style: {
                width: '48px',
                height: '48px',
                margin: '0 auto 1.25rem',
                borderRadius: '12px',
                backgroundColor: 'rgba(217, 119, 6, 0.15)',
                border: '1px solid rgba(217, 119, 6, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#f59e0b',
                fontSize: '22px'
              },
              'aria-hidden': 'true'
            },
            '⚠️'
          ),
          React.createElement(
            'h1',
            {
              style: {
                fontSize: '1.5rem',
                fontWeight: '600',
                marginBottom: '0.75rem',
                color: '#ffffff',
                letterSpacing: '-0.02em'
              }
            },
            'Something went wrong'
          ),
          React.createElement(
            'p',
            {
              style: {
                fontSize: '0.95rem',
                lineHeight: '1.6',
                color: '#a1a1aa',
                marginBottom: '1.75rem'
              }
            },
            'An unexpected display issue interrupted this view. You can reload the page or return to the homepage.'
          ),
          this.state.errorId && React.createElement(
            'p',
            {
              style: {
                fontSize: '0.75rem',
                color: '#71717a',
                marginBottom: '1.75rem',
                fontFamily: 'monospace'
              }
            },
            `Reference: ${this.state.errorId}`
          ),
          React.createElement(
            'div',
            {
              style: {
                display: 'flex',
                gap: '0.75rem',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }
            },
            React.createElement(
              'button',
              {
                type: 'button',
                onClick: this.handleReload,
                style: {
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  backgroundColor: '#ea580c',
                  backgroundImage: 'linear-gradient(135deg, #f97316, #c2410c)',
                  color: '#ffffff',
                  border: 'none',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                }
              },
              'Reload page'
            ),
            React.createElement(
              'button',
              {
                type: 'button',
                onClick: this.handleGoHome,
                style: {
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#e4e4e7',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  fontWeight: '500',
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                }
              },
              'Return to Home'
            )
          )
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
