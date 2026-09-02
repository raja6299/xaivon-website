import { useState, useEffect, useRef } from 'react';

// Require the environment variable immediately
const assistantUrlStr = import.meta.env.VITE_AI_ASSISTANT_URL;
if (!assistantUrlStr) {
  throw new Error("Missing required environment variable VITE_AI_ASSISTANT_URL");
}

const assistantUrl = new URL(assistantUrlStr);
// Ensure we use a clean origin and a clean embed URL
const trustedOrigin = assistantUrl.origin;
const embedSrc = `${assistantUrlStr.replace(/\/+$/, "")}/embed`;

export function ChatEmbed() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const iframeRef = useRef(null);

  // Lazy load iframe only after first interaction
  const handleOpen = () => {
    setIsOpen(true);
    if (!hasOpened) setHasOpened(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // Listen for messages from the iframe (e.g., closing the widget)
  useEffect(() => {
    const handleMessage = (event) => {
      // Security: Only accept messages from the trusted origin derived from the env var
      if (event.origin !== trustedOrigin) return;

      if (event.data?.type === 'XAIVON_CHAT_CLOSE') {
        setIsOpen(false);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 9999 }}>
      {/* Iframe Container */}
      <div 
        style={{
          position: 'absolute',
          bottom: '80px',
          right: 0,
          width: '420px',
          maxWidth: 'calc(100vw - 40px)',
          height: '600px',
          maxHeight: 'calc(100vh - 120px)',
          backgroundColor: 'transparent',
          borderRadius: '16px',
          boxShadow: isOpen ? '0 12px 40px -12px rgba(0,0,0,0.5)' : 'none',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transform: isOpen ? 'scale(1) translateY(0)' : 'scale(0.92) translateY(16px)',
          transformOrigin: 'bottom right',
          transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          overflow: 'hidden',
          display: hasOpened ? 'block' : 'none' // completely hide until first load
        }}
      >
        {hasOpened && (
          <iframe
            ref={iframeRef}
            src={embedSrc}
            style={{ width: '100%', height: '100%', border: 'none', background: 'transparent' }}
            title="XAIVON AI Chat"
            allow="microphone"
          />
        )}
      </div>

      {/* Floating Action Button */}
      <button
        onClick={isOpen ? handleClose : handleOpen}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: isOpen ? '#334155' : '#8b5cf6',
          backgroundImage: isOpen ? 'none' : 'linear-gradient(to bottom right, #8b5cf6, #9333ea)',
          color: 'white',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 10px 25px -5px rgba(139, 92, 246, 0.3)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
          transform: 'scale(1)',
          outline: 'none',
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <div style={{ transition: 'transform 0.15s ease', display: 'flex' }}>
          {isOpen ? (
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
              <circle cx="8" cy="10" r="1"/>
              <circle cx="12" cy="10" r="1"/>
              <circle cx="16" cy="10" r="1"/>
            </svg>
          )}
        </div>
      </button>
    </div>
  );
}
