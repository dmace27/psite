# Website structure and authoring

## Routes

| URL | Purpose |
| --- | --- |
| `/` | Home/about: introduction, about text, current focus |
| `/projects` | Dedicated projects list |
| `/writing` | Writing index, automatically built from articles |
| `/hobbies` | Personal interests with reusable hobby sections |
| `/writing/first-article` | First placeholder article |
| `/writing/second-article` | Second placeholder article |
| `/ui` | Retained component reference, separate from the main navigation |

All three main pages share navigation, theme preference and footer. Article pages keep writing highlighted as their current section and have a back-to-index link. The same reading layout handles short notes and longer essays.

## Home and projects

Edit `src/content/site.ts` for the name, introduction, social links, home sections, and projects. Existing placeholder values are intentionally labelled, not claims about the owner. `SiteLayout.astro` composes the shared header, main region and footer.

## Writing

Each Markdown file in `src/content/writing/` becomes an entry in the index and a standalone article. The filename determines the route: `an-idea.md` becomes `/writing/an-idea`.

```md
---
title: A real article title
description: A short introduction for the index and article page.
publishedAt: "2026-10-11"
---

Article text starts here.

## A section

More text, with **emphasis**, lists, links, or code when useful.
```

The date is optional, so unfinished content doesn't need an invented publication date. Dates display in UTC to preserve their calendar day across hosts. Dated articles sort newest first; undated articles use optional numeric `order` and then their filename. `draft: true` excludes a file from both the index and generated routes. `placeholder: true` adds a visible placeholder label. Remove that flag when replacing the samples with actual writing.

The collection definition is `src/content.config.ts`; the shared metadata schema is `src/content/writing-schema.ts`. `src/lib/writing.ts` loads the same visible, sorted collection for the index and routes. `src/pages/writing/[slug].astro` renders Markdown and supplies navigation between articles.

The two current article bodies demonstrate layout only. Their explicit sample links should be updated if the examples are renamed or removed. Production indexing remains disabled until the real site is ready.

## Hobbies / life outside of work

`/hobbies` is a separate page in the main navigation. Edit `src/content/hobbies.ts` to replace, add, remove, or reorder the hobby sections. The initial entries are templates, not the owner's actual interests.

Each section uses `HobbySection.astro`. Required fields are `id`, `title`, and `paragraphs`; optional fields are `photos`, `links`, `updates`, and `placeholder`. Plain text is a one-span paragraph; richer text can use the existing emphasis, highlights, and inline links.

```ts
{
  id: 'your-hobby',
  title: 'Your hobby',
  paragraphs: [[{ text: 'What you enjoy about it, in your own words.' }]],
  links: [{ label: 'Your profile or collection', href: 'https://example.com/your-profile' }],
  updates: [{ title: 'Recently', detail: 'A recent activity or milestone.' }],
  // Optional personal media. Files live under public/images/.
  photos: [{
    src: '/images/your-photo.webp',
    alt: 'A useful description of the actual image.',
    caption: 'A short caption.',
    width: 1200,
    height: 800,
  }],
}
```

Omit optional fields when they aren't useful. A hobby can be text-only. Multiple photos form a small responsive gallery. Updates accept an optional display `date` and destination `href`; these are authored notes, not automatic activity feeds. Links can point to a workout profile, music covers, reading list, collection, or another relevant destination when supplied.

IDs must be unique lowercase names and cannot be `main`, since they're page anchors. The page index is generated from the same hobby list. Remove `placeholder: true` and replace the neutral placeholder image when adding actual content. Removing all entries shows a simple empty state.

The content schema is `src/content/hobbies-schema.ts`; `HobbyMedia` and `HobbyUpdates` can also be used independently if useful. No third-party embeds, integrations, autoplay, or account connections are required.

## Media and quotes

`/media` groups things you enjoy: music, shows, movies, books, pieces of writing, and other media. Edit `src/content/media.ts`. Categories are freely named and render in array order. Each category has a unique `id`, a `title`, and an `items` array. Items have a required `title` and optional `creator`, `note`, `href`, and `placeholder`.

```ts
{ id: 'books', title: 'books', items: [
  { title: 'A book title', creator: 'Its author', note: 'What you enjoyed or found interesting.', href: 'https://example.com/book' },
] }
```

`/quotes` is a collection of passages with optional attribution and commentary. Edit `src/content/quotes.ts`. Each quote has a unique `id` and required `text`; optional fields are `attribution`, `source`, `href`, `note`, and `placeholder`.

```ts
{
  id: 'a-quote',
  text: 'The exact quotation you want to keep.',
  attribution: 'Its author, when known',
  source: 'The book, essay, interview, or other work',
  href: 'https://example.com/source',
  note: 'Why it interests you.',
}
```

Both pages use clearly labelled placeholders initially. Replace or remove those specimens when adding your own choices. Omit unknown attribution instead of guessing. Lists render in authored order. Empty collections show a quiet empty state. `MediaSection` and `QuoteCard` provide the reusable presentation; `collections-schema.ts` validates content and links. Main navigation and the home exploration links include both pages.
