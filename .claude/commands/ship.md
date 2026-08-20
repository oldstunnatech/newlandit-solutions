---
description: Merge a PR into main — final pipeline step. Irreversible; confirms before merging.
argument-hint: <PR-number>
---

Merge PR `$ARGUMENTS` into `main` — final step of the pipeline. This is the release PR from `development` → `main` opened by `/promote`.

**This is irreversible. Confirm with the user before merging.**

1. Show PR details: title, branch, files changed, CI status.
2. Ask the user to confirm explicitly.
3. On confirmation: `gh pr merge <nr> --merge --delete-branch`, then `git checkout main && git pull`.
4. Update `docs/tickets.md` (status → ✅ Done + verification note; move detail to `docs/tickets-archive.md`) and `docs/roadmap.md` (phase progress) via a short-lived `docs/<DOC-id>` branch — never commit docs directly to `main`.
5. Report the merged commit hash and updated tickets.
