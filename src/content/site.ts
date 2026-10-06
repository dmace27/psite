import { siteSchema } from './schema';

/** Replace this empty draft after the owner supplies their structure and content.
 * Nothing here is presented as a finished personal website.
 */
export const siteContent = siteSchema.parse({
  metadata: { title: 'Personal site', description: 'Personal website draft.' },
  identity: { name: 'Your name', introduction: [], links: [] },
  navigation: [],
  sections: [],
});
