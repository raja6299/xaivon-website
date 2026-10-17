import { useState, useEffect, useRef, useCallback } from 'react';

export const WORKFLOW_PHASES = [
  {
    id: 0,
    name: 'INGESTION',
    stepNumber: '01',
    label: 'Customer Request Ingested',
    detail: 'Enquiry captured across web, email and API channels',
    statusText: 'Captured',
    activeNodeId: 'node-ingest',
    activePath: 'path-1',
    tickerMessage: '01 / INGESTION: Customer enquiry captured via secure multi-channel intake',
  },
  {
    id: 1,
    name: 'TRIAGE',
    stepNumber: '02',
    label: 'Intent & Context Classified',
    detail: 'Intent classified, parameters extracted, validated',
    statusText: 'Validated',
    activeNodeId: 'node-understand',
    activePath: 'path-2',
    tickerMessage: '02 / UNDERSTAND: Context extracted & intent validated against schema',
  },
  {
    id: 2,
    name: 'RULES',
    stepNumber: '03',
    label: 'Business Rules Evaluated',
    detail: 'Deterministic constraints and SLA checks applied',
    statusText: 'Evaluated',
    activeNodeId: 'node-rules',
    activePath: 'path-3',
    tickerMessage: '03 / POLICY: Evaluating enterprise guardrails & routing conditions',
  },
  {
    id: 3,
    name: 'DECISION',
    stepNumber: '04',
    label: 'Human Review Gate Triggered',
    detail: 'High-impact threshold requires operator validation',
    statusText: 'Reviewing',
    activeNodeId: 'node-human',
    activePath: 'path-4',
    tickerMessage: '04 / GOVERNANCE: High-impact threshold identified — routed to Human Review',
  },
  {
    id: 4,
    name: 'EXECUTION',
    stepNumber: '05',
    label: 'Approved Action & CRM Sync',
    detail: 'Signed-off action executed, audit trail logged',
    statusText: 'Completed',
    activeNodeId: 'node-action',
    activePath: 'path-5',
    tickerMessage: '05 / DISPATCH: Verified action executed & immutable audit log written',
  },
  {
    id: 5,
    name: 'RESET_PAUSE',
    stepNumber: '00',
    label: 'Cycle Completed',
    detail: 'All steps verified. Preparing next orchestration cycle',
    statusText: 'Synchronized',
    activeNodeId: null,
    activePath: null,
    tickerMessage: 'Workflow orchestration cycle completed — pipeline ready for next intake',
  },
];

const PHASE_DURATIONS = [2000, 2000, 2000, 2400, 2000, 1200];
const TOTAL_CYCLE_DURATION = PHASE_DURATIONS.reduce((a, b) => a + b, 0); // 11,600ms (~11.6s)

export function useWorkflowAnimation() {
  const containerRef = useRef(null);
  const nodeRefs = useRef({});
  const animFrameRef = useRef(null);
  const startTimeRef = useRef(null);

  const [isReducedMotion, setIsReducedMotion] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  const [currentPhase, setCurrentPhase] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return 4;
      }
    }
    return 0;
  });

  const [isPlaying, setIsPlaying] = useState(true);
  const [isUserPaused, setIsUserPaused] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const [paths, setPaths] = useState({
    path1: '',
    path2: '',
    path3Routine: '',
    path3Human: '',
    path4Routine: '',
    path4Human: '',
    mobilePath: '',
  });
  const [signalPos, setSignalPos] = useState({ x: -100, y: -100, visible: false });

  // Node registration callback
  const registerNode = useCallback((id, el) => {
    if (el) {
      nodeRefs.current[id] = el;
    } else {
      delete nodeRefs.current[id];
    }
  }, []);

  // Compute anchor coordinates dynamically based on actual rendered card rects
  const updateConnectorPaths = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const cRect = container.getBoundingClientRect();
    if (cRect.width === 0 || cRect.height === 0) return;

    const getCenterPort = (el) => {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return {
        top: { x: r.left + r.width / 2 - cRect.left, y: r.top - cRect.top },
        bottom: { x: r.left + r.width / 2 - cRect.left, y: r.bottom - cRect.top },
        left: { x: r.left - cRect.left, y: r.top + r.height / 2 - cRect.top },
        right: { x: r.right - cRect.left, y: r.top + r.height / 2 - cRect.top },
        center: { x: r.left + r.width / 2 - cRect.left, y: r.top + r.height / 2 - cRect.top },
        rect: {
          x: r.left - cRect.left,
          y: r.top - cRect.top,
          width: r.width,
          height: r.height,
        },
      };
    };

    const n1 = getCenterPort(nodeRefs.current['node-ingest']);
    const n2 = getCenterPort(nodeRefs.current['node-understand']);
    const n3 = getCenterPort(nodeRefs.current['node-rules']);
    const n4Routine = getCenterPort(nodeRefs.current['node-routine']);
    const n4Human = getCenterPort(nodeRefs.current['node-human']);
    const n5 = getCenterPort(nodeRefs.current['node-action']);

    // Check if layout is mobile/vertical (container width < 520)
    const isMobileLayout = cRect.width < 520;

    if (isMobileLayout) {
      // Clean vertical spine connecting stacked cards
      let mobileD = '';
      const order = [n1, n2, n3, n4Routine, n4Human, n5].filter(Boolean);
      for (let i = 0; i < order.length - 1; i++) {
        const from = order[i].bottom;
        const to = order[i + 1].top;
        if (i === 0) {
          mobileD += `M ${from.x.toFixed(1)} ${from.y.toFixed(1)} L ${to.x.toFixed(1)} ${to.y.toFixed(1)} `;
        } else {
          mobileD += `M ${from.x.toFixed(1)} ${from.y.toFixed(1)} L ${to.x.toFixed(1)} ${to.y.toFixed(1)} `;
        }
      }
      setPaths({
        path1: '',
        path2: '',
        path3Routine: '',
        path3Human: '',
        path4Routine: '',
        path4Human: '',
        mobilePath: mobileD,
      });
      return;
    }

    if (!n1 || !n2 || !n3 || !n4Routine || !n4Human || !n5) return;

    // Desktop paths:
    // Path 1: horizontal between n1.right and n2.left
    const p1 = `M ${n1.right.x.toFixed(1)} ${n1.right.y.toFixed(1)} L ${n2.left.x.toFixed(1)} ${n2.left.y.toFixed(1)}`;

    // Path 2: horizontal between n2.right and n3.left
    const p2 = `M ${n2.right.x.toFixed(1)} ${n2.right.y.toFixed(1)} L ${n3.left.x.toFixed(1)} ${n3.left.y.toFixed(1)}`;

    // Path 3 Routine: branch from n3.bottom (or n3 center-bottom) to n4Routine.top
    const p3MidY = (n3.bottom.y + n4Routine.top.y) / 2;
    const p3R = `M ${n3.bottom.x.toFixed(1)} ${n3.bottom.y.toFixed(1)} C ${n3.bottom.x.toFixed(1)} ${p3MidY.toFixed(1)}, ${n4Routine.top.x.toFixed(1)} ${p3MidY.toFixed(1)}, ${n4Routine.top.x.toFixed(1)} ${n4Routine.top.y.toFixed(1)}`;

    // Path 3 Human: branch from n3.bottom to n4Human.top
    const p3H = `M ${n3.bottom.x.toFixed(1)} ${n3.bottom.y.toFixed(1)} C ${n3.bottom.x.toFixed(1)} ${p3MidY.toFixed(1)}, ${n4Human.top.x.toFixed(1)} ${p3MidY.toFixed(1)}, ${n4Human.top.x.toFixed(1)} ${n4Human.top.y.toFixed(1)}`;

    // Path 4 Routine: from n4Routine.bottom to n5.top
    const p4MidY = (n4Routine.bottom.y + n5.top.y) / 2;
    const p4R = `M ${n4Routine.bottom.x.toFixed(1)} ${n4Routine.bottom.y.toFixed(1)} C ${n4Routine.bottom.x.toFixed(1)} ${p4MidY.toFixed(1)}, ${n5.top.x.toFixed(1)} ${p4MidY.toFixed(1)}, ${n5.top.x.toFixed(1)} ${n5.top.y.toFixed(1)}`;

    // Path 4 Human: from n4Human.bottom to n5.top
    const p4H = `M ${n4Human.bottom.x.toFixed(1)} ${n4Human.bottom.y.toFixed(1)} C ${n4Human.bottom.x.toFixed(1)} ${p4MidY.toFixed(1)}, ${n5.top.x.toFixed(1)} ${p4MidY.toFixed(1)}, ${n5.top.x.toFixed(1)} ${n5.top.y.toFixed(1)}`;

    setPaths({
      path1: p1,
      path2: p2,
      path3Routine: p3R,
      path3Human: p3H,
      path4Routine: p4R,
      path4Human: p4H,
      mobilePath: '',
    });
  }, []);

  // Listen to prefers-reduced-motion dynamically
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionChange = (e) => {
      setIsReducedMotion(e.matches);
      if (e.matches) {
        setCurrentPhase(4);
        setSignalPos({ x: -100, y: -100, visible: false });
      }
    };
    if (mq.addEventListener) {
      mq.addEventListener('change', handleMotionChange);
      return () => mq.removeEventListener('change', handleMotionChange);
    } else {
      mq.addListener(handleMotionChange);
      return () => mq.removeListener(handleMotionChange);
    }
  }, []);

  // Pause when offscreen via IntersectionObserver
  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Pause when tab is hidden
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        setIsPlaying(false);
      } else if (!isUserPaused && !isReducedMotion) {
        setIsPlaying(true);
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, [isUserPaused, isReducedMotion]);

  // ResizeObserver to recompute paths cleanly on container/viewport change
  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof ResizeObserver === 'undefined') return;

    let resizeTimer;
    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(resizeTimer);
      resizeTimer = requestAnimationFrame(updateConnectorPaths);
    });

    ro.observe(container);
    // Also recompute after fonts load or slight delay
    const initialTimer = setTimeout(updateConnectorPaths, 100);

    return () => {
      ro.disconnect();
      cancelAnimationFrame(resizeTimer);
      clearTimeout(initialTimer);
    };
  }, [updateConnectorPaths]);

  // Main deterministic animation controller
  useEffect(() => {
    if (isReducedMotion) {
      return;
    }

    const shouldAnimate = isPlaying && !isUserPaused && isInView && !document.hidden;
    if (!shouldAnimate) {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
      return;
    }

    let localStartTime = null;

    const step = (timestamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }
      if (!localStartTime) {
        localStartTime = timestamp;
      }

      const elapsed = (timestamp - startTimeRef.current) % TOTAL_CYCLE_DURATION;

      // Determine current phase from elapsed time
      let accumulated = 0;
      let phaseIndex = 0;
      let phaseElapsed = 0;

      for (let i = 0; i < PHASE_DURATIONS.length; i++) {
        const d = PHASE_DURATIONS[i];
        if (elapsed < accumulated + d) {
          phaseIndex = i;
          phaseElapsed = elapsed - accumulated;
          break;
        }
        accumulated += d;
      }

      setCurrentPhase(phaseIndex);

      // Calculate signal position along the active path for this phase
      const phaseDuration = PHASE_DURATIONS[phaseIndex];
      const progress = Math.min(1, Math.max(0, phaseElapsed / phaseDuration));

      // Find active SVG path element in container
      const container = containerRef.current;
      if (container && phaseIndex < 5) {
        const activePathId = WORKFLOW_PHASES[phaseIndex]?.activePath;
        const pathEl = activePathId ? container.querySelector(`[data-path-id="${activePathId}"]`) : null;
        if (pathEl && typeof pathEl.getTotalLength === 'function') {
          try {
            const length = pathEl.getTotalLength();
            if (length > 0) {
              const pt = pathEl.getPointAtLength(length * progress);
              setSignalPos({ x: pt.x, y: pt.y, visible: true });
            } else {
              setSignalPos((prev) => ({ ...prev, visible: false }));
            }
          } catch {
            setSignalPos((prev) => ({ ...prev, visible: false }));
          }
        } else {
          setSignalPos((prev) => ({ ...prev, visible: false }));
        }
      } else {
        setSignalPos((prev) => ({ ...prev, visible: false }));
      }

      animFrameRef.current = requestAnimationFrame(step);
    };

    animFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [isPlaying, isUserPaused, isInView, isReducedMotion]);

  // User toggle Pause/Play
  const togglePlayPause = useCallback(() => {
    setIsUserPaused((prev) => {
      const next = !prev;
      setIsPlaying(!next);
      return next;
    });
  }, []);

  return {
    containerRef,
    registerNode,
    currentPhase,
    isPlaying: isPlaying && !isUserPaused,
    isUserPaused,
    isReducedMotion,
    togglePlayPause,
    paths,
    signalPos,
    phaseData: WORKFLOW_PHASES[currentPhase] || WORKFLOW_PHASES[0],
    updateConnectorPaths,
  };
}
