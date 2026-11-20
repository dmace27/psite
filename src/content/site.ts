import { entrySchema, siteSchema } from './schema';

/** Layout placeholders only. Replace these values with the owner's actual content. */
export const siteContent = siteSchema.parse({
  metadata: { title: 'Daniel Mace', description: 'Personal site'},
  identity: {
    name: 'Daniel Mace ',
    introduction: [[
      { text: 'I study Computer\u00a0Science at the ' },
      { text: 'University of Waterloo', tone: 'sand' },
    ]],
    links: [],
  },
  navigation: [
    { label: 'home', href: '/' },
    { label: 'projects', href: '/projects' },
    { label: 'other', href: '/other' },
  ],
  sections: [
    { id: 'about', type: 'prose', title: 'about', paragraphs: [[{ text: 'I see myself as incredibly ambitious, hard working, motivated, ' }]] },
    { id: 'currently', type: 'list', title: 'currently', items: [
      [{ text: 'working on ' }, { text: 'RoleSpark', tone: 'blue' }, { text: '.' }],
      [{ text: 'learning about ' }, { text: 'inference and attention', tone: 'sand' }, { text: '.' }],
    ] },
  ],
});

export const projects = entrySchema.array().parse([
  {
    id: 'alibi',
    title: 'ALIBI',
    summary: 'A sandbox for evaluating AI forensic investigators against simulated incidents, built with my team at HackPrinceton.',
    links: [{ label: 'Devpost', href: 'https://devpost.com/software/alibi-dr1n9o' }],
  },
  {
    id: 'rolespark',
    title: 'RoleSpark',
    summary: 'A hiring pilot for defining role profiles, inviting candidates to opt-in assessments, and reviewing assessment reports.',
    links: [{ label: 'GitHub', href: 'https://github.com/dmace27/iopsych' }],
  },
  {
    id: 'wiki',
    title: 'Wiki',
    summary: 'A knowledge compiler that turns PDFs, scans, and Markdown notes into an Obsidian wiki with citations back to the original sources.',
    links: [{ label: 'GitHub', href: 'https://github.com/dmace27/wiki' }],
  },
]);
