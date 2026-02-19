/**
 * Fetch KJV verses from bible-api.com
 * https://bible-api.com
 */

const API_BASE = "https://bible-api.com";

export type BibleApiVerse = {
  book_id: string;
  book_name: string;
  chapter: number;
  verse: number;
  text: string;
};

export type BibleApiResponse = {
  reference: string;
  verses: BibleApiVerse[];
  text: string;
  translation_id: string;
  translation_name: string;
};

function buildQuery(book: string, chapter: number, verse: number | [number, number]): string {
  const bookEncoded = encodeURIComponent(`${book} ${chapter}:${Array.isArray(verse) ? `${verse[0]}-${verse[1]}` : verse}`);
  return `${API_BASE}/${bookEncoded}?translation=kjv`;
}

export async function fetchKjvVerse(
  book: string,
  chapter: number,
  verse: number | [number, number]
): Promise<BibleApiResponse | null> {
  try {
    const url = buildQuery(book, chapter, verse);
    const res = await fetch(url, { next: { revalidate: 86400 } });
    if (!res.ok) return null;
    const data: BibleApiResponse = await res.json();
    return data;
  } catch (e) {
    console.error("bible-api fetch error:", e);
    return null;
  }
}

export type VerseEntry = {
  ref: string;
  kjv: string;
  ko?: string;
};

export async function fetchVersesForRef(
  book: string,
  chapter: number,
  verse: number | [number, number]
): Promise<VerseEntry[]> {
  const res = await fetchKjvVerse(book, chapter, verse);
  if (!res?.verses?.length) return [];

  return res.verses.map((v) => ({
    ref: `${v.book_name} ${v.chapter}:${v.verse}`,
    kjv: v.text.trim(),
  }));
}
