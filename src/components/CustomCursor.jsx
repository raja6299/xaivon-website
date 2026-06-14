import { useEffect, useState } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.closest('.glass-card')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return null; // Don't show custom cursor on mobile
  }

  return (
    <>
      <div 
        className={`cursor-dot ${isVisible ? 'visible' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
      <div 
        className={`cursor-outline ${isHovering ? 'hovering' : ''} ${isVisible ? 'visible' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
    </>
  );
}
