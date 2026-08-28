---
description: Quality gate for a marketing-site — build, i18n key parity, no hardcoded strings, per-page useSeo. Report pass/fail per check.
---

Run project verification. All checks are static/build-based (no test runner is configured):

1. **Build** — from `front-end/newlandit-ui/`: `npm run build`. Report pass/fail; on failure name the file/line.
2. **i18n key parity** — `i18n/locales/nl.json` and `en.json` must have the **same key set**. Report any key present in one locale but missing in the other (missing-key = runtime fallback bug).
3. **No hardcoded user-facing strings** — scan `app/pages/**` and `app/components/**` for literal display text in templates that is not wrapped in `t()`/`tm()`. Flag `file:line` for each (allow attributes like class names, hrefs, icon names).
4. **SEO coverage** — every page in `app/pages/**` (except dead drafts marked `noindex`) calls `useSeo(...)`. Flag pages missing it.
5. **NAP single-source** — no hardcoded phone/email/address/KvK/BTW outside `shared/utils/contact.ts`; all reads go through `CONTACT`.

For any failing check: report `file:line — rule — fix`, exit non-zero. Do not weaken a check to make it pass.
