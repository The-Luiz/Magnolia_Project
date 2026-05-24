export type StationCategory =
  | "fundamentos"
  | "historia"
  | "tecnología"
  | "filosofía"
  | "economía";

export interface Station {
  slug: string;
  number: number;
  title: string;
  highlight: string;
  icon?: string;
  content: string;
  images?: { src: string; alt: string }[];
  thumbnail?: string;
  category?: StationCategory;
}

export const categories: { key: StationCategory; labelEs: string; labelEn: string }[] = [
  { key: "fundamentos", labelEs: "Fundamentos", labelEn: "Fundamentals" },
  { key: "historia", labelEs: "Historia", labelEn: "History" },
  { key: "tecnología", labelEs: "Tecnología", labelEn: "Technology" },
  { key: "filosofía", labelEs: "Filosofía", labelEn: "Philosophy" },
  { key: "economía", labelEs: "Economía", labelEn: "Economics" },
];

export function getStationBySlug(stations: Station[], slug: string): Station | undefined {
  return stations.find((s) => s.slug === slug);
}

export function getAdjacentStations(
  stations: Station[],
  slug: string
): { prev: Station | null; next: Station | null } {
  const index = stations.findIndex((s) => s.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? stations[index - 1] : null,
    next: index < stations.length - 1 ? stations[index + 1] : null,
  };
}

export function getCategories(stations: Station[]): StationCategory[] {
  const cats = new Set(stations.map((s) => s.category).filter(Boolean) as StationCategory[]);
  return categories.filter((c) => cats.has(c.key)).map((c) => c.key);
}
