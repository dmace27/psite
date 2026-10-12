import { getCollection } from 'astro:content';

/** Both the index and generated routes use the same visible collection. */
export async function getWriting() {
  const articles = await getCollection('writing', ({ data }) => !data.draft);
  return articles.sort((a, b) => {
    const dates = (b.data.publishedAt ?? '').localeCompare(a.data.publishedAt ?? '');
    return dates || a.data.order - b.data.order || a.id.localeCompare(b.id);
  });
}

/** Calendar dates must display consistently regardless of the host timezone. */
export function formatArticleDate(value: string) {
  return new Intl.DateTimeFormat('en', {
    year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC',
  }).format(new Date(`${value}T00:00:00Z`));
}
