# 🎫 Newland IT-Solutions — Engineering Tickets

> Last updated: 2026-08-20 · Source: `report.md` · Roadmap: `roadmap.md`
>
> **Legend:** 🔴 P0 launch-blocking · 🟠 P1 high · 🟡 P2 medium · ✅ Done · 🟡 In progress · 📋 Todo
>
> **Detail for completed tickets lives in [`tickets-archive.md`](./tickets-archive.md).** This file
> carries the status overview plus detail for tickets that are still **In progress** or **Todo**.

---

## 📊 Status Overview

<details>
<summary><strong>✅ Phase 1 — SEO infrastructure · DONE</strong></summary>

| ID | Priority | Status | Notes |
| --- | --- | --- | --- |
| SEO-001 | 🟠 P1 | ✅ Done | Centralised `useSeo` composable (title/desc/OG/Twitter/robots) |
| SEO-002 | 🟠 P1 | ✅ Done | Canonical + hreflang + `<html lang>` via i18n `useLocaleHead` |
| SEO-003 | 🟡 P2 | ✅ Done | Global security headers via `routeRules` |
| SEO-004 | 🟡 P2 | ✅ Done | Per-page SEO copy under `seo.*` locale keys |

</details>

<details>
<summary><strong>✅ Phase 2 — i18n NL/EN + translation · DONE</strong></summary>

| ID | Priority | Status | Notes |
| --- | --- | --- | --- |
| I18N-001 | 🟠 P1 | ✅ Done | `@nuxtjs/i18n`, NL default, `prefix_except_default`, no browser redirect |
| I18N-002 | 🟠 P1 | ✅ Done | All page copy externalised to `locales/{nl,en}.json` |
| I18N-003 | 🟡 P2 | ✅ Done | Language switcher component |

</details>

<details open>
<summary><strong>📋 Phase 3 — Content completeness + legal · IN PROGRESS (0/5)</strong></summary>

| ID | Priority | Status | Notes |
| --- | --- | --- | --- |
| NWL-001 | 🔴 P0 | 📋 Todo | Homepage stats show `0+ / 0yr / 0% / 0hr` placeholders — fill with real data (About uses `50+/5yr/98%/72hr`) |
| NWL-002 | 🔴 P0 | 📋 Todo | Production Vercel serves stale pre-i18n EN build — merge `seo-and-nl-i18n` + redeploy so `/` is NL |
| NWL-003 | 🔴 P0 | 📋 Todo | No legal pages — add privacy statement, cookie policy, terms + footer links (NL/EN) |
| NWL-004 | 🟠 P1 | 📋 Todo | No cookie/consent banner gating Google Maps embed + WhatsApp (AVG) |
| NWL-007 | 🟠 P1 | 📋 Todo | Service-page content parity vs old `/oplossingen` deliverables |

</details>

<details open>
<summary><strong>📋 Phase 4 — Trust, conversion & UX · NOT STARTED (0/4)</strong></summary>

| ID | Priority | Status | Notes |
| --- | --- | --- | --- |
| NWL-005 | 🟠 P1 | 📋 Todo | "Trusted by / Our customers" has no real client logos (`ClientLogo.vue` empty) |
| NWL-006 | 🟠 P1 | 📋 Todo | No testimonials / case references section |
| NWL-008 | 🟡 P2 | 📋 Todo | About timeline — verify years/events are real, not fabricated |
| NWL-009 | 🟡 P2 | 📋 Todo | Solution-subpage `<img>` assets — replace placeholders with real imagery + alt text |

</details>

<details open>
<summary><strong>📋 Phase 5 — Launch (cutover) · NOT STARTED (0/2)</strong></summary>

| ID | Priority | Status | Notes |
| --- | --- | --- | --- |
| NWL-010 | 🔴 P0 | 📋 Todo | 301 redirects old→new (`/oplossingen`→`/solutions`, `/over-ons`→`/about`) |
| NWL-011 | 🟠 P1 | 📋 Todo | Sitemap + robots verify both locales; submit to Search Console; NAP consistency |

</details>

<details>
<summary><strong>📥 Backlog — promoted from ideas.md (2026-08-20)</strong></summary>

> Promoted from `ideas.md`. Larger ideas are split into multiple tickets (scaffold vs content vs
> per-item). Table-only until pulled into a phase. Ideas #1/#2/#15 were already tickets
> (NWL-005/006/009) and are not duplicated here.

**Content & trust**

| ID | Priority | Status | Notes |
| --- | --- | --- | --- |
| NWL-012 | 🟡 P2 | 📋 Todo | Case studies — `/cases` + `/cases/[slug]` routing + page/layout scaffold [ideas #3] |
| NWL-013 | 🟡 P2 | 📋 Todo | Case studies — content model + first 2 real cases (problem→solution→result). Depends NWL-012 [ideas #3] |
| NWL-014 | 🟡 P2 | 📋 Todo | "Onze aanpak" dedicated page — expand Discovery/Plan/Build/Support [ideas #4] |
| NWL-015 | 🟡 P2 | 📋 Todo | Reusable FAQ accordion component + i18n structure + `FAQPage` JSON-LD [ideas #5] |
| NWL-016 | 🟡 P2 | 📋 Todo | FAQ content per service (5 pages). Depends NWL-015 [ideas #5] |

**Content engine**

| ID | Priority | Status | Notes |
| --- | --- | --- | --- |
| NWL-017 | 🟡 P2 | 📋 Todo | Blog — Sanity schema + content model. Depends NWL-020 [ideas #6] |
| NWL-018 | 🟡 P2 | 📋 Todo | Blog — index/list page + pagination. Depends NWL-017 [ideas #6] |
| NWL-019 | 🟡 P2 | 📋 Todo | Blog — post detail page + Article SEO (`og:type=article`, JSON-LD `Article`). Depends NWL-017 [ideas #6] |
| NWL-020 | 🟡 P2 | 📋 Todo | Sanity — schemas + client fetch/query layer. **Blocked on CMS-vs-i18n decision** (PRD §10) [ideas #7] |
| NWL-021 | 🟡 P2 | 📋 Todo | Sanity — migrate marketing copy from i18n JSON to CMS. Depends NWL-020 [ideas #7] |

**SEO & local**

| ID | Priority | Status | Notes |
| --- | --- | --- | --- |
| SEO-005 | 🟡 P2 | 📋 Todo | Per-page `Service` JSON-LD on solution pages [ideas #8] |
| SEO-006 | 🟡 P2 | 📋 Todo | `BreadcrumbList` JSON-LD site-wide [ideas #8] |
| SEO-007 | 🟠 P1 | 📋 Todo | NAP consistency audit + Google Business Profile alignment [ideas #9] |
| SEO-008 | 🟡 P2 | 📋 Todo | Per-service OG images (replace shared hero) [ideas #10] |
| SEO-009 | 🟡 P2 | 📋 Todo | Local landing-page template (i18n, schema, internal links) [ideas #11] |
| SEO-010 | 🟡 P2 | 📋 Todo | Publish neighbourhood/niche local pages (content). Depends SEO-009 [ideas #11] |

**Product & conversion**

| ID | Priority | Status | Notes |
| --- | --- | --- | --- |
| NWL-022 | 🟡 P2 | 📋 Todo | Inline "plan een kennismaking" booking (Calendly/Cal.com), consent-gated [ideas #12] |
| NWL-023 | 🟡 P2 | 📋 Todo | Decision — remove Stripe keys or scope a real commerce flow [ideas #13] |
| NWL-024 | 🟡 P2 | 📋 Todo | Newsletter signup via Resend audiences (double opt-in + privacy) [ideas #14] |

**UX polish**

| ID | Priority | Status | Notes |
| --- | --- | --- | --- |
| NWL-025 | 🟡 P2 | 📋 Todo | Count-up animation for stats. Depends NWL-001 [ideas #16] |
| NWL-026 | 🟡 P2 | 📋 Todo | A11y — image alt-text policy + audit all imagery [ideas #17] |
| NWL-027 | 🟡 P2 | 📋 Todo | A11y — visible focus states across interactive elements [ideas #17] |
| NWL-028 | 🟡 P2 | 📋 Todo | A11y — keyboard nav (nav, mobile drawer, forms, FAB) [ideas #17] |

</details>

---

## 🔨 Active Ticket Detail

<details open>
<summary><strong>NWL-001 — Homepage stats placeholder 🔴 P0</strong></summary>

- Files: `app/pages/index.vue`, `i18n/locales/{nl,en}.json`
- Problem: home stats render `0+ CLIENTS / 0yr EXPERIENCE / 0% SATISFACTION / 0hr RESPONSE`.
  About page already uses real values (`50+ / 5yr / 98% / 72hr`).
- Tasks: source real numbers from owner; wire into home; if count-up animation exists, fix trigger.
- DoD: no zero/placeholder stat visible; home + About numbers consistent.

</details>

<details open>
<summary><strong>NWL-002 — Production serves stale EN build 🔴 P0</strong></summary>

- Problem: `newlandit-solutions.vercel.app/` renders an all-English hero (pre-i18n build).
  NL-default i18n lives on branch `seo-and-nl-i18n` (commit `4488042`), not yet deployed.
- Tasks: merge branch → main; confirm Vercel production tracks main; redeploy; verify `/` = NL,
  `/en` = EN, hreflang correct.
- DoD: production `/` serves Dutch by default; language switch works; no hardcoded EN strings.

</details>

<details open>
<summary><strong>NWL-003 — Legal pages (AVG/GDPR) 🔴 P0</strong></summary>

- Files: new `app/pages/{privacy,cookies,terms}.vue`, `app/components/Footer.vue`, locale JSON.
- Problem: contact form collects personal data + file uploads; site embeds Google Maps + WhatsApp.
  No privacy statement, cookie policy, or terms exist; footer has no legal links.
- Tasks: author privacyverklaring (NL primary), cookiebeleid, algemene voorwaarden; add footer links; i18n.
- DoD: three legal pages live in NL + EN; linked from footer; privacy statement covers form data + Resend + Sanity.

</details>

<details open>
<summary><strong>NWL-004 — Cookie/consent banner 🟠 P1</strong></summary>

- Problem: Google Maps iframe + WhatsApp load without prior consent — AVG requires consent for
  non-essential third-party embeds.
- Tasks: consent banner (accept/decline non-essential); gate the map iframe behind consent;
  most-privacy-preserving default.
- DoD: no non-essential third-party request before consent; choice persisted; NL/EN copy.

</details>

<details open>
<summary><strong>NWL-007 — Service content parity vs old site 🟠 P1</strong></summary>

- Files: `app/pages/solutions/*.vue`, locale JSON.
- Problem: old `/oplossingen` listed concrete deliverables that must survive the redesign:
  `WordPress/Wix/Shopify`, `platform-/API-integraties`, `IT-consultancy & systeemselectie`,
  `netwerk-/server-/cloudbeheer`, `helpdesk remote & on-site`, `projectmanagement (ook buiten IT)`,
  `branding & visueel design`, `UI/UX`.
- Tasks: diff old deliverables against new `offers` lists; add any missing bullets.
- DoD: every old service deliverable is represented on a new solution page.

</details>

<details>
<summary><strong>NWL-020 — Sanity fetch layer + schemas 🟡 P2 (decision-gated)</strong></summary>

- Files: `nuxt.config.ts` (Sanity runtimeConfig already wired), new `server/utils/sanity.ts` / composables, new `sanity/` schema dir.
- Decision first (PRD §10): keep marketing copy in i18n JSON **or** move to Sanity CMS. Do not build until decided.
- If go: define schemas (post, case, faq as needed), add a typed query/fetch layer, keep i18n for chrome/UI strings.
- Blocks: NWL-017/018/019 (blog), NWL-021 (copy migration).
- DoD: Sanity client fetches typed content in a page; decision recorded in PRD.

</details>

<details>
<summary><strong>NWL-023 — Stripe decision 🟡 P2 (decision)</strong></summary>

- Files: `nuxt.config.ts` (`stripeSecretKey`, `stripeWebhookSecret` in runtimeConfig).
- Problem: Stripe keys are wired but no commerce flow exists (PRD non-goal). Either remove the unused
  config to reduce surface, or scope a real paid flow as its own epic.
- DoD: keys removed **or** a commerce epic filed; decision recorded in PRD.

</details>

---

## 🔗 Dependencies & next steps

- **Launch blockers (P0):** NWL-001, NWL-002, NWL-003, NWL-010.
- NWL-002 (redeploy) also validates all Phase 2 i18n work in production.
- NWL-003 (legal) + NWL-004 (consent) should ship together.
- **Backlog chains:** NWL-020 → NWL-017 → NWL-018/019 (blog); NWL-020 → NWL-021 (copy migration);
  NWL-012 → NWL-013 (cases); NWL-015 → NWL-016 (FAQ); SEO-009 → SEO-010 (local pages);
  NWL-001 → NWL-025 (count-up).
- **Decision-gated:** NWL-020 (CMS vs i18n), NWL-023 (Stripe) — resolve in PRD §10 before pulling in.
- **Suggested next:** NWL-002 → NWL-001 → NWL-003/004 → NWL-007 → Phase 4 trust content.
