# 🔎 Content & Compliance Audit — new site vs old site

> Gap audit comparing the new build (`newlandit-solutions.vercel.app`) against the outdated live
> site (`newlandit-solutions.com`). Feeds `tickets.md` and `roadmap.md`.
> Date: 2026-08-20 · Method: page-by-page content read of both sites + source review.

---

## Executive summary

The new site is **structurally richer** than the old one: it adds per-service detail pages
(software-development, it-consulting, digital-strategy, cms-websites, it-support), a fuller About
page (missie/visie/strategie, timeline, values, stats), and a complete contact experience (form +
map + opening hours + WhatsApp). The old site had only `/`, `/oplossingen`, `/over-ons`, `/contact`.

Remaining gaps are **not structural** — they are in **data, trust content, legal compliance, and
deployment**. None of these are hard to fix, but several are launch-blocking.

## Page inventory

| Old site (`.com`) | New site (Vercel) | Notes |
|---|---|---|
| `/` | `/` | New has stats, "trusted by", process steps, values, approach |
| `/oplossingen` | `/solutions` | New adds 5 detail subpages; old had 3 inline blocks |
| `/over-ons` | `/about` | New adds timeline, stats, values; old had missie/visie/strategie only |
| `/contact` | `/contact` | New adds map, opening hours, KvK/BTW, attachment upload |
| — | `/solutions/{5 services}` | New only |
| — | — | **Neither has legal pages** (privacy/cookie/terms) — required |

## Findings

### 🔴 Launch-blocking

**F1 — Homepage stats are placeholders.**
Live home shows `0+ CLIENTS / 0yr EXPERIENCE / 0% SATISFACTION / 0hr RESPONSE`. The About page
already uses real values (`50+ / 5yr / 98% / 72hr`). Visitors see zeros. → **NWL-001**

**F2 — Production serves a stale, English build.**
The Vercel preview renders an all-English hero while the old site is Dutch and config specifies
`defaultLocale: 'nl'` with `detectBrowserLanguage: false`. This is a **deploy problem, not a config
bug**: the NL-default i18n work is on branch `seo-and-nl-i18n` (commit `4488042`) and is not the
deployed build. Merge + redeploy required. → **NWL-002**

**F3 — No legal pages.**
No privacy statement, cookie policy, or terms; the footer has no legal links. The contact form
collects personal data + file uploads and the site embeds Google Maps + WhatsApp, so under AVG/GDPR
a privacy statement and consent are mandatory. → **NWL-003**

### 🟠 High

**F4 — No cookie/consent banner.**
Google Maps iframe and WhatsApp load unconditionally; non-essential third-party embeds need prior
consent under AVG. → **NWL-004**

**F5 — "Trusted by / Our customers" is empty.**
The section header exists and `ClientLogo.vue` is present, but there are no real client logos/names.
The section currently reads as an unfulfilled promise. → **NWL-005**

**F6 — No testimonials / case references.**
The new site leans on trust ("trusted by") but provides no social proof — no quotes, cases, or
references. → **NWL-006**

**F7 — Service deliverable parity risk.**
Old `/oplossingen` listed concrete deliverables that must survive: `WordPress/Wix/Shopify`,
`platform-/API-integraties`, `IT-consultancy & systeemselectie`, `netwerk-/server-/cloudbeheer`,
`helpdesk remote & on-site`, `projectmanagement (ook buiten IT)`, `branding & visueel design`,
`UI/UX`. New solution pages have rich `offers` lists — diff to confirm none dropped. → **NWL-007**

### 🔵 Nice-to-have

**F8 — About timeline authenticity.**
The new About timeline uses year/event entries — confirm they are real, not filler (consistency
with the "5yr experience" stat). → **NWL-008**

**F9 — Placeholder imagery.**
Solution subpages render `<img>` with `:alt="sub.title"`; ensure real, optimised assets replace any
placeholders. → **NWL-009**

**F10 — No blog / kennisbank.**
The old `/over-ons` visie promises "kennisdeling", but there is no content surface. SEO content
opportunity; Sanity CMS is already wired. → `ideas.md` #6/#7.

**F11 — NAP consistency.**
Footer + Contact read from the shared `CONTACT` util (good). Verify it matches the old site's
`Hessenbergweg 8, 1101BT Amsterdam` and the Google Business Profile for local SEO. → `ideas.md` #9.

**F12 — Extend structured data.**
Site-wide `ProfessionalService` JSON-LD already exists in `layouts/default.vue` (name, address,
telephone, VAT, opening hours, areaServed Amsterdam, KVK, LinkedIn `sameAs`) — good. Opportunity:
add per-page `Service` schema on solution subpages, and `BreadcrumbList`. → `ideas.md` #8.

## What the new site does better (keep)

- Per-service detail pages with intro + offerings + alternating image sub-sections.
- Full contact page: validated form, attachment drag-drop, honeypot, map, opening hours, WhatsApp FAB.
- Centralised SEO (`useSeo`) + i18n-owned canonical/hreflang.
- Single-source-of-truth `CONTACT` util for NAP/KvK/BTW across footer + contact.
- Bilingual architecture (NL default, EN secondary) with security headers.

## Recommended sequence

1. **NWL-002** — merge `seo-and-nl-i18n` + redeploy (unblocks verifying all i18n in prod).
2. **NWL-001** — real homepage stats.
3. **NWL-003 + NWL-004** — legal pages + consent (ship together).
4. **NWL-007** — service deliverable parity.
5. Phase 4 trust content (**NWL-005/006**) → launch cutover (**NWL-010/011**).
