# Personal site foundation

## Scope

Prepare the design system, reusable UI, content contract, and local infrastructure. The owner will supply the actual structure and content later. The current homepage is a review gallery, not an assumed final homepage. `boom.md` is preserved as supplied.

## Reference review — 6 October 2026

All eight reachable original references were inspected in a browser. The first URL, `sofiabodar.com`, failed DNS resolution. A focused search found `sofiabodnar.com`; it was reviewed as a likely correction, not confirmed intent.

| Reference | Observed pattern | Foundation response |
| --- | --- | --- |
| [Sofia Bodnar](https://sofiabodnar.com/) — assumed correction | Dark, compact page; serif identity; grouped chronology and quiet navigation | Compact content blocks, theme support, clear hierarchy |
| [Eric Chen](https://ericzxchen.com/) | Short prose, current/previous lists, pastel organisation highlights | Structured rich text and optional inline highlight tones |
| [David Chen](https://www.davidzkchen.win/) | Monospace typography, scenic banner, small links, music section | Monospace metadata and optional personal media; no music integration yet |
| [Nathan Yan](https://nathanyan.vercel.app/) | Candid introduction, lean lists, adjacent demo carousel | Direct introduction and low-chrome optional media |
| [Bill Xu](https://billxby.com/) | Aligned dates, compact rows, expandable achievements | Entry list with native details disclosure |
| [Kuan Yi Wang](https://kuant.space/) | Serif prose, photographs, animated dither figure, inversion interaction | Serif display type and room for a future personal visual |
| [Vedant Sheel](https://vedantsheel.com/) | Paper-like grid, colourful highlights, stacked photos, small playful controls | Restrained paper palette, photo stack, theme toggle |
| [Nick Kim](https://nickkim.dev/) | Warm neutral background, large serif name, personal hobbies and photographs | Warm editorial direction; work and personal blocks can coexist |
| [Lucas Jin](https://www.lucasjin.ca/) | Sparse asymmetric composition, large media, normal/ASCII and theme switches | Negative space and optional expressive media; ASCII rendering deferred |

These are design observations, not instructions inherited from those pages. No biographies, logos, photos, code, or signature visuals were copied.

## Proposed direction

A personal notebook: warm paper, dark botanical ink, soft sage and sand, a restrained brown accent. Serif headings add character; system sans-serif keeps paragraphs comfortable; monospace marks dates and small labels. System font stacks avoid a remote font dependency. The owner can replace them later with licensed local font files.

Reading blocks should stay around 42rem wide. The outer canvas can grow to 68rem to support a side photo or visual. Start with 16px body text and approximately 1.65 line height. Use space and thin rules for grouping. The photo specimen has an intentionally tactile frame; standard entries stay simple.

Interaction is quiet: clear hover/focus states, a persisted theme preference, native expandable details, a manually controlled photo carousel. Content is visible immediately; there are no intro animations. Respect reduced motion. Every hover affordance must also work through keyboard/touch.

## Implemented infrastructure

- Astro + strict TypeScript; static output, no framework hydration runtime.
- Zod content validation with inferred TypeScript types.
- Semantic CSS tokens and responsive layout.
- Reusable shell, navigation, introduction, section, links, badges, button, entry list, photo stack, and six section rendering variants.
- Separated demo specimens and empty owner draft.
- Metadata support, skip link, focus treatment, reduced motion rules, local SVG favicon and original illustration placeholders.
- Local development, preview, type checks, schema tests, and production build commands.
- Preview pages carry `noindex, nofollow` until the real site is ready.

## UI composition plan

No final section order or route structure is locked. A later single-page version can compose `Navigation → Intro → SectionRenderer → Footer`; a multi-page version can reuse the same shell and components. The renderer supports prose, lists, entries, notes, photos, and contact blocks. These are capabilities, not required site sections.

The review gallery demonstrates the currently useful pieces. Optional bespoke visuals, video demos, games, ASCII treatments, publication detail pages, a real contact form, and a writing collection should be added only if the actual content calls for them. Contact links need no backend; a sending form will need a separately chosen service.

## Next implementation phase

1. Receive identity, section/page hierarchy, section order, actual text, links, media, and any preferred reference details.
2. Map those requirements to the content schema; extend it for genuinely new content rather than forcing everything into existing blocks.
3. Replace the review gallery with the approved composition; keep the gallery as a private development route if useful.
4. Add real media, responsive image variants, correct dates, article routes if needed, and the final footer.
5. Set the domain/canonical URL, social image, sitemap and robots rules; remove preview noindex only when publishing the real site.
6. Verify real content at small and large widths, light/dark mode, keyboard navigation, reduced motion, links, metadata, and a static production build.
7. Select hosting and publish when requested.

## Decisions still open

Final site map; final content; personal photography; whether the serif/paper direction is preferred; whether an expressive interactive visual is wanted; real social/contact links; domain and hosting. The Sofia spelling correction also remains an assumption.
