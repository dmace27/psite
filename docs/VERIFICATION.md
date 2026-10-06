# Foundation verification — 6 October 2026

- Six content-contract tests pass: empty draft, rich-text whitespace, anchor relationships, link protocols, photo requirements, section variant requirements.
- Astro/TypeScript reports zero errors, warnings, or hints.
- Static production build succeeds.
- `git diff --check` passes.
- Browser review at the default 1280px desktop viewport and a 390px phone viewport.
- No horizontal document overflow at either checked width.
- Theme toggle changes its accessible label and preserves a dark choice across reload.
- Next-photo control updates the visible image and live count.
- ArrowLeft on the photo region wraps from the first to the third frame.
- Native entry disclosure reveals its supplemental details.
- Gallery heading structure has one h1; the intro specimen uses h3.

These checks cover the foundation and its demo content. The eventual website still needs verification using the owner's real copy, media, routes, and links. No deployment occurred.
