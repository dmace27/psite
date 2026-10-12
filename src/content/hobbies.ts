import { hobbiesSchema } from './hobbies-schema';

/** Replace these templates with your hobbies. Their order is their page order.
 * Leave optional photos, links, or updates out when they don't serve the story.
 */
export const hobbies = hobbiesSchema.parse([
  {
    id: 'active-hobby',
    title: 'an active hobby',
    placeholder: true,
    paragraphs: [[{ text: 'A sport, a routine, or something that gets you moving. Write a little about what you enjoy and how it fits into your life.' }]],
    updates: [{ title: 'recently — placeholder', detail: 'A recent session, personal milestone, or something you’re practicing can go here.' }],
  },
  {
    id: 'creative-hobby',
    title: 'a creative hobby',
    placeholder: true,
    paragraphs: [[{ text: 'Music, art, photography, cooking, or another creative outlet. Use this space for the part of the hobby that feels most like you.' }]],
    photos: [{
      src: '/images/hobby-placeholder.svg',
      alt: 'A labelled placeholder for your own hobby photo or artwork.',
      caption: 'Your own photo or artwork can go here.',
      width: 960,
      height: 640,
    }],
  },
  {
    id: 'another-interest',
    title: 'another interest',
    placeholder: true,
    paragraphs: [
      [{ text: 'Something you like reading, watching, exploring, collecting, or learning about.' }],
      [{ text: 'A hobby can be just a few sentences. Add photos, recent updates, or profile links only when you want them.' }],
    ],
  },
]);
