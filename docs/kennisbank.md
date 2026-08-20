# 📚 Kennisbank — Newland IT-Solutions website

> Knowledge base for the redesign project. Facts, conventions, and gotchas that are not
> obvious from the code alone. Keep this current when architecture or process changes.
> Last updated: 2026-08-20

---

## 1. What this project is

The marketing website for Newland IT-Solutions — an Amsterdam IT company serving freelancers
and small businesses with IT support, custom software, and websites. Bilingual (NL default,
EN secondary), SEO-instrumented, lead-capture focused. No authenticated area.

- Live (outdated) site: `https://www.newlandit-solutions.com`
- New build (preview): `https://newlandit-solutions.vercel.app`

## 2. Stack (facts)

| Layer | Choice |
|---|---|
| Framework | **Nuxt 4** (`^4.2.0`), Vue 3.5, **TypeScript** |
| Styling | Tailwind CSS `^3.4.17` via `@nuxtjs/tailwindcss` (build-time, not CDN) + scoped CSS per page |
| UI / icons | `@nuxt/ui` v4, `@lucide/vue`, `@nuxt/icon` (iconify lucide) |
| i18n | `@nuxtjs/i18n` v10 — NL default, EN secondary |
| CMS | **Sanity** (`@sanity/client`) — wired via runtimeConfig; content model not yet defined |
| Email | **Resend** (`resend`) — contact form notifications |
| Validation | **Zod** v4 |
| Payments | **Stripe** keys present in runtimeConfig — no commerce flow built (open question, see PRD §10) |
| Hosting | **Vercel** |

## 3. Project layout

- App code: `front-end/newlandit-ui/`
- Pages: `app/pages/` — `index.vue`, `About.vue`, `Contact.vue`, `solutions/index.vue`,
  `solutions/{software-development,it-consulting,digital-strategy,cms-websites,it-support}.vue`
- Components: `app/components/` — `Header`, `Footer`, `HeroSection`, `ServiceCard`, `ClientLogo`,
  `LanguageSwitcher`, `SideNav`, `MobileNav`
- Layouts: `app/layouts/{default,Admin}.vue`
- Composables: `app/composables/useSeo.ts`, `useContactForm`
- Shared: `shared/utils/contact.ts` (`CONTACT`), `shared/types/company.ts`
- i18n copy: `i18n/locales/{nl,en}.json`

## 4. i18n conventions (important)

- Config in `nuxt.config.ts`:
  - `strategy: 'prefix_except_default'` → NL at `/`, EN at `/en/...`.
  - `defaultLocale: 'nl'`, `detectBrowserLanguage: false` — **Dutch is primary; no browser auto-redirect.**
  - `baseUrl` = `SITE_URL` env or `https://www.newlandit-solutions.com`.
- **All user-facing strings must go through i18n** (`t()`, `tm()`+`rt()` for arrays). No hardcoded copy.
- `<html lang>` + hreflang + canonical are owned by i18n's `useLocaleHead()` (wired in `layouts/default.vue`),
  **not** by `useSeo`. Do not duplicate those tags.

### ⚠️ Gotcha — "site shows English"
The Vercel preview showing an all-English hero is a **stale/pre-i18n deploy**, not a config bug.
The NL-default i18n work lives on branch `seo-and-nl-i18n` (commit `4488042`). Once merged +
redeployed, `/` serves NL. See NWL-002.

## 5. SEO conventions

- One `useSeo({ title, description, path })` call per page (`app/composables/useSeo.ts`).
- Sets title (via `titleTemplate` suffix `| Newland IT-Solutions`), description, OG + Twitter tags, robots.
- Canonical/hreflang/og:locale are **intentionally not** set in `useSeo` — owned by `useLocaleHead`.
- Default OG image: `/images/IMG_8959.jpg` (override per page via `image`).
- SEO copy lives under the `seo.*` keys in the locale JSON.
- Security headers set globally via `routeRules` in `nuxt.config.ts` (nosniff, X-Frame-Options, etc.).

## 6. Contact form

- Component: `app/pages/Contact.vue`; logic in `useContactForm` composable.
- Fields: name*, email*, phone, company, address, message*, attachment (pdf/doc/img), honeypot (`website`).
- Delivery via **Resend**; env: `RESEND_API_KEY`, `CONTACT_NOTIFICATION_FROM`, `CONTACT_NOTIFICATION_TO`.
- ⚠️ Collects personal data + file uploads → **privacy statement is legally required** (NWL-003).

## 7. Single source of truth — CONTACT

- `shared/utils/contact.ts` exports `CONTACT` (phone, email, website, KvK, BTW, address, opening hours,
  closed holidays, map embed URL, `startYear`). Typed by `shared/types/company.ts`.
- Footer, Contact page, and structured data all read from it. **Never hardcode NAP details** —
  update `CONTACT` so footer/contact/SEO stay consistent (local SEO depends on NAP consistency).

## 8. Runtime env vars

`SANITY_API_TOKEN`, `SANITY_PROJECT_ID`, `SANITY_DATASET`, `RESEND_API_KEY`,
`CONTACT_NOTIFICATION_FROM`, `CONTACT_NOTIFICATION_TO`, `STRIPE_SECRET_KEY`,
`STRIPE_WEBHOOK_SECRET`, `SITE_URL`. Set locally in `.env` (gitignored), prod in Vercel.

## 9. Git workflow (two-tier)

- **`main`** — production / release branch. Never commit directly.
- **`development`** — integration branch (created 2026-08-20 from `main`). Feature branches PR here.
- **Feature branches** — `<type>/<TICKET-ID>-desc`, branched from `development`.
- Flow: `/start <ID>` (branch from development) → `/commit` (PR → development) → `/promote`
  (open release PR development → main) → `/ship <PR#>` (merge → main).
- Slash commands live in `.claude/commands/*.md`; run `/legend` for the full list.
- Remote: `github.com/oldstunnatech/newlandit-solutions`.

## 10. Build / run

From `front-end/newlandit-ui/`:
- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run generate` — static generate
- `npm run preview` — preview built output
