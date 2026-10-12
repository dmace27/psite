import { z } from 'zod';
import { linkSchema, paragraphSchema, photoSchema } from './schema.ts';

const text = z.string().trim().min(1);

/** One hobby can be a simple story or include personal media and recent updates. */
export const hobbySchema = z.object({
  id: z.string().regex(/^[a-z][a-z0-9-]*$/, 'Use a lowercase, URL-safe hobby ID.'),
  title: text,
  paragraphs: z.array(paragraphSchema).min(1),
  photos: z.array(photoSchema).default([]),
  links: z.array(linkSchema).default([]),
  updates: z.array(z.object({
    title: text,
    detail: text,
    date: text.optional(),
    href: linkSchema.shape.href.optional(),
  })).default([]),
  placeholder: z.boolean().default(false),
});

// Hobby IDs are section anchors, so duplicates would break the page index.
export const hobbiesSchema = z.array(hobbySchema).superRefine((hobbies, context) => {
  const ids = hobbies.map((hobby) => hobby.id);
  if (new Set(ids).size !== ids.length || ids.includes('main')) {
    context.addIssue({ code: 'custom', message: 'Hobby IDs must be unique and cannot be main.' });
  }
});
export type Hobby = z.infer<typeof hobbySchema>;
