# 📄 PRD — Newland IT-Solutions website redesign

> Product Requirements Document. Defines what the redesign is, who it's for, and what it must do.
> Status: living document · Last updated: 2026-08-20 · Owner: @Crypthos

---

## 1. Summary

A full redesign of the Newland IT-Solutions marketing site. Replaces the outdated live site
(`newlandit-solutions.com`) with a modern Nuxt 4 application (`newlandit-solutions.vercel.app`).
The new site is bilingual (Dutch primary, English secondary), SEO-instrumented, and adds
per-service detail pages, a richer About page, and a full contact experience (form + map +
opening hours).

## 2. Problem

The existing `.com` site is outdated in look and structure: thin service descriptions, no
per-service detail pages, no English version, weak SEO, and no lead-capture beyond a bare
contact form. It undersells the company to its target audience (Amsterdam freelancers / small
businesses) and ranks poorly.

## 3. Goals

- G1 — Modern, fast, mobile-first marketing site with a distinct green brand identity.
- G2 — Bilingual NL (default) + EN, with correct hreflang/canonical per locale.
- G3 — Strong local + service SEO (Amsterdam IT-bedrijf, softwareontwikkeling, IT-support).
- G4 — Convert visitors: clear CTAs, contact form with attachment, WhatsApp, "plan een kennismaking".
- G5 — Legally compliant (AVG/GDPR): privacy statement, cookie/consent, terms.

## 4. Non-goals (for now)

- Customer login / client portal.
- Online payments checkout (Stripe keys are wired in config but no commerce flow is built).
- Blog/knowledge base content engine (Sanity CMS is integrated but content model not defined — see `ideas.md`).
- Multi-region beyond NL/EN.

## 5. Users / personas

- **Prospect (primary)** — Amsterdam-area freelancer / small business owner looking for reliable
  IT support, custom software, or a professional website. Non-technical; values plain language.
- **Returning client (secondary)** — needs contact details, service scope, WhatsApp/phone.
- **Search crawler (tertiary)** — indexes NL + EN pages; needs clean meta, sitemap, structured data.

## 6. Core user journeys

1. **Discover** → land on home → scan services + values → "plan een kennismaking".
2. **Explore a service** → `/solutions` → pick a card → `/solutions/<slug>` detail with offerings.
3. **Build trust** → About (missie/visie/strategie, timeline, values) + client logos + cases.
4. **Convert** → Contact: form (+ attachment), map, opening hours, WhatsApp, phone/email.
5. **Switch language** → NL ⇄ EN via language switcher; URL prefix `/en/...` for English.

## 7. Functional requirements

| ID | Requirement | Status |
|---|---|---|
| FR-1 | Home with hero, values, approach, service overview, CTA | ✅ built |
| FR-2 | `/solutions` overview + per-service detail pages (software, IT-consulting, digital-strategy, cms-websites, it-support) | ✅ built |
| FR-3 | About page (missie/visie/strategie, timeline, values, stats) | ✅ built |
| FR-4 | Contact form with validation, attachment upload, honeypot; Resend email delivery | ✅ built |
| FR-5 | Bilingual NL/EN via `@nuxtjs/i18n`, NL default, no browser auto-redirect | ✅ built |
| FR-6 | Centralised SEO (`useSeo`) + i18n `useLocaleHead` for canonical/hreflang | ✅ built |
| FR-7 | Real homepage stats (clients / experience / satisfaction / response) | ⏳ NWL-001 |
| FR-8 | Client logos / "trusted by" with real assets | ⏳ NWL-005 |
| FR-9 | Testimonials / case references section | ⏳ NWL-006 |
| FR-10 | Legal pages: privacy, cookie policy, terms + footer links | ⏳ NWL-003 |
| FR-11 | Cookie/consent banner (Google Maps embed, WhatsApp) | ⏳ NWL-004 |
| FR-12 | Production deploy serves the i18n NL-default build | ⏳ NWL-002 |

## 8. Non-functional requirements

- **Performance** — mobile-first; hero + fonts must not block first paint; images optimised.
- **SEO** — per-page title/description, OG/Twitter cards, canonical + hreflang, sitemap, robots.
- **Accessibility** — keyboard nav, aria-labels on icon links, alt text on all imagery.
- **Compliance** — AVG/GDPR: privacy statement required (form collects personal data + files);
  consent before non-essential third-party embeds.
- **Localization** — all user-facing copy in `i18n/locales/{nl,en}.json`; no hardcoded strings.
- **Maintainability** — shared `CONTACT` util as single source of truth for NAP/KvK/BTW.

## 9. Success metrics (targets)

- Home + all service pages score ≥ 90 Lighthouse SEO and ≥ 90 Performance on mobile.
- 100% of user-facing strings resolved via i18n (no hardcoded EN/NL).
- 0 placeholder values shown to visitors (no "0+" stats, no empty "trusted by").
- Legal compliance: privacy + cookie consent live before public launch.
- Local pack visibility for "IT-bedrijf Amsterdam" / "softwareontwikkeling Amsterdam".

## 10. Open questions / decisions needed

- Content source: keep marketing copy in i18n JSON, or move to Sanity CMS? (Sanity is wired.)
- Real stats numbers (clients served, satisfaction %, response time) — owner to confirm.
- Which client logos may we display (permission)? Testimonials to collect.
- Blog / kennisbank: in scope for this phase or later? (`ideas.md`)
- Stripe: is any paid/commerce flow actually planned, or remove the keys?

## 11. Related docs

- `kennisbank.md` — technical knowledge base (stack, conventions, gotchas).
- `tickets.md` — work item register.
- `roadmap.md` — phased delivery plan.
- `report.md` — content / SEO / legal gap audit (new vs old site).
- `ideas.md` — backlog of ideas + content directions.
