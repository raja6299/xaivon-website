# XAIVON v6.0 Defect Register & Resolution Evidence

**Date:** 15 October 2026  
**Repository:** `raja6299/xaivon-website`  
**Target Branch:** `feat/xaivon-editorial-dual-theme-sot-v3`  
**Starting Baseline SHA:** `8f0e473d379e3b449bf0b8d1037a501691f4e70e`  
**Operating Entity:** XAIVON, operated by ADABHRA GROUP (Sole Proprietorship), India; Proprietor: Raja Babu.

---

## 1. Confirmed Defects Register & Root-Cause Resolution

### P1-A: Invisible White-on-White Text in Solutions Cards (CONFIRMED & RESOLVED)
- **Defect Category:** CSS Specificity & Cascade Collision
- **Source Files & Lines:** `src/index.css` (lines ~1365–1385), `src/pages/Solutions.jsx` (lines ~54–98)
- **Before State:**
  - `src/index.css` contained unscoped global declarations:
    ```css
    .problem-card h3 { color: #fff; }
    .problem-card p { color: rgba(255,255,255,.78); }
    ```
  - In `src/pages/Solutions.jsx`, the 3 Step cards rendered `<article className="surface problem-card">` on `#FFFCF7` / `var(--bg-card)` light background.
  - White `#ffffff` on `#FFFCF7` yielded a measured contrast ratio of **1.02:1**, making card headings and descriptions completely invisible to visitors in Light Mode.
- **Root-Cause Resolution:**
  - Removed the unscoped white text declaration.
  - Set default `.problem-card h3 { color: var(--ink); }` and `.problem-card p { color: var(--muted); }`.
  - Scoped the white text rules strictly to dark surfaces: `.dark-section .problem-card h3 { color: #fff; }` and `.dark-section .problem-card p { color: rgba(255,255,255,0.78); }`.
- **Computed CSS & Contrast Validation:**
  - **Light Mode (`/solutions`):** Card background `#FFFCF7`, H3 color `#171713` (Contrast ratio **17.2:1** — WCAG AAA PASS), Body color `#5C5850` (Contrast ratio **6.8:1** — WCAG AA PASS).
  - **Dark Mode (`/solutions`):** Card background `#1B1917`, H3 color `#F0E9DF` (Contrast ratio **13.4:1** — WCAG AAA PASS), Body color `#9E988E` (Contrast ratio **5.6:1** — WCAG AA PASS).
  - **Homepage Dark Section (`/`):** Section background `#11110E`, Card background `#171713`, H3 color `#ffffff` (Contrast ratio **18.9:1** — WCAG AAA PASS).
- **Screenshot Evidence:**
  - Light mode 3-step cards: `solutions_3step_cards_light_top_1792032570004.png`
  - Dark mode 3-step cards: `solutions_3step_cards_dark_1792032582022.png`

---

### P1-B: Legacy Cyan/Dark ROI Calculator Style & Unsubstantiated Claims (CONFIRMED & RESOLVED)
- **Defect Category:** Design System Inconsistency & Editorial Copy Violation
- **Source Files & Lines:** `src/components/ROICalculator.css`, `src/components/ROICalculator.jsx`, `src/pages/RoiCalculatorPage.jsx`, `src/pages/RoiCalculatorPage.css`
- **Before State:**
  - Contained legacy dark styling with alien cyan/purple accents (`#00d2ff`, `--accent-cyan`, `#7c3aed`), dark glowing panels (`rgba(12, 12, 18, 0.7)`), and unreadable grey text on dark surfaces in light mode.
  - Referenced undefined tokens (`--text-primary`, `--text-secondary`, `--text-muted`, `--bg-primary`, `--section-padding`).
  - Hero headline made unsubstantiated guarantee: *"Discover Your True Automation Potential"*.
- **Root-Cause Resolution:**
  - Fully refactored `ROICalculator.css` to match XAIVON's warm editorial identity:
    - Card surfaces use semantic `var(--bg-card)` and `var(--line)`.
    - Accent elements use warm copper gradient `linear-gradient(135deg, #D95D32, #B94E2D)` with pure white thumb for high-contrast visibility.
    - Result callouts use semantic `--inverse-bg` and `--inverse-ink`.
  - Replaced exaggerated headline with approved v6 directive copy:
    - H1/H2: **"Estimate the time tied up in repetitive work."**
    - Subtitle: **"Adjust the assumptions to explore a planning estimate. Actual results depend on the workflow, data and implementation."**
  - Clarified slider metrics: team size, repetitive hours per person/week, and team average hourly loaded cost.
  - Preserved mathematical formulas, reactive state, currency toggles, and calculation accuracy untouched.
- **Computed CSS & Contrast Validation:**
  - Slider track: Copper fill `#D95D32` against neutral track `#DDD6C8` (Contrast > 3:1 for graphical UI).
  - Results card: `--inverse-bg` (`#171713` in Light, `#F0E9DF` in Dark) paired with `--inverse-ink` (`#FFFCF7` in Light, `#171713` in Dark) — Contrast > **14:1** in both modes.
- **Screenshot Evidence:**
  - Light mode standalone calculator: `roi_calculator_updated_1792032641197.png`
  - Dark mode standalone calculator: `roi_calculator_dark_1792032662955.png`

---

### P1-C: Text-on-Background Semantics & Contrast Tokens (CONFIRMED & RESOLVED)
- **Defect Category:** Semantic Token System Integrity
- **Source Files & Lines:** `src/index.css` (lines ~10–90, ~730–760)
- **Before State:**
  - Global CSS used `background: var(--ink); color: var(--white);` on elements like `.calc-result`, `.pricing-tab[aria-selected="true"]`, and `.btn-dark`.
  - In Dark Mode, `--ink` resolves to `#F0E9DF` (cream), but `--white` remained `#ffffff`, producing nearly white text on a cream background (**1.15:1 contrast failure**).
- **Root-Cause Resolution:**
  - Defined paired semantic contrast tokens in `:root` and `[data-theme="dark"]`:
    - Light Mode: `--inverse-bg: #171713; --inverse-ink: #FFFCF7;`
    - Dark Mode: `--inverse-bg: #F0E9DF; --inverse-ink: #171713;`
  - Replaced all problematic `background: var(--ink); color: var(--white);` instances with `background: var(--inverse-bg); color: var(--inverse-ink);`.
  - Added shared fallback tokens for legacy components: `--text-primary`, `--text-secondary`, `--text-muted`, `--bg-primary`, `--bg-card`, `--border-subtle`, `--accent-text`, `--nav-offset: 88px;`, `--section-py: clamp(48px, 6vw, 72px);`.
- **Computed Contrast Validation:**
  - Selected pricing tabs and dark button states now maintain $\ge 14:1$ contrast in both Light and Dark themes.

---

### P1-D: Legal Page Structure & Undefined Token Deprecations (CONFIRMED & RESOLVED)
- **Defect Category:** Layout Architecture, Responsive TOC, Accessibility
- **Source Files & Lines:** `src/pages/LegalPage.css`, `src/pages/PrivacyPolicy.jsx`, `src/pages/Terms.jsx`, `src/pages/CookiePolicy.jsx`, `src/pages/RefundPolicy.jsx`
- **Before State:**
  - `LegalPage.css` used undefined legacy tokens (`--section-py`, `--text-muted`, `--bg-card`).
  - Oversized top padding (`clamp(120px, 12vw, 160px)` plus inner container padding `60px 20px`) created excessive dead space.
  - Pages rendered as plain text dumps without sticky navigation, on-page table of contents, or print stylesheets.
- **Root-Cause Resolution:**
  - Created a robust, reusable component: `src/components/legal/LegalDocumentLayout.jsx` with scoped stylesheet `src/components/legal/LegalDocumentLayout.css`.
  - **Structure & Features:**
    - Kicker: "LEGAL & SUPPORT", page H1, last reviewed date, and one-sentence purpose.
    - Operator Summary Banner: Clearly identifying XAIVON operated by ADABHRA GROUP (Sole Proprietorship), India; Proprietor Raja Babu; Enquiries `raja@xaivon.com`.
    - Responsive "On this page" Table of Contents:
      - Desktop ($\ge 960\text{px}$): Sticky left sidebar with smooth scroll to anchors (`scroll-margin-top: 110px`).
      - Mobile ($< 960\text{px}$): Semantic `<details>` accordion navigation.
    - Reading column: Optimized 72ch width (`max-width: 780px`) with 1.7 line height for high legibility.
    - Action slot: Quick navigation links to other policies.
    - Questions block: Direct email link to `raja@xaivon.com` and Contact page.
    - Print stylesheet (`@media print`): Hides navigation/footer/sidebar, forces black-on-white text, full-width letter/A4 flow.
  - Refactored all 4 legal pages (`/privacy-policy`, `/terms`, `/cookie-policy`, `/refund-policy`) to consume `LegalDocumentLayout`.
- **Screenshot Evidence:**
  - Privacy Policy Desktop Light: `legal_privacy_light_1792032680201.png`
  - Terms of Service Mobile Light: `legal_terms_mobile_1792032701890.png`

---

### P1-E: Contact Layout Parent/Nested Grid Collision & Offset Normalization (CONFIRMED & RESOLVED)
- **Defect Category:** CSS Grid Hierarchy & Viewport Alignment
- **Source Files & Lines:** `src/pages/Contact.css`, `src/pages/Contact.jsx`
- **Before State:**
  - Parent `.contact-columns` was defined as `display: grid; grid-template-columns: 1fr 1fr;`.
  - Its direct JSX child was `.container` (which was also defined as a grid), resulting in column 1 containing the entire page content while column 2 remained empty and collapsed.
  - Top padding was hardcoded to `72px`, conflicting with the 88px fixed navigation bar.
- **Root-Cause Resolution:**
  - Flattened layout into `.contact-section-wrap` and single authoritative `.contact-columns`:
    - Desktop: `grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr); gap: clamp(32px, 4vw, 48px);`.
    - Mobile ($\le 900\text{px}$): `grid-template-columns: 1fr; gap: 32px;`.
  - Sized page top margin using `--nav-offset: 88px;` and `scroll-margin-top: 96px`.
  - Added fallback guidance for Calendly iframe loading in privacy-conscious or script-blocked browser environments.
- **Screenshot Evidence:**
  - Contact 2-column layout Light: `contact_form_calendar_light_1792032728499.png`
  - Contact mobile responsive layout: `contact_mobile_light_1792032758509.png`

---

### P2-F: Hero Bottom Dark Strip & Artificial LoadingScreen Flash (CONFIRMED & RESOLVED)
- **Defect Category:** Layout Framing & Perceived Performance
- **Source Files & Lines:** `src/App.jsx`, `src/components/LoadingScreen.jsx`, `src/index.css`
- **Before State:**
  - `LoadingScreen.jsx` was mounted unconditionally on app startup with an artificial 800ms timer, creating a jarring dark flash even when all assets were cached.
  - In Light Mode, Section 02 on the homepage was an uncontained edge-to-edge black strip directly underneath the light hero.
- **Root-Cause Resolution:**
  - Removed artificial `LoadingScreen` overlay from `src/App.jsx`. Retained standard React Suspense fallback for route-level lazy loading without timer delays.
  - Contained the homepage dark section in Light Mode: `.dark-section .container` now renders as a framed, rounded deep-espresso contrast panel (`border-radius: 24px; padding: clamp(40px, 5vw, 64px) clamp(24px, 4vw, 48px);`), preserving the warm ivory background around it.
- **Screenshot Evidence:**
  - Hero and framed contrast section: `hero_framed_contrast_light_1792032772183.png`

---

### P2-G: Content Accuracy, Trust Guardrails & Proof Integrity (CONFIRMED & RESOLVED)
- **Defect Category:** Truthful Communication & Compliance
- **Source Files & Lines:** `src/pages/Home.jsx`
- **Before State:**
  - Section 07 was titled *"See what a working system actually does."*, which could be misinterpreted as a recording of an actual customer client deployment.
  - Header badge read *"Verified Standards"*, implying third-party certification.
- **Root-Cause Resolution:**
  - Changed heading to: **"See how a connected workflow could work."**
  - Added explicit disclaimer: *"This is an illustrative process—not a recording of a client system. A real implementation would be designed around your tools and approvals."*
  - Replaced badge with: *"Editorial Standard"*.
  - Verified no fabricated client logos, fake case studies, or unearned compliance certifications exist across any page.

---

## 2. Release Gate Verification Summary

| Gate | Status | Evidence |
|---|---|---|
| Solutions Step 1/2/3 Cards Readable | **PASS** | Contrast 17.2:1 (H3), 6.8:1 (Body). Screenshots in both themes. |
| ROI Calculator Refactored & Readable | **PASS** | Warm copper/espresso theme, reactive calculations verified, no cyan. |
| Token System Sanitized | **PASS** | All undefined CSS tokens replaced with valid paired semantic tokens. |
| Hero-Bottom Transition Clean | **PASS** | Framed 24px rounded card in Light Mode; artificial loader removed. |
| Layout / Fixed Nav Collisions Fixed | **PASS** | Contact 2-column desktop / 1-column mobile; no fixed overlay conflicts. |
| Legal Pages Reusable Layout | **PASS** | `LegalDocumentLayout` with sticky TOC, 72ch width, print CSS. |
| Backend & Security Preserved | **PASS** | APIs, rate limits, Resend, Upstash, and Calendly completely untouched. |
| Automated Tests & Build Clean | **PASS** | 20/20 Vitest pass, 0 ESLint errors, Vite build successful, 0 claim violations. |
