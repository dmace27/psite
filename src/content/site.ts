import { entrySchema, siteSchema } from './schema';

/** Layout placeholders only. Replace these values with the owner's actual content. */
export const siteContent = siteSchema.parse({
  metadata: { title: 'your name', description: 'Personal website — content to come.' },
  identity: {
    name: 'your name',
    introduction: [[{ text: 'A short introduction will go here. What you do, what you’re interested in, and what you’re working on.' }]],
    links: [],
  },
  navigation: [
    { label: 'home', href: '/' },
    { label: 'projects', href: '/projects' },
    { label: 'writing', href: '/writing' },
    { label: 'hobbies', href: '/hobbies' },
    { label: 'media', href: '/media' },
    { label: 'quotes', href: '/quotes' },
    { label: 'contact', href: '/contact' },
  ],
  sections: [
    { id: 'about', type: 'prose', title: 'about', paragraphs: [[{ text: 'This space is for a little more about you: your background, interests, and the things that matter to you.' }]] },
    { id: 'currently', type: 'list', title: 'currently', items: [
      [{ text: 'working on ' }, { text: 'your current focus', tone: 'blue' }, { text: '.' }],
      [{ text: 'learning about ' }, { text: 'something that interests you', tone: 'sand' }, { text: '.' }],
    ] },
  ],
});

export const projects = entrySchema.array().parse([
  { id: 'project-one', title: 'First project — placeholder', summary: 'A description of what you built, the problem it solves, and your contribution will go here.' },
  { id: 'project-two', title: 'Second project — placeholder', summary: 'Another project description will go here. Real demo and source links can be added with the content.' },
]);
