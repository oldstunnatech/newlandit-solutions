---
description: Promote development to main — verify build, open (or report) release PR development→main.
---

Promote the `development` branch to `main` for the next release:

1. Switch to `development`; `git pull origin development`.
2. Run the build from `front-end/newlandit-ui/`: `npm run build` — STOP and report on failure.
3. Check for an existing PR from `development` to `main` (`gh pr list --head development --base main`).
   - If one exists: report its URL and skip to step 5.
   - If none: open a PR (base `main`, head `development`) titled `promote: release — <N> commits since main`.
4. Ensure the PR body lists the commits since `main` (`git log main..development --oneline`).
5. Report: development HEAD, PR URL, build result, next action (`/ship <PR#>` to merge into `main` after review).
