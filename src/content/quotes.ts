import { quotesSchema } from './collections-schema';

/** Layout samples only, not quotations attributed to real people. */
export const quotes = quotesSchema.parse([
  {
    id: 'first-quote',
    text: 'Your first quote will go here.',
    note: 'You can add a short note about what you find interesting in it.',
    placeholder: true,
  },
  {
    id: 'second-quote',
    text: 'A longer passage, a single sentence, or a few words worth keeping.',
    note: 'Attribution, a book or article title, and a source link are all optional.',
    placeholder: true,
  },
]);
