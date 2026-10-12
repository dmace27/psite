import { z } from 'zod';

/** Metadata for authored Markdown. Dates are optional until content is supplied. */
export const writingSchema = z.object({
  title: z.string().trim().min(1),
  description: z.string().trim().min(1),
  publishedAt: z.iso.date().optional(),
  order: z.number().int().default(0),
  draft: z.boolean().default(false),
  placeholder: z.boolean().default(false),
});
