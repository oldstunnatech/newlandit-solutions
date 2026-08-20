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

---

## 🔗 Dependencies & next steps

- **Launch blockers (P0):** NWL-001, NWL-002, NWL-003, NWL-010.
- NWL-002 (redeploy) also validates all Phase 2 i18n work in production.
- NWL-003 (legal) + NWL-004 (consent) should ship together.
- **Suggested next:** NWL-002 → NWL-001 → NWL-003/004 → NWL-007 → Phase 4 trust content.
