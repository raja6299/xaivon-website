# XAIVON Website — Source of Truth (SoT) v1.0

**Purpose:** Authoritative standard for the XAIVON website redesign and production frontend migration.

**Primary references:** existing live XAIVON website, current `preview.html`, and the supplied copper/burnt-orange visual reference.

---

## 1. Non-negotiable project model

This is **not a new website build from scratch**.

- Existing live XAIVON project = source of truth for working backend, APIs, integrations, existing public URLs, deployment, analytics and verified production functionality.

- `preview.html` = source of truth for the new frontend direction, layout concepts, visual language and interaction ideas.

- Verified/owner-approved XAIVON business facts = source of truth for current services, pricing, claims and company information.

- The redesign may replace the frontend presentation, but must not silently replace or break production infrastructure.

- New backend routes/integrations must not be duplicated when existing production functionality already solves the requirement.

**Target architecture:**

`NEW FRONTEND → EXISTING VERIFIED BACKEND / INTEGRATIONS`

---

## 2. XAIVON positioning

### Primary identity

**XAIVON is a global AI Infrastructure and Business Automation company.**

It should feel:

- highly capable

- global

- premium

- technically serious

- trustworthy

- human

- confident

- practical

It must **not** feel:

- logistics-only

- like a generic AI agency

- like a normal web-design agency

- artificially corporate

- hype-driven

- full of generic AI marketing language

### Market scope

XAIVON is intentionally broad: any business that needs useful AI, automation, agents, integrations or intelligent operational systems may be a customer.

Logistics & Freight is a current active focus/use-case, **not the company boundary**.

Industry SaaS/platform concepts are future productization and should not dominate the current homepage.

### Important implementation nuance

Do not imply that an agent is made for a new industry merely by replacing a few words. Reusable architecture can be shared, but real implementations may require industry-specific knowledge, data, business rules, tools, permissions, escalation paths and testing.

---

## 3. Business offering architecture

Current capability layer:

1. Workflow Automation

2. AI Agents

3. Voice AI Agents

4. Chatbots

5. Lead & Email Automation

6. CRM & Data Automation

7. Document Intelligence

8. Custom Integrations

9. Business Support & Invoice Automation Agents

10. Startup Branding & Consultant AI Agents

11. E-Commerce Support & Order Tracking Agents

12. Lead-Finding AI Agents

**Website development is not a primary XAIVON positioning pillar.** It may be an implementation deliverable when required, but should not make the company look like a conventional website agency.

Organize the site primarily by **capability**, with industries as an application layer.

---

## 4. Homepage goals and information architecture

Priority order:

1. **Assessment / qualified business conversation**

2. **Clear understanding of what XAIVON builds**

3. **Serious trust / credibility**

Recommended homepage sequence:

1. Hero

2. Problem / operational friction

3. What XAIVON builds

4. System / workflow demonstration

5. AI/product layer

6. Industry applications

7. Real work + demonstrations

8. ROI / opportunity planner

9. FAQ

10. Final assessment CTA

### Remove from homepage

The large multi-phase future roadmap should not occupy a major homepage section. Future SaaS/platform direction belongs under Products/About/roadmap navigation.

---

## 5. Navigation and pages

### Primary navigation

**Home | Solutions | Products | Industries | About | Pricing**

Right-side primary CTA:

**Book an Assessment ↗**

Do **not** add Contact as a seventh primary nav item. Contact should be accessible from the CTA, footer and relevant CTAs.

### Resources

Do not keep Resources as a primary nav item. Useful resources can live under About or inside relevant solution/product pages.

### Main pages

- Home

- Solutions

- Products

- Industries

- About

- Pricing

About can contain company story, approach, integrations, work/proof access, FAQ and future direction.

Products should distinguish current offerings from future/roadmap concepts.

---

## 6. Visual design system

The supplied screenshot is a **visual reference**, not a page to copy literally.

### Core direction

Premium copper / burnt-orange hero with:

- rich lighting

- subtle grain/noise

- fine grid/architectural details

- contour lines where useful

- dimensional surfaces

- soft translucent layers used selectively

- deep contrast

- strong white typography

The rest of the site must not become one flat orange page.

### Visual chapters

Use deliberate section environments such as:

- burnt copper / deep warm orange

- warm cream

- warm white

- stone

- charcoal

- deep black

- muted olive/sage as a restrained secondary chapter

Orange is a **signal**, not wallpaper.

### Avoid

- neon cyberpunk

- purple/blue AI gradients

- excessive glassmorphism

- floating robot imagery

- particle spam

- decoration without meaning

- template-like SaaS cards

### Texture

Light sections may use subtle grain + soft lighting + fine grid/architectural detail. Texture intensity must vary by section and remain subconscious rather than noisy.

### Depth

Use professional layered shadows, ambient glow, fine borders, elevation and contrast. Cards should feel like physical surfaces.

---

## 7. Typography and content voice

Typography: premium modern grotesk/sans-serif with large editorial headlines, controlled tracking, strong hierarchy and excellent readability.

Keep the implementation lightweight; avoid adding unnecessary font dependencies.

### Content voice

Public copy must be:

- simple

- human

- direct

- specific

- calm

- confident

- understandable to non-technical business owners

Avoid repeated AI clichés such as:

`cutting-edge`, `revolutionize`, `unlock`, `leverage`, `seamless`, `next-generation`, `game-changing`, `AI-powered` in every section.

The writing should feel written by an experienced human, not by a marketing generator.

---

## 8. Hero + workflow system

The hero must answer three questions quickly:

**What is XAIVON? What does it build? Why should I care?**

Primary CTA:

**Book an AI Assessment**

Secondary CTA:

**Explore Solutions** or **See How It Works**

### Workflow visual

The hero system graphic should behave like a real operating process:

`Input → AI understanding → Business rules → Action`

Use nodes, connectors, status states, signal movement and controlled transitions.

Motion must explain the system rather than exist for decoration.

---

## 9. Proof / Work / Evidence system

Create a reusable, data-driven Work/Evidence system rather than hard-coding a fixed number of screenshots/videos.

Each work item should support:

- title

- type: Real Project / XAIVON Demonstration

- industry

- capability

- problem

- solution

- screenshots/images

- video

- audio where needed

- verified outcome

- timeframe

- client visibility/permission status

- optional client identity/logo

- featured state

- order/date

### Evidence rules

Real client work may only use assets that the owner has provided or approved.

Demonstrations must be clearly labelled as demonstrations and must not be presented as customer outcomes.

**Critical owner rule:** When a real project screenshot, video, audio, logo, testimonial or measurable result is required but not present in the workspace, the implementation agent must explicitly ask the owner to provide/approve the asset before publishing or substituting anything.

Never fabricate proof.

The component/data model must allow the owner to add many more projects later without redesigning or rewriting the section.

---

## 10. Pricing and commercial data

Pricing must remain visible where appropriate; do not hide it merely to appear "enterprise".

Commercial data must be normalized.

Priority order:

**Owner-approved production pricing > verified current production data > preview/demo pricing.**

Future products must be labelled Planned/Future/Roadmap and must not be shown as live commercial products unless explicitly approved.

No AI agent may silently invent or reconcile conflicting prices.

---

## 11. Data cleaning / preprocessing standard

Before implementation, normalize these entities into one canonical data layer:

- Brand

- Navigation

- Services

- Products

- Industries

- Pricing

- FAQs

- Claims

- Work/Evidence

- Contact details

- SEO metadata

Desktop navigation, mobile navigation and footer navigation should be generated from the same canonical navigation data wherever practical.

### Claims registry

Every strong claim should have an internal status such as:

`verified | qualified | case-study | illustrative | planned | remove`

Illustrative/demo metrics must not look like verified customer performance.

The current prototype contains illustrative metrics such as automation coverage, tasks resolved and manual work reduced; these must be clearly labelled as illustrative or replaced with capability-oriented UI. `preview.html` explicitly treats much of this content as demo/illustrative.

---

## 12. ROI planner

Keep the calculator if it helps qualification, but present it as an estimate/planning model, never as a guarantee.

Prefer a neutral initial state rather than a large default benefit that looks like company proof.

Inputs and formulas should be transparent. User-entered values drive the calculation.

---

## 13. SEO standard

Every indexable page must have:

- unique title

- unique meta description

- self-referencing canonical

- correct indexability

- Open Graph metadata

- social image

- semantic heading hierarchy

- clean URL

- appropriate structured data where valid

- descriptive internal links

- image alt text

Production must provide:

- `/robots.txt`

- `/sitemap.xml`

Preserve important existing public URLs during migration whenever possible. If a URL must change, use an appropriate redirect.

Structured data must accurately represent visible content; never add hidden or invented claims.

---

## 14. Security standard

No frontend code may contain:

- API keys

- database credentials

- CRM secrets

- private tokens

- server secrets

Server-side hardening should verify/configure as applicable:

- HTTPS/HSTS

- Content-Security-Policy

- X-Content-Type-Options: nosniff

- Referrer-Policy

- CSP frame-ancestors / frame protection

- suitable Permissions-Policy

- secure cookies when applicable

- server-side input validation

- rate limiting

- request-size limits

- bot/spam protection

- CSRF protection where applicable

Do not inject untrusted content through `innerHTML`.

Frontend validation is not a security boundary; forms must be validated again on the server.

---

## 15. Existing backend preservation

Before changing production files, inventory:

- API routes

- form endpoints

- CRM

- email

- calendar

- database/storage

- analytics

- environment variables

- redirects

- deployment

- existing public URLs

The redesigned UI should call the existing verified production functionality whenever it already exists.

Do not rebuild the backend merely because the UI changed.

The current prototype's contact behavior is explicitly local/demo-only, so it must not replace an existing production form flow.

---

## 16. Accessibility, performance and code quality

### Accessibility

- semantic HTML

- one clear H1 per page

- logical headings

- keyboard navigation

- visible focus

- accessible buttons and form errors

- sufficient contrast

- reduced-motion support

- usable mobile navigation

### Performance

Prefer CSS/SVG/native JS, optimized media and minimal dependencies.

Avoid unnecessary libraries, oversized assets, duplicate CSS/JS, heavy animation frameworks and render-blocking third-party scripts.

### Code quality

Production architecture may split the prototype into reusable components, styles, data and backend services. `preview.html` is the visual reference; it does not have to remain one giant HTML file.

---

## 17. What is fixed vs flexible

### Fixed

- broad XAIVON positioning

- premium global-company feeling

- human-readable copy

- capability-first architecture

- logistics is a current use-case, not the company boundary

- pricing must not be hidden

- no fabricated proof

- copper/orange premium hero direction

- visual chapter system

- system/workflow-led visual language

- existing production backend/functionality must be preserved

### Flexible

- exact headline wording

- exact section ordering inside a chapter

- specific shade adjustments

- exact card geometry

- micro-interactions

- component architecture

- exact CTA wording where the conversion goal stays intact

All flexible decisions must still follow this SoT.

---

## 18. Implementation acceptance criteria

The redesign is successful when:

1. It feels like a serious global AI infrastructure company.

2. It is clearly not logistics-only.

3. It does not read like generic AI marketing.

4. The visitor understands the offer quickly.

5. Assessment is the obvious primary action.

6. Current vs future offerings are clearly separated.

7. Real work and demonstrations are clearly separated.

8. New proof assets can be added without rewriting the component.

9. Existing production APIs/integrations still work.

10. Existing important URLs are preserved or redirected.

11. SEO/security/accessibility/performance checks pass before deployment.

---

## 19. Required implementation sequence

**Phase 1 — Audit:** inspect the live production repository and map all functionality.

**Phase 2 — Normalize:** create canonical business/navigation/pricing/claims/proof data.

**Phase 3 — Design system:** implement the XAIVON visual system from the supplied reference and `preview.html`.

**Phase 4 — Frontend migration:** replace the existing presentation while preserving production behavior.

**Phase 5 — Proof integration:** add only owner-provided/approved real project assets; leave clearly labelled demo content where needed.

**Phase 6 — Production QA:** links, routes, forms, backend integration, analytics, responsive behavior, accessibility, SEO, security and performance.

**Phase 7 — Deployment:** deploy only after regression checks confirm that the existing production functionality was preserved.

---

## 20. Final design principle

XAIVON should not look like a website trying to prove how futuristic its AI is.

It should look like a company that understands business operations, knows how to build the systems behind them, and is confident enough to show the work.

**Core visual/content idea:**

`Business problem → Workflow → Data → Intelligence → Rules → Action → Evidence`

That is the authoritative XAIVON website language.

---

# FINAL AMENDMENT — Pricing + About Direction

## Version 2.0 / Current approved decisions

This amendment supersedes any earlier conflicting pricing, About-page, navigation, or presentation guidance in this document.

## A. Pricing — final approved architecture

### A1. Pricing principle

XAIVON does not sell a fixed list of identical "AI features." Pricing is based on the level of system being built.

The commercial model is:

**focused capability → connected capability → complex system**

The public pricing page should therefore use **category selection + three tiers** rather than a single grid containing every service.

### A2. Pricing categories

Use six primary pricing categories:

1. **Workflow & Automation**

2. **AI Agents**

3. **Voice AI**

4. **Chatbot & Customer Support**

5. **CRM, Lead & Data Automation**

6. **Document & Business Process Automation**

The individual services/use cases sit inside these categories.

Examples:

- Lead & Email Automation → Workflow / CRM

- CRM Setup → CRM, Lead & Data

- Lead Find AI Agent → AI Agents

- Invoice Automation Agent → AI Agents / Document & Business Process

- E-Commerce Support & Order Tracking Agent → AI Agents / Business Process

- Startup Branding & Consultant AI Agent → AI Agents

- Business Support Agent → AI Agents / Business Process

These are not separate pricing grids.

### A3. Final public starting prices

| Category | Starter | Plus | Premium |
|---|---:|---:|---:|
| **Workflow & Automation** | **₹29,000 / $749** | **₹49,999 / $1,249** | **₹1,49,000 / $3,499** |
| **AI Agents** | **₹99,000 / $2,499** | **₹2,49,000 / $5,499** | **₹5,99,000 / $12,000** |
| **Voice AI** | **₹1,25,000 / $2,999** | **₹1,99,000 / $5,499** | **₹6,99,000 / $15,000+** |
| **Chatbot & Customer Support** | **₹49,000 / $1,249** | **₹99,000 / $2,499** | **₹2,49,000 / $6,000** |
| **CRM, Lead & Data Automation** | **₹45,000 / $999** | **₹1,09,000 / $2,499** | **₹2,49,000 / $6,000** |
| **Document & Business Process Automation** | **₹59,000 / $1,499** | **₹1,29,000 / $2,999** | **₹2,99,000 / $7,000** |

These are **starting prices**, not automatic final quotations.

Final project pricing depends on:

- workflow count and complexity

- number/type of integrations

- data complexity

- AI/agent complexity

- tools and actions

- deployment environment

- testing/evaluation

- monitoring

- support/optimization requirements

### A4. What each tier means

#### Starter — focused implementation

For a clearly defined problem or one bounded workflow.

Typical scope:

- one primary business objective

- one focused workflow or agent

- limited integrations

- basic business rules

- standard testing

- basic deployment

- defined support period

#### Plus — connected business automation

For clients who need a workflow connected across several systems.

Typical scope:

- multiple workflow steps

- multiple integrations

- CRM/email/data connectivity where relevant

- conditional logic

- validation and error handling

- human handoff/approval where relevant

- stronger testing

- deployment + optimization

**Plus = default "Most Popular" tier.**

#### Premium — complex operational systems

For more involved implementations.

Typical scope:

- complex multi-step workflows

- multiple systems/tools

- advanced routing/business rules

- broader monitoring

- stronger evaluation/testing

- advanced integrations

- production optimization

- extended support/maintenance structure

Premium does **not** mean "everything on the website." It means a broader and more complex implementation within the selected category.

### A5. Pricing page UX

The pricing page should visually follow the clarity of the supplied Vaultly reference without copying its template or finance-specific identity.

Recommended structure:

**Headline**

"Choose the level of automation you need."

**Supporting line**

"Start with one focused workflow, build a production-ready AI system, or scope a more complex operation."

Then:

`Workflow & Automation`

`AI Agents`

`Voice AI`

`Chatbot & Support`

`CRM, Lead & Data`

`Documents & Business Process`

Selecting a category changes the three pricing cards below.

Each card must show:

- Tier name

- Short purpose statement

- Starting price

- 5–7 key inclusions

- CTA

- Optional support/implementation note

- "Most Popular" on Plus

Use equal-height cards where practical so the comparison reads immediately.

Do not bury important inclusions behind accordions.

A "Compare what's included" interaction can be added below the primary cards for visitors who want more detail.

### A6. Pricing psychology

The page must not attempt to win by being the cheapest.

The intended signal is:

**premium implementation + accessible entry point + transparent scope.**

Do not advertise fake discounts such as "40% OFF."

The internally approved commercial strategy may target a meaningful price advantage versus comparable providers, but the public site should present the actual starting prices rather than inventing a competitor-price comparison.

### A7. Currency behavior

Approved behavior:

- Visitors detected as being in **India** see INR by default.

- Visitors detected as being **outside India** see USD by default.

- A visible manual switch **₹ INR | $ USD** is always available.

- Manual selection overrides the automatic default.

- Currency should not be calculated by live FX conversion.

- Store explicit approved INR and USD prices.

Country detection must use only the minimum coarse information needed for currency selection. Do not request precise location for this purpose.

### A8. Usage-based costs

Implementation price and third-party usage costs must be clearly separated when relevant.

Especially for Voice AI:

**Implementation / build fee**

+

**telephony / AI / provider usage**

Do not promise unlimited usage unless explicitly approved and commercially sustainable.

---

# B. About page — final direction

## B1. Purpose

The About page is not a second homepage and not a corporate press release.

Its job is to answer:

1. Who is XAIVON?

2. Why does it exist?

3. How does it think about AI and business systems?

4. How does it work with clients?

5. Who is responsible for the company?

6. What is true today versus what is being built for the future?

The page must make a visitor more comfortable doing business with XAIVON.

Current enterprise examples show that strong About pages combine a clear company statement, purpose, concrete facts, people/leadership, and a readable explanation of how the company works. Linear, for example, combines its purpose, company facts and leadership; Vercel leads with a concise company statement and then uses concrete information and people; n8n uses a founder note and clear principles. These are structural references only, not templates to copy.

## B2. Tone

The About page must sound like the founder wrote it after thinking carefully about the business.

It should be:

- simple

- direct

- calm

- specific

- confident without bragging

- human

- understandable to a non-technical business owner

It must not sound like:

- an AI-generated company manifesto

- investor pitch-deck language

- a consulting firm press release

- corporate filler

- exaggerated startup marketing

Avoid phrases such as:

"revolutionize the future of work,"

"unlock unprecedented potential,"

"cutting-edge AI ecosystem,"

"transformative digital journey,"

"synergistic solutions,"

"next-generation innovation"

unless a very specific context genuinely requires them.

## B3. Recommended page structure

### 1. About hero

Eyebrow:

**ABOUT XAIVON**

Headline direction:

**We build AI systems around the way businesses actually work.**

Supporting copy:

XAIVON helps businesses turn repetitive work, disconnected systems and manual processes into reliable workflows, AI agents and connected business systems.

The hero should be short. Do not put the full company story here.

### 2. What XAIVON is

Heading:

**What we do**

Draft direction:

"XAIVON is an AI infrastructure and business automation company. We build the systems behind the work — workflows, agents, integrations and supporting infrastructure that help teams handle repetitive operational work with less manual effort."

The copy should remain broad and industry-flexible.

### 3. Why XAIVON exists

Heading:

**Why we started**

Draft direction:

"Most businesses do not have a lack of software. They have too many systems, too much repetitive work, and too many steps that still depend on someone moving information from one place to another.

XAIVON exists to solve that gap.

We look at the way a business actually operates, find where work gets repeated or stuck, and build a system around it."

This is deliberately more human and less "mission statement" language.

### 4. How we think about AI

Heading:

**AI should do useful work.**

Draft direction:

"We do not believe every business problem needs an AI agent.

Sometimes a simple workflow is enough. Sometimes the right answer is a CRM integration, document processing system, voice agent or a larger automated process.

We choose the simplest system that reliably solves the problem."

This is a major trust statement.

### 5. How we work

Heading:

**From problem to working system**

Use a compact process:

**Understand → Design → Build → Test → Deploy → Improve**

Each step gets one short sentence.

The current production site's longer six-step process may inform the detail, but the About page should keep it concise.

### 6. What makes the approach different

Do not use generic "Our Values" cards such as Innovation / Integrity / Excellence with no evidence.

Instead use operational principles:

**Build around the real workflow**
Start from the work, not from a favorite AI tool.

**Keep humans in control**
Automation should know when to act and when to hand work back.

**Use what already works**
Integrate with the client's existing systems where possible.

**Be clear about what is real**
No fabricated outcomes, fake customer logos or invented case studies.

**Build for the next stage**
The system should be maintainable and expandable as the business grows.

These principles should later be supported by actual examples.

### 7. Founder section

The founder section should exist because a serious buyer should know who is responsible for the company.

Use a real founder image only when the owner provides the approved image.

Do not generate or substitute a founder photo.

Heading:

**Built by the people responsible for the work**

Founder facts currently supported by the existing public site:

**Raja — Founder & CEO, XAIVON**

The current live site describes XAIVON's purpose as reducing operational friction and building tailored systems; it also currently publishes a longer founder message. That existing information can be retained as source material, but the final copy should be rewritten into a shorter, more natural founder voice.

Approved founder-message direction:

"I started XAIVON with a simple view: businesses should not have to keep adding people just to keep up with repetitive work.

As I worked through automation and AI systems, the more important problem became clear: the hard part is not adding another AI tool. It is understanding the workflow, connecting the systems, and making the whole thing reliable.

That is what I want XAIVON to build.

Practical AI systems that fit the business, work with the tools already in place, and become more useful as the company grows."

Only facts genuinely true to the founder may be added around this draft.

### 8. Current focus + future

Heading:

**Built for today. Designed to grow.**

Current reality:

XAIVON serves businesses across industries. Logistics & Freight is one of the current areas where XAIVON is actively developing and validating automation workflows.

Future SaaS/platform concepts should be presented as future productization, not current products.

Do not place a giant multi-phase roadmap on the About page unless the roadmap itself is useful. A compact future-direction block is enough.

### 9. Work / evidence link

End the About page with:

**See the systems we build**

Link to the reusable Work / Evidence library.

Real projects and demonstrations must remain clearly separated.

### 10. About CTA

Primary:

**Book an AI Assessment**

Secondary:

**Explore Solutions**

Do not use vague CTAs such as "Discover the future."

---

# C. About-page content rules

## C1. Do not invent company history

Do not add:

- founding dates

- office locations

- employee counts

- funding

- investors

- countries served

- client counts

- certifications

- partnerships

- awards

unless the owner supplies or verifies them.

## C2. Do not manufacture maturity

The website may feel enterprise-grade without pretending the company has the scale of a multinational corporation.

The visual and writing standard should communicate **quality and seriousness**, not fake size.

This distinction is essential.

## C3. Founder voice is allowed to be first-person

The founder section may use "I" because it is specifically a founder note.

The rest of the company page should mostly use "we" / "XAIVON."

## C4. Keep paragraphs short

Target:

- 1–3 sentence paragraphs

- strong subheadings

- useful whitespace

- scan-friendly sections

Do not create walls of text.

---

# D. Relationship between Homepage and About

The homepage sells the capability.

The About page explains the company.

Do not duplicate the same paragraph on both pages.

Homepage:

**What we build and what it solves.**

About:

**Why we exist, how we think, how we work, and who is responsible.**

---

# E. Implementation rule for real founder/proof assets

Whenever the final design contains a slot for:

- founder photo

- client screenshot

- client logo

- case-study evidence

- demo video

- project audio

- testimonial

and the required asset is not already in the project/workspace:

**STOP and ask the owner for the asset.**

Do not create an AI-generated substitute.

Do not use stock imagery as if it were real evidence.

Do not silently publish a placeholder as proof.

---

# F. Final navigation decision

Primary navbar:

**Home | Solutions | Products | Industries | About | Pricing**

Primary right-side CTA:

**Book an Assessment ↗**

No standalone "Resources" item.

No standalone "Contact" item in the primary navigation.

Contact remains available through CTA buttons and footer.

Future / Roadmap remains discoverable inside Products/About where useful.

---

# G. Final visual decision

Use the supplied copper/burnt-orange hero reference as the visual starting point, then build an original XAIVON design system around it.

The Vaultly screenshot is a **layout-comparison reference only**, not a template to clone.

Keep the following principles:

- warm light base

- distinctive burnt-orange/copper accent

- strong black/dark typography

- premium modern grotesk

- subtle grain

- architectural grids/contours

- restrained glass/translucent surfaces

- real system/workflow visuals

- strong shadows and dimensional surfaces

- controlled motion

Do not copy Vaultly's finance identity, pages, typography treatment, illustrations or content structure.

---

# H. Final quality bar

Before this redesign is accepted, ask:

**Does it look premium without looking expensive for the sake of looking expensive?**

**Does it feel technically capable without using technical jargon everywhere?**

**Does it feel global without pretending to be a giant corporation?**

**Does it feel trustworthy because of what it says and shows, not because of fake logos and claims?**

**Can a non-technical buyer understand what XAIVON does?**

**Can the owner add a new project, pricing update or service without rebuilding the site?**

If the answer to any of these is no, the implementation is not complete.
