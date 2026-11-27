import { z } from 'zod';

/** Metadata for authored Markdown, with optional descriptions and dates. */
export const writingSchema = z.object({
  title: z.string().trim().min(1),
  description: z.string().trim().min(1).optional(),
  publishedAt: z.iso.date().optional(),
  order: z.number().int().default(0),
  draft: z.boolean().default(false),
  placeholder: z.boolean().default(false),
});
