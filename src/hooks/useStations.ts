"use client";

import { useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { stations as stationsEs } from "@/content/stations.es";
import { stations as stationsEn } from "@/content/stations.en";
import {
  getStationBySlug,
  getAdjacentStations,
  type Station,
  type StationCategory,
} from "@/lib/stations";

export function useStations() {
  const { locale } = useLanguage();

  const stations: Station[] = useMemo(
    () => (locale === "es" ? stationsEs : stationsEn),
    [locale]
  );

  return useMemo(
    () => ({
      stations,
      getBySlug: (slug: string) => getStationBySlug(stations, slug),
      getAdjacent: (slug: string) => getAdjacentStations(stations, slug),
      filterByCategory: (category: StationCategory | null) =>
        category ? stations.filter((s) => s.category === category) : stations,
      categories: Array.from(
        new Set(stations.map((s) => s.category).filter(Boolean) as StationCategory[])
      ),
    }),
    [stations]
  );
}
