# Astro Best Practices

A living reference compiled from Astro's official docs
(`https://github.com/withastro/docs`, English tree under `src/content/docs/en/`).
Every entry cites the source doc path it came from. Compiled from two independent
research passes (Claude Sonnet reading a local clone; OpenAI Codex reading the same
docs via browsing, since its sandbox has no direct git/network access), then merged
and reconciled by hand. Astro's docs change over time — re-verify against current
docs before leaning on an entry for a non-trivial decision, and update this file
when something here goes stale.

## Project structure

- **`src/` is processed and optimized; `public/` is copied through untouched.** Keep
  everything you author (components, styles, content, images that need optimizing)
  in `src/`; reserve `public/` for files that must be served byte-for-byte
  (`robots.txt`, `favicon.ico`, PDFs).
  Source: `basics/project-structure.mdx`

- **Only `src/pages/` is framework-reserved.** `components/`, `layouts/`,
  `styles/` are conventions, not requirements — safe to organize by domain (e.g.
  group by content type) instead of copying a starter's generic layout.
  Source: `basics/project-structure.mdx`

- **Prefer `astro.config.mjs`** (or `.ts` for type-checked config) over `.js`.
  Source: `basics/project-structure.mdx`, `guides/configuring-astro.mdx`

- **Keep ordinary packages in `dependencies`, not `devDependencies`,** unless
  there's a specific reason not to — Astro needs most packages at build time, and
  hosts vary in how they install dev dependencies.
  Source: `basics/project-structure.mdx`

## Content collections

- **Use build-time collections (`glob`/`file` loaders), not live collections,
  for content that's relatively static.** Live collections (`defineLiveCollection`)
  are for frequently-changing, request-time data and require an SSR adapter —
  incompatible with a fully static build, and lose caching, image optimization,
  and MDX support.

  ```ts
  // src/content.config.ts
  import { defineCollection } from 'astro:content';
  import { glob } from 'astro/loaders';
  import { z } from 'astro/zod';

  const blog = defineCollection({
  	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  	schema: z.object({
  		title: z.string(),
  		pubDate: z.coerce.date(),
  		author: z.string(),
  	}),
  });

  export const collections = { blog };
  ```

  Source: `guides/content-collections.mdx`

- **`glob()` is for directories of many similar files** (one file per blog
  post); **`file()` is for one file holding many records** (a single JSON/YAML
  data file). `file()` accepts exactly one local data file — don't pass it a
  glob pattern, or the build fails with `FileGlobNotSupported`.
  Source: `guides/content-collections.mdx`, `reference/content-loader-reference.mdx`,
  `reference/errors/file-glob-not-supported.mdx`

- **Define a Zod `schema` even though it's optional — the docs call it "highly
  recommended."** It validates frontmatter at build time and gives full
  TypeScript inference on `getCollection()`/`getEntry()` results. Use
  `z.coerce.date()` so YAML date strings become real `Date` objects, and mark
  genuinely optional fields with `.optional()` explicitly rather than leaving
  ambiguity.
  Source: `guides/content-collections.mdx`

- **Set `generateId()` explicitly instead of trusting the filename-derived
  default** when you need predictable, stable IDs — the default lower-cases and
  kebab-cases filenames via `github-slugger`, which can collide or look wrong for
  non-ASCII or mixed-script filenames.

  ```ts
  loader: glob({
  	base: './src/content/authors',
  	pattern: '**/*.json',
  	generateId: ({ entry }) => entry.replace(/\.json$/, ''),
  });
  ```

  Source: `guides/content-collections.mdx`, `reference/content-loader-reference.mdx`

- **Organize translated content as locale subdirectories within one collection,
  filtered by `id` prefix** — not a separate collection per language.

  ```text
  src/content/blog/
    en/post-1.md
    fr/post-1.md
  ```

  ```ts
  const englishPosts = await getCollection('blog', ({ id }) =>
  	id.startsWith('en/'),
  );
  ```

  Keeps one schema per content type across languages instead of duplicating
  collection definitions per locale.
  Source: `recipes/i18n.mdx`, `guides/content-collections.mdx`

- **Use `reference()` to link entries across collections** (a post's author, a
  product's related items) instead of duplicating data or storing untyped ID
  strings.

  ```ts
  schema: z.object({
  	title: z.string(),
  	author: reference('authors'),
  });
  ```

  Query with `getEntry()`/`getEntries()`.
  Source: `guides/content-collections.mdx`

- **Use the schema-context `image()` helper for cover images**, not a plain
  string field, so it's validated and runs through Astro's image pipeline.
  Source: `guides/content-collections.mdx`

- **`getCollection()` order is not deterministic — always sort explicitly**
  (e.g. by date) after fetching.

  ```ts
  const sorted = (await getCollection('blog')).sort(
  	(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
  ```

  Source: `guides/content-collections.mdx`

- **Filter drafts at query time**, optionally keeping them visible in dev:

  ```ts
  const posts = await getCollection('blog', ({ data }) =>
  	import.meta.env.PROD ? data.draft !== true : true,
  );
  ```

  Source: `guides/content-collections.mdx`

- **Render collection bodies with `render(entry)` → `<Content />`**, not a
  separate Markdown parser:

  ```ts
  const entry = await getEntry('blog', id);
  const { Content, headings } = await render(entry);
  ```

  Source: `guides/content-collections.mdx`

- **Type props with `CollectionEntry<'name'>`**, derived from the schema, so
  cards/layouts stay in sync with content changes.
  Source: `guides/content-collections.mdx`

- **Use `getCollection()`/`getEntry()`, never the deprecated `Astro.glob()`**
  (removed in Astro 5) — use `import.meta.glob()` only for non-collection source
  globs (e.g. icon files).
  Source: `guides/content-collections.mdx`, `guides/upgrade-to/v5.mdx`, `guides/imports.mdx`

## Images and `astro:assets`

- **Keep images that need optimizing in `src/`, import them.** Only `src/`
  images can be resized, format-converted, and cache-busted; `public/` images are
  copied through untouched, never optimized.
  Source: `guides/images.mdx`, `basics/project-structure.mdx`

- **Prefer `<Image />` over a raw `<img>` in `.astro` files whenever possible.**
  It infers `width`/`height` and sets `loading`/`decoding`, preventing layout
  shift (CLS) even for images you don't otherwise optimize. Use `<img>` only for
  unsupported formats, deliberately-unoptimized images, or when `src` must change
  client-side — and even then, pass through the imported `width`/`height`.

  ```astro
  ---
  import { Image } from 'astro:assets';
  import portrait from '../assets/portrait.jpg';
  ---

  <Image src={portrait} alt="A description of my image." />
  ```

  Source: `guides/images.mdx`, `reference/modules/astro-assets.mdx`

- **Use `<Picture />` for multiple formats** (e.g. AVIF/WebP with a fallback),
  listing the most modern format first, rather than hand-rolling `<source>` tags.
  Source: `guides/images.mdx`, `reference/modules/astro-assets.mdx`

- **Always set `alt`** (required — Astro errors if omitted); use `alt=""` for
  purely decorative images.
  Source: `guides/images.mdx`, `reference/errors/image-missing-alt.mdx`

- **Set `image.layout` and `image.responsiveStyles: true` globally** rather than
  per-image, so Markdown `![]()` images become responsive too. `constrained` is
  the recommended default when unsure; `full-width` for heroes, `fixed` for
  logos/icons that never resize. If using Tailwind 4, leave `responsiveStyles`
  at its default `false` and let Tailwind's own sizing utilities apply instead
  (Astro's responsive styles otherwise win via cascade layers).

  ```js
  export default defineConfig({
  	image: { layout: 'constrained', responsiveStyles: true },
  });
  ```

  Source: `guides/images.mdx`, `reference/configuration-reference.mdx`,
  `reference/modules/astro-assets.mdx`

- **Restrict remote image optimization to authorized hosts** via
  `image.domains`/`image.remotePatterns` — an explicit safety boundary so
  arbitrary external URLs aren't fetched during the build.
  Source: `guides/images.mdx`, `reference/configuration-reference.mdx`

- **`public/` images need explicit `width`/`height`** (Astro can't inspect
  them); remote images need dimensions too, or `inferSize`/`inferRemoteSize()`.
  Source: `reference/modules/astro-assets.mdx`

- **pnpm may need `pnpm add sharp` explicitly**, even though Sharp (the default
  image service) is an Astro dependency — pnpm's strict `node_modules` layout
  doesn't hoist transitive deps the way npm/yarn do.
  Source: `guides/images.mdx`

- **Import local SVGs as Astro components** (inlined, stylable via
  `fill`/`stroke` props) instead of `<img src="...svg">` when you need to style
  or animate them.
  Source: `guides/images.mdx`

## Internationalization

- **Use Astro's native `i18n` config**, not a hand-rolled routing scheme, and
  use lower-case hyphenated locale codes.

  ```js
  export default defineConfig({
  	i18n: {
  		locales: ['en', 'fr'],
  		defaultLocale: 'en',
  		routing: { prefixDefaultLocale: false },
  	},
  });
  ```

  `prefixDefaultLocale: false` (the default) gives the default locale the
  unprefixed root (`/about/`) with other locales prefixed (`/fr/about/`).
  `redirectToDefaultLocale` is only meaningful when `prefixDefaultLocale: true`;
  setting both inconsistently is a config error.
  Source: `guides/internationalization.mdx`, `reference/configuration-reference.mdx`

- **Match `src/pages/<locale>/` folder names exactly to configured locales** —
  the i18n middleware validates routes against config, so a mismatched folder
  name silently fails to produce the expected localized route.
  Source: `guides/internationalization.mdx`

- **Build internal links with `astro:i18n` helpers**
  (`getRelativeLocaleUrl()`, etc.), not hand-concatenated paths — they honor
  `base`, trailing-slash, and routing config automatically.

  ```astro
  ---
  import { getRelativeLocaleUrl } from 'astro:i18n';
  ---

  <a href={getRelativeLocaleUrl('en', 'about')}>English</a>
  ```

  Source: `reference/modules/astro-i18n.mdx`

- **Configure `fallback` + `fallbackType` deliberately** for pages not yet
  translated, rather than leaving them to 404 by default.

  ```js
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    fallback: { fr: 'en' },
    routing: { fallbackType: 'redirect' }, // or 'rewrite' to keep the visited URL
  }
  ```

  Source: `reference/configuration-reference.mdx`, `guides/internationalization.mdx`

- **Separate UI-string dictionaries from content collections.** Short, reusable
  interface labels (nav, buttons) belong in a typed `src/i18n/ui.ts` dictionary
  with a `useTranslations(lang)` helper; actual page/article content belongs in
  collections, organized by locale subfolder. Mixing the two forces every nav
  label edit through a content schema.

  ```ts
  export const ui = {
  	en: { 'nav.home': 'Home', 'nav.about': 'About' },
  	fr: { 'nav.home': 'Accueil', 'nav.about': 'À propos' },
  } as const;
  ```

  Source: `recipes/i18n.mdx`

- **`Astro.preferredLocale`/`preferredLocaleList` require on-demand rendering**
  — not usable for locale detection in a fully static build. Use explicit
  language links and `Astro.currentLocale` (route-derived) instead.
  Source: `reference/api-reference.mdx`

- **Set `<html lang={...}>` per page from the active route**, not hardcoded.
  Source: `guides/internationalization.mdx`, `basics/layouts.mdx`

## Islands and client-side interactivity

- **Astro components and framework components render to static HTML with zero
  client JS by default.** This is the core performance model, not an opt-out —
  add a `client:*` directive only when a component genuinely needs
  interactivity in the browser.
  Source: `concepts/islands.mdx`, `guides/framework-components.mdx`

- **Pick the hydration directive by priority, not habit:**
  - `client:load` — immediately visible, immediately interactive UI only (e.g. a
    mobile nav toggle).
  - `client:idle` — lower priority; hydrates once the browser is idle (accepts
    `{ timeout }`).
  - `client:visible` — below-the-fold, potentially-expensive widgets; hydrates
    only once scrolled into view (accepts `{ rootMargin }`) — if never scrolled
    to, its JS never loads.
  - `client:media={query}` — only when interactivity itself depends on a media
    query; if CSS already controls visibility, `client:visible` is simpler.
  - `client:only={framework}` — skips server rendering entirely; use only when
    server rendering the component is impossible, since it creates a
    blank/loading gap and requires naming the framework explicitly.
    Source: `guides/framework-components.mdx`, `reference/directives-reference.mdx`

- **Props passed to a hydrated component must be serializable** (plain
  objects, primitives, `Array`, `Map`, `Set`, `Date`, `RegExp`, `URL`, typed
  arrays). Functions cannot cross the server-to-client boundary.
  Source: `guides/framework-components.mdx`

- **A framework component file must be 100% that framework** — Astro
  components can't be imported inside `.jsx`/`.svelte` files. To combine them,
  pass Astro-rendered content as `children`/named `<slot>` from the `.astro`
  side.
  Source: `guides/framework-components.mdx`

- **Prefer a plain `<script>` tag over a framework island for small
  interactions** (menu toggles, copy-to-clipboard) — Astro bundles, dedupes, and
  type-checks these without needing a UI framework at all. Use `is:inline` only
  when deliberately opting out of processing (e.g. a third-party analytics
  snippet that must run unbundled).
  Source: `guides/client-side-scripts.mdx`, `reference/directives-reference.mdx`

## Routing, endpoints, and middleware

- **Static routes come free from `src/pages/` file layout.** For dynamic routes
  (`/blog/[slug]`, `/dogs/[dog]`), export `getStaticPaths()`
  returning `{ params, props }` per page — mandatory in static output since
  every route must be known at build time. Use a rest parameter (`[...id]`) when
  a segment needs to match paths of varying depth (e.g. locale-prefixed
  collection IDs).
  Source: `guides/routing.mdx`

- **Prefix files/directories with `_` to exclude them from routing** (shared
  page-local components, drafts) instead of moving them out of `src/pages/`.
  Source: `guides/routing.mdx`

- **Use `paginate()` inside `getStaticPaths()` for long lists** (years of
  lecture archives) instead of hand-building page-number logic; return one
  `paginate()` call per group for grouped pagination (e.g. per category).
  Source: `guides/routing.mdx`

- **Name endpoint files with the target extension** (`rss.xml.js` → `/rss.xml`)
  and type handlers with `APIRoute`. In static output, every custom endpoint
  runs at build time to produce a static file — no request body/header access
  beyond `request.url`, and no non-`GET` methods without opting into on-demand
  rendering for that route.

  ```ts
  import type { APIRoute } from 'astro';
  export const GET: APIRoute = () => new Response(/* ... */);
  ```

  Source: `guides/endpoints.mdx`

- **Use `src/middleware.ts` + `defineMiddleware()` for cross-cutting
  request-scoped data (`context.locals`)**, not per-page logic. Middleware runs
  at build time for prerendered pages too, so it's usable in a static site (e.g.
  to inject shared locale data). Use `sequence()` to make ordering explicit when
  composing multiple middleware functions. Type `Astro.locals` by extending
  `App.Locals` in `src/env.d.ts`.
  Source: `guides/middleware.mdx`, `reference/modules/astro-middleware.mdx`

## Styling and Tailwind

- **Scoped `<style>` blocks are the default — use them for most component
  CSS**, and feel free to write low-specificity selectors (`h1 {}`) since Astro
  scopes them automatically. Reach for `<style is:global>` or `:global()` only
  when there's a genuine reason (styling Markdown/collection-rendered HTML whose
  structure Astro doesn't own).
  Source: `guides/styling.mdx`

- **CSS cascade order (low → high): `<link>` tags → imported stylesheets →
  scoped `<style>` tags.** Import your global stylesheet from the layout
  _before_ other imports so page-level styles can override it.
  Source: `guides/styling.mdx`

- **To style a child Astro component from outside, pass `class` explicitly and
  spread `...rest`** — `class` doesn't automatically flow through to child
  components.

  ```astro
  ---
  const { class: className, ...rest } = Astro.props;
  ---

  <div class={className} {...rest}><slot /></div>
  ```

  Source: `guides/styling.mdx`

- **Use `class:list` for conditional classes** instead of string concatenation.
  Source: `guides/styling.mdx`, `reference/directives-reference.mdx`

- **For Tailwind 4, use `astro add tailwind`** (the Vite plugin path) and
  `@import "tailwindcss";` in one global CSS file — `@astrojs/tailwind` is
  legacy, Tailwind-3-only. Use the Tailwind Typography plugin when styling
  rendered Markdown, since its generated elements can't be annotated with
  utility classes individually.
  Source: `guides/styling.mdx`

## SEO, sitemap, and RSS

- **Set `site` in `astro.config.mjs`** — it's what enables canonical URLs,
  sitemap generation, and RSS absolute links. Build canonical URLs from
  `Astro.url.pathname` + `Astro.site`, not a hardcoded domain string.

  ```astro
  ---
  const canonicalURL = new URL(Astro.url.pathname, Astro.site);
  ---

  <link rel="canonical" href={canonicalURL} />
  ```

  Source: `guides/configuring-astro.mdx`, `reference/api-reference.mdx`,
  `reference/configuration-reference.mdx`

- **Astro has no built-in SEO config option by design** — author
  `<title>`/`<meta>`/Open Graph tags as plain HTML in a shared `<Head />`
  component imported into the base layout, using absolute URLs for `og:image`.
  Source: `guides/configuring-astro.mdx`

- **Add `@astrojs/sitemap`** (`pnpm astro add sitemap`) once `site` is set —
  it covers static routes generated by `getStaticPaths()` and supports an
  `i18n` option to emit `hreflang` alternates for multilingual sites. Link it
  from `<head>` and/or `robots.txt`.
  Source: `guides/integrations-guide/sitemap.mdx`

- **Use `@astrojs/rss` fed from `getCollection()`** for a feed, with
  autodiscovery via a `<link rel="alternate" type="application/rss+xml">` tag.
  Sanitize any full-content HTML bodies before including them (they may contain
  scripts, unsupported relative links, etc.).
  Source: `recipes/rss.mdx`

## Performance and rendering mode

- **Start with the default `output: 'static'`; only opt a route into
  on-demand rendering (`export const prerender = false`) when there's an actual
  reason to** (auth-gated content, truly per-request data) — doing so requires
  installing an adapter. Astro 5 folded the old `hybrid` mode into `static`, so
  it no longer exists as a separate setting.
  Source: `reference/configuration-reference.mdx`, `guides/on-demand-rendering.mdx`,
  `guides/upgrade-to/v5.mdx`

- **Enable `prefetch: true` site-wide, opt in per link with
  `data-astro-prefetch`** rather than hand-rolling hover-fetch logic. Four
  strategies (`hover` default, `tap`, `viewport`, `load`) trade eagerness for
  bandwidth; Astro already falls back on data-saver/slow connections
  automatically, so don't hand-implement that check.
  Source: `guides/prefetch.mdx`

- **Prefer native browser view-transitions over `<ClientRouter />` unless you
  need its extra features** (state persistence via `transition:persist`,
  animation control) — the docs themselves note native support is making the
  client router increasingly unnecessary. If using it, place it in a shared
  `<head>`, keep a unique `<title>` per page (used for route announcements to
  assistive tech), and re-initialize page scripts on the `astro:page-load`
  event since scripts only run once under client-side navigation.
  Source: `guides/view-transitions.mdx`

## TypeScript

- **Extend one of Astro's built-in tsconfig templates** (`base`, `strict`,
  `strictest`) rather than writing config from scratch; `strict`/`strictest` are
  recommended when actually writing TypeScript and required for full content
  collection type-checking.

  ```json
  { "extends": "astro/tsconfigs/strict" }
  ```

  Source: `guides/typescript.mdx`, `guides/content-collections.mdx`

- **Declare a `Props` interface in component frontmatter** for
  autocompletion/type-checking at every use site.
  Source: `guides/typescript.mdx`

- **Run `astro check` in CI/before builds** — `astro build` alone only
  transpiles (esbuild) and does not type-check.

  ```json
  { "scripts": { "build": "astro check && astro build" } }
  ```

  Source: `guides/typescript.mdx`

- **Use `GetStaticPaths`/`InferGetStaticPropsType` to type `getStaticPaths()`
  results**, and `APIRoute`/`CollectionEntry<'name'>` elsewhere, instead of
  manually retyping what Astro's own APIs already return.
  Source: `guides/typescript.mdx`, `guides/endpoints.mdx`, `guides/content-collections.mdx`

## Environment variables and configuration

- **Prefix any env var that must reach the browser with `PUBLIC_`** —
  everything else is server-only by default, enforced by Vite/Astro rather than
  a convention you can skip.
  Source: `guides/environment-variables.mdx`

- **Prefer the typed `astro:env` schema over raw `import.meta.env`** for
  variables the app depends on structurally — it validates type, optionality,
  and client/server + public/secret access at build time. A client-side secret
  is disallowed outright: there's no safe way to ship a secret to the browser.

  ```js
  env: {
    schema: {
      PUBLIC_ANALYTICS_ID: envField.string({ context: 'client', access: 'public', optional: true }),
      API_TOKEN: envField.string({ context: 'server', access: 'secret' }),
    },
  }
  ```

  Source: `guides/environment-variables.mdx`, `reference/configuration-reference.mdx`

- **`.env` files are never loaded inside `astro.config.mjs`** — use
  `process.env` or Vite's `loadEnv()` at config time. pnpm users must add `vite`
  as an explicit devDependency to import `loadEnv`, since pnpm won't resolve a
  package that isn't directly declared.
  Source: `guides/environment-variables.mdx`

## Markdown/MDX authoring

- **Prefer content collections over ad hoc `import`/`import.meta.glob()`** for
  any set of same-shaped content — collections give schema validation, types,
  and purpose-built query APIs. Reserve standalone Markdown pages
  (`src/pages/*.md`) for one-off, simple content.
  Source: `guides/markdown-content.mdx`

- **Reach for `@astrojs/mdx` only when a piece of content needs JSX
  expressions or embedded framework components** — plain `.md` covers
  frontmatter + standard Markdown for most content (rosters, project
  descriptions, session notes). `<Image>`/`<Picture>` don't work inside `.md`
  files at all — only `![]()` — so content needing fine image control belongs in
  `.mdx`.
  Source: `guides/markdown-content.mdx`, `guides/images.mdx`,
  `guides/integrations-guide/mdx.mdx`

- **If a standalone Markdown page uses the `layout` frontmatter property,
  that layout must include its own `<meta charset>`** — Astro stops injecting
  it automatically once a layout is specified, which matters most for non-ASCII
  content.
  Source: `guides/markdown-content.mdx`, `basics/layouts.mdx`

## Testing and deployment

- **Use `getViteConfig()` from `astro/config` with Vitest** so tests pick up
  the project's real aliases/integrations instead of a parallel Vite config.

  ```ts
  import { getViteConfig } from 'astro/config';
  export default getViteConfig({ test: {} });
  ```

  Source: `guides/testing.mdx`

- **Use the (experimental) Container API to unit-test individual `.astro`
  components** in isolation, including slot content, rather than only testing
  through full-page rendering.
  Source: `guides/testing.mdx`

- **Use Playwright (or Cypress) against the built/previewed site for e2e
  tests, not the dev server** — the docs explicitly recommend testing
  production-built output since it more closely resembles what's deployed.
  Source: `guides/testing.mdx`

- **Build command `astro build` (or `pnpm run build`), publish directory
  `dist/`** — standard across static hosts (Netlify, Vercel static mode, GitHub
  Pages, Cloudflare Pages); no adapter needed for a pure static build. Build
  locally first to catch errors before relying on a host's remote build.
  Source: `guides/deploy/index.mdx`
