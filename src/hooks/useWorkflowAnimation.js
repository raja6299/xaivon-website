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
    activePath: null, // Destination reached: signal docks cleanly at Card 05
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
  const rootRef = useRef(null);
  const canvasRef = useRef(null);
  const nodeRefs = useRef({});
  const animFrameRef = useRef(null);

  // Time-accumulation refs to preserve exact animation position on pause/resume
  const elapsedRef = useRef(0);
  const lastTimestampRef = useRef(null);

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
  const [isMobileMode, setIsMobileMode] = useState(false);

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

  // Compute anchor coordinates dynamically relative to the SVG canvas bounding rect
  const updateConnectorPaths = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Use the actual canvas bounding rectangle so (x, y) coordinates align 1:1 with the SVG
    const cRect = canvas.getBoundingClientRect();
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
      };
    };

    const n1 = getCenterPort(nodeRefs.current['node-ingest']);
    const n2 = getCenterPort(nodeRefs.current['node-understand']);
    const n3 = getCenterPort(nodeRefs.current['node-rules']);
    const n4Routine = getCenterPort(nodeRefs.current['node-routine']);
    const n4Human = getCenterPort(nodeRefs.current['node-human']);
    const n5 = getCenterPort(nodeRefs.current['node-action']);

    // Determine layout mode directly from actual rendered DOM node geometry
    // If node 2 is rendered below node 1 vertically, the cards are stacked!
    const isStackedLayout = Boolean(n1 && n2 && (n2.top.y > n1.bottom.y - 6));
    setIsMobileMode(isStackedLayout);

    if (isStackedLayout) {
      // Clean vertical spine connecting stacked cards sequentially
      // Ingestion -> Understand -> Rules -> Routine & Human Review -> Execution
      let mobileD = '';
      const order = [n1, n2, n3, n4Human, n5].filter(Boolean);
      for (let i = 0; i < order.length - 1; i++) {
        const from = order[i].bottom;
        const to = order[i + 1].top;
        mobileD += `M ${from.x.toFixed(1)} ${from.y.toFixed(1)} L ${to.x.toFixed(1)} ${to.y.toFixed(1)} `;
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

    // Desktop 3-tier paths (coordinates relative to canvas bounding box):
    // Path 1: horizontal between n1.right and n2.left
    const p1 = `M ${n1.right.x.toFixed(1)} ${n1.right.y.toFixed(1)} L ${n2.left.x.toFixed(1)} ${n2.left.y.toFixed(1)}`;

    // Path 2: horizontal between n2.right and n3.left
    const p2 = `M ${n2.right.x.toFixed(1)} ${n2.right.y.toFixed(1)} L ${n3.left.x.toFixed(1)} ${n3.left.y.toFixed(1)}`;

    // Path 3 Routine: branch curve from n3.bottom to n4Routine.top
    const p3MidY = (n3.bottom.y + n4Routine.top.y) / 2;
    const p3R = `M ${n3.bottom.x.toFixed(1)} ${n3.bottom.y.toFixed(1)} C ${n3.bottom.x.toFixed(1)} ${p3MidY.toFixed(1)}, ${n4Routine.top.x.toFixed(1)} ${p3MidY.toFixed(1)}, ${n4Routine.top.x.toFixed(1)} ${n4Routine.top.y.toFixed(1)}`;

    // Path 3 Human: branch curve from n3.bottom to n4Human.top
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

  // Pause when offscreen via IntersectionObserver on root container
  useEffect(() => {
    const root = rootRef.current;
    if (!root || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  // Pause when document tab is hidden
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
    const canvas = canvasRef.current;
    if (!canvas || typeof ResizeObserver === 'undefined') return;

    let resizeTimer;
    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(resizeTimer);
      resizeTimer = requestAnimationFrame(updateConnectorPaths);
    });

    ro.observe(canvas);
    // Also recompute after initial render and font settling
    const initialTimer = setTimeout(updateConnectorPaths, 80);

    return () => {
      ro.disconnect();
      cancelAnimationFrame(resizeTimer);
      clearTimeout(initialTimer);
    };
  }, [updateConnectorPaths]);

  // Main deterministic animation controller with exact elapsed time preservation
  useEffect(() => {
    if (isReducedMotion) {
      return;
    }

    const shouldAnimate = isPlaying && !isUserPaused && isInView && !document.hidden;
    if (!shouldAnimate) {
      // When stopping/pausing, reset lastTimestampRef so elapsedRef doesn't jump forward on resume
      lastTimestampRef.current = null;
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
      return;
    }

    const step = (timestamp) => {
      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = timestamp;
      }

      const delta = timestamp - lastTimestampRef.current;
      lastTimestampRef.current = timestamp;

      // Accumulate elapsed time smoothly
      elapsedRef.current = (elapsedRef.current + delta) % TOTAL_CYCLE_DURATION;
      const elapsed = elapsedRef.current;

      // Determine current phase from accumulated elapsed time
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

      const phaseDuration = PHASE_DURATIONS[phaseIndex];
      const progress = Math.min(1, Math.max(0, phaseElapsed / phaseDuration));

      const canvas = canvasRef.current;
      if (canvas) {
        // Mobile layout: progress travels along the single mobile vertical spine
        if (isMobileMode) {
          const mobilePathEl = canvas.querySelector('[data-path-id="path-mobile"]');
          if (mobilePathEl && typeof mobilePathEl.getTotalLength === 'function') {
            try {
              const totalLength = mobilePathEl.getTotalLength();
              if (totalLength > 0) {
                if (phaseIndex < 4) {
                  // Across 4 segments: phase 0 (0-25%), 1 (25-50%), 2 (50-75%), 3 (75-100%)
                  const segmentLen = totalLength / 4;
                  const travel = phaseIndex * segmentLen + progress * segmentLen;
                  const pt = mobilePathEl.getPointAtLength(Math.min(travel, totalLength));
                  setSignalPos({ x: pt.x, y: pt.y, visible: true });
                } else if (phaseIndex === 4) {
                  // Phase 4: docked at the destination (100% of path)
                  const pt = mobilePathEl.getPointAtLength(totalLength);
                  setSignalPos({ x: pt.x, y: pt.y, visible: true });
                } else {
                  setSignalPos((prev) => ({ ...prev, visible: false }));
                }
              }
            } catch {
              setSignalPos((prev) => ({ ...prev, visible: false }));
            }
          }
        } else {
          // Desktop 3-tier layout:
          if (phaseIndex < 4) {
            const activePathId = WORKFLOW_PHASES[phaseIndex]?.activePath;
            const pathEl = activePathId ? canvas.querySelector(`[data-path-id="${activePathId}"]`) : null;
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
          } else if (phaseIndex === 4) {
            // Phase 4: Execution phase. Destination reached! Dock cleanly at Card 05 port
            const n5El = nodeRefs.current['node-action'];
            if (n5El && canvas) {
              const r = n5El.getBoundingClientRect();
              const cRect = canvas.getBoundingClientRect();
              const dockX = r.left + r.width / 2 - cRect.left;
              const dockY = r.top - cRect.top;
              setSignalPos({ x: dockX, y: dockY, visible: true });
            } else {
              setSignalPos((prev) => ({ ...prev, visible: false }));
            }
          } else {
            // Phase 5: Reset pause
            setSignalPos((prev) => ({ ...prev, visible: false }));
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(step);
    };

    animFrameRef.current = requestAnimationFrame(step);

    return () => {
      lastTimestampRef.current = null;
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [isPlaying, isUserPaused, isInView, isReducedMotion, isMobileMode]);

  // User toggle Pause/Play
  const togglePlayPause = useCallback(() => {
    setIsUserPaused((prev) => {
      const next = !prev;
      setIsPlaying(!next);
      return next;
    });
  }, []);

  return {
    rootRef,
    canvasRef,
    registerNode,
    currentPhase,
    isPlaying: isPlaying && !isUserPaused,
    isUserPaused,
    isReducedMotion,
    isMobileMode,
    togglePlayPause,
    paths,
    signalPos,
    phaseData: WORKFLOW_PHASES[currentPhase] || WORKFLOW_PHASES[0],
    updateConnectorPaths,
  };
}
