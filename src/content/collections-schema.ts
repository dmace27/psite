import { z } from 'zod';
import { hrefSchema } from './schema.ts';

const text = z.string().trim().min(1);
const id = z.string().regex(/^[a-z][a-z0-9-]*$/);

/** Media categories are authored freely, so new formats need no component changes. */
export const mediaItemSchema = z.object({
  title: text,
  creator: text.optional(),
  note: text.optional(),
  href: hrefSchema.optional(),
  placeholder: z.boolean().default(false),
});
export const mediaGroupSchema = z.object({
  id,
  title: text,
  items: z.array(mediaItemSchema).min(1),
});
export const mediaGroupsSchema = z.array(mediaGroupSchema).superRefine((groups, context) => {
  const ids = groups.map((group) => group.id);
  if (new Set(ids).size !== ids.length || ids.includes('main')) {
    context.addIssue({ code: 'custom', message: 'Media category IDs must be unique and cannot be main.' });
  }
});

/** Attribution is optional: unknown authors should never be invented. */
export const quoteSchema = z.object({
  id,
  text,
  attribution: text.optional(),
  source: text.optional(),
  href: hrefSchema.optional(),
  note: text.optional(),
  placeholder: z.boolean().default(false),
});
export const quotesSchema = z.array(quoteSchema).superRefine((quotes, context) => {
  const ids = quotes.map((quote) => quote.id);
  if (new Set(ids).size !== ids.length || ids.includes('main')) {
    context.addIssue({ code: 'custom', message: 'Quote IDs must be unique and cannot be main.' });
  }
});
export type MediaGroup = z.infer<typeof mediaGroupSchema>;
export type Quote = z.infer<typeof quoteSchema>;
