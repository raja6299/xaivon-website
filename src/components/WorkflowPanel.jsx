import { useWorkflowAnimation } from '../hooks/useWorkflowAnimation';
import './WorkflowPanel.css';

export default function WorkflowPanel() {
  const { path1Ref, path2Ref, path3Ref, signalRef, nodesRef } = useWorkflowAnimation();

  // Desktop nodes (SVG viewbox 0 0 1000 800)
  // Mobile nodes stack vertically using flexbox
  return (
    <div className="workflow-panel-container">
      <div className="workflow-panel-header">
        <span>XAIVON / SYSTEM VIEW</span>
      </div>
      
      {/* Desktop View */}
      <div className="workflow-desktop">
        <svg viewBox="0 0 1000 800" className="workflow-svg" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.2)" />
              <stop offset="50%" stopColor="rgba(255, 255, 255, 0.6)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0.2)" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          {/* Grid Pattern */}
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
          </pattern>
          <rect width="1000" height="800" fill="url(#grid)" />

          {/* Paths */}
          <path ref={path1Ref} id="path1" d="M 310 400 C 340 400, 340 180, 370 180" fill="none" stroke="url(#line-grad)" strokeWidth="2" strokeDasharray="6 6" />
          <path ref={path2Ref} id="path2" d="M 630 180 C 660 180, 660 400, 690 400" fill="none" stroke="url(#line-grad)" strokeWidth="2" strokeDasharray="6 6" />
          <path ref={path3Ref} id="path3" d="M 830 460 C 830 520, 830 540, 830 590" fill="none" stroke="url(#line-grad)" strokeWidth="2" strokeDasharray="6 6" />

          {/* Signal Dot */}
          <g className="signal-group" ref={signalRef}>
            <circle r="6" fill="#fff" filter="url(#glow)" />
            <circle r="3" fill="#B35734" />
          </g>
        </svg>

        <div className="workflow-nodes-layer">
          <div className="wf-node wf-node-1" ref={(el) => (nodesRef.current[0] = el)}>
            <small>INPUT</small>
            <strong>Customer request</strong>
            <span className="wf-state"><span className="wf-dot"></span> captured</span>
          </div>

          <div className="wf-node wf-node-2" ref={(el) => (nodesRef.current[1] = el)}>
            <small>AI STEP</small>
            <strong>Understand + classify</strong>
            <span className="wf-state"><span className="wf-dot"></span> validated</span>
          </div>

          <div className="wf-node wf-node-3" ref={(el) => (nodesRef.current[2] = el)}>
            <small>BUSINESS LOGIC</small>
            <strong>Rules + routing</strong>
            <span className="wf-state"><span className="wf-dot"></span> controlled</span>
          </div>

          <div className="wf-node wf-node-4" ref={(el) => (nodesRef.current[3] = el)}>
            <small>ACTION</small>
            <strong>Execute + respond</strong>
            <span className="wf-state"><span className="wf-dot"></span> completed</span>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="workflow-mobile">
        <div className="wf-node wf-node-1" ref={(el) => (nodesRef.current[4] = el)}>
          <small>INPUT</small>
          <strong>Customer request</strong>
          <span className="wf-state"><span className="wf-dot"></span> captured</span>
        </div>
        <div className="wf-mobile-connector"></div>
        <div className="wf-node wf-node-2" ref={(el) => (nodesRef.current[5] = el)}>
          <small>AI STEP</small>
          <strong>Understand + classify</strong>
          <span className="wf-state"><span className="wf-dot"></span> validated</span>
        </div>
        <div className="wf-mobile-connector"></div>
        <div className="wf-node wf-node-3" ref={(el) => (nodesRef.current[6] = el)}>
          <small>BUSINESS LOGIC</small>
          <strong>Rules + routing</strong>
          <span className="wf-state"><span className="wf-dot"></span> controlled</span>
        </div>
        <div className="wf-mobile-connector"></div>
        <div className="wf-node wf-node-4" ref={(el) => (nodesRef.current[7] = el)}>
          <small>ACTION</small>
          <strong>Execute + respond</strong>
          <span className="wf-state"><span className="wf-dot"></span> completed</span>
        </div>
      </div>
    </div>
  );
}
