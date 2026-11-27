import { hobbiesSchema } from './hobbies-schema';

/** Replace these templates with your hobbies. Their order is their page order.
 * Leave optional photos, links, or updates out when they don't serve the story.
 */
export const hobbies = hobbiesSchema.parse([
  {
    id: 'soccer',
    title: 'soccer',
    paragraphs: [[{
      text: 'I started playing soccer at age 8. From the very start, I loved playing goalkeeper. '
        + 'Most recently, I played for Keystone FC in MLS NEXT (the highest level of youth club soccer in the US). '
        + 'I also captained my high school team and earned first-team all-county honors two years in a row. '
        + 'Now I just play intramurals at Waterloo.',
    }]],
  },
  {
    id: 'hiking',
    title: 'hiking',
    paragraphs: [[{
      text: 'I enjoy touching grass and connecting with nature. My family and I go on many hiking trips. '
        + 'Most recently, we hiked in Grand Teton National Park and Yellowstone National Park.',
    }]],
  },
  {
    id: 'gym',
    title: 'gym',
    paragraphs: [[{ text: "I enjoy lifting weights. I don't like leg day. I use soccer as an excuse to skip leg day." }]],
  },
]);
