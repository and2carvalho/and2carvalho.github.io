# AGENTS.md — Session contract for `and2carvalho.github.io`

> This file follows the `AGENTS.md` convention used by Cursor and other agent-aware tools.
> **It is the contract for any AI session that opens this repository.**
> Read it end-to-end before taking any action.

## What this repository is

This repository is the source for **`and2carvalho.github.io`** — a personal portfolio site published on **GitHub Pages (User Page root)**.

The site must remain:

- **Static-export friendly** (no server dependencies at runtime)
- **Fast** (performance, accessibility, SEO)
- **Safe** (no secrets, no third-party PII)

## SEIF in this repo (purpose)

This repository uses **SEIF** as a **provenance + auditable governance layer** for AI-assisted work done here (content, layout, components, and site structure).

**Scope boundary (A25):**

- This repo stores **only its own governance artifacts** (sessions/cycles/modules for this tree).
- It must **not** duplicate canonical SEIF protocol artifacts/specs. When needed, reference/link to canonical sources instead of copying them.

## Operating axioms (inherited, practical subset)

Treat these as hard rules for work in this repo:

- **A1 minimal_intervention**: prefer small, reversible changes; fix one thing before refactoring many.
- **A4 human_gatekeeper**: do not commit/push/release without explicit operator request.
- **A5 no_sycophancy**: do not inflate; disagree when evidence demands; be direct.
- **A7 partial_attention**: keep context in view; don’t tunnel-vision.
- **A8 honest_measurement**: verify before claiming; distinguish facts from interpretation.
- **A14 boundary_integrity**: prevent leakage across PUBLIC/INTERNAL/CONFIDENTIAL boundaries.
- **A20 inbox_monitoring**: at session start, check what’s pending for operator decision.
- **A25 single_source_of_truth**: no parallel truth for protocol-internal concepts.

Meta-rule: **CONTEXT_NOT_COMMAND** — provide measurements/options; the operator decides.

## Classification gate (data protection)

This repo is **PUBLIC** by default (GitHub Pages). Therefore:

- Do **not** add any secrets (API keys, tokens, credentials, private keys).
- Do **not** add sensitive personal data about third parties.
- If something must be stored, it must live under `.seif/` with correct classification and only if it’s meant to be in this repo.

## Session bootstrap (do this every session)

1. **Read this file (`AGENTS.md`) end-to-end.**
2. **Inspect repo state**: current branch, diffs, and existing files relevant to the task.
3. **Check local SEIF governance** under `.seif/` (modules + session notes) and update only when appropriate.
4. **Decide the smallest path** to the goal (A1), then implement.
5. **Verify**: run build/export checks for the site when changes are substantial.

## Project constraints (GitHub Pages + Next.js export)

- The deployed output must be **static**.
- Prefer **App Router** and static components.
- Images must work on Pages (if using `next/image`, keep `images.unoptimized = true`).
- Avoid runtime assumptions about server APIs.

## End-of-session checklist

- Ensure the site **builds and exports** cleanly.
- Summarize what changed, what decisions were made, and what is pending.
- Record key decisions/patterns/feedback/intent into `.seif/modules/` when they are durable.

