---
description: Find local branches whose PRs are merged/closed and safe-delete them after confirmation.
---

Find local branches whose PRs are merged/closed (`git fetch --prune`, `git branch -vv` → `gone`), confirm with the user, then `git branch -d` (safe delete only — never `-D`).
