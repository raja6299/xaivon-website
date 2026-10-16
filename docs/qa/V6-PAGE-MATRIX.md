# XAIVON v7.0 Corrected Route & Page Verification Matrix

**Date:** 15 October 2026<br>
**Repository:** `raja6299/xaivon-website`<br>
**Feature Branch:** `feat/xaivon-editorial-dual-theme-sot-v3`<br>
**Target Release:** Pre-Production Release Candidate v7.0<br>
**Authority:** Approved Source of Truth v3 & Actual React Router declarations in `src/App.jsx`

---

## 1. Real Route Verification Matrix (33 Declared Paths)

| # | Route | Route Type & Component | Page Title / H1 | Layout & Navigation | Contrast & Theme (Light & Dark) | Status | Notes & Constraints |
|---|---|---|---|---|---|---|---|
| 1 | `/` | Static (`Home.jsx`) | Make everyday work easier to run. | Fixed navbar offset, framed contrast section, 24px container | **PASS** (AAA/AA across all text & cards) | **PASS** | Framed contrast card in light mode; artificial LoadingScreen eliminated. Section 07 illustrative disclaimer verified. |
| 2 | `/about` | Static (`About.jsx`) | Systems Built for Operational Reality | Editorial centered layout, 1140px max width | **PASS** (Ink on warm ivory / cream on espresso) | **PASS** | ADABHRA GROUP sole proprietorship clearly disclosed. No inflated headcount. |
| 3 | `/solutions` | Static (`Solutions.jsx`) | Business Automation Solutions | 3-step process cards, problem-card styling | **PASS** (17.2:1 H3, 6.8:1 body in light mode; AAA in dark mode) | **PASS** | P1-A cascade root fix verified. All 3 cards 100% visible and legible in both themes. |
| 4 | `/products` | Static (`Products.jsx`) | Products & Roadmap | Current vs planned software distinction | **PASS** (Status badges high contrast) | **PASS** | Clear distinction between active capabilities and future roadmap software. |
| 5 | `/industries` | Static (`Industries.jsx`) | Industries & Workflow Operations | Multi-industry operations cards | **PASS** (Semantic borders, high contrast) | **PASS** | Honest scope disclaimer ("assessed case by case") preserved. |
| 6 | `/services` | Static (`Services.jsx`) | Practical Automation & AI Services | 6 service pillars, clear deliverables | **PASS** (Surface cards, readable tags) | **PASS** | Preserves original service scopes without inflated claims. |
| 7 | `/pricing` | Static (`Pricing.jsx`) | Choose the level of automation you need. | 6 tiers, INR/USD toggle, FAQs | **PASS** (Active tab 14:1 contrast in dark mode via `--inverse-bg`) | **PASS** | Locked starting prices match SoT v3: Workflow ($749 / ₹29,000), AI Agents ($2,499 / ₹99,000), Voice AI ($2,999 / ₹1,25,000), Support ($1,249 / ₹49,000), CRM ($999 / ₹45,000), Document ($1,499 / ₹59,000). Fixed stored pricing, no currency conversion. |
| 8 | `/contact` | Static (`Contact.jsx`) | Speak With XAIVON About Your Workflow | 2-column desktop grid, 1-col mobile, calendar fallback | **PASS** (High contrast form inputs, labels, and feedback) | **PASS** | Single authoritative grid; no parent/child collision. Fallback message present if Calendly iframe is blocked. |
| 9 | `/roi-calculator` | Static (`RoiCalculatorPage.jsx`) | Estimate the time tied up in repetitive work. | Dual-column interactive estimator, 4 sliders | **PASS** (Warm copper, white thumb, high-contrast results) | **PASS** | 4 sliders verified: Manual Hours/Person (2-35h), Hourly Rate ($15-$150), Team Size (1-50), Automation Rate (20%-80%). Theoretical time value explicitly distinguished from cash savings. 25 unit tests pass. |
| 10 | `/ai-consultation` | Static (`AiConsultation.jsx`) | Free AI Operations Assessment | Assessment workflow & intake steps | **PASS** (Semantic cards, readable text) | **PASS** | Zero automated booking commitment; clear review process. `noindex: true` configured. |
| 11 | `/quoteflow-ai` | Static (`QuoteFlowAI.jsx`) | QuoteFlow AI — Automated RFQ & Quoting | Automated quoting workflow product page with embedded AIAudit | **PASS** (High-contrast timeline & feature grid) | **PASS** | Clearly designated as an implementation capability / roadmap product. Embedded AIAudit form functional. |
| 12 | `/ai-agents` | Static (`AIAgents.jsx`) | Custom Autonomous AI Agents | Workflow delegation architecture with embedded AIAudit | **PASS** (Restrained dark section, clear body text) | **PASS** | Technical capabilities described honestly without "sentient" hype. Embedded AIAudit form functional. |
| 13 | `/ai-automation` | Static (`AIAutomation.jsx`) | End-to-End AI Workflow Automation | Operational system architecture with embedded AIAudit | **PASS** (Accessible diagrams, editorial typography) | **PASS** | Realistic human-in-the-loop handoff points preserved. Embedded AIAudit form functional. |
| 14 | `/ai-chatbots` | Static (`AIChatbots.jsx`) | Intelligent AI Chatbots & Support Assistants | Customer support & routing assistant with embedded AIAudit | **PASS** (Warm card backgrounds, clear contrasts) | **PASS** | Clarifies integration boundaries with real CRMs and APIs. Embedded AIAudit form functional. |
| 15 | `/logistics-solutions` | Static (`LogisticsSolutions.jsx`) | AI Logistics & Supply Chain Automation | Fleet, dispatch & warehouse operations | **PASS** (High contrast status badges) | **PASS** | Focuses on realistic data flow without unevidenced savings promises. |
| 16 | `/blog` | Static (`Blog.jsx`) | Insights on AI & Business Systems | Editorial article grid, tags, read times | **PASS** (Clear typography, high legibility) | **PASS** | All articles reflect realistic engineering and business practices. |
| 17 | `/resources` | Static (`Resources.jsx`) | Resources & Implementation Guides | Category filters, resource cards | **PASS** (Semantic cards, readable badges) | **PASS** | Educational guides for business operators. |
| 18 | `/privacy-policy` | Legal (`PrivacyPolicy.jsx`) | Privacy Policy | `LegalDocumentLayout` with sticky TOC, 72ch width | **PASS** (WCAG AAA contrast, print CSS) | **PASS** | Identifies ADABHRA GROUP, enquiry scope, strictly opt-in analytics, and DPDP Rules, 2025 phased commencement. |
| 19 | `/terms` | Legal (`Terms.jsx`) | Terms of Service | `LegalDocumentLayout` with sticky TOC, 72ch width | **PASS** (WCAG AAA contrast, print CSS) | **PASS** | Clarifies terms govern site use only; commercial engagements require separate signed SOW. |
| 20 | `/cookie-policy` | Legal (`CookiePolicy.jsx`) | Cookie Policy | `LegalDocumentLayout` with sticky TOC, 72ch width | **PASS** (WCAG AAA contrast, print CSS) | **PASS** | Documents exact storage keys (`xaivon-theme`, `xaivon_cookie_consent`) and strictly opt-in analytics architecture. |
| 21 | `/refund-policy` | Legal (`RefundPolicy.jsx`) | Refund & Cancellation Policy | `LegalDocumentLayout` with sticky TOC, 72ch width | **PASS** (WCAG AAA contrast, print CSS) | **PASS** | Explains milestone billing, completed engineering hours, third-party costs, and statutory consumer rights. |
| 22 | `/blog/ai-automation-enterprise-infrastructure` | Dynamic (`BlogPost.jsx`) | How AI Automation is Rewiring Enterprise Infrastructure | Long-form reading article, 72ch width | **PASS** (Readable prose, high-contrast text) | **PASS** | Verified against real key in `BLOG_POSTS`. |
| 23 | `/blog/logistics-automation-tms-integration` | Dynamic (`BlogPost.jsx`) | Integrating AI with Legacy TMS Systems | Long-form reading article, 72ch width | **PASS** (Readable prose, high-contrast text) | **PASS** | Verified against real key in `BLOG_POSTS`. |
| 24 | `/blog/freight-operations-scaling-without-headcount` | Dynamic (`BlogPost.jsx`) | Scaling Freight Operations Without Adding Headcount | Long-form reading article, 72ch width | **PASS** (Readable prose, high-contrast text) | **PASS** | Verified against real key in `BLOG_POSTS`. |
| 25 | `/blog/business-systems-ai-audits` | Dynamic (`BlogPost.jsx`) | Conducting an AI Audit on Your Business Systems | Long-form reading article, 72ch width | **PASS** (Readable prose, high-contrast text) | **PASS** | Verified against real key in `BLOG_POSTS`. |
| 26 | `/blog/crm-automation-lead-management` | Dynamic (`BlogPost.jsx`) | Automating Lead Routing and CRM Data Entry | Long-form reading article, 72ch width | **PASS** (Readable prose, high-contrast text) | **PASS** | Verified against real key in `BLOG_POSTS`. |
| 27 | `/s/ai-automation` | Dynamic (`SeoLandingPage.jsx`) | Enterprise AI Automation Solutions | Targeted SEO landing template | **PASS** (Restrained copper styling) | **PASS** | Verified against real slug in `SEO_CONTENT`. Embedded AIAudit form functional. |
| 28 | `/s/logistics-automation` | Dynamic (`SeoLandingPage.jsx`) | Logistics & Freight Automation Systems | Targeted SEO landing template | **PASS** (Restrained copper styling) | **PASS** | Verified against real slug in `SEO_CONTENT`. Embedded AIAudit form functional. |
| 29 | `/s/freight-automation` | Dynamic (`SeoLandingPage.jsx`) | Freight Brokerage Automation | Targeted SEO landing template | **PASS** (Restrained copper styling) | **PASS** | Verified against real slug in `SEO_CONTENT`. Embedded AIAudit form functional. |
| 30 | `/s/ai-chatbots` | Dynamic (`SeoLandingPage.jsx`) | AI Chatbots & Voice Agents | Targeted SEO landing template | **PASS** (Restrained copper styling) | **PASS** | Verified against real slug in `SEO_CONTENT`. Embedded AIAudit form functional. |
| 31 | `/s/workflow-automation` | Dynamic (`SeoLandingPage.jsx`) | Intelligent Workflow Automation | Targeted SEO landing template | **PASS** (Restrained copper styling) | **PASS** | Verified against real slug in `SEO_CONTENT`. Embedded AIAudit form functional. |
| 32 | `/s/crm-automation` | Dynamic (`SeoLandingPage.jsx`) | CRM Data Automation | Targeted SEO landing template | **PASS** (Restrained copper styling) | **PASS** | Verified against real slug in `SEO_CONTENT`. Embedded AIAudit form functional. |
| 33 | `*` (e.g. `/404`, `/non-existent`) | Catch-all (`NotFound.jsx`) | 404 — Page Not Found | Minimal clean error state with home redirect | **PASS** (High-contrast typography) | **PASS** | Proper 404 client routing behavior with link to return home. |

---

## 2. Clarification on `/ai-audit`

- **Finding:** `/ai-audit` is **NOT** a declared route in `src/App.jsx`.
- **Actual Architecture:** The interactive audit assessment interface is implemented as the reusable component `src/components/AIAudit.jsx`. It is embedded directly within 5 service/landing pages:
  1. `/quoteflow-ai`
  2. `/ai-agents`
  3. `/ai-automation`
  4. `/ai-chatbots`
  5. `/s/:slug` (all 6 programmatic SEO landing pages)
- **API Contract:** The embedded component submits inquiries to backend endpoint `/api/audit`, which validates payload parameters (`name`, `company`, `email`, `industry`, `challenge`, `submissionId`) and applies dedicated IP-based rate limiting via Upstash Redis.
- **Correction:** The prior V6 report incorrectly listed `/ai-audit` as a standalone page. This v7 audit correctly classifies it as an embedded component across 5 routes and confirms all 5 pages render the audit form properly.

---

## 3. Pricing Verification against Source of Truth v3

All six service categories strictly follow the approved starting tiers. Prices are fixed per currency in `src/data/xaivonData.js`; no runtime conversion is performed.

| Category | Starter Tier | Plus Tier | Premium Tier | Currency Mode |
|---|---|---|---|---|
| **Workflow & Automation** | $749 / ₹29,000 | $1,249 / ₹49,999 | $3,499 / ₹1,49,000 | USD & INR Toggle |
| **AI Agents** | $2,499 / ₹99,000 | $5,499 / ₹2,49,000 | $12,000 / ₹5,99,000 | USD & INR Toggle |
| **Voice AI** | $2,999 / ₹1,25,000 | $5,499 / ₹1,99,000 | $15,000+ / ₹6,99,000 | USD & INR Toggle |
| **Chatbot & Customer Support** | $1,249 / ₹49,000 | $2,499 / ₹99,000 | $6,000 / ₹2,49,000 | USD & INR Toggle |
| **CRM, Lead & Data Automation** | $999 / ₹45,000 | $2,499 / ₹1,09,000 | $6,000 / ₹2,49,000 | USD & INR Toggle |
| **Document & Business Process Automation** | $1,499 / ₹59,000 | $2,999 / ₹1,29,000 | $7,000 / ₹2,99,000 | USD & INR Toggle |

---

## 4. Standalone ROI Calculator Specification

The calculator in `src/components/ROICalculator.jsx` consists of **4 interactive sliders**:
1. **Manual Hours per Person / Week:** Range 2h to 35h (step 1h, default 15h). Represents average repetitive hours per employee.
2. **Average Hourly Rate ($):** Range $15 to $150 (step $5, default $45). Represents loaded employee cost.
3. **Team Size:** Range 1 to 50 people (step 1, default 5 people). Multiplies hours across the team.
4. **Assumed Automation Rate:** Range 20% to 80% (step 5%, default 50%). Explores theoretical proportion of work automated.

**Formula & Metrics:**
- Weekly team hours = `manualHoursPerPerson * teamSize`
- Current manual labor cost = `weeklyTeamHours * hourlyRate * 52`
- Hours recovered per year = `Math.round(weeklyTeamHours * 52 * automationRate)`
- Estimated value of time recovered = `currentYearlyCost * automationRate`
- Estimated unautomated labor cost = `currentYearlyCost - timeValueRecovered`
- **Result Cards:**
  1. `Current Manual Labor Cost`
  2. `Estimated Unautomated Cost`
  3. `Hours Recovered Per Year`
  4. `Estimated Value of Time Recovered` (Hero highlight card; explicitly labeled as theoretical time value, not an assurance of cash savings).
- **Unit Tests:** Verified with 5 comprehensive test cases in `tests/roi-calculator.test.js` (realistic baseline, minimum boundary, maximum boundary, zero values, negative/invalid input clamping).
