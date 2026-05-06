# `.seif/` — local governance for this repository

This directory stores **SEIF governance artifacts scoped to this repo** (portfolio site).

## Scope boundary (A25)

- This `.seif/` is **only** for governance of this repository.
- Do **not** copy canonical SEIF protocol specs or kernel artifacts into this repo.
- When referencing canonical SEIF, prefer links to the canonical repositories instead of duplicating content.

## Structure

- `config.json`: repo-local governance policy/config
- `mapper.json`: the “top modules” index for quick session bootstrap
- `modules/`: durable notes (intent, decisions, patterns, feedback) that should survive beyond a single change
- `sessions/` and `cycles/`: session/cycle records created by the `seif` CLI when you run lifecycle commands

## Using the SEIF CLI (optional)

This repo is compatible with `seif-cli` if installed locally.

- Create a session: `seif --session create ...`
- Contribute to a module: `seif --contribute .seif/modules/decisions.seif "..." --author <name>`

Keep these artifacts **PUBLIC-safe** (this repo deploys publicly).

