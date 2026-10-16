# XAIVON Website

Production codebase for **XAIVON** — AI Infrastructure, Workflow Automation & Systems Architecture.
Official Domain: [https://xaivon.com](https://xaivon.com)
Operated by: **ADABHRA GROUP** (Sole Proprietorship, Raja Babu)

---

## 1. Architecture & Tech Stack

- **Frontend Core**: React 19, Vite 8, React Router 7 (SPA with prerendered metadata for 33 routes)
- **Styling**: Vanilla CSS design system with dual-theme (Warm Ivory `#F8F5EE` & Dark Charcoal `#12110F`) semantic tokens, WCAG 2.1 AA compliant
- **Serverless Edge / APIs**: Vercel Serverless Functions (`/api/contact`, `/api/audit`)
- **Email Ingestion**: [Resend](https://resend.com) transactional API with idempotent transmission
- **Abuse Prevention**: [Upstash Redis](https://upstash.com) sliding-window rate limiting (IP-keyed for audit assessments, IP+email keyed for general contacts)
- **Privacy & Analytics**: Consent-aware telemetry with Google Analytics 4 (gated), Vercel Web Analytics (gated), and Speed Insights

---

## 2. Environment Configuration

Copy `.env.example` to `.env.local` for local development or configure in Vercel Project Settings:

```bash
cp .env.example .env.local
```

### Required Production Environment Variables
| Variable Name | Service | Purpose / Format |
|---|---|---|
| `UPSTASH_REDIS_REST_URL` | Upstash Redis | REST endpoint URL (`https://...upstash.io`) |
| `UPSTASH_REDIS_REST_TOKEN` | Upstash Redis | REST write token for rate limiting |
| `RESEND_API_KEY` | Resend | API key with domain sending permissions |
| `RESEND_FROM_EMAIL` | Resend | Verified sender (e.g., `XAIVON <notifications@xaivon.com>`) |
| `RESEND_CONTACT_EMAIL_TO` | Resend | Recipient inbox for incoming lead dispatch |

*Note: Never commit secret values or `.env.local` files to Git.*

---

## 3. API Contracts & Status Code Standards

### `POST /api/contact`
General customer enquiry and consultation intake.
- **Request Body (JSON)**: `{ name, email, company, service, message, website (honeypot) }`
- **Rate Limit**: 5 requests per 10 minutes per IP+Email
- **Status Codes**:
  - `200 OK`: Lead received, auto-acknowledgment dispatched, and team notified.
  - `400 Bad Request`: Validation failure (empty field, length violation, invalid email, honeypot triggered).
  - `405 Method Not Allowed`: Non-POST method called.
  - `429 Too Many Requests`: Rate limit threshold exceeded.
  - `500 Internal Server Error`: Resend or runtime transmission failure.

### `POST /api/audit`
Architecture assessment and enterprise AI audit request intake.
- **Request Body (JSON)**: `{ name, email, company, teamSize, currentStack, primaryBottleneck, timeline, website (honeypot) }`
- **Rate Limit**: 3 requests per 10 minutes per IP
- **Status Codes**:
  - `200 OK`: Assessment enquiry received and dispatched.
  - `400 Bad Request`: Schema validation failure.
  - `405 Method Not Allowed`: Non-POST method called.
  - `429 Too Many Requests`: Rate limit threshold reached; user instructed to email directly.
  - `503 Service Unavailable`: Upstash Redis rate-limit store unreachable; graceful fallback to direct email provided.

---

## 4. Local Development & Verification

### Installation
```bash
npm ci
```

### Local Dev Server
```bash
npm run dev
```

### Full Verification Suite
Before committing or submitting a Pull Request, run the complete verification suite:

```bash
# 1. Run unit and integration tests (28 tests)
npm test -- --run

# 2. Check JavaScript/JSX linting
npm run lint

# 3. Check for unauthorized absolute marketing claims
npm run check:claims

# 4. Compile production bundle, prerender route HTML, and verify meta tags
npm run build

# 5. Check git formatting and whitespace
git diff --check
```

---

## 5. Release & Governance Runbook

### Branch & Pull Request Policy
1. **Never push directly to `main`**. Production auto-deploys from `main`.
2. All changes must be developed on a dedicated `fix/*` or `feat/*` branch.
3. Open a Pull Request targeting `main`.
4. Ensure all CI verification checks pass before requesting owner review.
5. Merge only with explicit owner sign-off.

### Rollback Procedure
If a production defect is identified post-release:
1. Locate the last known good production commit SHA (e.g., `72f484c80d8cd0c7a9d43ba0a24dae44c4f31057`).
2. In the Vercel Dashboard: Navigate to **Deployments** &rarr; Select previous deployment &rarr; Click **Promote to Production** (instant zero-downtime rollback).
3. In Git: Revert the merge commit on a fix branch and open an emergency PR.

### Secret Rotation Runbook
If an API key is compromised:
1. **Resend Key**: Generate a new API key in the Resend dashboard. Update `RESEND_API_KEY` in Vercel Project Settings for both Production and Preview. Redeploy the latest commit. Revoke the old key.
2. **Upstash Token**: Reset the REST token in Upstash Console. Update `UPSTASH_REDIS_REST_TOKEN` in Vercel. Verify rate-limiting on preview before promoting.
