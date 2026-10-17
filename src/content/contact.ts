import { z } from 'zod';

const profileUrl = z.url().refine((value) => ['https:', 'http:'].includes(new URL(value).protocol), 'Use an HTTP(S) profile URL.');
const contactSchema = z.object({
  github: profileUrl.optional(),
  linkedin: profileUrl.optional(),
  x: profileUrl.optional(),
  email: z.email().optional(),
});

/** Shared by the contact page and footer. Add your real details here when supplied. */
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
  value?: string;
  pending: boolean;
}

// Unconfigured footer links lead to their labelled contact-page slots instead of
// invented accounts. Email becomes a mailto link once an address is supplied.
export const contactMethods: ContactMethod[] = [
  { id: 'github', label: 'github', href: contact.github ?? '/contact#github', value: contact.github, pending: !contact.github },
  { id: 'linkedin', label: 'linkedin', href: contact.linkedin ?? '/contact#linkedin', value: contact.linkedin, pending: !contact.linkedin },
  { id: 'email', label: contact.email ?? 'email', href: contact.email ? `mailto:${contact.email}` : '/contact#email', value: contact.email, pending: !contact.email },
  { id: 'x', label: 'X', href: contact.x ?? '/contact#x', value: contact.x, pending: !contact.x },
];
