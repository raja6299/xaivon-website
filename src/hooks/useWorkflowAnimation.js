import { useEffect, useRef } from 'react';

export function useWorkflowAnimation() {
  const path1Ref = useRef(null);
  const path2Ref = useRef(null);
  const path3Ref = useRef(null);
  const signalRef = useRef(null);
  const nodesRef = useRef([]);

  useEffect(() => {
    // Check for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      // Set to completed state
      nodesRef.current.forEach((node) => {
        if (node) node.classList.add('completed');
      });
      if (signalRef.current) signalRef.current.style.display = 'none';
      return;
    }

    let isActive = true;
    const totalDuration = 8000; // 8 seconds per loop
    
    // Animate paths natively using Web Animations API (if desired for exact sync)
    // Actually, CSS keyframes / SVG animateMotion is lighter, but since the hook is requested:
    // We will use JS to toggle node classes precisely.

    const updateStates = () => {
      if (!isActive) return;
      const now = Date.now();
      const progress = (now % totalDuration) / totalDuration; // 0 to 1

      // 4 phases: 
      // 0.00 - 0.25: Node 1 active, signal moves from 1 to 2
      // 0.25 - 0.50: Node 2 active, signal moves from 2 to 3
      // 0.50 - 0.75: Node 3 active, signal moves from 3 to 4
      // 0.75 - 1.00: Node 4 active, reset

      nodesRef.current.forEach((node, i) => {
        if (!node) return;
        node.classList.remove('active', 'completed', 'idle');
        const stepIndex = i % 4;
        const phaseStart = stepIndex * 0.25;
        const phaseEnd = phaseStart + 0.25;

        if (progress >= phaseStart && progress < phaseEnd) {
          node.classList.add('active');
        } else if (progress >= phaseEnd) {
          node.classList.add('completed');
        } else {
          node.classList.add('idle');
        }
      });

      // Signal movement
      if (signalRef.current) {
        let activePath = null;
        let pathProgress = 0;

        if (progress >= 0 && progress < 0.25) {
          activePath = path1Ref.current;
          pathProgress = progress / 0.25;
        } else if (progress >= 0.25 && progress < 0.5) {
          activePath = path2Ref.current;
          pathProgress = (progress - 0.25) / 0.25;
        } else if (progress >= 0.5 && progress < 0.75) {
          activePath = path3Ref.current;
          pathProgress = (progress - 0.5) / 0.25;
        } else {
          // Hide signal during phase 4
          signalRef.current.style.opacity = 0;
        }

        if (activePath) {
          signalRef.current.style.opacity = 1;
          const length = activePath.getTotalLength();
          const point = activePath.getPointAtLength(length * pathProgress);
          signalRef.current.setAttribute('transform', `translate(${point.x}, ${point.y})`);
        }
      }

      requestAnimationFrame(updateStates);
    };

    const animId = requestAnimationFrame(updateStates);
    return () => {
      isActive = false;
      cancelAnimationFrame(animId);
    };
  }, []);

  return { path1Ref, path2Ref, path3Ref, signalRef, nodesRef };
}
