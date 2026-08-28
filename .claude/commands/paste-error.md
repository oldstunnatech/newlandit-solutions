---
description: Diagnose a pasted runtime/build error — locate offending code, classify cause, propose minimal fix.
argument-hint: <pasted error output>
---

User pastes a runtime/build error (Nuxt build, Vue runtime, i18n missing-key, Resend/Sanity API, etc.). Extract the error + file/line, locate the offending code via Grep/Read (never guess), classify the cause (missing i18n key, hydration mismatch, missing env var, type error, failed import, …), and propose a minimal fix with `file:line` references. Ask before editing; then follow the `/start` → `/commit` flow with the right ticket.
