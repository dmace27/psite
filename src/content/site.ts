import { entrySchema, siteSchema } from './schema';

/** Layout placeholders only. Replace these values with the owner's actual content. */
export const siteContent = siteSchema.parse({
  metadata: { title: 'Daniel Mace', description: 'Personal site'},
  identity: {
    name: 'Daniel Mace ',
    introduction: [[{ text: 'I study Comptuer Science at the Unviversity of Waterloo' }]],
    links: [],
  },
  navigation: [
    { label: 'home', href: '/' },
    { label: 'projects', href: '/projects' },
    { label: 'other', href: '/other' },
    { label: 'contact', href: '/contact' },
  ],
  sections: [
    { id: 'about', type: 'prose', title: 'about', paragraphs: [[{ text: 'I see myself as incredibly ambitious, hard working, motivated, ' }]] },
    { id: 'currently', type: 'list', title: 'currently', items: [
      [{ text: 'working on ' }, { text: 'RoleSpark', tone: 'blue' }, { text: '.' }],
      [{ text: 'learning about ' }, { text: 'agent evals and benchmarks', tone: 'sand' }, { text: '.' }],
    ] },
  ],
});

export const projects = entrySchema.array().parse([
  { id: 'project-one', title: 'First project — placeholder', summary: 'A description of what you built, the problem it solves, and your contribution will go here.' },
  { id: 'project-two', title: 'Second project — placeholder', summary: 'Another project description will go here. Real demo and source links can be added with the content.' },
]);
