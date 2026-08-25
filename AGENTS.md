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
