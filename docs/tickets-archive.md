# 🗄️ Newland IT-Solutions — Ticket Archive

> Completed-ticket detail. The live status overview and active-ticket detail live in
> [`tickets.md`](./tickets.md). Move a ticket here once it is ✅ Done.
> Last updated: 2026-08-20

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
