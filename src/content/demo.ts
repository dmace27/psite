import { siteSchema } from './schema';

/** Placeholder content for the framework preview, never the owner's biography. */
export const demoSite = siteSchema.parse({
  metadata: { title: 'Personal site / framework', description: 'A typography-led personal website framework.' },
  identity: {
    name: 'your name',
    introduction: [[{ text: 'A short introduction. What you do, what you’re working on, and what matters to you.' }]],
    links: [{ label: 'about', href: '#about' }, { label: 'projects', href: '#projects' }, { label: 'ui elements', href: '/ui' }],
  },
  navigation: [{ label: 'about', href: '#about' }, { label: 'projects', href: '#projects' }, { label: 'experience', href: '#experience' }, { label: 'notes', href: '#notes' }],
  sections: [
    { id: 'about', type: 'list', title: 'about', items: [
      [{ text: 'a sentence about ' }, { text: 'what you do', tone: 'sand' }, { text: ' and where you’re headed.' }],
      [{ text: 'currently working on ' }, { text: 'something you care about', tone: 'blue' }, { text: '.' }],
      [{ text: 'a few interests, outside of work.' }],
    ] },
    { id: 'projects', type: 'entries', title: 'selected projects', items: [
      { id: 'project-one', title: 'project-one', summary: 'A short explanation of the problem you solved and the thing you built. Clear, specific, and in your own words.', date: 'year', tags: ['tool', 'experiment'], links: [{ label: 'details', href: '/#framework' }] },
      { id: 'project-two', title: 'another-project', summary: 'Another thing you made. The description carries the story; a screenshot can be added later if it helps.', date: 'year', links: [{ label: 'details', href: '/#framework' }] },
    ] },
    { id: 'experience', type: 'entries', title: 'experience', items: [
      { id: 'role-one', title: 'organisation', subtitle: 'your role', date: 'year — present', summary: 'One sentence about your contribution, with a little context.', details: ['What you worked on, why it mattered, and what you learned.', 'More detail belongs here when there is something useful to say.'] },
    ] },
    { id: 'notes', type: 'notes', title: 'notes', items: [
      { title: 'a thought worth keeping', date: 'date', href: '/#framework' },
      { title: 'something you learned along the way', date: 'date', href: '/#framework' },
    ] },
  ],
});

// These two references define the current direction. Earlier studies are in Git.
export const references = [
  { name: 'Matthew Hamilton', url: 'https://www.matthewhamilton.dev/', note: 'JetBrains Mono, compact text blocks, bracketed highlights.' },
  { name: 'David Chen', url: 'https://www.davidzkchen.win/', note: 'JetBrains Mono, strong name heading, plain project descriptions.' },
];
