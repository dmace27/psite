import { z } from 'zod';

/** Only allow explicit web/email links and site-relative paths in authored data. */
export const hrefSchema = z.string().min(1).refine((value) => {
  if (value.startsWith('#')) return /^#[a-z][a-z0-9-]*$/i.test(value);
  if (value.startsWith('/')) return !value.startsWith('//') && !/[\\\s]/.test(value);
  try {
    const url = new URL(value);
    return ['https:', 'http:', 'mailto:'].includes(url.protocol);
  } catch { return false; }
}, 'Use an http(s), mailto, site-relative, or section link.');

const text = z.string().trim().min(1);
const id = z.string().regex(/^[a-z][a-z0-9-]*$/, 'Use a lowercase, URL-safe ID.');
export const linkSchema = z.object({ label: text, href: hrefSchema });
export const toneSchema = z.enum(['neutral', 'sage', 'sand', 'rose', 'blue']);

// Rich text is structured data, never arbitrary HTML. Astro escapes every value.
export const spanSchema = z.object({
  // Preserve authored spaces where adjacent rich-text spans meet.
  text: z.string().refine((value) => value.trim().length > 0, 'Provide nonempty text.'),
  href: hrefSchema.optional(),
  tone: toneSchema.optional(),
  emphasis: z.boolean().optional(),
});
export const paragraphSchema = z.array(spanSchema).min(1);
export const photoSchema = z.object({
  src: z.string().regex(/^\/images\/[a-zA-Z0-9/_-]+\.(svg|webp|png|jpe?g|avif)$/),
  alt: text,
  caption: text,
  width: z.number().int().positive(),
  height: z.number().int().positive(),
});
export const entrySchema = z.object({
  id,
  title: text,
  subtitle: text.optional(),
  date: text.optional(),
  summary: text,
  details: z.array(text).optional(),
  tags: z.array(text).optional(),
  links: z.array(linkSchema).optional(),
});
const sectionBase = { id, title: text, eyebrow: text.optional() };
export const sectionSchema = z.discriminatedUnion('type', [
  z.object({ ...sectionBase, type: z.literal('prose'), paragraphs: z.array(paragraphSchema).min(1) }),
  z.object({ ...sectionBase, type: z.literal('list'), items: z.array(paragraphSchema).min(1) }),
  z.object({ ...sectionBase, type: z.literal('entries'), items: z.array(entrySchema).min(1) }),
  z.object({ ...sectionBase, type: z.literal('notes'), items: z.array(z.object({ title: text, date: text.optional(), href: hrefSchema })).min(1) }),
  z.object({ ...sectionBase, type: z.literal('photos'), photos: z.array(photoSchema).min(1) }),
  z.object({ ...sectionBase, type: z.literal('contact'), paragraphs: z.array(paragraphSchema).min(1), links: z.array(linkSchema).min(1) }),
]);
export const siteSchema = z.object({
  metadata: z.object({ title: text, description: text, canonical: z.url().optional() }),
  identity: z.object({ name: text, introduction: z.array(paragraphSchema), links: z.array(linkSchema) }),
  navigation: z.array(linkSchema),
  sections: z.array(sectionSchema),
}).superRefine((site, context) => {
  // Duplicate anchors break both navigation and accessible heading relationships.
  const ids = site.sections.map((section) => section.id);
  if (new Set(ids).size !== ids.length || ids.includes('main')) {
    context.addIssue({ code: 'custom', path: ['sections'], message: 'Section IDs must be unique and cannot use the reserved ID main.' });
  }
  site.navigation.forEach((link, index) => {
    if (link.href.startsWith('#') && !ids.includes(link.href.slice(1))) {
      context.addIssue({ code: 'custom', path: ['navigation', index, 'href'], message: 'Navigation must point to an existing section.' });
    }
  });
});

export type RichParagraph = z.infer<typeof paragraphSchema>;
export type Photo = z.infer<typeof photoSchema>;
export type Entry = z.infer<typeof entrySchema>;
export type SiteContent = z.infer<typeof siteSchema>;
export type ContentSection = z.infer<typeof sectionSchema>;
export type Link = z.infer<typeof linkSchema>;
