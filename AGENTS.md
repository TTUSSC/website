## Principles

- Less is more: prefer the smallest, most direct change that solves the problem. Fewer files, fewer abstractions, fewer words, in code, commits, and docs alike.
- Prefer Astro's native mechanisms over hand-rolled code; keep custom code minimal, and refactor existing code when it genuinely helps future maintenance.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Working conventions

- Do not commit files under `docs/` or test artifacts unless the user explicitly approves them.
- Tests may be created for verification without being committed.
- Use subagents for genuinely heavy or independent work, not routine edits.

## Commit messages

- One commit does one thing. If a change needs "and" to describe it, split it into separate commits; this also keeps each commit revertable and bisectable on its own.
- Title follows Conventional Commits: `type(scope): subject`. `scope` is optional: add it when the change is clearly scoped to one area (e.g. `feat(i18n): ...`), omit it for small or cross-cutting changes.
- `type` is one of: `feat`, `fix`, `chore`, `docs`, `refactor`, `test`, `ci`, `build`, `perf`, `style`.
- `subject` starts with a lowercase imperative verb (`add`, `fix`, not `added`/`adding`), no trailing punctuation, ≤72 characters.
- Body is separated from the title by a blank line and explains _why_ the change was made and _what it's for_, i.e. the context and goal, not a file-by-file account of what changed (the diff already shows that). Only describe _how_ it was implemented when the approach isn't obvious.
- Wrap body lines at ~72 characters. Style: Linux-kernel-like but more concise and friendly, using short paragraphs rather than terse fragments.
- Footer (`Closes #123`, `BREAKING CHANGE: ...`) only when it actually applies; don't add one just to look complete.
- The title format above is checked mechanically by a `commit-msg` pre-commit hook (`scripts/check_commit_msg.py`); the body/footer guidance is not machine-checked.
