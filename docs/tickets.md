# 🎫 Newland IT-Solutions — Engineering Tickets

> Last updated: 2026-09-04 · Source: `report.md` · Roadmap: `roadmap.md`
>
> **Legend:** 🔴 P0 launch-blocking · 🟠 P1 high · 🟡 P2 medium · ✅ Done · 🟡 In progress · 📋 Todo
>
> **Detail for completed tickets lives in [`tickets-archive.md`](./tickets-archive.md).** This file
> carries the status overview plus detail for tickets that are still **In progress** or **Todo**.

---

## 📊 Status Overview

✅ **Phases 1–3 archived** — see [`tickets-archive.md`](./tickets-archive.md).

<details open>
<summary><strong>📋 Phase 4 — Trust, conversion & UX · IN PROGRESS (2/4)</strong></summary>

| ID | Priority | Status | Notes |
| --- | --- | --- | --- |
| NWL-005 | 🟠 P1 | ✅ Done | `ClientLogo.vue` implemented; wired into customers marquee via controlled props/events |
| NWL-006 | 🟠 P1 | ✅ Done | `TestimonialCard.vue` component added; section live with i18n (nl + en) |
| NWL-008 | 🟡 P2 | 📋 Todo | About timeline — verify years/events are real, not fabricated |
| NWL-009 | 🟡 P2 | 📋 Todo | Solution-subpage `<img>` assets — replace placeholders with real imagery + alt text |

</details>

<details open>
<summary><strong>📋 Phase 5 — Launch (cutover) · IN PROGRESS (1/2)</strong></summary>

| ID | Priority | Status | Notes |
| --- | --- | --- | --- |
| NWL-010 | 🔴 P0 | ✅ Done | 301 redirects old→new (`/oplossingen`→`/solutions`, `/over-ons`→`/about`) |
| NWL-011 | 🟠 P1 | 🟡 In progress | `@nuxtjs/sitemap` added — auto-generates both locales at build; robots.txt already correct. Manual: submit to Search Console; NAP consistency audit. |

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
| NWL-015 | 🟡 P2 | ✅ Done | Reusable FAQ accordion component + i18n structure + `FAQPage` JSON-LD [ideas #5] |
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
| SEO-005 | 🟡 P2 | ✅ Done | Per-page `Service` JSON-LD on solution pages [ideas #8] |
| SEO-006 | 🟡 P2 | 🟡 In progress | `BreadcrumbList` JSON-LD site-wide [ideas #8] |
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

- **Phase 1–3:** ✅ All closed. Phase 3 detail archived 2026-09-04.
- **Phase 5:** NWL-010 ✅ done; NWL-011 🟡 in progress (sitemap module added — manual Search Console submit + NAP audit remain).
- **Backlog chains:** NWL-020 → NWL-017 → NWL-018/019 (blog); NWL-020 → NWL-021 (copy migration);
  NWL-012 → NWL-013 (cases); NWL-015 → NWL-016 (FAQ); SEO-009 → SEO-010 (local pages);
  NWL-001 → NWL-025 (count-up).
- **Decision-gated:** NWL-020 (CMS vs i18n), NWL-023 (Stripe) — resolve in PRD §10 before pulling in.
- **Suggested next:** Phase 4 trust content (NWL-005/006) → NWL-011 manual steps.
