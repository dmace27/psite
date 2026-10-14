# Personal site framework — restart, 11 October 2026

## Current brief

Restart the visual foundation around Matthew Hamilton and David Chen, particularly their fonts. This replaces the previous paper/serif direction. The owner's real website structure and content are still pending. Keep the useful Astro and content-validation infrastructure; build a new visual system and reviewable UI framework locally.

## Verified references

- [Matthew Hamilton](https://www.matthewhamilton.dev/): browser inspection of the home and projects pages. Computed headings, body text and links all use JetBrains Mono. The home is compact, with small navigation, short text blocks, bracketed highlights and restrained decoration. Projects can use two columns.
- [David Chen](https://www.davidzkchen.win/): browser inspection of the home page. Computed headings, paragraphs and links use JetBrains Mono Variable. The name is 64px/600 at the inspected desktop width; section headings are 16px/600, introduction text is 18px/500, and small links are 14px/400. The layout gives sections room and uses simple project descriptions and prompt-like experience markers.

The current Matthew URL was identified from a focused search; it is the Waterloo engineering personal site, not one of the unrelated people with the same name. No biography, source code, images, ASCII artwork or logos from either reference were copied.

## Visual direction

One locally hosted font: **JetBrains Mono Variable**, installed through `@fontsource-variable/jetbrains-mono`. Use 400 for body text, 500 for small headings, 600 for the name. Body text is 14px with 1.8 line height; introduction copy is 15px; the name scales from 32 to 52px. The 64rem outer canvas has 32px gutters, reducing to 20px on phones.

Neutral off-white and charcoal replace the warm brown/green palette. A muted blue marks links, focus rings and list prompts. Quiet bracketed inline highlights supply emphasis. Borders belong to small structural separators rather than decorative panels. Text is immediately visible, without intro animation or decorative photo treatments.

## Current page structure

The owner requested three pages: home/about (`/`), projects (`/projects`), and writing (`/writing`). The writing index links to individual article pages at `/writing/[slug]`, following the index-to-article pattern reviewed on Nathan Yan's essays page and Eric Chen's notes page. All main pages share navigation and active section styling. Articles have a narrow reading column and return links.

`src/content/site.ts` now contains explicitly labelled layout placeholders for home and projects. Markdown files in `src/content/writing/` supply standalone writing pages and index entries automatically. `/ui` remains as a separate component reference outside the main navigation. See `docs/CONTENT.md` for authoring instructions.

## Reusable framework

The shared Shell, Navigation, Intro, Section, RichText, TextLink, Badge, Button, EntryList, SectionRenderer and StatusLine follow the new design. New PromptList, ProjectList, Disclosure and EmptyState components cover the main reference patterns. Previously created optional components inherit the new typography and can still be composed where useful; the main page has no photo stack.

Themes persist locally. Lists use semantic HTML with decorative prompt markers. Disclosures use native details/summary and work without JavaScript. Links have visible focus states. The two-column project variant collapses on phones. Preview pages remain noindex.

## Later site creation

1. Receive real name, introduction, links, section order, page structure and content.
2. Map content to the existing schema, extending it only where needed.
3. Replace placeholder composition with the actual site and add any content-specific assets/routes.
4. Verify real text, links, dates and media at desktop/phone widths and in both themes.
5. Configure the real domain, canonical URLs, social metadata and indexing before requested publication.

No hosting setup or deployment is part of this framework restart.

## Hobbies page

The owner requested a separate page for interests outside computer science, with reusable content sections similar to [Nick Kim's hobbies](https://nickkim.dev/#hobbies). Nick's gym/activity and guitar/media blocks informed optional descriptions, photos, personal profile links and recent updates. The new `/hobbies` page preserves the established JetBrains Mono design and uses generic labelled templates, not Nick's interests or content. `HobbySection`, `HobbyMedia`, and `HobbyUpdates` separate the reusable presentation from `src/content/hobbies.ts`. Actual hobby content remains pending.
