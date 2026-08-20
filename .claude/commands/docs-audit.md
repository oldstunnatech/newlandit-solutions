---
description: Audit docs/*.md and journey checklist against actual code. Report drift, no changes without confirmation.
---

Run a documentation-consistency audit + smoke checklist. Report drift; do **not** auto-fix without confirmation.

1. **`.md` consistency** — verify each doc matches the codebase:
   - **`docs/PRD.md`** — the FR-table statuses match implemented features (pages, form, i18n, SEO).
   - **`docs/tickets.md`** — for each ticket marked ✅ Done, verify the code change exists (file refs, pattern matches). For each git branch, verify a matching ticket exists (and vice-versa). Flag orphaned tickets / untracked branches.
   - **`docs/roadmap.md`** — phase progress matches ticket status counts in `tickets.md`.
   - **`docs/kennisbank.md`** — stack facts match `front-end/newlandit-ui/package.json` + `nuxt.config.ts` (Nuxt version, i18n config, modules, env vars).
   - **`docs/report.md`** — audit findings still reflect current site state (re-check any finding you can verify from source).
   - **`.claude/commands/*.md`** — each command still makes sense for the code; `legend.md` lists them all accurately.

2. **Journey checklist** (static — no E2E runner):
   - Nav renders on all pages; language switch NL ⇄ EN keeps the current route (`/` ⇄ `/en`).
   - Every `app/pages/solutions/*` detail page is reachable from `solutions/index.vue` cards.
   - Contact form: required-field validation, honeypot, attachment handling, success state.
   - Footer + Contact read NAP from `CONTACT`; values consistent.
   - No placeholder values shipped (e.g. `0+` stats — NWL-001).

3. **Watch-list** — `.md` files that drift after each merge: `docs/tickets.md` + `docs/roadmap.md` (every PR), `docs/kennisbank.md` (dep/arch changes), `docs/report.md` (after content fixes).

4. **Report** — list failing checklist items + `.md` files with drift, prioritized by impact.
