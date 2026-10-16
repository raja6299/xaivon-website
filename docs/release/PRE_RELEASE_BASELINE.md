# XAIVON — Pre-Release Baseline & Rollback Record

**Date:** October 16, 2026
**Document ID:** `docs/release/PRE_RELEASE_BASELINE.md`
**Target Repository:** `raja6299/xaivon-website`
**Production Domain:** `https://xaivon.com`
**PR:** [#3](https://github.com/raja6299/xaivon-website/pull/3)

---

## 1. Verified Git Baseline

| Branch / Ref | Expected Commit SHA | Verified Remote SHA | Working Tree Status | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **`origin/main`** (Production) | `4074c6484730ec7595856cc01102af200edd0f96` | `4074c6484730ec7595856cc01102af200edd0f96` | Clean | Current live production code |
| **`origin/feat/...`** (Release Candidate) | `e50ec17c4ff42e730614d7f30d75a1d95f5fa6c8` | `e50ec17c4ff42e730614d7f30d75a1d95f5fa6c8` | Clean | V8 Release Candidate with gated telemetry & single landmark |

---

## 2. Production & Preview Deployment State

### A. Current Production Environment (`xaivon.com`)
* **Live URL:** `https://xaivon.com`
* **Current Active Build:** Compiled from `4074c6484730ec7595856cc01102af200edd0f96`
* **Live Assets Observed:** `/assets/index-DyYWRz4J.js`, `/assets/index-BZ5jhhXs.css`
* **Live Business Data Observed:** Legacy US telephone (`+1-917-534-0270`), unsegmented GA4 script, pre-v3 layout.
* **Health Check:** HTTP 200 OK. Serves single-page application shell correctly.

### B. Vercel Staging / Preview Environment
* **Project Name:** `xaivon-website`
* **Vercel Project ID:** `prj_Y1LGqd6F3nRGn4xi75Kz8melW7c0`
* **Vercel Team / Owner:** `raja6200` (`team_7o57WaKMwMy5ZYzspANuK7Fp`)
* **Candidate Preview Deployment ID:** `By6URZbvW9jBMw6sq7LQu3NtcwYh`
* **Preview Deployment URL:** `https://xaivon-website-git-feat-xaivon-editorial-dual-t-a6896f-raja6200.vercel.app`
* **Deployment Status:** `Ready` / `SUCCESS`
* **Environment Protection:** Vercel Authentication / Deployment Protection is active (`Protected Deployment – Vercel`). This provides security isolation, preventing search crawlers from indexing preview deployments.

---

## 3. Production Rollback Architecture

> [!CAUTION]
> **RULE:** NEVER run `git reset --hard` on `main`. NEVER force-push to `main`.

If unexpected P0/P1 defects occur immediately after merging PR #3 into `main`:
1. **Instant Vercel Instant Rollback (Primary):**
   - Access the Vercel Dashboard for project `xaivon-website`.
   - Locate the previous stable production deployment for commit `4074c6484730ec7595856cc01102af200edd0f96` (Deployment ID prior to merge).
   - Click **"Promote to Production"**. The live domain `xaivon.com` will immediately revert traffic within seconds.
2. **Git Revert PR (Secondary):**
   - Create a clean revert branch: `git checkout -b revert-pr3 main`
   - Run `git revert -m 1 <merge-commit-sha>`
   - Push and merge the revert PR to `main`.

---

## 4. API & Integration Preservation

The serverless API backend is 100% frozen and validated:
* **`/api/contact`**: POST handler for customer inquiries. Rate limiting via Upstash Redis (`IP_email` sliding window: 3 requests per 6 hours). Email dispatch via Resend SDK with deterministic SHA-256 idempotency keys. Input validation and HTML escaping preserved.
* **`/api/audit`**: POST handler for infrastructure audit requests. Rate limiting via Upstash Redis (IP sliding window: 3 requests per 6 hours). Resend email dispatch preserved.
* **Secrets Required:**
  - `UPSTASH_REDIS_REST_URL`
  - `UPSTASH_REDIS_REST_TOKEN`
  - `RESEND_API_KEY`
  - `RESEND_FROM_EMAIL`
  - `RESEND_CONTACT_EMAIL_TO`
* **External Integrations:** Calendly widget on `/contact` with fallback link preserved.

---

## 5. Pre-Release Risk Register

| Risk ID | Severity | Description | Mitigation / Handling |
| :--- | :--- | :--- | :--- |
| **R-01** | High | Material legal commitments on public website without explicit owner approval | Audited in `docs/qa/V8-LEGAL-OWNER-APPROVAL.md`; held at `OWNER APPROVAL REQUIRED` gate |
| **R-02** | Medium | CI workflow template not yet active under `.github/workflows/` due to OAuth token scopes | Executed local CI suite (28/28 tests, ESLint 0, Build 32 routes 0 errors); workflow documented in `docs/qa/ci-workflow-directive.yml` |
| **R-03** | Low | Vercel Preview Deployment Protection requires login for external automated crawlers | Expected security behavior; protects preview URLs from duplicate Google indexing |
| **R-04** | Medium | Unchecked merge could cause service disruption if backend env vars differ in Vercel | Confirmed `vercel.json` rewrites and env variable names remain identical to production baseline |
