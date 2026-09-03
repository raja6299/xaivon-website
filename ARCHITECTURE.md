# XAIVON Infrastructure Architecture

## Overview
XAIVON is a Vite React SPA deployed on Vercel with serverless API functions.

## Tech Stack
- **Frontend:** React 19, Vite 8, react-router-dom 7
- **Styling:** Vanilla CSS with CSS Custom Properties (warm copper, burnt orange, warm neutrals)
- **Fonts:** Sora (headings), Inter (body) via Google Fonts
- **API:** Vercel Serverless Functions (`/api/`)
- **Hosting:** Vercel with automatic GitHub deployments
- **Scheduling:** Calendly (PopupWidget — lazy loaded)

## Security Architecture

### Current Implementation
| Layer | Implementation | Status |
|-------|---------------|--------|
| Honeypot | Hidden form field (`website`) | ✅ Active |
| Input Escaping | Context-appropriate HTML entity encoding (`escapeHtml`) | ✅ Active |
| Input Validation | Email regex, length constraints, required fields, type checks | ✅ Active |
| Rate Limiting | Upstash Redis sliding window (IP + email composite key) | ✅ Active |
| CORS | Vercel headers via `_cors.js` | ✅ Active |
| CSP | `Content-Security-Policy-Report-Only` in `vercel.json` | ✅ Report-Only (not enforcing) |
| Security Headers | HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy | ✅ Active |

### Rate Limiting Architecture
Implemented via `@upstash/ratelimit` and `@upstash/redis` in `src/lib/ratelimit.js`. Uses a sliding window (3 requests per 6 hours) with composite `IP_email` identifiers. Fails closed if Redis is unreachable — returns a safe denial rather than allowing unprotected submissions.

**Env Vars Required:**
- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`

### CSP Status
The Content-Security-Policy is **Report-Only** — it logs violations but does not block resources. The policy covers Google Analytics/GTM, Google Fonts, Vercel Analytics, and Calendly. It has **not** been browser-tested in enforcing mode yet. No active CSP reporting endpoint is configured.

## API Endpoints

| Endpoint | Method | Purpose | Security |
|----------|--------|---------|----------|
| `/api/contact` | POST | Contact form → email to team via Resend | Honeypot, validation, HTML escaping, IP+email rate limiting, Resend idempotency key |
| `/api/audit` | POST | AI audit form → email to team via Resend | Honeypot, validation, HTML escaping, IP+email rate limiting, Resend idempotency key |

**Removed endpoints:**
- `/api/lead` — deleted (no persistent CRM storage exists; LeadMagnet links to `/contact`)

**Planned (not yet implemented):**
- CRM / lead storage / newsletter automation — owner will implement separately

## Email Integration
Transactional email via **Resend** SDK v6. Both endpoints use the SDK's `idempotencyKey` option (second argument to `resend.emails.send()`) with a deterministic SHA-256 hash of submission content. Provider errors (`{ data, error }`) are explicitly handled — success is reported only on confirmed send.

**Env Vars Required:**
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `RESEND_CONTACT_EMAIL_TO`

## Analytics & Consent

| Service | Status | Notes |
|---------|--------|-------|
| Google Analytics 4 | ✅ Active | ID `G-FKYVMSFM5B`. Initialized in `index.html` with `send_page_view: false`. SPA route tracking via `Analytics.jsx` using `gtag('event', 'page_view')` to avoid duplicate pageviews. |
| Consent | ✅ Active | `CookieConsent.jsx` — defaults analytics to denied via Google Consent Mode. Visitors can accept/reject. Choice persists in `localStorage`. A "Cookie Settings" button allows changing preferences later. |
| Vercel Analytics + Speed Insights | ✅ Active | Production only |

### Tracked Events
- `page_view` — on SPA route change
- `contact_form_submit` — contact form submission
- `audit_form_submit` — AI audit form submission
- `calendly_booking` — Calendly strategy call scheduled
- `cta_click` — primary CTA clicks

## SEO Architecture

### Single Source of Truth
`src/config/metadata.js` is the canonical metadata registry. It defines title, description, image, and indexability for every route.

### Build Pipeline
```
vite build
  → generate-sitemap.js (from metadata.js)
  → inject-meta-tags.js (into dist HTML)
  → verify-meta-tags.js (strict validation with non-zero exit on failure)
  → verify-claims.js (allowlist-based claim audit with non-zero exit on failure)
```

### Metadata Injection
`scripts/inject-meta-tags.js` strips all existing meta/title/canonical/OG/Twitter/robots tags from the base HTML and injects route-specific tags into each `dist/*/index.html`.

### Sitemap
Generated from `pageMetadata` keys. Excludes noindex routes. Does not fabricate `<lastmod>` dates.

### Verification
`scripts/verify-meta-tags.js` validates the **built** dist output:
- Exactly 1 title, description, canonical per route
- Correct canonical URL
- OG title/description/url/image exist
- OG image file physically exists in dist
- Twitter card/title/description/image exist
- Noindex routes have robots noindex tag
- Noindex routes not in sitemap
- Indexable routes present in sitemap
- No duplicate sitemap URLs
- No duplicate titles across indexable routes

### Claims Verification
`scripts/verify-claims.js` scans source for numeric claims, SLAs, and superlatives. Uses an explicit allowlist with documented reasons. Exits non-zero on unapproved claims.

## Chat Assistant
`ChatEmbed.jsx` embeds an optional AI chat via iframe. Requires `VITE_AI_ASSISTANT_URL` env var. HTTPS required in production (HTTP allowed only in dev mode). All React hooks called unconditionally before conditional rendering. Strict `postMessage` origin validation. Missing/invalid config disables chat without crashing the site.
