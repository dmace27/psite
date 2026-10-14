import { mediaGroupsSchema } from './collections-schema';

/** Replace these specimens with media you enjoy; category order is page order. */
export const mediaGroups = mediaGroupsSchema.parse([
  { id: 'music', title: 'music', items: [
    { title: 'A song or album — placeholder', note: 'Add something you return to and what you enjoy about it.', placeholder: true },
  ] },
  { id: 'shows', title: 'shows', items: [
    { title: 'A show — placeholder', note: 'A series you enjoy, and a few words about why it stayed with you.', placeholder: true },
  ] },
  { id: 'movies', title: 'movies', items: [
    { title: 'A movie — placeholder', note: 'Add a film and a short personal note.', placeholder: true },
  ] },
  { id: 'books', title: 'books', items: [
    { title: 'A book — placeholder', note: 'Add the title, author, and what you took away from it.', placeholder: true },
  ] },
  { id: 'pieces-of-writing', title: 'pieces of writing', items: [
    { title: 'An essay or article — placeholder', note: 'A piece by someone else that you found interesting. A source link can go with it.', placeholder: true },
  ] },
  { id: 'other-media', title: 'other things', items: [
    { title: 'Another piece of media — placeholder', note: 'Podcasts, games, talks, or anything else you want to keep here.', placeholder: true },
  ] },
]);
