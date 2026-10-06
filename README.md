# Personal site foundation

An Astro component library and design review page based on the references in `boom.md`. The real website structure and content are intentionally pending.

## Local commands

Requires Node 22.12+ (developed here with Node 26) and npm.

```sh
npm install
npm run dev
npm run verify
npm run preview
```

Development runs at `http://127.0.0.1:4321`. `verify` runs content-contract tests, Astro/TypeScript checks, and a static build into `dist/`. `preview` serves that built output.

## Where to start

- [Design plan and reference review](docs/PLAN.md)
- [UI schema, tokens, and component API](docs/UI-SCHEMA.md)
- [Executable content schema](src/content/schema.ts)
- [Empty owner content draft](src/content/site.ts)
- [Isolated demo content](src/content/demo.ts)
- [Shared CSS tokens](src/styles/global.css)

`src/pages/index.astro` is the component review gallery. Once actual content is supplied, compose the final pages with `Intro`, `Navigation`, and `SectionRenderer`; section order comes from the supplied data. `site.ts` is intentionally not rendered yet. Preview pages are marked noindex.

The gallery uses original SVG illustrations as clearly labelled media placeholders. It includes no copied reference imagery, real personal claims, analytics, or external sending services. The first inspiration URL appears misspelled; the plan records the likely Sofia Bodnar correction.
