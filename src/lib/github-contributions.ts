const DAY_MS = 24 * 60 * 60 * 1000;

export interface ContributionCalendar {
  startDate: string;
  levels: number[];
}

export function contributionDate(startDate: string, offset: number) {
  return new Date(Date.parse(startDate) + offset * DAY_MS);
}

export function parseContributionCalendar(html: string): ContributionCalendar {
  // GitHub's public calendar exposes dates and the five legend levels on its cells.
  const levelsByDate = new Map<string, number>();
  for (const [cell, date] of html.matchAll(/<td\b[^>]*\sdata-date="(\d{4}-\d{2}-\d{2})"[^>]*>/g)) {
    const level = cell.match(/\sdata-level="([0-4])"/)?.[1];
    if (level !== undefined) levelsByDate.set(date, Number(level));
  }

  const latestDate = Array.from(levelsByDate.keys()).sort().at(-1);
  if (!latestDate) throw new Error('GitHub returned no contribution dates.');

  const end = new Date(latestDate);
  const year = end.getUTCFullYear();
  const month = end.getUTCMonth() - 6;
  // Clamp month-end dates when the first month has fewer days than the last.
  const lastDayOfMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  const start = new Date(Date.UTC(year, month, Math.min(end.getUTCDate(), lastDayOfMonth)));
  const startDate = start.toISOString().slice(0, 10);
  const days = (end.getTime() - start.getTime()) / DAY_MS + 1;
  const levels = Array.from({ length: days }, (_, offset) => {
    const date = contributionDate(startDate, offset).toISOString().slice(0, 10);
    const level = levelsByDate.get(date);
    if (level === undefined) throw new Error(`GitHub's calendar is missing ${date}.`);
    return level;
  });

  return { startDate, levels };
}

export async function fetchContributionCalendar(account: string) {
  const url = `https://github.com/users/${encodeURIComponent(account)}/contributions`;
  const response = await fetch(url, { signal: AbortSignal.timeout(5000) });
  if (!response.ok) throw new Error(`GitHub returned HTTP ${response.status}.`);
  return parseContributionCalendar(await response.text());
}
