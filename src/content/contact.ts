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

interface ProfileLink {
  label: string;
  href: string;
}

const profiles = [
  { label: 'github', href: contact.github },
  { label: 'linkedin', href: contact.linkedin },
  { label: 'X', href: contact.x },
];

export const footerProfileLinks = profiles.filter((profile): profile is ProfileLink => Boolean(profile.href));
