# 🗄️ Newland IT-Solutions — Ticket Archive

> Completed-ticket detail. The live status overview and active-ticket detail live in
> [`tickets.md`](./tickets.md). Move a ticket here once it is ✅ Done.
> Last updated: 2026-09-04

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
