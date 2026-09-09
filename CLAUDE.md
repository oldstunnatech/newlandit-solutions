# CLAUDE.md — Newland IT-Solutions

## Project Overview

Newland IT-Solutions is a **Nuxt 4 marketing and service website** for an Amsterdam-based IT consultancy. It is a monolithic Nuxt app with a Sanity back-end (optional CMS layer) and a Koa/Express contact API.

- **Framework**: Nuxt 4 · Vue 3 · TypeScript
- **Styling**: Tailwind CSS v3 + `@nuxt/ui`
- **i18n**: `@nuxtjs/i18n` — two locales: `nl` (default, no prefix) · `en` (prefixed `/en/`)
- **Testing**: Vitest (unit, jsdom)
- **Deployment**: Vercel (or any Node host) — `nuxt build` → `nuxt preview`
- **CMS**: Sanity (decision-gated, see `docs/tickets.md` NWL-020)

Key directories:

```
front-end/newlandit-ui/
  app/
    pages/          # Nuxt file-based routing
    components/     # Reusable Vue components
    layouts/        # Nuxt layouts (default, admin)
    composables/    # useContactForm, useSeo, …
    assets/css/     # main.css (global), component-scoped <style scoped>
  i18n/locales/     # en.json · nl.json
  server/
    api/            # Nitro API routes (contact.post.ts, …)
    utils/          # contactService, emailClient, rateLimiter, sanityClient
  shared/           # schemas, types, utils shared between app + server
  nuxt.config.ts
  package.json
docs/
  tickets.md        # Engineering roadmap (NWL/SEO IDs)
  tickets-archive.md
  roadmap.md
```

---

## Git Workflow — MANDATORY, NO EXCEPTIONS

This repo ships from **`main`**. All feature work goes through `development` first.

```
feat/NWL-<n>-short-desc
   │
   ├─ implement + commit incrementally (Conventional Commits)
   ├─ npm test         ← must pass
   ├─ npm run build    ← must pass
   │
   └──PR──► development ──PR──► main
```

### Branch naming

| Stream | Branch prefix | Ticket register |
|--------|---------------|-----------------|
| Feature | `feat/NWL-<n>-short-desc` | `docs/tickets.md` |
| Feature (SEO) | `feat/SEO-<n>-short-desc` | `docs/tickets.md` |
| Chore / docs / tooling | `chore/<desc>` | `docs/tickets.md` |
| Bug | `bug/NWL-<n>-short-desc` | `docs/tickets.md` |

### Step-by-step

1. **Branch from `development`:**
   ```
   git checkout development
   git pull origin development
   git checkout -b feat/NWL-<n>-short-description
   ```
2. **Implement** on the branch. Commit with Conventional Commit messages.
3. **Green gate before PR:**
   ```
   npm test              # Vitest — must be 0 failures
   npm run build         # nuxt build — must succeed
   ```
4. **Open PR to `development`:**
   ```
   git push -u origin feat/NWL-<n>-short-description
   gh pr create --base development --title "feat(NWL-<n>): <title>" --body "..."
   ```
5. **After merge to `development`**, update `docs/tickets.md` (status → ✅ Done).
6. **Release**: promote `development` → `main` via PR when a phase is complete.

### Hard rules

- **Never commit directly to `main` or `development`.** Branches only.
- **One branch per work item.** Never mix tickets on a branch.
- **No `--no-verify`, no force-push to `main` or `development`.**
- **Gate must be green at PR time.** A broken build or failing test blocks the PR. Fix it; never bypass.

---

## Commands (run from `front-end/newlandit-ui/`)

| Command | Purpose |
|---------|---------|
| `npm run dev` | Nuxt dev server with HMR |
| `npm test` | Vitest unit suite (must be 0 failures) |
| `npm run test:watch` | Vitest in watch mode |
| `npm run build` | Production build (`nuxt build`) |
| `npm run generate` | Static export (`nuxt generate`) |
| `npm run preview` | Preview production build |

---

## i18n conventions

- All user-visible strings live in `i18n/locales/en.json` and `i18n/locales/nl.json`. **Never hard-code display text in templates.**
- Use `useI18n()` → `t('key')` in `<script setup>`. Use `tm()` / `rt()` for arrays of objects.
- `useLocalePath()` for all internal links: `localePath('/contact')` not `'/contact'`.
- Key namespace pattern: `<page>.<section>.<key>` (e.g. `home.customers.heading`).
- Both locales must be updated together in the same commit.

---

## Component conventions

- `<script setup lang="ts">` — no Options API.
- Scoped styles (`<style scoped>`) unless explicitly global (add to `assets/css/main.css`).
- No Tailwind utility classes inside `<style>` — use them in `class=""` only.
- Composables in `app/composables/` — prefix with `use`.
- SEO: use `useSeo({ title, description, path })` composable in every page.

---

## Definition of Done (per ticket)

A ticket is done when:

- [ ] Feature is implemented and matches the acceptance criteria in `docs/tickets.md`
- [ ] Both `en.json` and `nl.json` updated (if any visible text added)
- [ ] `npm test` passes (0 failures)
- [ ] `npm run build` passes
- [ ] PR merged to `development`
- [ ] `docs/tickets.md` row updated to ✅ Done

---

## Ticket system

- Ticket IDs: `NWL-<n>` (features/chores) · `SEO-<n>` (SEO work)
- Source of truth: `docs/tickets.md`
- Archive for completed tickets: `docs/tickets-archive.md`
- **Suggested next (P1):** NWL-005, NWL-006, NWL-011 manual steps, SEO-007

---

## Security notes

- No secrets in source. All keys via `runtimeConfig` + `.env` (never committed).
- Contact API has rate-limiting, Zod validation, and attachment restrictions — do not weaken these.
- Consent gate pattern: any third-party embed (maps, Calendly, etc.) must check cookie consent before loading.
