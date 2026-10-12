import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { writingSchema } from './content/writing-schema';

// One Markdown file supplies both an index entry and a standalone article page.
const writing = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/writing' }),
  schema: writingSchema,
});
export const collections = { writing };
