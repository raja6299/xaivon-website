import { useState, useEffect } from 'react';
import './LoadingScreen.css';

export default function LoadingScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 1500);

    const removeTimer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 2100);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`loading-screen ${isFading ? 'loading-screen-exit' : ''}`}
      aria-label="Loading"
      role="status"
    >
      <div className="loading-screen-inner">
        <h1 className="loading-screen-logo text-gradient-cyan">XAIVON</h1>
        <div className="loading-screen-bar-track">
          <div className="loading-screen-bar-fill"></div>
        </div>
        <p className="loading-screen-text text-muted">Loading...</p>
      </div>
    </div>
  );
}
