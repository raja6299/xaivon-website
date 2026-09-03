import { useWorkflowAnimation } from '../hooks/useWorkflowAnimation';
import './WorkflowPanel.css';

export default function WorkflowPanel() {
  const { path1Ref, path2Ref, path3Ref, signalRef, nodesRef, mobilePathRef, mobileSignalRef } = useWorkflowAnimation();

  return (
    <div className="workflow-panel-container">
      {/* Panel Header */}
      <div className="workflow-panel-header">
        <span className="wf-header-label">XAIVON / SYSTEM VIEW</span>
        <span className="wf-header-status">
          <span className="wf-live-dot"></span>
          LIVE
        </span>
      </div>

      {/* Desktop View */}
      <div className="workflow-desktop">
        <svg viewBox="0 0 1000 700" className="workflow-svg" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="line-grad-idle" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.12)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0.12)" />
            </linearGradient>
            <linearGradient id="line-grad-active" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.5)" />
              <stop offset="50%" stopColor="rgba(255, 200, 140, 0.7)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0.5)" />
            </linearGradient>
            <filter id="signal-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            {/* Grid pattern */}
            <pattern id="wf-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5"/>
            </pattern>
          </defs>

          {/* Background grid */}
          <rect width="1000" height="700" fill="url(#wf-grid)" />

          {/* Connector paths:
               Node 1 (Input)        → left area, ~y=350
               Node 2 (AI)           → center-left, ~y=150
               Node 3 (Rules)        → center-right, ~y=350
               Node 4 (Action)       → center-right, ~y=560
          */}
          <path
            ref={path1Ref}
            className="wf-connector wf-connector-1"
            d="M 280 350 C 320 350, 350 170, 400 170"
            fill="none"
            stroke="url(#line-grad-idle)"
            strokeWidth="2"
            strokeDasharray="6 6"
          />
          <path
            ref={path2Ref}
            className="wf-connector wf-connector-2"
            d="M 600 170 C 650 170, 680 350, 720 350"
            fill="none"
            stroke="url(#line-grad-idle)"
            strokeWidth="2"
            strokeDasharray="6 6"
          />
          <path
            ref={path3Ref}
            className="wf-connector wf-connector-3"
            d="M 810 410 C 810 460, 810 490, 810 530"
            fill="none"
            stroke="url(#line-grad-idle)"
            strokeWidth="2"
            strokeDasharray="6 6"
          />

          {/* Signal dot — positioned via JS along paths */}
          <g className="signal-group" ref={signalRef}>
            <circle r="8" fill="rgba(255, 200, 140, 0.3)" />
            <circle r="5" fill="#fff" filter="url(#signal-glow)" />
            <circle r="2.5" fill="#B35734" />
          </g>
        </svg>

        {/* Desktop Nodes (HTML overlay for rich content) */}
        <div className="workflow-nodes-layer">
          <div className="wf-node wf-node-1 idle" ref={(el) => (nodesRef.current[0] = el)}>
            <small>INPUT</small>
            <strong>Customer request</strong>
            <span className="wf-state"><span className="wf-dot"></span><span className="wf-state-text">captured</span></span>
          </div>

          <div className="wf-node wf-node-2 idle" ref={(el) => (nodesRef.current[1] = el)}>
            <small>AI UNDERSTANDING</small>
            <strong>Understand + classify</strong>
            <span className="wf-state"><span className="wf-dot"></span><span className="wf-state-text">validated</span></span>
          </div>

          <div className="wf-node wf-node-3 idle" ref={(el) => (nodesRef.current[2] = el)}>
            <small>BUSINESS RULES</small>
            <strong>Rules + routing</strong>
            <span className="wf-state"><span className="wf-dot"></span><span className="wf-state-text">controlled</span></span>
          </div>

          <div className="wf-node wf-node-4 idle" ref={(el) => (nodesRef.current[3] = el)}>
            <small>ACTION</small>
            <strong>Execute + respond</strong>
            <span className="wf-state"><span className="wf-dot"></span><span className="wf-state-text">completed</span></span>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="workflow-mobile">
        <svg className="workflow-mobile-svg" viewBox="0 0 100 520" preserveAspectRatio="xMidYMid meet">
          <path
            ref={mobilePathRef}
            d="M 50 40 L 50 130 L 50 170 L 50 260 L 50 300 L 50 390 L 50 430 L 50 510"
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <g className="signal-group mobile-signal" ref={mobileSignalRef}>
            <circle r="5" fill="rgba(255, 200, 140, 0.3)" />
            <circle r="3" fill="#fff" />
            <circle r="1.5" fill="#B35734" />
          </g>
        </svg>
        <div className="workflow-mobile-nodes">
          <div className="wf-node wf-mobile-node idle" ref={(el) => (nodesRef.current[4] = el)}>
            <small>INPUT</small>
            <strong>Customer request</strong>
            <span className="wf-state"><span className="wf-dot"></span><span className="wf-state-text">captured</span></span>
          </div>
          <div className="wf-mobile-spacer"></div>
          <div className="wf-node wf-mobile-node idle" ref={(el) => (nodesRef.current[5] = el)}>
            <small>AI UNDERSTANDING</small>
            <strong>Understand + classify</strong>
            <span className="wf-state"><span className="wf-dot"></span><span className="wf-state-text">validated</span></span>
          </div>
          <div className="wf-mobile-spacer"></div>
          <div className="wf-node wf-mobile-node idle" ref={(el) => (nodesRef.current[6] = el)}>
            <small>BUSINESS RULES</small>
            <strong>Rules + routing</strong>
            <span className="wf-state"><span className="wf-dot"></span><span className="wf-state-text">controlled</span></span>
          </div>
          <div className="wf-mobile-spacer"></div>
          <div className="wf-node wf-mobile-node idle" ref={(el) => (nodesRef.current[7] = el)}>
            <small>ACTION</small>
            <strong>Execute + respond</strong>
            <span className="wf-state"><span className="wf-dot"></span><span className="wf-state-text">completed</span></span>
          </div>
        </div>
      </div>

      {/* Panel Footer */}
      <div className="workflow-panel-footer">
        <span>v2.1 — production</span>
        <span>latency: 12ms</span>
      </div>
    </div>
  );
}
