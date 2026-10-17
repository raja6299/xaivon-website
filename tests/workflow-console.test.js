import { test } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

test('workflow-console: component source integrity & structure', () => {
  const panelPath = path.join(rootDir, 'src', 'components', 'WorkflowPanel.jsx');
  const panelContent = fs.readFileSync(panelPath, 'utf8');

  // Verify topbar branding & controls
  assert.ok(panelContent.includes('XAIVON'), 'Must display XAIVON branding');
  assert.ok(panelContent.includes('WORKFLOW ORCHESTRATION'), 'Must display WORKFLOW ORCHESTRATION console title');
  assert.ok(panelContent.includes('ILLUSTRATIVE'), 'Must include illustrative demo badge');
  assert.ok(panelContent.includes('wf-btn-playpause'), 'Must provide pause/play button');
  assert.ok(panelContent.includes('aria-label='), 'Must provide accessible aria-labels');

  // Verify 5 distinct workflow steps including human approval path
  assert.ok(panelContent.includes('01'), 'Must include Step 01 Ingestion');
  assert.ok(panelContent.includes('Customer Request'), 'Step 1 title check');
  assert.ok(panelContent.includes('02'), 'Must include Step 02 Triage');
  assert.ok(panelContent.includes('Understand Intent'), 'Step 2 title check');
  assert.ok(panelContent.includes('03'), 'Must include Step 03 Governance');
  assert.ok(panelContent.includes('Business Rules'), 'Step 3 title check');
  assert.ok(panelContent.includes('04A'), 'Must include Step 04A Routine Path');
  assert.ok(panelContent.includes('Automated Flow'), 'Step 4A title check');
  assert.ok(panelContent.includes('04B'), 'Must include Step 04B Human Review Gate');
  assert.ok(panelContent.includes('Human Review Gate'), 'Step 4B human review title check');
  assert.ok(panelContent.includes('05'), 'Must include Step 05 Execution/Sync');
  assert.ok(panelContent.includes('Verified Action & CRM Sync'), 'Step 5 title check');

  // Verify accessibility & bottom ticker
  assert.ok(panelContent.includes('role="region"'), 'Must have role="region"');
  assert.ok(panelContent.includes('wf-sr-only'), 'Must include screen reader summary');
  assert.ok(panelContent.includes('wf-console-bottomstrip'), 'Must include bottom status strip');
  assert.ok(panelContent.includes('Illustrative workflow'), 'Must clearly state illustrative nature');

  // Verify canvas ref is bound to .wf-console-canvas
  assert.ok(panelContent.includes('ref={canvasRef}'), 'Must bind canvasRef to canvas element for 1:1 SVG coordinate space');
});

test('workflow-console: animation hook phases & cycle contract', async () => {
  const hookPath = path.join(rootDir, 'src', 'hooks', 'useWorkflowAnimation.js');
  const hookContent = fs.readFileSync(hookPath, 'utf8');

  // Verify deterministic phase architecture
  assert.ok(hookContent.includes('WORKFLOW_PHASES'), 'Must export WORKFLOW_PHASES');
  assert.ok(hookContent.includes('INGESTION'), 'Phase 0 must be INGESTION');
  assert.ok(hookContent.includes('TRIAGE'), 'Phase 1 must be TRIAGE');
  assert.ok(hookContent.includes('RULES'), 'Phase 2 must be RULES');
  assert.ok(hookContent.includes('DECISION'), 'Phase 3 must be DECISION');
  assert.ok(hookContent.includes('EXECUTION'), 'Phase 4 must be EXECUTION');
  assert.ok(hookContent.includes('RESET_PAUSE'), 'Phase 5 must be RESET_PAUSE');

  // Verify Phase 4 execution mapping has no phantom path-5
  assert.ok(!hookContent.includes("activePath: 'path-5'"), 'Must not reference non-existent path-5');

  // Verify dynamic port anchor computation & observers
  assert.ok(hookContent.includes('getBoundingClientRect'), 'Must compute card bounding rects dynamically');
  assert.ok(hookContent.includes('cRect = canvas.getBoundingClientRect()'), 'Must measure relative to canvas bounding box');
  assert.ok(hookContent.includes('ResizeObserver'), 'Must use ResizeObserver for reflow/resize tracking');
  assert.ok(hookContent.includes('IntersectionObserver'), 'Must pause when scrolled offscreen');
  assert.ok(hookContent.includes('visibilitychange'), 'Must pause when tab hidden');
  assert.ok(hookContent.includes('prefers-reduced-motion'), 'Must support prefers-reduced-motion');

  // Verify elapsed time preservation accumulator
  assert.ok(hookContent.includes('elapsedRef'), 'Must use elapsedRef to accumulate animation time without jumping');
  assert.ok(hookContent.includes('lastTimestampRef'), 'Must track lastTimestampRef for accurate frame deltas');
});

test('workflow-console: CSS layout architecture eliminates collision risk', () => {
  const cssPath = path.join(rootDir, 'src', 'components', 'WorkflowPanel.css');
  const cssContent = fs.readFileSync(cssPath, 'utf8');

  // Verify container queries & grid layout
  assert.ok(cssContent.includes('container-type: inline-size'), 'Must declare container-type: inline-size');
  assert.ok(cssContent.includes('container-name: wfconsole'), 'Must name container wfconsole');
  assert.ok(cssContent.includes('display: grid'), 'Must use CSS Grid for card alignment');
  assert.ok(cssContent.includes('grid-template-columns: repeat(3'), 'Tier 1 must use 3-column grid');
  assert.ok(cssContent.includes('grid-template-columns: repeat(2'), 'Tier 2 must use 2-column grid for branches');

  // Verify unified container-query breakpoint contract
  assert.ok(cssContent.includes('@container wfconsole (max-width: 500px)'), 'Must declare unified container query breakpoint');
  assert.ok(!cssContent.includes('@media (max-width: 640px)'), 'Must not have conflicting 640px media query override');

  // Verify NO absolute percentage placement for cards
  assert.ok(!cssContent.includes('top: 42%'), 'Must NOT use old top: 42% card placement');
  assert.ok(!cssContent.includes('top: 70%'), 'Must NOT use old top: 70% card placement');
  assert.ok(!cssContent.includes('left: 68%'), 'Must NOT use old left: 68% card placement');

  // Verify dark theme support
  assert.ok(cssContent.includes('[data-theme="dark"]'), 'Must support dark theme tokens');

  // Verify reduced-motion removes infinite animations
  assert.ok(cssContent.includes('prefers-reduced-motion: reduce'), 'Must have reduced motion rules');
  assert.ok(!cssContent.includes('animation: subtlePulse'), 'Must NOT run subtlePulse in reduced motion');
});
