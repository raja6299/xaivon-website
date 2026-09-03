# XAIVON Infrastructure Architecture

## Overview
XAIVON is a Vite React SPA deployed on Vercel with serverless API functions.

## Tech Stack
- **Frontend:** React 19, Vite, react-router-dom
- **Styling:** Vanilla CSS with CSS Custom Properties (Design System: "Enterprise Obsidian")
- **Fonts:** Sora (headings), Inter (body) via Google Fonts
- **API:** Vercel Serverless Functions (`/api/`)
- **Hosting:** Vercel with automatic GitHub deployments
- **Scheduling:** Calendly (PopupWidget — lazy loaded)

## Security Architecture

### Current Implementation
| Layer | Implementation | Status |
|-------|---------------|--------|
| Honeypot | Hidden form field (`website`) | ✅ Active |
| Input Sanitization | HTML tag stripping | ✅ Active |
| Input Validation | Email regex, length constraints | ✅ Active |
| Rate Limiting | Upstash Redis sliding window | ✅ Active |
| CORS | Vercel headers | ✅ Active |
| CSP | Content-Security-Policy in `vercel.json` | ❌ Not yet implemented |

### Rate Limiting Architecture

Implemented via `@upstash/ratelimit` and `@upstash/redis` in `src/lib/ratelimit.js` using a sliding window algorithm (3 requests per window) backed by Upstash Redis REST API. Fails open if Redis is unreachable.

**Env Vars Required:**
- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`

## API Endpoints

| Endpoint | Method | Purpose | Security |
|----------|--------|---------|----------|
| `/api/contact` | POST | Contact form submission | Honeypot, validation, sanitization, rate limiting, Resend email |
| `/api/audit` | POST | AI infrastructure audit form | Honeypot, validation, sanitization, rate limiting, Resend email |
| `/api/lead` | POST | Lead magnet email capture | Honeypot, validation, sanitization, rate limiting |

## Email Integration

Transactional email is handled via **Resend** (live in `api/contact.js` and `api/audit.js`).

**Env Vars Required:**
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL` (default: `leads@xaivon.com`)
- `RESEND_CONTACT_EMAIL_TO` (default: `raja@xaivon.com`)

## Analytics Setup

| Service | Status | Setup |
|---------|--------|-------|
| Google Analytics 4 | ✅ Active | Configured with ID `G-FKYVMSFM5B` in `Analytics.jsx` and `index.html` |
| Google Search Console | 📋 Ready | Add verification meta tag or DNS record |
| Vercel Analytics + Speed Insights | ✅ Active | Enabled in production |

### Event Tracking Matrix

| Event Name | Trigger | Properties |
|------------|---------|------------|
| `contact_form_submit` | Contact form submission | `company` |
| `audit_form_submit` | AI audit form submission | `company`, `industry` |
| `lead_magnet_download` | Lead magnet email capture | `resource` |
| `cta_click` | Primary CTA clicks | `location`, `cta_text` |
| `calendly_booking` | Calendly strategy call scheduled | `event_category`, `event_label` |

## SEO Architecture

- **Sitemap:** Auto-generated via `scripts/generate-sitemap.js` → `public/sitemap.xml`
- **Robots.txt:** Generated alongside sitemap → `public/robots.txt`
- **Schema:** Structured JSON-LD in `index.html` (Organization, WebSite)
- **Canonical URLs:** Set in `index.html`
- **Open Graph:** Full OG tags in `index.html` with generated `og-image.png`
