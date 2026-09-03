# XAIVON Infrastructure Architecture

## Overview
XAIVON is a Vite React SPA deployed on Vercel with serverless API functions.

## Tech Stack
- **Frontend:** React 19, Vite, react-router-dom
- **Styling:** Vanilla CSS with CSS Custom Properties (Design System: Warm Copper & Neutrals)
- **Fonts:** Sora (headings), Inter (body) via Google Fonts
- **API:** Vercel Serverless Functions (`/api/`)
- **Hosting:** Vercel with automatic GitHub deployments
- **Scheduling:** Calendly (PopupWidget — lazy loaded)

## Security Architecture

### Current Implementation
| Layer | Implementation | Status |
|-------|---------------|--------|
| Honeypot | Hidden form field (`website`) | ✅ Active |
| Input Escaping | Context-appropriate HTML entity encoding | ✅ Active |
| Input Validation | Email regex, length constraints | ✅ Active |
| Rate Limiting | Upstash Redis (IP + Email) sliding window | ✅ Active |
| CORS | Vercel headers | ✅ Active |
| CSP | Content-Security-Policy-Report-Only in `vercel.json` | ✅ Active (Report-Only) |

### Rate Limiting Architecture

Implemented via `@upstash/ratelimit` and `@upstash/redis` in `src/lib/ratelimit.js` using a sliding window algorithm (3 requests per window) backed by Upstash Redis REST API. Fails safely to standard response if Redis is unreachable.

**Env Vars Required:**
- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`

## API Endpoints

| Endpoint | Method | Purpose | Security |
|----------|--------|---------|----------|
| `/api/contact` | POST | Contact form submission | Honeypot, validation, escaping, IP rate limiting, Resend idempotency |
| `/api/audit` | POST | AI infrastructure audit form | Honeypot, validation, escaping, IP rate limiting, Resend idempotency |

*(Note: `/api/lead` and persistent CRM storage are PLANNED for future implementation. The current LeadMagnet safely redirects users to the contact form).*

## Email Integration

Transactional email is handled via **Resend** (live in `api/contact.js` and `api/audit.js`).

**Env Vars Required:**
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `RESEND_CONTACT_EMAIL_TO`

## Analytics Setup

| Service | Status | Setup |
|---------|--------|-------|
| Google Analytics 4 | ✅ Active | Initialized dynamically; consent via `CookieConsent.jsx` |
| Vercel Analytics + Speed Insights | ✅ Active | Enabled in production |

## SEO Architecture

- **Sitemap:** Auto-generated via `scripts/generate-sitemap.js` based on canonical `metadata.js` registry.
- **Dynamic Metadata:** Injected during build into all static HTML files via `scripts/inject-meta-tags.js`.
- **Verification:** Strict CI build gates via `verify-meta-tags.js` and `verify-claims.js`.
- **Schema:** Structured JSON-LD in `index.html` (Organization, WebSite).
