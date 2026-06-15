import { useEffect, useRef, useState, useCallback } from 'react';

export function useMouseParallax(intensity = 0.02) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const frameRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (frameRef.current) return;

    frameRef.current = requestAnimationFrame(() => {
      const x = (e.clientX - window.innerWidth / 2) * intensity;
      const y = (e.clientY - window.innerHeight / 2) * intensity;
      setPosition({ x, y });
      frameRef.current = null;
    });
  }, [intensity]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [handleMouseMove]);

  return position;
}

export default useMouseParallax;
