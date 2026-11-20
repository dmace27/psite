import { z } from 'zod';

const profileUrl = z.url().refine((value) => ['https:', 'http:'].includes(new URL(value).protocol), 'Use an HTTP(S) profile URL.');
const contactSchema = z.object({
  github: profileUrl.optional(),
  linkedin: profileUrl.optional(),
  x: profileUrl.optional(),
  email: z.email().optional(),
});

/** Contact details shared by the site footers. */
export const contact = contactSchema.parse({
  github: 'https://github.com/dmace27',
  linkedin: 'https://www.linkedin.com/in/daniel-mace27/',
  x: 'https://x.com/DanielMace27',
  email: 'danielmacebusiness@gmail.com',
});

export interface ContactMethod {
  id: string;
  label: string;
  href: string;
}

// Keep the footer in display order and omit any unconfigured destinations.
const methods = [
  { id: 'email', label: contact.email ?? 'email', href: contact.email ? `mailto:${contact.email}` : undefined },
  { id: 'github', label: 'github', href: contact.github },
  { id: 'linkedin', label: 'linkedin', href: contact.linkedin },
  { id: 'x', label: 'X', href: contact.x },
];

export const footerContactMethods = methods.filter((method): method is ContactMethod => Boolean(method.href));
