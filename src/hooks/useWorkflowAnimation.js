import { useEffect, useRef, useCallback } from 'react';

export function useWorkflowAnimation() {
  const path1Ref = useRef(null);
  const path2Ref = useRef(null);
  const path3Ref = useRef(null);
  const signalRef = useRef(null);
  const nodesRef = useRef([]);
  const mobilePathRef = useRef(null);
  const mobileSignalRef = useRef(null);

  const setNodeState = useCallback((nodeIndex, state) => {
    const node = nodesRef.current[nodeIndex];
    if (!node) return;
    node.classList.remove('idle', 'active', 'completed');
    node.classList.add(state);
  }, []);

  const setConnectorState = useCallback((connectorEl, state) => {
    if (!connectorEl) return;
    connectorEl.classList.remove('transmitting', 'completed');
    if (state !== 'idle') {
      connectorEl.classList.add(state);
    }
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      // Static completed state for all nodes
      for (let i = 0; i < 8; i++) {
        setNodeState(i, 'completed');
      }
      if (signalRef.current) signalRef.current.style.display = 'none';
      if (mobileSignalRef.current) mobileSignalRef.current.style.display = 'none';
      return;
    }

    let isActive = true;
    let animId;

    // Total cycle: 10 seconds
    // Phase 0 (0.00–0.20): Node 1 active, signal travels path1
    // Phase 1 (0.20–0.40): Node 2 active, signal travels path2
    // Phase 2 (0.40–0.60): Node 3 active, signal travels path3
    // Phase 3 (0.60–0.80): Node 4 active (completion)
    // Phase 4 (0.80–1.00): Reset pause

    const CYCLE_DURATION = 10000;
    const PHASE_COUNT = 5;
    const PHASE_DURATION = 1 / PHASE_COUNT; // 0.2

    const paths = [path1Ref, path2Ref, path3Ref];
    const stateLabels = ['captured', 'validated', 'controlled', 'completed'];

    const updateAnimation = () => {
      if (!isActive) return;

      const now = Date.now();
      const progress = (now % CYCLE_DURATION) / CYCLE_DURATION;
      const currentPhase = Math.min(Math.floor(progress / PHASE_DURATION), PHASE_COUNT - 1);
      const phaseProgress = (progress - currentPhase * PHASE_DURATION) / PHASE_DURATION;

      // Update desktop nodes (indices 0-3) and mobile nodes (indices 4-7)
      for (let i = 0; i < 4; i++) {
        let state;
        if (currentPhase === 4) {
          // Reset phase — brief idle
          state = 'idle';
        } else if (i < currentPhase) {
          state = 'completed';
        } else if (i === currentPhase) {
          state = 'active';
        } else {
          state = 'idle';
        }

        // Desktop node
        setNodeState(i, state);
        // Mobile node
        setNodeState(i + 4, state);

        // Update state text
        const desktopNode = nodesRef.current[i];
        const mobileNode = nodesRef.current[i + 4];
        if (desktopNode) {
          const textEl = desktopNode.querySelector('.wf-state-text');
          if (textEl) {
            if (state === 'active') textEl.textContent = 'processing...';
            else textEl.textContent = stateLabels[i];
          }
        }
        if (mobileNode) {
          const textEl = mobileNode.querySelector('.wf-state-text');
          if (textEl) {
            if (state === 'active') textEl.textContent = 'processing...';
            else textEl.textContent = stateLabels[i];
          }
        }
      }

      // Update connector states
      for (let c = 0; c < 3; c++) {
        const connectorEl = paths[c].current;
        if (currentPhase === 4) {
          setConnectorState(connectorEl, 'idle');
        } else if (c < currentPhase) {
          setConnectorState(connectorEl, 'completed');
        } else if (c === currentPhase) {
          setConnectorState(connectorEl, 'transmitting');
        } else {
          setConnectorState(connectorEl, 'idle');
        }
      }

      // Desktop signal movement
      if (signalRef.current) {
        if (currentPhase < 3) {
          const activePath = paths[currentPhase].current;
          if (activePath) {
            signalRef.current.classList.add('visible');
            const length = activePath.getTotalLength();
            const point = activePath.getPointAtLength(length * phaseProgress);
            signalRef.current.setAttribute('transform', `translate(${point.x}, ${point.y})`);
          }
        } else {
          signalRef.current.classList.remove('visible');
        }
      }

      // Mobile signal movement
      if (mobileSignalRef.current && mobilePathRef.current) {
        if (currentPhase < 4) {
          mobileSignalRef.current.classList.add('visible');
          const totalLength = mobilePathRef.current.getTotalLength();
          // Each phase covers 1/4 of the total path
          const segmentLength = totalLength / 4;
          const travelledLength = currentPhase * segmentLength + phaseProgress * segmentLength;
          const point = mobilePathRef.current.getPointAtLength(Math.min(travelledLength, totalLength));
          mobileSignalRef.current.setAttribute('transform', `translate(${point.x}, ${point.y})`);
        } else {
          mobileSignalRef.current.classList.remove('visible');
        }
      }

      animId = requestAnimationFrame(updateAnimation);
    };

    animId = requestAnimationFrame(updateAnimation);

    return () => {
      isActive = false;
      cancelAnimationFrame(animId);
    };
  }, [setNodeState, setConnectorState]);

  return { path1Ref, path2Ref, path3Ref, signalRef, nodesRef, mobilePathRef, mobileSignalRef };
}
