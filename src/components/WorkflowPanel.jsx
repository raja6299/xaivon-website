import { useId } from 'react';
import { useWorkflowAnimation } from '../hooks/useWorkflowAnimation';
import './WorkflowPanel.css';

// Crisp, purpose-drawn local micro icons
const Icons = {
  Ingest: () => (
    <svg className="wf-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  ),
  Understand: () => (
    <svg className="wf-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  Rules: () => (
    <svg className="wf-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="4" y1="21" x2="4" y2="14" />
      <line x1="4" y1="10" x2="4" y2="3" />
      <line x1="12" y1="21" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12" y2="3" />
      <line x1="20" y1="21" x2="20" y2="16" />
      <line x1="20" y1="12" x2="20" y2="3" />
      <line x1="1" y1="14" x2="7" y2="14" />
      <line x1="9" y1="8" x2="15" y2="8" />
      <line x1="17" y1="16" x2="23" y2="16" />
    </svg>
  ),
  Routine: () => (
    <svg className="wf-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  Human: () => (
    <svg className="wf-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Action: () => (
    <svg className="wf-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  Pause: () => (
    <svg className="wf-btn-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="6" y="4" width="4" height="16" rx="1" />
      <rect x="14" y="4" width="4" height="16" rx="1" />
    </svg>
  ),
  Play: () => (
    <svg className="wf-btn-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  ),
};

export default function WorkflowPanel() {
  const {
    rootRef,
    canvasRef,
    registerNode,
    currentPhase,
    isPlaying,
    isReducedMotion,
    togglePlayPause,
    paths,
    signalPos,
    phaseData,
  } = useWorkflowAnimation();

  const patternId = useId();

  // Helper to determine node visual state: 'idle' | 'active' | 'completed'
  const getNodeState = (nodeId) => {
    if (isReducedMotion) return 'completed';
    if (currentPhase === 5) return 'completed'; // Cycle settle

    switch (nodeId) {
      case 'node-ingest':
        return currentPhase === 0 ? 'active' : currentPhase > 0 ? 'completed' : 'idle';
      case 'node-understand':
        return currentPhase === 1 ? 'active' : currentPhase > 1 ? 'completed' : 'idle';
      case 'node-rules':
        return currentPhase === 2 ? 'active' : currentPhase > 2 ? 'completed' : 'idle';
      case 'node-routine':
        // Highlighted on decision phase
        return currentPhase === 3 ? 'idle' : currentPhase > 3 ? 'completed' : 'idle';
      case 'node-human':
        // Highlighted on decision phase as high-judgment approval path
        return currentPhase === 3 ? 'active' : currentPhase > 3 ? 'completed' : 'idle';
      case 'node-action':
        return currentPhase === 4 ? 'active' : currentPhase > 4 ? 'completed' : 'idle';
      default:
        return 'idle';
    }
  };

  return (
    <aside
      className="wf-console-root"
      ref={rootRef}
      role="region"
      aria-label="Interactive workflow orchestration demonstration"
    >
      {/* Screen-reader descriptive summary */}
      <div className="wf-sr-only">
        XAIVON Workflow Orchestration Console: Demonstrating a 5-step automated workflow:
        Step 1: Multi-channel Request Intake.
        Step 2: Intent & Context Classification.
        Step 3: Policy & Business Rule Checks.
        Step 4: Intelligent Routing with Human Review Gate for high-impact decisions.
        Step 5: Verified Action & CRM Audit Dispatch.
      </div>

      {/* Top Bar */}
      <div className="wf-console-topbar">
        <div className="wf-console-identity">
          <span className="wf-brand-tag">XAIVON</span>
          <span className="wf-slash-divider">/</span>
          <span className="wf-console-title">WORKFLOW ORCHESTRATION</span>
        </div>

        <div className="wf-console-controls">
          <span className="wf-badge-demo" title="Illustrative demonstration model">
            <span className="wf-badge-dot"></span>
            ILLUSTRATIVE
          </span>

          <button
            type="button"
            className="wf-btn-playpause"
            onClick={togglePlayPause}
            aria-label={isPlaying ? 'Pause workflow animation' : 'Resume workflow animation'}
            title={isPlaying ? 'Pause animation' : 'Resume animation'}
          >
            {isPlaying ? <Icons.Pause /> : <Icons.Play />}
            <span className="wf-btn-label">{isPlaying ? 'PAUSE' : 'PLAY'}</span>
          </button>
        </div>
      </div>

      {/* Canvas Area with Connectors and Structured Grid */}
      <div className="wf-console-canvas" ref={canvasRef}>
        {/* Dynamic SVG Connectors Layer */}
        <svg className="wf-console-svg" aria-hidden="true">
          <defs>
            <linearGradient id="wf-grad-active" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D95D32" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#F9A875" stopOpacity="1" />
              <stop offset="100%" stopColor="#D95D32" stopOpacity="0.8" />
            </linearGradient>

            <pattern id={patternId} width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="12" cy="12" r="0.75" fill="rgba(255, 255, 255, 0.08)" />
            </pattern>

            <filter id="wf-signal-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background grid */}
          <rect width="100%" height="100%" fill={`url(#${patternId})`} />

          {/* Desktop Connectors */}
          {paths.path1 && (
            <path
              data-path-id="path-1"
              d={paths.path1}
              className={`wf-path ${currentPhase === 0 ? 'wf-path-active' : currentPhase > 0 ? 'wf-path-done' : ''}`}
            />
          )}
          {paths.path2 && (
            <path
              data-path-id="path-2"
              d={paths.path2}
              className={`wf-path ${currentPhase === 1 ? 'wf-path-active' : currentPhase > 1 ? 'wf-path-done' : ''}`}
            />
          )}
          {paths.path3Routine && (
            <path
              data-path-id="path-3-routine"
              d={paths.path3Routine}
              className={`wf-path wf-path-branch ${currentPhase >= 3 ? 'wf-path-done' : ''}`}
            />
          )}
          {paths.path3Human && (
            <path
              data-path-id="path-3"
              d={paths.path3Human}
              className={`wf-path wf-path-branch ${currentPhase === 2 ? 'wf-path-active' : currentPhase > 2 ? 'wf-path-done' : ''}`}
            />
          )}
          {paths.path4Routine && (
            <path
              data-path-id="path-4-routine"
              d={paths.path4Routine}
              className={`wf-path wf-path-branch ${currentPhase >= 4 ? 'wf-path-done' : ''}`}
            />
          )}
          {paths.path4Human && (
            <path
              data-path-id="path-4"
              d={paths.path4Human}
              className={`wf-path wf-path-branch ${currentPhase === 3 ? 'wf-path-active' : currentPhase > 3 ? 'wf-path-done' : ''}`}
            />
          )}

          {/* Mobile Vertical Spine */}
          {paths.mobilePath && (
            <path
              data-path-id="path-mobile"
              d={paths.mobilePath}
              className="wf-path wf-path-mobile"
            />
          )}

          {/* Moving Signal Packet */}
          {signalPos.visible && !isReducedMotion && (
            <g
              className="wf-signal-packet"
              transform={`translate(${signalPos.x}, ${signalPos.y})`}
            >
              <circle r="9" fill="rgba(217, 93, 50, 0.25)" />
              <circle r="5" fill="#FFF" filter="url(#wf-signal-glow)" />
              <circle r="2.5" fill="#D95D32" />
            </g>
          )}
        </svg>

        {/* Intrinsic Structural Grid Layout — Engineered Collision Prevention */}
        <div className="wf-layout-container">
          {/* Tier 1: Intake & Classify (Row 1) */}
          <div className="wf-tier wf-tier-intake">
            {/* Step 1: Ingestion */}
            <div
              className={`wf-card wf-card-ingest ${getNodeState('node-ingest')}`}
              ref={(el) => registerNode('node-ingest', el)}
              data-node-id="node-ingest"
            >
              <div className="wf-card-header">
                <span className="wf-step-num">01</span>
                <Icons.Ingest />
              </div>
              <div className="wf-card-body">
                <span className="wf-card-label">INTAKE</span>
                <h4 className="wf-card-title">Customer Request</h4>
                <p className="wf-card-desc">Multi-channel capture</p>
              </div>
              <div className="wf-card-footer">
                <span className="wf-status-pill">
                  <span className="wf-pill-dot"></span>
                  {getNodeState('node-ingest') === 'active'
                    ? 'Capturing'
                    : getNodeState('node-ingest') === 'completed'
                    ? 'Captured'
                    : 'Ready'}
                </span>
              </div>
            </div>

            {/* Step 2: Understand & Classify */}
            <div
              className={`wf-card wf-card-understand ${getNodeState('node-understand')}`}
              ref={(el) => registerNode('node-understand', el)}
              data-node-id="node-understand"
            >
              <div className="wf-card-header">
                <span className="wf-step-num">02</span>
                <Icons.Understand />
              </div>
              <div className="wf-card-body">
                <span className="wf-card-label">TRIAGE</span>
                <h4 className="wf-card-title">Understand Intent</h4>
                <p className="wf-card-desc">Context & entity triage</p>
              </div>
              <div className="wf-card-footer">
                <span className="wf-status-pill">
                  <span className="wf-pill-dot"></span>
                  {getNodeState('node-understand') === 'active'
                    ? 'Classifying'
                    : getNodeState('node-understand') === 'completed'
                    ? 'Validated'
                    : 'Pending'}
                </span>
              </div>
            </div>

            {/* Step 3: Business Rules & Governance */}
            <div
              className={`wf-card wf-card-rules ${getNodeState('node-rules')}`}
              ref={(el) => registerNode('node-rules', el)}
              data-node-id="node-rules"
            >
              <div className="wf-card-header">
                <span className="wf-step-num">03</span>
                <Icons.Rules />
              </div>
              <div className="wf-card-body">
                <span className="wf-card-label">GOVERNANCE</span>
                <h4 className="wf-card-title">Business Rules</h4>
                <p className="wf-card-desc">Policy & constraint checks</p>
              </div>
              <div className="wf-card-footer">
                <span className="wf-status-pill">
                  <span className="wf-pill-dot"></span>
                  {getNodeState('node-rules') === 'active'
                    ? 'Evaluating'
                    : getNodeState('node-rules') === 'completed'
                    ? 'Evaluated'
                    : 'Pending'}
                </span>
              </div>
            </div>
          </div>

          {/* Tier 2: Decision Routing Branches (Row 2) */}
          <div className="wf-tier wf-tier-routing">
            <div className="wf-branch-wrapper">
              {/* Path 4A: Routine Automation */}
              <div
                className={`wf-card wf-card-branch wf-card-routine ${getNodeState('node-routine')}`}
                ref={(el) => registerNode('node-routine', el)}
                data-node-id="node-routine"
              >
                <div className="wf-card-header">
                  <span className="wf-step-num">04A</span>
                  <Icons.Routine />
                </div>
                <div className="wf-card-body">
                  <span className="wf-card-label">ROUTINE PATH</span>
                  <h4 className="wf-card-title">Automated Flow</h4>
                  <p className="wf-card-desc">Standard rules execution</p>
                </div>
                <div className="wf-card-footer">
                  <span className="wf-status-pill">
                    <span className="wf-pill-dot"></span>
                    Direct
                  </span>
                </div>
              </div>

              {/* Path 4B: Human Review Gate (Key XAIVON Value Proposition) */}
              <div
                className={`wf-card wf-card-branch wf-card-human ${getNodeState('node-human')}`}
                ref={(el) => registerNode('node-human', el)}
                data-node-id="node-human"
              >
                <div className="wf-card-header">
                  <span className="wf-step-num">04B</span>
                  <Icons.Human />
                </div>
                <div className="wf-card-body">
                  <span className="wf-card-label">HUMAN-IN-THE-LOOP</span>
                  <h4 className="wf-card-title">Human Review Gate</h4>
                  <p className="wf-card-desc">Operator approval required</p>
                </div>
                <div className="wf-card-footer">
                  <span className="wf-status-pill wf-pill-approval">
                    <span className="wf-pill-dot"></span>
                    {getNodeState('node-human') === 'active'
                      ? 'Reviewing...'
                      : getNodeState('node-human') === 'completed'
                      ? 'Approved ✓'
                      : 'Standby'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Tier 3: Verified Action & Record Update (Row 3) */}
          <div className="wf-tier wf-tier-outcome">
            <div
              className={`wf-card wf-card-outcome ${getNodeState('node-action')}`}
              ref={(el) => registerNode('node-action', el)}
              data-node-id="node-action"
            >
              <div className="wf-card-header">
                <span className="wf-step-num">05</span>
                <Icons.Action />
              </div>
              <div className="wf-card-body wf-outcome-body">
                <div>
                  <span className="wf-card-label">OUTCOME</span>
                  <h4 className="wf-card-title">Verified Action & CRM Sync</h4>
                </div>
                <p className="wf-card-desc">Audit logged · Response dispatched · Systems synchronized</p>
              </div>
              <div className="wf-card-footer">
                <span className="wf-status-pill">
                  <span className="wf-pill-dot"></span>
                  {getNodeState('node-action') === 'active'
                    ? 'Executing'
                    : getNodeState('node-action') === 'completed'
                    ? 'Completed ✓'
                    : 'Pending'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Status & Event Strip */}
      <div className="wf-console-bottomstrip">
        <div className="wf-status-live-container">
          <span className="wf-status-indicator-dot"></span>
          <span className="wf-status-message">{phaseData.tickerMessage}</span>
        </div>
        <div className="wf-watermark">
          <span>Illustrative workflow</span>
        </div>
      </div>
    </aside>
  );
}
