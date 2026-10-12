# Personal site foundation

An Astro UI framework using locally hosted JetBrains Mono, based on Matthew Hamilton and David Chen. The home, projects, writing, and individual article layouts are ready; real content is pending.

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
- [Home and project placeholders](src/content/site.ts)
- [Isolated demo content](src/content/demo.ts)
- [Shared CSS tokens](src/styles/global.css)

`src/pages/index.astro` is the home/about page; `src/pages/ui.astro` remains the component review gallery. Once actual content is supplied, compose the final pages with `Intro`, `Navigation`, and `SectionRenderer`; section order comes from the supplied data. `site.ts` supplies the home and project content. Preview pages are marked noindex.

The current preview is text-led and uses placeholder copy. It includes no copied reference imagery, real personal claims, analytics, or external sending services.

## Main website routes

Home/about is `/`, projects is `/projects`, and writing is `/writing`. Each Markdown file in `src/content/writing/` creates a contained article page at `/writing/<filename>`. Main content currently uses labelled placeholders. See [content authoring](docs/CONTENT.md). `/ui` remains available for component review.

Hobbies live on `/hobbies`. Add or reorder entries in `src/content/hobbies.ts`; each reusable section supports descriptions, photos, links, and recent activity notes. See the hobbies section of [the authoring guide](docs/CONTENT.md).
