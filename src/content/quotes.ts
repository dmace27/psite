import { quotesSchema } from './collections-schema';

/** Quotes appear on the page in the order listed here. */
export const quotes = quotesSchema.parse([
  {
    id: 'never-lose-again',
    text: 'From this moment forward, I will never lose again.',
    attribution: 'Roronoa Zoro',
    source: 'One Piece',
  },
  {
    id: 'heart-ablaze',
    text: 'Set your heart ablaze.',
    attribution: 'Kyojuro Rengoku',
    source: 'Demon Slayer',
  },
  {
    id: 'surpass-your-limits',
    text: 'Surpass your limits.',
    attribution: 'Yami Sukehiro',
    source: 'Black Clover',
  },
  {
    id: 'keep-moving-forward',
    text: 'Keep moving forward.',
  },
  {
    id: 'ambition-and-agency',
    text: 'Ambition without agency is just a dream.',
  },
  {
    id: 'everything-i-wished-for',
    text: 'This is everything I wished for.',
    attribution: 'Wemby',
  },
  {
    id: 'hiding-my-emotions',
    text: 'I refuse to carry the burden of hiding my emotions.',
    attribution: 'Wemby',
  },
  {
    id: 'stand-so-tall',
    text: 'Stand so tall others want to grow too.',
  },
  {
    id: 'clinging-to-reason',
    text: 'Reason exists for those who cannot live without clinging to it.',
  },
  {
    id: 'winning-is-the-only-thing',
    text: 'Just fighting for its own sake is meaningless. A mere survival is not enough of a purpose. '
      + 'I wanna win this. Winning is the only thing.',
    attribution: 'Ichigo Kurosaki',
    source: 'Bleach',
  },
  {
    id: 'empty-present-clear',
    text: 'I can sense no anger from him, no rage, no fear. He is empty, present, clear.',
    attribution: 'Griffith',
    source: 'Berserk',
  },
  {
    id: 'the-feeling-of-winning',
    text: 'The feeling of winning will be unimaginable.',
  },
]);
