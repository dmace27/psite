import { siteSchema, photoSchema } from './schema';

/** Explicit design specimens, isolated from the owner's future content. */
export const demoPhotos = photoSchema.array().parse([
  { src: '/images/study-01.svg', alt: 'Illustrated landscape study with a terracotta sun and rolling green hills.', caption: '01 — a moment, collected', width: 800, height: 600 },
  { src: '/images/study-02.svg', alt: 'Illustrated architectural study with an ochre arch and a green plant.', caption: '02 — a different perspective', width: 800, height: 600 },
  { src: '/images/study-03.svg', alt: 'Illustrated blue night sky over layered hills.', caption: '03 — room for the unexpected', width: 800, height: 600 },
]);
export const demoSite = siteSchema.parse({
  metadata: { title: 'Component specimens', description: 'Design specimens for a future personal website.' },
  identity: {
    name: 'Your name',
    introduction: [[{ text: 'A short introduction, written like you speak. A little about ' }, { text: 'what you do', tone: 'sage' }, { text: ', and what you care about.' }]],
    links: [{ label: 'An inline link', href: '#next' }, { label: 'Another connection', href: '#references' }],
  },
  navigation: [],
  sections: [
    { id: 'sample-list', type: 'list', title: 'A few things, lately.', items: [
      [{ text: 'A current focus, with ' }, { text: 'a little context', tone: 'sand' }, { text: '.' }],
      [{ text: 'Something you’re learning, building, or thinking about.' }],
    ] },
    { id: 'sample-entries', type: 'entries', title: 'Work, in a few lines.', items: [
      { id: 'entry-one', title: 'Project or organisation', subtitle: 'Your role · an optional detail', date: 'Year — present', summary: 'One useful sentence about the problem, your contribution, and why it matters.', details: ['A little more context appears on demand.', 'Use specifics from your actual experience when the content is ready.'], tags: ['Optional tag', 'Another tag'], links: [{ label: 'Project link', href: '#next' }] },
      { id: 'entry-two', title: 'Another thing you made', date: 'Year', summary: 'Rows work for projects, experience, research, or community work. Only include the fields that help.' },
    ] },
    { id: 'sample-notes', type: 'notes', title: 'Notes & small discoveries.', items: [
      { title: 'A title for something you’ve written', date: 'Date', href: '#next' },
      { title: 'A thought worth keeping', date: 'Date', href: '#next' },
    ] },
  ],
});
export const references = [
  { name: 'Sofia Bodnar', url: 'https://sofiabodnar.com/', note: 'Quiet hierarchy, compact chronology; assumed correction.' },
  { name: 'Eric Chen', url: 'https://ericzxchen.com/', note: 'Direct prose, inline highlights, simple navigation.' },
  { name: 'David Chen', url: 'https://www.davidzkchen.win/', note: 'Monospace details, scenic media, personal interests.' },
  { name: 'Nathan Yan', url: 'https://nathanyan.vercel.app/', note: 'Short, candid writing and an optional demo moment.' },
  { name: 'Bill Xu', url: 'https://billxby.com/', note: 'Dense rows, aligned dates, progressive detail.' },
  { name: 'Kuan Yi Wang', url: 'https://kuant.space/', note: 'Serif typography, expressive media, camera-roll warmth.' },
  { name: 'Vedant Sheel', url: 'https://vedantsheel.com/', note: 'Paper texture cues, photo stacks, soft highlights.' },
  { name: 'Nick Kim', url: 'https://nickkim.dev/', note: 'Warm neutrals, serif identity, work and life together.' },
  { name: 'Lucas Jin', url: 'https://www.lucasjin.ca/', note: 'Strong negative space and one playful visual gesture.' },
];
