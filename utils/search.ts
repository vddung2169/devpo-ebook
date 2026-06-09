import type { SearchEntry } from "@/types";

/** Bỏ dấu tiếng Việt để tìm kiếm không phân biệt dấu */
export function normalize(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .trim();
}

export function searchEntries(
  index: SearchEntry[],
  query: string
): SearchEntry[] {
  const q = normalize(query);
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  return index
    .map((entry) => {
      const haystack = normalize(`${entry.title} ${entry.keywords}`);
      let score = 0;
      for (const t of terms) {
        if (haystack.includes(t)) score += 1;
        if (normalize(entry.title).includes(t)) score += 2;
      }
      return { entry, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
    .map((r) => r.entry);
}
