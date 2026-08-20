# Newland IT-Solutions — Redesign Roadmap

Date: 2026-08-20
Source: `report.md` gap audit (new vs old site)

## Objectives

- Ship a modern, bilingual, SEO-strong marketing site to replace the outdated `.com`.
- Remove all placeholder/empty content shown to visitors.
- Reach legal compliance (AVG/GDPR) before public launch.
- Build trust (client logos, cases) and maximise lead conversion.

## Delivery model

- Prioritization: P0 (launch-blocking) → P1 (high) → P2 (medium).
- Rule: no public launch (cutover from `.com`) until all P0 are done and verified.
- Governance: findings enter `tickets.md`; each ticket has a Definition of Done.

## Roadmap overview

| Phase | Focus | Status | Progress | Dependency |
| --- | --- | --- | --- | --- |
| 1 | SEO infrastructure | Done | 100% | None |
| 2 | i18n NL/EN + copy translation | Done | 100% | Phase 1 |
| 3 | Content completeness + legal compliance | In progress | 0% | Phase 2 |
| 4 | Trust, conversion & UX polish | Not started | 0% | Phase 3 |
| 5 | Launch: cutover from `.com` | Not started | 0% | Phase 3 |

---

## Phase 1 — SEO infrastructure ✅ Done

- Centralised `useSeo` composable (title/description/OG/Twitter/robots).
- i18n-owned canonical + hreflang + `<html lang>` via `useLocaleHead`.
- Global security headers via `routeRules`.
- Per-page SEO copy under `seo.*` locale keys.

## Phase 2 — i18n NL/EN + translation ✅ Done

- `@nuxtjs/i18n`, NL default (`prefix_except_default`), EN at `/en`.
- No browser auto-redirect (Dutch primary market).
- All page copy externalised to `i18n/locales/{nl,en}.json`.
- Language switcher component.

> ⚠️ Deploy note: the NL-default build is on branch `seo-and-nl-i18n` and not yet the live
> Vercel deploy — see NWL-002 (Phase 3 / Phase 5 blocker).

## Phase 3 — Content completeness + legal (current)

### Goals
Remove every placeholder/empty state; reach AVG/GDPR compliance.

### Scope
- Real homepage stats (NWL-001).
- Merge + redeploy so production serves the NL-default i18n build (NWL-002).
- Legal pages — privacy statement, cookie policy, terms + footer links (NWL-003).
- Cookie/consent banner gating Google Maps + WhatsApp (NWL-004).
- Service-page content parity check vs old `/oplossingen` deliverables (NWL-007).

### Acceptance criteria
- No placeholder values (`0+`, empty "trusted by") visible to visitors.
- Privacy + cookie consent live; footer links present in NL + EN.
- Production `/` serves Dutch by default.

### Exit gate
All P0 tickets done + verified in preview.

## Phase 4 — Trust, conversion & UX polish

### Scope
- Client logos with real assets (NWL-005).
- Testimonials / case references section (NWL-006).
- Blog / kennisbank decision + (optional) Sanity content model.
- Image optimisation, Lighthouse pass, accessibility (alt text, aria, keyboard).

### Acceptance criteria
- "Trusted by" and About render real, permissioned content.
- Home + service pages ≥ 90 Lighthouse SEO + Performance (mobile).

## Phase 5 — Launch (cutover from `.com`)

### Scope
- Point `newlandit-solutions.com` DNS / domain at the new build.
- 301 redirects from old URLs (`/oplossingen` → `/solutions`, `/over-ons` → `/about`).
- Submit sitemap; verify Search Console for both locales.

### Acceptance criteria
- Old paths 301 to new equivalents; no broken inbound links.
- Both NL + EN indexed; NAP consistent across site + Google Business.

## KPI targets

- SEO ≥ 90 and Performance ≥ 90 (mobile) on home + all service pages.
- 0 placeholder values shown to visitors.
- 100% strings via i18n.
- Legal: privacy + consent live before cutover.
