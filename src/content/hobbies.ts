import { hobbiesSchema } from './hobbies-schema';

/** Replace these templates with your hobbies. Their order is their page order.
 * Leave optional photos, links, or updates out when they don't serve the story.
 */
export const hobbies = hobbiesSchema.parse([
  {
    id: 'soccer' ,
    title: 'soccer',
    placeholder: false,
    paragraphs: [[{ text: 'I grew' }]],
    updates: [{ title: 'recently — placeholder', detail: 'A recent session, personal milestone, or something you’re practicing can go here.' }],
  },
  {
    id: 'hiking',
    title: 'hiking',
    placeholder: false,
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
    placeholder: false,
    paragraphs: [
      [{ text: 'Something you like reading, watching, exploring, collecting, or learning about.' }],
      [{ text: 'A hobby can be just a few sentences. Add photos, recent updates, or profile links only when you want them.' }],
    ],
  },
]);
