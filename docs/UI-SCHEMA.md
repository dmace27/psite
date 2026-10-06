# UI schema and content contract

The executable source of truth is [`src/content/schema.ts`](../src/content/schema.ts). [`src/content/site.ts`](../src/content/site.ts) is the owner's empty draft. [`src/content/demo.ts`](../src/content/demo.ts) contains labelled review specimens only.

## Visual tokens

| Token | Light | Dark | Role |
| --- | --- | --- | --- |
| `--paper` | `#f7f5ef` | `#1c211d` | Page background |
| `--surface` | `#eeece5` | `#262c26` | Neutral badges, hover surfaces |
| `--ink` | `#292c28` | `#eeeee3` | Primary text |
| `--muted` | `#686c62` | `#b1b6a9` | Secondary text |
| `--line` | `#d8d8cd` | `#41493f` | Decorative separators |
| `--accent` | `#856347` | `#d8b292` | Small accents |
| `--focus` | `#526849` | `#bed0a7` | Focus outlines |

Highlight roles: `neutral`, `sage`, `sand`, `rose`, `blue`. They share foreground ink and do not carry meaning through colour alone. Spacing: 4, 8, 12, 16, 24, 32, 48, 64px. Layout: 68rem outer width; 42rem reading width; 32px gutters, then 20px below 760px. The gallery rail collapses at 760px. Small-screen header and footer adapt below 400px. Controls are at least 44px high; text links remain inline.

## Component API

| Component | Props / slots | Behaviour |
| --- | --- | --- |
| `Shell` | title, description, optional canonical; content slot | HTML metadata, stylesheet, early theme initialization, skip link |
| `Navigation` | links[], optional label | Semantic nav and theme toggle; same-tab links |
| `Intro` | identity, optional headingLevel | h1 by default; gallery uses h3; introduction paragraphs and optional link group |
| `Section` | id, title, optional eyebrow; content slot | h2 and explicit accessible heading association |
| `RichText` | spans[] | Escaped text, optional link, emphasis and soft highlight |
| `TextLink` | label, href, optional arrow | Ordinary anchor; decorative arrow hidden from assistive tech |
| `Badge` | optional tone; content slot | Non-interactive tag |
| `Button` | optional href, variant; content slot | Anchor when navigating, native button otherwise; actions can be wired by caller |
| `EntryList` | items[] | h3 titles, optional dates/tags/links, native details disclosure |
| `PhotoStack` | photos[] | Manual previous/next, arrow keys, wrapping, live count; no autoplay |
| `SectionRenderer` | sections[] | Renders in supplied order; no inferred section order |

Use one Intro per final page. Title hierarchies must remain h1 → h2 → h3. Pass content through the schema before rendering. The typed low-level components assume their caller supplies validated values.

## Content structure

```ts
SiteContent = {
  metadata: { title, description, canonical? },
  identity: { name, introduction: RichParagraph[], links: Link[] },
  navigation: Link[],
  sections: ContentSection[]
}

Link = { label, href }
RichParagraph = Array<{ text, href?, tone?, emphasis? }>
Photo = { src, alt, caption, width, height }
Entry = { id, title, summary, subtitle?, date?, details?, tags?, links? }
```

Every section has `{ id, title, eyebrow? }` plus exactly one variant:

| `type` | Required data | Useful for |
| --- | --- | --- |
| `prose` | paragraphs: RichParagraph[] | About, interests, short narrative |
| `list` | items: RichParagraph[] | Current focus, highlights, small wins |
| `entries` | items: Entry[] | Projects, work, research, community |
| `notes` | items: { title, href, date? }[] | Writing index or external reading links |
| `photos` | photos: Photo[] | Camera roll or visual moments |
| `contact` | paragraphs: RichParagraph[], links: Link[] | Email/social contact links |

Sections must have unique lowercase anchor IDs, excluding reserved `main`. Navigation section anchors must match actual sections. Entry IDs are authoring keys. Dates are display strings for now; an article collection can add machine-readable date values later. Link destinations allow HTTP(S), mailto, root-relative routes, and named anchors; script/data URLs and protocol-relative links are rejected. Photo paths must be local `/images/...` assets with a supported extension, explicit positive dimensions, and nonempty alt/caption text.

Rich text spacing is explicit. Keep spaces in span text where words cross span boundaries. There is no arbitrary HTML, Markdown injection, or embedded third-party script field. Photos are content images, so alt text is required.

## Authoring example — only after content is provided

```ts
const section = {
  id: 'projects',
  type: 'entries',
  title: 'Things I’ve built',
  items: [{
    id: 'actual-project-slug',
    title: 'Actual project name',
    summary: 'An accurate sentence about the project.',
    links: [{ label: 'Source', href: 'https://github.com/your-account/your-project' }],
  }],
};
```

This is illustrative syntax, not a suggested biography or required section.

## Interaction states and fallbacks

- Theme: system preference on first visit; explicit choice persists where storage is available. Accessible toggle label updates. Without JavaScript the page remains light and the inactive toggle is hidden.
- Details: closed/open native disclosure with browser keyboard support. Supplementary details are optional; the summary remains visible.
- Photos: one active frame and live position count; wrap at either end; controls and arrow keys both work. Without JavaScript all frames are readable in sequence and controls stay hidden.
- Links/buttons: visible focus rings, hover treatment, demonstrated disabled button. No pretend submissions or dead contact forms.
- Empty draft: zero sections and links is valid. Individual authored sections require actual content, avoiding empty shells.

## Production additions later

The foundation has metadata hooks but no real domain, social share image, sitemap, analytics, deployment account, CMS, contact delivery backend, video player, or blog routes. Add only what the owner's final structure requires. Canonical and navigation destinations must be verified against the real route map before release.
