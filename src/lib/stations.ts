// ─────────────────────────────────────────────────────────────────────────────
// Magnolia Bitcoin Trail — Station types & category metadata
// Station DATA lives in /src/content/stations.{es,en}.ts (bilingual content).
// This file only defines the shape and the visual category tokens used by
// the Trail index and station detail pages.
// ─────────────────────────────────────────────────────────────────────────────

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
  contentEs?: string;
  images?: { src: string; alt: string }[];
  thumbnail?: string;
  category?: StationCategory;
}

export const categories: { key: StationCategory; labelEs: string; labelEn: string }[] = [
  { key: "fundamentos", labelEs: "Fundamentos", labelEn: "Fundamentals" },
  { key: "historia",    labelEs: "Historia",     labelEn: "History"      },
  { key: "tecnología",  labelEs: "Tecnología",   labelEn: "Technology"   },
  { key: "filosofía",   labelEs: "Filosofía",    labelEn: "Philosophy"   },
  { key: "economía",    labelEs: "Economía",     labelEn: "Economics"    },
];

export function getStationBySlug(
  stationList: Station[],
  slug: string
): Station | undefined {
  return stationList.find((s) => s.slug === slug);
}

export function getAdjacentStations(
  stationList: Station[],
  slug: string
): { prev: Station | null; next: Station | null } {
  const index = stationList.findIndex((s) => s.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? stationList[index - 1] : null,
    next: index < stationList.length - 1 ? stationList[index + 1] : null,
  };
}
