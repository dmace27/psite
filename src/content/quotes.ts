import { quotesSchema } from './collections-schema';

/** Quotes appear on the page in the order listed here. */
export const quotes = quotesSchema.parse([
  {
    id: 'keep-moving-forward',
    text: 'Keep moving forward.',
    attribution: 'Eren Yeager',
    source: 'Attack on Titan',
  },
  {
    id: 'never-lose-again',
    text: 'From this moment forward, I will never lose again.',
    attribution: 'Roronoa Zoro',
    source: 'One Piece',
  },
  {
    id: 'dreams-breathe-life',
    text: 'Dreams breathe life into men, but can cage them in suffering.',
    attribution: 'Griffith',
    source: 'Berserk',
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
    id: 'ambition-and-agency',
    text: 'Ambition without agency is just a dream.',
  },
  {
    id: 'an-ambition-of-your-choosing',
    text: 'What a privilege it is to be exhausted by an ambition of your choosing.',
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
    id: 'everything-i-wished-for',
    text: 'This is everything I wished for.',
    attribution: 'Wemby',
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
