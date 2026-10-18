# XAIVON — Final Stabilization Source Inventory

**Branch:** `fix/xaivon-final-stabilization`
**Base Commit:** `ecf883c840f13c10e1af1309c80e902bd1d99a4f` (PR #7 HEAD)
**Main Baseline SHA:** `fcd7b2ddf656af21db29294db624f30c88f4f40d`
**Date:** 2026-10-18

---

## 1. Tracked Source Summary
- **Total Tracked Regular Files:** 161
- **File Breakdown:**
  - JavaScript / JSX (`.js`, `.jsx`): 94 files (frontend pages, components, API handlers, utils, scripts, tests)
  - CSS (`.css`): 36 scoped and canonical stylesheets
  - Tests (`tests/*.test.js`): 15 dedicated regression suites (74 automated unit/contract tests)
  - Markdown / Docs (`.md`): 24 documentation and QA evidence files
  - Static Assets (`public/`): 6 files (icons, favicon, logo, og-image, robots.txt)
- **Relative Static Import Integrity:** 101/101 relative imports resolve cleanly; 0 broken relative imports.

---

## 2. Core Module & Dependency Graph

### A. Frontend Application Shell
- `src/main.jsx` -> `src/App.jsx` -> `src/index.css`
- Navigation: `src/components/PremiumNav.jsx` & `src/components/PremiumNav.css`
  - Uses theme tokens: `--dropdown-bg`, `--nav-border`, `--nav-inset` for full light/dark WCAG AA compliance.
- Footer: `src/components/Footer.jsx` & `src/components/Footer.css`
  - Architectural editorial footer with 3 founder social profiles (`CONNECT WITH THE FOUNDER`).
- Route Resolution: React Router DOM with lazy-loaded code-splitting for all 33 routes.

### B. Backend API Endpoints (Vercel Serverless Node)
- `api/contact.js`: Contact enquiry handler with schema validation, honeypot, Upstash Redis rate limiting, and Resend delivery.
  - Rejects null, undefined, array, non-object, and oversized inputs with HTTP 400.
  - Fail-closed security with 503 fallback providing direct email contact (`raja@xaivon.com`).
- `api/audit.js`: Infrastructure assessment handler with schema validation, honeypot, Upstash Redis rate limiting, and Resend dispatch.
  - Rejects null, undefined, array, non-object, and oversized inputs with HTTP 400.
- `api/_cors.js`: Origin-restricted CORS headers and OPTIONS preflight handling.
- `api/_utils.js`: Safe HTML entity escaping (`escapeHtml`) for email output.

### C. Active vs. Obsolete Component Inventory
- **Actively Used:**
  - `WorkflowPanel.jsx` & `.css`: Hero Workflow Orchestration Console.
  - `Footer.jsx` & `.css`: Architectural Editorial Footer.
  - `PremiumNav.jsx` & `.css`: Floating navigation pill with mega-menus and mobile accordion.
  - `AIAudit.jsx` & `.css`: Infrastructure assessment card.
  - `PricingSection.jsx` & `.css`: 6 pricing categories across INR/USD.
  - `ROICalculator.jsx` & `.css`: Operational time and cost estimator.
  - `ChatEmbed.jsx`: Optional assistant widget with focus-safe `visibility: hidden`, `aria-hidden`, and Escape handler.
- **Dormant / Retained for Compatibility:**
  - `DemoVideoSection.jsx` / `.css`: Standalone demo video component; retained without active mount on root to prevent bundle bloat.
  - `LoadingScreen.jsx` / `.css`: Optional boot screen; bypassed in favor of instant static hydration.
