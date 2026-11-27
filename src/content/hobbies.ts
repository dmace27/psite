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
    photos: [
      {
        src: '/images/hobbies/soccer-8777.webp',
        alt: 'A goalkeeper in a bright green kit points downfield with the ball at his feet.',
        width: 960,
        height: 1440,
      },
      {
        src: '/images/hobbies/soccer-9946.webp',
        alt: 'A goalkeeper dives low beside the goalpost with a gloved hand stretched out.',
        width: 960,
        height: 1440,
      },
      {
        src: '/images/hobbies/soccer-8686.webp',
        alt: 'A goalkeeper in a bright green kit kicks the ball across the field.',
        width: 960,
        height: 1440,
      },
    ],
  },
  {
    id: 'hiking',
    title: 'hiking',
    paragraphs: [[{
      text: 'I enjoy touching grass and connecting with nature. My family and I go on many hiking trips. '
        + 'Most recently, we hiked in Grand Teton National Park and Yellowstone National Park.',
    }]],
    photos: [
      {
        src: '/images/hobbies/hiking-3626.webp',
        alt: 'A childhood photo in front of turquoise water, a pine forest, and distant mountains.',
        width: 1297,
        height: 1440,
      },
      {
        src: '/images/hobbies/hiking-3772.webp',
        alt: 'A hiker with a blue backpack follows a rocky trail beneath steep mountain peaks.',
        width: 1080,
        height: 1440,
      },
      {
        src: '/images/hobbies/hiking-3856.webp',
        alt: 'A hiker in a blue jacket stands among rocks beside a stream and a pine forest.',
        width: 1080,
        height: 1440,
      },
      {
        src: '/images/hobbies/hiking-4060.webp',
        alt: 'A hiker looks across still water toward the Tetons reflected in the lake.',
        width: 1080,
        height: 1440,
      },
    ],
  },
  {
    id: 'gym',
    title: 'gym',
    paragraphs: [[{ text: "I enjoy lifting weights. I don't like leg day. I use soccer as an excuse to skip leg day." }]],
  },
]);
