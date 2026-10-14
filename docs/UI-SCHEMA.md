# UI framework / study 003

The current framework follows Matthew Hamilton and David Chen's JetBrains Mono typography. The previous serif framework is superseded.

## Design tokens

| Role | Light | Dark |
| --- | --- | --- |
| Paper | `#fafaf8` | `#101112` |
| Surface | `#f0f0ee` | `#1b1d20` |
| Ink | `#242528` | `#dedee0` |
| Muted | `#74757a` | `#96979c` |
| Line | `#e0e1e3` | `#2c2e32` |
| Accent/focus | `#496aaa` | `#99afe0` |

`--font-body` and `--font-heading` both point at `--mono`, whose first family is `JetBrains Mono Variable`. The font is imported locally through the installed Fontsource package, not a third-party font request. Weights: 400 body, 500 subheadings, 600 name. Sizes: 14px body; 15px introduction; 16px section titles; 32–52px name; 11px metadata. Outer width: 64rem; reading width: 52rem; desktop gutters: 32px; phone gutters: 20px. Main responsive breakpoint: 640px.

## Component contract

| Component | Inputs | Behaviour |
| --- | --- | --- |
| Shell | title, description, optional canonical; slot | Metadata, font, shared styles, theme initialization, skip link |
| Navigation | links[], optional label | Compact wordmark, native anchors, persisted light/dark toggle |
| Intro | identity, optional headingLevel | Name, short introduction, small links; default h1 |
| Section | id, title, optional eyebrow; slot | h2 with accessible section relationship |
| RichText | spans[] | Escaped text, optional emphasis/link and bracketed highlight |
| TextLink | label, href, optional arrow | Native link with decorative arrow |
| Badge | optional tone; slot | Small optional tag |
| Button | optional href and variant; slot | Navigation anchor when href exists, native button otherwise |
| PromptList | items: RichParagraph[], optional marker `>` or `-` | Semantic list with a decorative terminal-like marker |
| ProjectList | items: Entry[], optional layout `rows` or `grid` | Numbered text projects, optional dates/tags/links; grid collapses on phones |
| EntryList | items: Entry[] | Work/experience entries; optional dates, tags, links, native extra details |
| Disclosure | label, optional open; slot | Native details/summary, usable without JavaScript |
| EmptyState | message, optional hint | Quiet text for an unfinished or empty section |
| StatusLine | label, optional detail | Static current-focus line; no simulated live service |
| SectionRenderer | sections[] | Renders supplied content in supplied order |

Optional retained composition pieces: SectionIndex, FeatureLink, Timeline, MarginNote, ContactPanel and PhotoStack. They inherit the new system; photos are not in the main preview.

## Content contract

The executable definitions live in `src/content/schema.ts`. The draft is `src/content/site.ts`; specimens are isolated in `src/content/demo.ts`.

```ts
SiteContent = {
  metadata: { title, description, canonical? },
  identity: { name, introduction: RichParagraph[], links: Link[] },
  navigation: Link[],
  sections: ContentSection[]
}
Link = { label, href }
RichParagraph = Array<{ text, href?, tone?, emphasis? }>
Entry = { id, title, summary, subtitle?, date?, details?, tags?, links? }
Photo = { src, alt, caption, width, height }
```

All sections have `{ id, title, eyebrow? }` and one variant:

| type | Data |
| --- | --- |
| prose | paragraphs: RichParagraph[] |
| list | items: RichParagraph[] |
| entries | items: Entry[] |
| notes | items: { title, href, date? }[] |
| photos | photos: Photo[] |
| contact | paragraphs: RichParagraph[], links: Link[] |

Section IDs are unique lowercase anchor names and cannot be `main`. Navigation anchors match real sections. Links accept HTTP(S), mailto, root-relative routes or named anchors. Rich text preserves spaces between spans and escapes values. Photo content requires local media paths, positive dimensions and useful alt/caption text. The empty owner draft remains valid.

The new components reuse existing data types without prescribing required sections. ProjectList is available for manual page composition; SectionRenderer uses EntryList for generic entries. Actual project routes and links will be provided later.

## Preview routes and interactions

`/` demonstrates a possible personal page; `/ui` demonstrates the component API. Samples point to working local routes or anchors and are labelled as placeholders. Theme preference persists when storage is available; controls hide when JavaScript is unavailable. Details and links remain functional without JavaScript. Reduced-motion preference disables smooth scrolling. The final real-content route map must be verified before publication.

## Three-page site structure

The main route map is now home/about `/`, projects `/projects`, writing `/writing`, and contained article pages `/writing/[slug]`. `SiteLayout` shares the shell/navigation/footer. `PageHeading` supplies the projects and writing titles. `ArticleList` renders entries from the Markdown collection. Writing's metadata schema requires title and description; publishedAt, order, draft, and placeholder control optional publication metadata and visibility. The article template renders Markdown in a 52rem column. Navigation marks exact page matches with `aria-current="page"` and marks writing as the current section on article routes.

ProjectList accepts optional headingLevel so projects directly below a page h1 use h2, while gallery specimens inside sections use h3. See `docs/CONTENT.md` for authoring and filenames.

## Hobbies components

The separate `/hobbies` page extends the primary navigation. Its content comes from `src/content/hobbies.ts`, validated by `hobbies-schema.ts`.

| Component | Input | Behaviour |
| --- | --- | --- |
| HobbySection | hobby: Hobby | Accessible h2 section, rich paragraphs, optional links/media/updates |
| HobbyMedia | photos: Photo[] | One full-width image or a responsive multi-photo gallery, alt text and captions |
| HobbyUpdates | updates: Hobby['updates'] | Authored recent-activity notes with optional date and link |

Hobby = `{ id, title, paragraphs, photos?, links?, updates?, placeholder? }`. An update has `{ title, detail, date?, href? }`. Optional arrays default to empty. IDs are unique and cannot use the main landmark ID. Sections render in their authored order, and the page index derives from those same IDs. On phones navigation wraps into a second row and multi-photo media stacks vertically.

## Personal media and quotes

`/media` uses MediaSection components with freely named categories. Each group is `{ id, title, items }`; each item is `{ title, creator?, note?, href?, placeholder? }`. The section index derives from the same groups. `/quotes` uses semantic blockquote/figure/figcaption entries through QuoteCard: `{ id, text, attribution?, source?, href?, note?, placeholder? }`. The source work is a cite element; author attribution is separate. Lists are authored in `src/content/media.ts` and `src/content/quotes.ts`, with validation in `collections-schema.ts`.
