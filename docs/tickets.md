# 🎫 Newland IT-Solutions — Engineering Tickets

> Last updated: 2026-09-24 (evening) · Source: `report.md` · Roadmap: `roadmap.md`
>
> **Legend:** 🔴 P0 launch-blocking · 🟠 P1 high · 🟡 P2 medium · ✅ Done · 🟡 In progress · 📋 Todo
>
> **Detail for completed tickets lives in [`tickets-archive.md`](./tickets-archive.md).** This file
> carries the status overview plus detail for tickets that are still **In progress** or **Todo**.

---

## 📊 Status Overview

✅ **Phases 1–3 archived** — see [`tickets-archive.md`](./tickets-archive.md).

<details open>
<summary><strong>📋 Phase 4 — Trust, conversion & UX · IN PROGRESS (2/4 done, archived)</strong></summary>

> NWL-005, NWL-006 ✅ Done — detail archived in [`tickets-archive.md`](./tickets-archive.md).

| ID | Priority | Status | Notes |
| --- | --- | --- | --- |
| NWL-008 | 🟡 P2 | 📋 Todo | About timeline — verify years/events are real, not fabricated. **Blocked: needs business-owner confirmation of actual history, not something Claude can verify.** |
| NWL-009 | 🟡 P2 | 📋 Todo | Solution-subpage `<img>` assets — replace placeholders with real imagery + alt text. **Blocked: needs real company photos, not something Claude can source.** |

</details>

<details open>
<summary><strong>📋 Phase 5 — Launch (cutover) · IN PROGRESS (1/2 done, archived)</strong></summary>

> NWL-010 ✅ Done — detail archived in [`tickets-archive.md`](./tickets-archive.md).

| ID | Priority | Status | Notes |
| --- | --- | --- | --- |
| NWL-011 | 🟠 P1 | 🟡 In progress | `@nuxtjs/sitemap` added; robots.txt correct. NAP audit done (see SEO-007). Search Console property created (URL prefix, `www.newlandit-solutions.com`); verification meta tag added in PR #19 (feat/NWL-011-search-console). Remaining after merge+deploy: click Verify, then submit `sitemap.xml`, confirm `/nl/` + `/en/` locales appear. |

</details>

<details>
<summary><strong>📥 Backlog — promoted from ideas.md (2026-08-20)</strong></summary>

> Promoted from `ideas.md`. Larger ideas are split into multiple tickets (scaffold vs content vs
> per-item). Table-only until pulled into a phase. Ideas #1/#2/#15 were already tickets
> (NWL-005/006/009) and are not duplicated here.

**Content & trust**

> NWL-012, NWL-015 ✅ Done — detail archived in [`tickets-archive.md`](./tickets-archive.md).

| ID | Priority | Status | Notes |
| --- | --- | --- | --- |
| NWL-013 | 🟡 P2 | 📋 Todo | Case studies — content model + first 2 real cases (problem→solution→result). Depends NWL-012 [ideas #3] |
| NWL-014 | 🟡 P2 | 🟡 In progress | "Onze aanpak" dedicated page — expand Discovery/Plan/Build/Support. New `/approach` page, PR #27 (feat/NWL-014-approach-page) [ideas #4] |
| NWL-016 | 🟡 P2 | 🟡 In progress | FAQ content per service (5 pages). Depends NWL-015 ✅. Branch `feat/NWL-016-service-faqs` [ideas #5] |

**Content engine**

| ID | Priority | Status | Notes |
| --- | --- | --- | --- |
| NWL-017 | 🟡 P2 | 📋 Todo | Blog — Sanity schema + content model. Depends NWL-020 [ideas #6] |
| NWL-018 | 🟡 P2 | 📋 Todo | Blog — index/list page + pagination. Depends NWL-017 [ideas #6] |
| NWL-019 | 🟡 P2 | 📋 Todo | Blog — post detail page + Article SEO (`og:type=article`, JSON-LD `Article`). Depends NWL-017 [ideas #6] |
| NWL-020 | 🟡 P2 | 📋 Todo | Sanity — schemas + client fetch/query layer. **Blocked on CMS-vs-i18n decision** (PRD §10) [ideas #7] |
| NWL-021 | 🟡 P2 | 📋 Todo | Sanity — migrate marketing copy from i18n JSON to CMS. Depends NWL-020 [ideas #7] |

**SEO & local**

> SEO-005, SEO-006, SEO-007 ✅ Done — detail archived in [`tickets-archive.md`](./tickets-archive.md).

| ID | Priority | Status | Notes |
| --- | --- | --- | --- |
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
| NWL-025 | 🟡 P2 | ✅ Done | Count-up animation for stats — already implemented as part of NWL-001 (IntersectionObserver in `index.vue`), verified live 2026-09-24. Depends NWL-001 [ideas #16] |
| NWL-026 | 🟡 P2 | 🟡 In progress | A11y — image alt-text policy + audit all imagery. Audit done: all live pages already had alt text, one gap fixed on unused `/index-v1` route. PR #28 [ideas #17] |
| NWL-027 | 🟡 P2 | 🟡 In progress | A11y — visible focus states across interactive elements. Site-wide `:focus-visible` outline added. PR #28 [ideas #17] |
| NWL-028 | 🟡 P2 | 🟡 In progress | A11y — keyboard nav (nav, mobile drawer, forms, FAB). Real bug found + fixed: SideNav submenu was mouse-only, unreachable by keyboard. PR #28 (feat/NWL-026-027-028-a11y) [ideas #17] |

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

<details open>
<summary><strong>NWL-016 — FAQ content per service 🟡 P2 (in progress)</strong></summary>

Goal: each of the 5 solution pages answers the questions prospects actually ask before contacting us,
using the existing `FaqAccordion` (NWL-015). Note: the component is built but **not used on any page yet**,
and `faq.general` is unused too.

**Content (truth rule)**
- [x] 4–6 Q&A pairs per service under `faq.<service>.items` (`software`, `cms`, `consulting`, `support`,
      `strategy`, matching the `detail.*` namespaces), in **both** `nl.json` and `en.json`, same count per locale.
- [x] Every answer is grounded in what the site already states (`detail.<service>.*` copy, the
      `it-support.vue` plans/prices, `faq.general`). **No new factual claims**: no invented response
      times, SLAs, guarantees, tool lists or prices.
- [x] Questions are prospect-phrased (cost, timeline, what's included, who it's for, how to start),
      no duplicates of `faq.general`.
- [x] Copy flagged in the PR for business-owner review before merge (no reviewer available yet,
      so answers kept conservative: only facts already on the site).

**Placement**
- [x] `<FaqAccordion>` on all 5 pages (`solutions/{software-development,cms-websites,it-consulting,it-support,digital-strategy}.vue`),
      placed just above the closing CTA band, with a `faq.heading` section title.
- [x] Items read via `tm()` / `rt()`; no hard-coded display text added. Done via a self-contained
      `ServiceFaq` wrapper (heading + accordion + page URL), so `it-support.vue` needed no `useI18n`;
      the rest of that page's copy stays with I18N-004.
- [x] Locale-correct absolute `page-url` passed so `FAQPage` JSON-LD is emitted (one `FAQPage` per page).

**SEO**
- [x] Rendered page contains valid `FAQPage` JSON-LD alongside the existing `Service` + `BreadcrumbList`.
      Note: since 2023 Google shows FAQ rich results mainly for gov/health sites, so the gain is content
      depth + long-tail matching, not guaranteed snippets.

**Tests & gate**
- [x] Vitest: every service has `faq.<service>.items` in both locales, equal length, non-empty
      `question`/`answer` strings.
- [x] `npm test` + `npm run build` green; `/check` introduces no new failures.

**Out of scope:** other hard-coded strings / `wa.me` links on these pages (I18N-004, NWL-029);
placing `faq.general` (homepage or contact). File separately if wanted.

</details>

---

## 🔗 Dependencies & next steps

- **Phase 1–3:** ✅ All closed. Phase 3 detail archived 2026-09-04.
- **Phase 5:** NWL-010 ✅ done; NWL-011 🟡 in progress (sitemap module added, NAP audit done — manual Search Console submit remains, blocked on no property registered yet).
- **Backlog chains:** NWL-020 → NWL-017 → NWL-018/019 (blog); NWL-020 → NWL-021 (copy migration);
  NWL-012 → NWL-013 (cases); NWL-015 → NWL-016 (FAQ); SEO-009 → SEO-010 (local pages);
  NWL-001 → NWL-025 (count-up).
- **Decision-gated:** NWL-020 (CMS vs i18n), NWL-023 (Stripe) — resolve in PRD §10 before pulling in.
- **Shipped v1.1.0 (2026-09-14):** NWL-012, NWL-015, SEO-005, SEO-006 — archived below.
- **Shipped 2026-09-24:** SEO-007 (NAP audit) — archived below; found KVK register root cause, needs manual legal correction.
- **In review 2026-09-24:** NWL-014 (PR #27), NWL-026/027/028 (PR #28).
- **NWL-025** turned out already done (built alongside NWL-001) — no PR needed, just verified and flipped to Done.
- **Blocked, needs your input (not code-doable):** NWL-008 (verify real timeline facts), NWL-009 (real company photos), NWL-011's Search Console click-through (needs production deploy + Search Console access).
- **Suggested next:** merge PR #27/#28, KVK register correction (blocks full SEO-007 cleanup), NWL-013 (case study content), NWL-016 (FAQ per service).
