# XAIVON PROJECT RULES

1. Do not invent facts, claims, metrics, or testimonials.

2. Do not bypass `verify-claims.js` or `verify-meta-tags.js` to force a build to pass. Fix the actual root cause.

3. Match the existing Copper/Burnt-Orange enterprise design system. Do not introduce generic UI, purple/blue gradients, or replace custom styling with browser defaults.

4. Run `npm run lint && npm run build` locally before claiming any task is complete.

5. Keep Vercel serverless functions in `/api/` and React frontend in `/src/`.
