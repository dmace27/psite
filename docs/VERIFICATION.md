# Framework verification — 11 October 2026

The third study replaces the earlier serif direction with the JetBrains Mono framework.

## Automated checks

- Six content-contract tests pass: empty draft, rich-text whitespace, anchor relationships, link protocols, photo requirements and section variant requirements.
- Astro/TypeScript reports zero errors, warnings or hints across 29 files.
- Static production build succeeds for `/` and `/ui`.
- `git diff --check` passes.

## Browser checks

- Inspected both reference sites and verified their computed font families as JetBrains Mono.
- Local preview uses the JetBrains Mono Variable stack, and `document.fonts.check` confirms the font is loaded.
- Reviewed the personal-page sample and UI library at desktop widths and explicit 390px phone width.
- At phone width both routes have 390px document width, with no horizontal overflow.
- The two-column project specimen becomes a single 350px column at phone width.
- A native disclosure opens using Enter on its summary.
- Light/dark toggle updates its accessible label; dark preference survives navigation between `/ui` and `/`.
- Demo project and note links point to the root foundation anchor from either route.
- The local development server was stopped and restarted after the dependency change.

The real website content, final routes and external links remain pending. No deployment occurred.
