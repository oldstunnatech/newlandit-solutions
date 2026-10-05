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

> SEO-005, SEO-006, SEO-007 ✅ Done — detail archived in [`tickets-archive.md`](./tickets-archive.md).

| ID | Priority | Status | Notes |
| --- | --- | --- | --- |
| SEO-008 | 🟡 P2 | 📋 Todo | Per-service OG images (replace shared hero) [ideas #10] |
| SEO-009 | 🟡 P2 | 🟡 In progress | Local landing-page template (i18n, schema, internal links). Branch `feat/SEO-009-local-landing-template` [ideas #11] |
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
<summary><strong>SEO-009 — Local landing-page template 🟡 P2 (in progress)</strong></summary>

Goal: a reusable, data-driven template for Amsterdam neighbourhood/niche pages so SEO-010 is
content-only (add a data entry + copy, no new code). Ships with **one** pilot page to prove it end-to-end.

**Routing & data**
- [x] Dynamic route `app/pages/areas/[slug].vue` → `/areas/<slug>` (nl) and `/en/areas/<slug>` (en).
- [x] Index route `app/pages/areas/index.vue` listing all areas (prevents orphan pages).
- [x] Typed registry `shared/data/areas.ts` + `shared/types/area.ts` (mirrors `shared/data/cases.ts`):
  `slug`, `schemaType` (`City` | `Place`), `relatedServices` (solution slugs), `nearby` (area slugs).
- [x] Unknown slug → real 404 via `createError({ statusCode: 404 })`, not a soft "not found" page.
- [x] Pilot entry: **Amsterdam Zuidoost** (office is at Hessenbergweg 8, 1101 BT, so the claim is real).

**i18n**
- [x] All copy under `areas.<slug>.*` (name, intro, body paragraphs, local USP) + shared template
      strings under `areas.template.*`, in **both** `nl.json` and `en.json`.
- [x] SEO copy under `seo.areas.<slug>.title|description` and `seo.areas.index.*`.
- [x] No hard-coded display text in the template.

**SEO & structured data**
- [x] `useSeo()` on both pages with unique title/description per area.
- [x] `Service` JSON-LD per area page: extend `useServiceSchema` with an optional `areaServed`
      override (`Place` with `containedInPlace: Amsterdam`) instead of a new composable.
- [x] Breadcrumbs: add `areas` to `useBreadcrumbSchema` segment names; area segment uses the area name.
- [x] Sitemap: dynamic routes are not auto-discovered — feed `/areas/<slug>` URLs (both locales)
      from the registry into `@nuxtjs/sitemap` (`sitemap.urls` via `areaSitemapUrls()`). Note: the live
      sitemap is the module's `/sitemap_index.xml`; the custom `server/routes/sitemap.xml.ts` is shadowed.

**Internal links**
- [x] Area page links to each `relatedServices` solution page, to `/contact`, and to `nearby` areas
      (nearby section hidden while the pilot has no neighbours).
- [x] `/areas` index is linked from the footer so pages are crawlable.
- [x] All links via `localePath()`.

**Tests & gate**
- [x] Vitest: registry integrity — unique slugs, every `relatedServices` maps to an existing
      solution page, every `nearby` slug exists, every area has its i18n keys in both locales.
- [x] `npm test` and `npm run build` green; `/check` passes.

**Out of scope:** further area pages (SEO-010), per-area OG images (SEO-008).

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
