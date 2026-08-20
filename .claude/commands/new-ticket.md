---
description: Add a new ticket to docs/tickets.md in the given category (NWL/SEO/I18N/DOC/OPS).
argument-hint: <category> <short-description>
---

Add a ticket to `docs/tickets.md`. Category is one of `NWL` (content/UX/legal/feature), `SEO`, `I18N`, `DOC`, `OPS`.

Arguments: `$ARGUMENTS`

1. Generate the next free ID in that category from `docs/tickets.md`.
2. Add an overview-table row in the right phase section + a full active-detail section (priority, files, problem, tasks, Definition of Done).
3. Update the `Last updated` date. Do not start a branch — that is a separate decision (`/start`).
