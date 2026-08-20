---
description: Audit for leaked secrets, missing headers, and unsafe form/embed handling. Report findings, no changes without confirmation.
---

Audit the marketing site for its (limited) security surface — there is no auth/DB/API layer, so focus on secrets, headers, the contact form, and third-party embeds:

1. **Secrets** — `.env`/`.env.*` are gitignored and not in history; no hardcoded API keys (Resend/Sanity/Stripe) in source; all secrets read via `runtimeConfig` in `nuxt.config.ts`, never `runtimeConfig.public`.
2. **Server env exposure** — confirm private keys (`resendApiKey`, `sanityApiToken`, `stripeSecretKey`, `stripeWebhookSecret`) are NOT under `runtimeConfig.public`.
3. **Security headers** — `routeRules` in `nuxt.config.ts` still sets `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`.
4. **Contact form** — honeypot field present, server-side validation (Zod) enforced, attachment type/size checks in place, no unbounded upload.
5. **Third-party embeds** — Google Maps iframe / WhatsApp gated behind consent once NWL-004 lands (flag if loading unconditionally).

Report findings as `file:line — rule violated — fix`. No code changes without confirmation.
