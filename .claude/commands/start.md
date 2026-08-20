---
description: Start work on a ticket — verify it, branch from development, flip status to In progress.
argument-hint: <TICKET-ID>
---

Start work on ticket `$ARGUMENTS`:

1. Look up the ticket in `docs/tickets.md`; STOP if missing or Done.
2. Verify its dependencies (see "Dependencies & next steps") are Done; warn if not.
3. Branch from `development` as `<type>/<TICKET-ID>-short-description` — type inferred from prefix:
   `SEO`/`I18N`/`NWL`→`feat` (content/UX/legal features), `DOC`→`docs`, `OPS`→`chore`.
   Use `fix` instead of `feat` when the ticket is a bug (e.g. NWL-001 stats, NWL-002 deploy).
4. Flip the ticket status to 🟡 In progress in `docs/tickets.md`.
5. Remind: run `/check` before PR, use `/commit` when ready, PR targets `development`.
