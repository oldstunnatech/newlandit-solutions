---
description: Run the commit pipeline for the current branch — build, stage, Conventional Commit, push, open PR to development.
---

Execute the commit pipeline for the current branch without skipping steps:

1. Identify current branch. Warn if it deviates from `<type>/<TICKET-ID>-short-description`. Never commit directly to `main` or `development`.
2. Run the build from `front-end/newlandit-ui/`: `npm run build` — STOP and report on failure.
3. Run `git status`. Stage only relevant files. NEVER stage: `.env`, `.env.*`, `.idea/`, `node_modules/`, `.output/`, `.nuxt/`, or any secrets.
4. If nothing to stage: report "nothing to commit" and skip to step 6.
5. Write a Conventional Commit with ticket scope (`fix(NWL-001): …`, `feat(SEO-005): …`, `docs(DOC-…): …`). End the message with:
   `Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>`. Create the commit.
6. Push branch to origin.
7. Check for an existing PR (`gh pr list --head <branch>`). If none: open a PR targeting `development`.
8. Report: branch, commit hash, PR URL, build result.

Hard rules: never commit to `main`/`development` directly; never `--no-verify`; a failing build blocks everything.
