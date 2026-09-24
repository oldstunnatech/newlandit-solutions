# 🗄️ Newland IT-Solutions — Ticket Archive

> Completed-ticket detail. The live status overview and active-ticket detail live in
> [`tickets.md`](./tickets.md). Move a ticket here once it is ✅ Done.
> Last updated: 2026-09-14

---

## Phase 1 — SEO infrastructure ✅

### SEO-001 — Centralised SEO composable
- Files: `app/composables/useSeo.ts`
- Delivered: one `useSeo({ title, description, path, image?, type?, noindex? })` call per page sets
  title (with `| Newland IT-Solutions` suffix), description, OpenGraph, Twitter card, robots.
- Note: canonical/hreflang/og:locale intentionally left to i18n `useLocaleHead` to avoid duplicate tags.

### SEO-002 — i18n-owned canonical + hreflang
- Delivered: `useLocaleHead` wired in `layouts/default.vue`; per-request `<html lang>`, hreflang
  alternates, og:locale, canonical. `route.path` carries `/en` prefix so og:url is locale-correct.

### SEO-003 — Global security headers
- Files: `nuxt.config.ts` (`routeRules`)
- Delivered: `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`,
  `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` (camera/mic/geo off).

### SEO-004 — SEO copy in locale files
- Delivered: per-page titles/descriptions under `seo.*` keys in `locales/{nl,en}.json`.

---

## Phase 2 — i18n NL/EN + translation ✅

### I18N-001 — i18n bootstrap
- Files: `nuxt.config.ts`
- Delivered: `@nuxtjs/i18n` v10; `strategy: 'prefix_except_default'`; `defaultLocale: 'nl'`;
  `detectBrowserLanguage: false` (Dutch primary, no auto-redirect); `baseUrl` from `SITE_URL`.

### I18N-002 — Copy externalisation
- Delivered: all page/section copy moved to `locales/nl.json` + `locales/en.json`; pages read via
  `t()` / `tm()`+`rt()`. Commit `4488042` (branch `seo-and-nl-i18n`).

### I18N-003 — Language switcher
- Files: `app/components/LanguageSwitcher.vue`
- Delivered: NL ⇄ EN toggle; preserves route via locale path.

---

## Phase 3 — Content completeness + legal ✅ Fully done 2026-09-04

### NWL-001 — Homepage stats placeholder
- Files: `app/pages/index.vue`
- Delivered: `stats` computed array hardcodes real values (50+, 5yr, 98%, 72hr). Count-up animation
  reads `data-target` attribute; initial display uses same values. Consistent with About page.

### NWL-002 — Production serves stale EN build
- Delivered: NL-default i18n branch merged to `main` via PR #2 (2026-08-28); Vercel production
  tracks `main` and redeployed automatically. `/` now serves Dutch; `/en` serves English; hreflang correct.

### NWL-003 — Legal pages (AVG/GDPR)
- Files: `app/pages/{privacy,cookies,terms}.vue`, `app/components/Footer.vue`, `i18n/locales/{nl,en}.json`
- Delivered: three legal pages (privacyverklaring, cookiebeleid, algemene voorwaarden) driven by
  `legal.*` i18n keys. Footer links to all three via `localePath`. `useSeo` applied per page.
  Cookie consent banner (`CookieConsent.vue`) gates Google Maps iframe; choice stored in `localStorage(nwl_consent)`.

### NWL-004 — Consent-gate Maps iframe
- Files: `app/composables/useConsent.ts` (new), `app/components/CookieConsent.vue`, `app/pages/contact.vue`, `i18n/locales/{nl,en}.json`
- Delivered: `useConsent()` composable with Nuxt `useState` shared reactive state (`nwl_consent`, `nwl_consent_banner`). Exposes `consentAccepted`, `openBanner`, `accept`, `decline`. `CookieConsent.vue` refactored to use composable (removed local state). `contact.vue` Maps `<iframe>` wrapped in `v-if="consentAccepted"`; placeholder with "Cookies beheren" / "Manage cookies" button (calls `openBanner()`) shown otherwise. Locale keys `contact.visit.mapBlocked` + `contact.visit.enableMaps` added NL/EN.
- DoD met: no Maps network request fires before `nwl_consent === 'accepted'`; placeholder shown when declined/unset.

### NWL-007 — Service content parity vs old site
- Files: `i18n/locales/{nl,en}.json`, `app/pages/solutions/it-consulting.vue`
- Delivered: diffed all 8 old `/oplossingen` deliverables against new solution pages. Gap found: "netwerk-/server-/cloudbeheer" appeared in `consulting.offers` but had no `sub` detail section (3 subs for 4 offers). Added `sub` entry (NL + EN) with 2 paragraphs, 3 bullet points, CTA link. Fixed `subMeta` in `it-consulting.vue` (was hardcoded 3 image entries, now 4). Changed grid from `repeat(3, 1fr)` to `auto-fill, minmax(280px, 1fr)` for flexible layout.
- DoD met: all 8 old deliverables represented on a new solution page.

---

## Phase 5 — Launch (cutover) — partial

### NWL-010 — 301 redirects old→new
- Files: `front-end/newlandit-ui/nuxt.config.ts` (`routeRules`)
- Delivered: `/oplossingen` → `/solutions` (301), `/oplossingen/**` → `/solutions` (301),
  `/over-ons` → `/about` (301). Merged via PR #3 → PR #2 (2026-08-28).

---

## Backlog batch — shipped v1.1.0 (2026-09-14, PR #12)

### NWL-015 — FAQ accordion component
- Files: `app/components/FaqAccordion.vue`, `tests/faq-accordion.test.ts`, `i18n/locales/{nl,en}.json`
- Delivered: accessible button accordion with CSS `grid-template-rows` height transition. Injects `FAQPage` JSON-LD via `useHead(computed(...))` when `pageUrl` prop provided. `faq.general.items` i18n namespace (5 Q&A pairs, nl + en). 8 Vitest tests covering schema builder, i18n parity.
- Merged: PR #14 → development; shipped main via v1.1.0.

### SEO-005 — Service JSON-LD on solution pages
- Files: `app/composables/useServiceSchema.ts`, all 5 `app/pages/solutions/*.vue`, `tests/service-schema.test.ts`
- Delivered: `useServiceSchema({ name, description, path, serviceType? })` composable. Builds `schema.org/Service` with hardcoded `PROVIDER` (Organization block: address, phone, email, KVK) and `areaServed: City Amsterdam`. Called in all 5 solution pages immediately after `useSeo()`. 8 Vitest tests.
- Merged: PR #15 → development; shipped main via v1.1.0.

### SEO-006 — BreadcrumbList JSON-LD site-wide
- Files: `app/composables/useBreadcrumbSchema.ts`, `app/layouts/default.vue`, `tests/breadcrumb-schema.test.ts`
- Delivered: `useBreadcrumbSchema()` composable called once in `default.vue`. Auto-derives `BreadcrumbList` from `useRoute().path`; strips `/en` prefix for English locale; maps slugs to `t('nav.*')` labels with capitalised fallback; no-ops on home (0 segments). 9 Vitest tests.
- Merged: PR #16 → development; shipped main via v1.1.0.

### NWL-012 — Case studies routing + scaffold
- Files: `app/pages/cases/index.vue`, `app/pages/cases/[slug].vue`, `app/components/CaseCard.vue`, `shared/types/case.ts`, `shared/data/cases.ts`, `i18n/locales/{nl,en}.json`
- Delivered: `/cases` index (grid of `CaseCard` or empty-state), `/cases/[slug]` detail (challenge / approach / result sections + CTA; `noindex: true` on not-found). Typed `CaseStudy` interface. Empty `cases[]` array with `getCaseBySlug` helper (NWL-013 populates). `cases.*` + `seo.cases.*` i18n keys (nl + en).
- Merged: PR #17 → development; shipped main via v1.1.0.

---

## SEO-007 — NAP consistency audit (2026-09-24)

- Doc: [`nwl-011-seo-007-checklist.md`](./nwl-011-seo-007-checklist.md) (full findings log)
- Delivered: audited Google Business Profile, Bing Places, KVK register, and Dutch directories against site NAP source of truth (`shared/utils/contact.ts`).
- **Root cause found:** KVK trade register (KVK 83541934) has wrong handelsnaam (`Newland IT Solution's`) and wrong address (`Meibergdreef 466, 1105AX Amsterdam` vs actual `Hessenbergweg 8, 1101 BT Amsterdam`). Every stale/wrong third-party listing found (telefoonboek.nl, amsterdam-020.nl, adhocdata.nl) traces back to this — they scrape KVK data.
- Fixed directly: Google Business Profile website field corrected (`newlandit-solutions.com` → `www.newlandit-solutions.com`), pending Google review.
- Verified correct, no action: name/address/phone/category/hours on GBP; Infobel.com; LinkedIn; Facebook; own site.
- Verified no listing exists (nothing to fix): Bing Places (unclaimed), Detelefoongids.nl/Goudengids.nl.
- **Manual follow-up still open (not automatable — needs credentials/legal filing):**
  - File official KVK trade-name + address correction via `mijn.kvk.nl` (eHerkenning/DigiD)
  - Claim Bing Places listing and set NAP
  - Once KVK is corrected, claim-and-fix telefoonboek.nl and adhocdata.nl listings (low priority — adhocdata.nl is a B2B data broker, not consumer-facing)
