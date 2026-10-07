# 🎫 Newland IT-Solutions — Engineering Tickets

> Last updated: 2026-10-07 · Source: `report.md` · Roadmap: `roadmap.md`
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

> NWL-012, NWL-014, NWL-015 ✅ Done — detail archived in [`tickets-archive.md`](./tickets-archive.md).

| ID | Priority | Status | Notes |
| --- | --- | --- | --- |
| NWL-013 | 🟡 P2 | 📋 Todo | Case studies — content model + first 2 real cases (problem→solution→result). Depends NWL-012 [ideas #3] |
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
| SEO-009 | 🟡 P2 | 📋 Todo | Local landing-page template (i18n, schema, internal links) [ideas #11] |
| SEO-010 | 🟡 P2 | 📋 Todo | Publish neighbourhood/niche local pages (content). Depends SEO-009 [ideas #11] |

**Product & conversion**

| ID | Priority | Status | Notes |
| --- | --- | --- | --- |
| NWL-022 | 🟡 P2 | 📋 Todo | Inline "plan een kennismaking" booking (Calendly/Cal.com), consent-gated [ideas #12] |
| NWL-023 | 🟡 P2 | 📋 Todo | Decision — remove Stripe keys or scope a real commerce flow [ideas #13] |
| NWL-024 | 🟡 P2 | 📋 Todo | Newsletter signup via Resend audiences (double opt-in + privacy) [ideas #14] |

**UX polish**

> NWL-025, NWL-026, NWL-027, NWL-028 ✅ Done — detail archived in [`tickets-archive.md`](./tickets-archive.md).

**Code health — from `/check` run 2026-10-05**

| ID | Priority | Status | Notes |
| --- | --- | --- | --- |
| I18N-004 | 🟡 P2 | 📋 Todo | Externalise remaining hard-coded template strings (Footer labels, WhatsApp FAB titles, `it-support.vue` plans, nav/hero bits) |
| NWL-029 | 🟡 P2 | 📋 Todo | NAP single-source — `useServiceSchema` provider + `wa.me` links read from `CONTACT`, add `whatsappHref` |
| SEO-011 | 🟡 P2 | 📋 Todo | Remove shadowed custom sitemap route (`server/routes/sitemap.xml.ts` + `NL_ROUTES`); module sitemap is the live one |
| NWL-030 | 🟡 P2 | 📋 Todo | Branded, translated error page (`app/error.vue`) — 404 + 500 currently show Nuxt's default dark page in English |

</details>

---

## 🔨 Active Ticket Detail

<details>
<summary><strong>NWL-031 — Slide page transition 🟡 P2</strong></summary>

- Files: `nuxt.config.ts` (`app.pageTransition`), `app/middleware/page-transition.global.ts`, `app/assets/css/main.css`.
- Problem: page changes were instant and abrupt. View Transitions API tried and rejected (rough result); Vue `<Transition>` via Nuxt chosen.
- Tasks: slide left-to-right when navigating deeper (child/grandchild), right-to-left when going up or sideways; `/en` prefix ignored; sidebar/layout stay mounted; disabled for `prefers-reduced-motion`.
- DoD: transition verified manually in NL + EN; `npm test` + `npm run build` green; PR merged to `development`.

</details>

<details>
<summary><strong>NWL-032 — Desktop sidebar animation & submenu polish 🟡 P2</strong></summary>

- Files: `app/components/SideNav.vue`.
- Problem: sidebar animation/width needed polish; submenu chevron wrapped under long labels (scoped `display:block` overrode the flex utility) and chevrons did not line up.
- Tasks: sidebar animation + reduced width; pin submenu chevrons to the right edge; tighten submenu indent.
- DoD: chevrons aligned for all submenu labels in NL + EN; `npm run build` green; PR merged to `development`.

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

<details>
<summary><strong>NWL-030 — Branded, translated error page 🟡 P2</strong></summary>

- Files: new `app/error.vue`, `i18n/locales/{nl,en}.json` (`error.*`), optionally `app/layouts/default.vue`.
- Problem: found in the 2026-10-07 browser check. The site has no `app/error.vue`, so every missing page
  (and any server error) renders Nuxt's built-in dark error screen: off-brand, no navigation, English-only
  text such as "Area not found" / "Go back home" even on Dutch URLs. Visitors who mistype a URL or follow
  a stale link hit a dead end.
- Tasks:
  - Add `app/error.vue` in the site's green/cream style, using the normal header/nav so visitors can continue.
  - Copy under `error.notFound.*` and `error.generic.*` in **both** locales; pick the locale from the URL
    (`/en/...` → English).
  - 404: friendly heading, short text, links to home, `/solutions` and `/contact` via `localePath()`.
  - 500 / other: generic apology + home link; never show the raw error message or stack to visitors.
  - Keep the real status code (404 stays 404; no soft-404) and add `noindex`.
  - Use `clearError({ redirect })` for the home link so the error state resets.
- DoD: unknown URLs on nl and en show the branded page with a 404 status; a thrown 500 shows the generic
  variant; nl + en parity; `npm test` + `npm run build` green; `/check` adds no new failures.
</details>

<details>
<summary><strong>I18N-004 — Externalise remaining hard-coded strings 🟡 P2</strong></summary>

- Files: `app/components/Footer.vue`, `app/components/{MobileNav,HeroSection,Header,SideNav,TestimonialCard}.vue`,
  `app/pages/solutions/*.vue` (esp. `it-support.vue`), `app/pages/{about,contact,index}.vue`, `app/pages/cases/*.vue`,
  `i18n/locales/{nl,en}.json`.
- Problem: `/check` (2026-10-05) found literal display text outside `t()`. English visitors see Dutch footer
  labels ("Telefoonnummer:", "Adres:", "BTW-nummer:"); most pages carry an English-only WhatsApp FAB
  `title="Chat with us on WhatsApp"`; `it-support.vue` plan cards (titles, targets, features, prices copy) are English-only.
- Tasks:
  - Footer labels → `footer.*` keys; `aria-label`s ("Site footer", "LinkedIn", "WhatsApp") translated too.
  - FAB `title` → `:title="t('common.whatsapp')"` everywhere (pattern already used in `index.vue`, `approach.vue`, `areas/*`).
  - `it-support.vue` plans → `detail.itSupport.plans` array via `tm()`/`rt()`.
  - Remaining component hits (MobileNav, HeroSection, Header, SideNav, TestimonialCard, contact, index).
  - Decide `index-v1.vue` (unused `noindex` draft, ~280 hits): delete it, or formally exclude from `/check`.
- DoD: `/check` hard-coded-string scan clean for live pages; nl + en parity; `npm test` + `npm run build` green.

</details>

<details>
<summary><strong>NWL-029 — NAP single-source cleanup 🟡 P2</strong></summary>

- Files: `shared/utils/contact.ts`, `shared/types/company.ts`, `app/composables/useServiceSchema.ts`,
  every page/component with `https://wa.me/31648364450`, `app/pages/index-v1.vue`, `i18n/locales/{nl,en}.json` (legal).
- Problem: `/check` found phone/email/address literals outside `CONTACT`. `useServiceSchema` duplicates the full
  provider NAP; `wa.me/31648364450` is hard-coded in ~13 places; `index-v1.vue` uses stale `info@newlandit.nl`;
  legal texts hard-code KVK/BTW/address. A phone or address change today would need edits in many files.
- Tasks:
  - Add `whatsappHref` to `ContactInfo` / `CONTACT`; replace all `wa.me` literals.
  - Build `useServiceSchema` provider from `CONTACT` (keep `tests/service-schema.test.ts` green / update it).
  - Legal copy: interpolate NAP (`{kvk}`, `{btw}`, `{address}`) from `CONTACT`, **or** record that legal text stays verbatim (confirm with owner).
  - Fix or remove `index-v1.vue` stale email (ties into I18N-004 decision).
- DoD: `/check` NAP scan clean (or documented legal exception); `npm test` + `npm run build` green.

</details>

<details>
<summary><strong>SEO-011 — Remove shadowed custom sitemap route 🟡 P2</strong></summary>

- Files: `server/routes/sitemap.xml.ts`, `server/utils/sitemap-routes.ts`, `tests/sitemap.test.ts`, `nuxt.config.ts`.
- Problem: found during SEO-009. `/sitemap.xml` is answered by `@nuxtjs/sitemap` (307 → `/sitemap_index.xml`,
  per-locale `__sitemap__/nl-NL.xml` / `en-US.xml`); the custom route never serves. Its `NL_ROUTES` list is stale
  (missing `/approach`, `/cases`, `/areas`) and its tests give false confidence. Module output also includes the
  `noindex` draft `/index-v1`.
- Tasks:
  - Delete the custom route + `sitemap-routes.ts`; replace `tests/sitemap.test.ts` with tests of what the module is fed.
  - Exclude `/index-v1` (and its `/en` twin) via `sitemap.exclude` (or delete the page per I18N-004).
  - Optional: set priority/changefreq via `routeRules` `sitemap` if still wanted.
  - After deploy: confirm Search Console reads `sitemap_index.xml` (ties into NWL-011).
- DoD: one sitemap source; built `/sitemap_index.xml` lists all live pages in both locales, no `noindex` pages;
  `npm test` + `npm run build` green.

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
- **Shipped 2026-09-24 (release PR #29):** NWL-014 (PR #27), NWL-026/027/028 (PR #28), NWL-025 (already built with NWL-001) — archived.
- **Blocked, needs your input (not code-doable):** NWL-008 (verify real timeline facts), NWL-009 (real company photos), NWL-011's Search Console click-through (needs production deploy + Search Console access).
- **In review 2026-10-05:** SEO-009 (PR #39), follow-up tickets I18N-004/NWL-029/SEO-011 (PR #40), SEO-011 (PR #41).
- **Suggested next:** get PR #39–#41 reviewed and merged, KVK register correction (blocks full SEO-007 cleanup), NWL-013 (case study content), NWL-016 (FAQ per service).
