# 📖 Newland IT-Solutions — User Stories

> Generated from the open tickets in [`tickets.md`](./tickets.md), 2026-09-24.
> For splitting work between the two of us. Ticket ID is kept in each story so it maps back to the tracker.
> Also available as a live shared doc: https://claude.ai/artifact/22QZnuyf95ZzDZbzwskYQi

---

## Phase 4 — Trust, conversion & UX

**NWL-008 — About timeline accuracy** (P2)
As a visitor reading the About page, I want the company timeline to show only real, verifiable milestones, so that I trust Newland's credibility claims.
- AC: every year/event on the timeline is checked against actual history; anything unverifiable is removed or rewritten as non-specific.

**NWL-009 — Real solution imagery** (P2)
As a visitor browsing a solution page, I want to see real photos instead of placeholders, so that the business feels active and genuine, not templated.
- AC: all solution-subpage `<img>` placeholders replaced with real imagery; every image has descriptive alt text.

---

## Phase 5 — Launch (cutover)

**NWL-011 — Search Console submission** (P1, in progress)
As the site owner, I want the new site's sitemap submitted to Google Search Console, so that both locales get indexed and we can track search performance.
- AC: verification meta tag deployed to production; property verified in Search Console; `sitemap.xml` submitted; both `/nl/` and `/en/` locale URLs confirmed present in the sitemap report.
- Status: verification tag merged, waiting on production deploy → verify → submit.

---

## Content & trust

**NWL-013 — Case study content** (P2, depends on NWL-012)
As a prospective client evaluating Newland, I want to read real case studies (problem → solution → result), so that I can judge whether Newland can solve a problem like mine.
- AC: content model finalized; first 2 real case studies written and published via the existing `/cases` scaffold.

**NWL-014 — "Onze aanpak" page** (P2)
As a visitor deciding whether to reach out, I want a dedicated page walking through the Discovery / Plan / Build / Support process, so that I know what working with Newland looks like before I commit.
- AC: new page expands each of the 4 steps with concrete detail beyond the homepage's short version.

**NWL-016 — FAQ per service** (P2, depends on NWL-015)
As a visitor on a specific service page, I want FAQs relevant to that service, so that common objections are answered without needing to contact support.
- AC: 5 service pages each get their own FAQ content using the existing `FaqAccordion` component.

---

## Content engine (blog + CMS)

**NWL-020 — Sanity decision** (P2, decision-gated, blocks 017/018/019/021)
As the team, we need to decide whether marketing copy stays in i18n JSON or moves to Sanity CMS, so that content editors know where to make changes and the blog can be built on a real foundation.
- AC: decision recorded in PRD §10. If go: schemas + typed fetch layer built.

**NWL-017 — Blog schema + content model** (P2, depends on NWL-020)
As a content editor, I want a blog content model in Sanity, so that I can write and publish posts without a code deploy.

**NWL-018 — Blog index/list page** (P2, depends on NWL-017)
As a visitor, I want a blog index with pagination, so that I can browse past articles.

**NWL-019 — Blog post detail + Article SEO** (P2, depends on NWL-017)
As a visitor finding a post via Google, I want a proper article page (with `og:type=article` and `Article` JSON-LD), so that it previews well when shared and ranks properly.

**NWL-021 — Migrate marketing copy to Sanity** (P2, depends on NWL-020)
As a content editor, I want existing marketing copy moved from i18n JSON into Sanity, so that I can update site copy myself instead of asking a developer.

---

## SEO & local

**SEO-008 — Per-service OG images** (P2)
As someone sharing a service page link on social media, I want a relevant preview image instead of the shared generic hero, so that the link looks specific and trustworthy.

**SEO-009 — Local landing-page template** (P2, blocks SEO-010)
As a searcher looking for IT services in a specific Amsterdam neighbourhood, I want a locally-relevant landing page, so that I find Newland for local search terms.
- AC: reusable template with i18n, local schema markup, internal links.

**SEO-010 — Publish local pages** (P2, depends on SEO-009)
As a searcher in a specific area, I want an actual published page for my neighbourhood, so that I can find and trust a nearby provider.
- AC: first batch of neighbourhood/niche pages published using the SEO-009 template.

---

## Product & conversion

**NWL-022 — Inline booking widget** (P2)
As a visitor ready to talk, I want to book a consultation directly on the site (Calendly/Cal.com), so that I don't have to go back and forth by email to find a time.
- AC: consent-gated (matches existing cookie-consent pattern before loading any third-party embed).

**NWL-023 — Stripe decision** (P2, decision)
As the team, we need to decide whether to remove the unused Stripe keys or scope a real commerce flow, so that the codebase doesn't carry dead, unmonitored payment-provider surface.
- AC: keys removed, or a commerce epic filed; decision recorded in PRD.

**NWL-024 — Newsletter signup** (P2)
As a visitor interested in updates, I want to subscribe via a compliant double opt-in form, so that I stay informed without spam risk or privacy issues.
- AC: Resend audiences integration, double opt-in, privacy-policy compliant.

---

## UX polish & accessibility

**NWL-025 — Count-up stats animation** (P2, depends on NWL-001)
As a visitor landing on the homepage, I want the stats to animate when they scroll into view, so that the page feels more polished and draws attention to Newland's numbers.

**NWL-026 — Image alt-text audit** (P2)
As a screen-reader user, I want every image to have a meaningful alt description, so that I understand the page content without seeing the images.
- AC: site-wide alt-text policy defined and applied to all imagery.

**NWL-027 — Visible focus states** (P2)
As a keyboard user, I want every interactive element to show a clear focus outline, so that I always know where I am on the page.

**NWL-028 — Keyboard navigation** (P2)
As a keyboard-only user, I want to operate the nav, mobile drawer, forms and WhatsApp FAB without a mouse, so that the site is fully usable without pointing devices.
