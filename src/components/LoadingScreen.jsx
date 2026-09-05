import { useState, useEffect } from 'react';
import './LoadingScreen.css';

export default function LoadingScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Dramatically reduced the artificial delay for faster loading
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 400);

    const removeTimer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 800);

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
        <div className="loading-screen-logo">XAIVON</div>
        <div className="loading-screen-bar-track">
          <div className="loading-screen-bar-fill"></div>
        </div>
        <div className="loading-screen-text">System Initialization</div>
      </div>
    </div>
  );
}
