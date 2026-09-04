# XAIVON PROJECT RULES

1. Do not invent facts, claims, metrics, testimonials, customers, results, or product availability.

2. Do not bypass `verify-claims.js` or `verify-meta-tags.js` to force a build to pass. Fix the actual root cause.

3. Match the existing XAIVON Copper/Burnt-Orange enterprise design system. Do not introduce generic UI, purple/blue AI gradients, browser-default styling, or unrelated visual systems.

4. Run `npm run lint` and `npm run build` locally before declaring any code task complete.

5. Keep Vercel serverless functions in `/api/` and React frontend code in `/src/`. Do not move or rebuild the backend architecture without a verified reason.

6. Before changing code, inspect the actual route, component, data source, imports, and rendered implementation. Never assume that a similarly named component controls a page.

7. Make the smallest targeted change that solves the verified problem. Do not refactor, redesign, or modify unrelated files.

8. Treat the repository source code, `ARCHITECTURE.md`, `README.md`, and approved project decisions as the source of truth. Do not replace verified project facts with assumptions.

9. Never report PASS based only on static code inspection. For UI changes, verify the actual rendered result; for production/deployment changes, verify the generated build and deployment state.

10. Preserve existing working functionality. Before changing shared components, global CSS, analytics, APIs, SEO, or security configuration, inspect their current usage and verify that the change will not cause regressions.
