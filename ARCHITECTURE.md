# XAIVON Infrastructure Architecture

## Overview
XAIVON is a Vite React SPA deployed on Vercel with serverless API functions.

## Tech Stack
- **Frontend:** React 18, Vite, react-router-dom
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
| Rate Limiting | In-memory Map (per serverless instance) | ⚠️ Basic |
| CORS | Vercel headers | ✅ Active |
| CSP | Content-Security-Policy in `vercel.json` | ✅ Active |

### Future Rate Limiting Upgrade Path

The current in-memory rate limiter works but resets on each cold start. For production-grade rate limiting:

#### Option 1: Upstash Redis (Recommended)
```bash
npm install @upstash/ratelimit @upstash/redis
```

```javascript
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(3, '60 s'),
});

// In handler:
const { success } = await ratelimit.limit(ip);
if (!success) return res.status(429).json({ error: 'Rate limited' });
```

**Env Vars Required:**
- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`

#### Option 2: Vercel KV
```bash
npm install @vercel/kv
```
Similar API to Upstash but managed directly through Vercel dashboard.

#### Option 3: Vercel Edge Middleware
Create `middleware.js` at root for edge-level rate limiting before serverless functions execute.

## API Endpoints

| Endpoint | Method | Purpose | Security |
|----------|--------|---------|----------|
| `/api/contact` | POST | Contact form submission | Honeypot, validation, sanitization, rate limiting |
| `/api/audit` | POST | AI infrastructure audit form | Same as contact |
| `/api/lead` | POST | Lead magnet email capture | Email validation, sanitization |

## Email Integration (Future)

**Target Provider:** Resend

When ready to connect:
1. Install: `npm install resend`
2. Add env var: `RESEND_API_KEY`
3. Replace the `// TODO: Connect to Resend` block in each API handler
4. No frontend changes required

## Analytics Setup

| Service | Status | Setup |
|---------|--------|-------|
| Google Analytics 4 | 🟡 Placeholder ID | Replace `G-XXXXXXXXXX` in `Analytics.jsx` |
| Microsoft Clarity | 🟡 Placeholder ID | Replace `XXXXXXXXXX` in `Analytics.jsx` |
| Google Search Console | 📋 Ready | Add verification meta tag or DNS record |

### Event Tracking Matrix

| Event Name | Trigger | Properties |
|------------|---------|------------|
| `contact_form_submit` | Contact form submission | `company` |
| `audit_form_submit` | AI audit form submission | `company`, `industry` |
| `lead_magnet_download` | Lead magnet email capture | `resource` |
| `cta_click` | Primary CTA clicks | `location`, `cta_text` |

## SEO Architecture

- **Sitemap:** Auto-generated via `scripts/generate-sitemap.js` → `public/sitemap.xml`
- **Robots.txt:** Generated alongside sitemap → `public/robots.txt`
- **Schema:** Dynamic JSON-LD via `SchemaMarkup.jsx` (Organization, Service, FAQ, Breadcrumb)
- **Canonical URLs:** Set in `index.html`
- **Open Graph:** Full OG tags in `index.html` with generated `og-image.png`
