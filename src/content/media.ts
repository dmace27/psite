import { mediaGroupsSchema } from './collections-schema';

/** Media picks grouped in the order they appear on the page. */
export const mediaGroups = mediaGroupsSchema.parse([
  { id: 'music', title: 'music', items: [
    { title: 'Cowboys and Angels' },
    { title: 'Cannock Chase', creator: 'Labi Siffre' },
    { title: "Boys Don't Cry", creator: 'The Cure' },
    { title: 'Pocketful of Sunshine', creator: 'Natasha Bedingfield' },
    { title: 'No Other Heart', creator: 'Mac DeMarco' },
    { title: 'Rise & Shine', creator: 'The Cardigans' },
    { title: 'D>E>A>T>H>M>E>T>A>L', creator: 'Panchiko' },
    { title: 'Cherish the Day', creator: 'Sade' },
    { title: 'Leave You Alone', creator: 'Sea of Lettuce' },
    { title: 'Wish You Here' },
    { title: 'Last Train to London', creator: 'Electric Light Orchestra' },
    { title: 'Lovefool', creator: 'The Cardigans' },
    { title: 'Oh! Tengo Suerte', creator: 'Masayoshi Takanaka' },
    { title: 'What More Can I Say', creator: 'The Notations' },
    { title: 'For You', creator: 'Thee Sinseers' },
  ] },
  { id: 'shows', title: 'shows', items: [
    { title: 'One Piece' },
    { title: 'Only Murders in the Building' },
    { title: 'Attack on Titan' },
    { title: 'Severance' },
  ] },
  { id: 'movies', title: 'movies', items: [
    { title: 'Interstellar' },
    { title: 'The Secret Life of Walter Mitty' },
    { title: 'Tenet' },
    { title: 'You Can See Everything' },
  ] },
  { id: 'books', title: 'books', items: [
    { title: 'Atomic Habits', creator: 'James Clear' },
    { title: 'Essentialism', creator: 'Greg McKeown' },
    { title: 'Introduction to Algorithms', creator: 'Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein' },
    { title: 'Introduction to Probability', creator: 'Joseph K. Blitzstein and Jessica Hwang' },
    { title: 'Silent Spring', creator: 'Rachel Carson' },
  ] },
  { id: 'pieces-of-writing', title: 'pieces of writing', items: [
    {
      title: 'How to Do Great Work',
      creator: 'Paul Graham',
      href: 'https://paulgraham.com/greatwork.html',
    },
    {
      title: 'How to Land a Job at a Frontier Lab',
      creator: 'Vlad Feinberg',
      href: 'https://vladfeinberg.com/2026/05/10/how-to-land-a-job-at-a-frontier-lab.html',
    },
    {
      title: 'Idea Generation',
      creator: 'Sam Altman',
      href: 'https://blog.samaltman.com/idea-generation',
    },
    {
      title: 'Machines of Loving Grace',
      creator: 'Dario Amodei',
      href: 'https://darioamodei.com/essay/machines-of-loving-grace',
    },
  ] },
  { id: 'other-media', title: 'other things', items: [
    { title: '2022 FIFA World Cup Final', note: 'Argentina vs. France' },
  ] },
]);
