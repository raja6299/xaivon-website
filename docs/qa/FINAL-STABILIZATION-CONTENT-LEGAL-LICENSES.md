# XAIVON — Final Stabilization Content, Legal & License Ledger

**Branch:** `fix/xaivon-final-stabilization`
**Base Commit:** `ecf883c840f13c10e1af1309c80e902bd1d99a4f`
**Main Baseline SHA:** `fcd7b2ddf656af21db29294db624f30c88f4f40d`
**Date:** 2026-10-18

---

## 1. Asset Attribution & License Ledger

| Asset File | Content Description | Provenance / License | Usage Context |
|---|---|---|---|
| `public/logo.png` | XAIVON brand mark (geometric warm-copper square icon) | Proprietary original design owned by ADABHRA GROUP | Favicon, OpenGraph, header navigation |
| `public/og-image.png` | 1200×630 OpenGraph social preview card | Proprietary original artwork designed for XAIVON | Social link sharing preview across all routes |
| `public/favicon.svg` | Scalable vector logo mark | Proprietary original SVG | Browser tab icon |
| `public/icons.svg` | UI icon sprites (arrows, checkmarks, sliders) | Clean MIT/Public Domain geometric primitives | Navigation and UI widgets |
| `src/assets/hero.png` | Workflow console background visual accent | Proprietary design asset | Hero section background atmosphere |
| Google Fonts (`Inter`, `Sora`) | Web typography | SIL Open Font License (OFL 1.1) | Clean, premium enterprise typography |
| Platform SVGs (X, LinkedIn, GitHub) | Social profile logos in footer | Brand identity standard vector icons, decorative (`aria-hidden="true"`) | Footer "Connect with the Founder" module |

---

## 2. Legal Entity & Governance Facts
- **Registered Brand:** `XAIVON`
- **Operating Legal Entity:** `ADABHRA GROUP (Sole Proprietorship)`
- **Proprietor / Founder:** `Raja Babu`
- **Jurisdiction & Governing Law:** Courts of Bettiah, West Champaran, Bihar, India
- **Public Enquiries Email:** `raja@xaivon.com`
- **Direct Telephone:** `+91 95211 90205`
- **Legal Notices Email:** `raja969384bth@gmail.com`
- **Status of Legal Clauses:** All 14 legal clauses (Refund Policy RP-01 to RP-07, Terms TS-01 to TS-04, Privacy PP-01 to PP-03) were formally reviewed and approved by the owner in `docs/qa/V8-LEGAL-OWNER-APPROVAL.md`.

---

## 3. Commercial Claims Audit & Allowlist Compliance
- **Claims Verification Gate:** `scripts/verify-claims.js` audits all source code during build.
- **Remediated Statements:**
  - Removed "autonomous AI agents" in favor of "intelligent digital assistance" with human oversight.
  - Removed "independent rate negotiation" in freight pages; replaced with "rate card verification" and "structured quote processing".
  - Removed "always-on" and "instant" support claims in favor of "rapid response handling" and "automated inquiry triage".
  - Resources page relabeled as "Consultation Topics & Architecture Blueprints", eliminating fake "12 min read" badges.
