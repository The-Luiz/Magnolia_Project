"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Filter, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useStations } from "@/hooks/useStations";
import { useLanguage } from "@/contexts/LanguageContext";
import { categories, type StationCategory } from "@/lib/stations";

const categoryEmoji: Record<StationCategory, string> = {
  fundamentos: "\u{1F3DB}\uFE0F",
  historia: "\u{1F4DC}",
  tecnolog\u00EDa: "\u2699\uFE0F",
  filosof\u00EDa: "\u{1F9E0}",
  econom\u00EDa: "\u{1F4CA}",
};

function StationCard({ station }: { station: import("@/lib/stations").Station }) {
  const { locale } = useLanguage();

  return (
    <Link href={`/trail/${station.slug}`} className="group block">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="rounded-2xl border border-border bg-card overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      >
        <div className="relative aspect-[16/9] overflow-hidden bg-muted">
          {/*
          Para agregar la imagen thumbnail:
          1. Coloca el archivo en: public{station.thumbnail}
          2. Descomenta el siguiente componente Image de Next.js
          3. Ajusta sizes según necesites

          <Image
            src={station.thumbnail}
            alt={station.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-4">
              <div className="w-14 h-14 mx-auto mb-2 rounded-xl bg-accent/10 flex items-center justify-center">
                <span className="text-xl font-bold text-accent font-[Arimo]">
                  {station.number}
                </span>
              </div>
              <p className="text-xs text-muted-foreground font-[Arimo] truncate max-w-[200px]">
                {station.slug}
              </p>
            </div>
          </div>

          <div className="absolute top-3 left-3">
            <Badge className="bg-accent text-white border-0 font-[Arimo] font-bold text-xs px-3 py-1 rounded-full shadow-lg">
              {locale === "es" ? "Estación" : "Station"} {station.number}
            </Badge>
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-lg font-bold text-card-foreground font-[Arimo] group-hover:text-accent transition-colors line-clamp-2">
            {station.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground font-[Arimo] leading-relaxed line-clamp-3">
            {station.content}
          </p>
        </div>
      </motion.article>
    </Link>
  );
}

export default function TrailIndexPage() {
  const { t, locale } = useLanguage();
  const { stations, filterByCategory } = useStations();
  const [activeCategory, setActiveCategory] = useState<StationCategory | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filteredStations = useMemo(() => {
    let result = filterByCategory(activeCategory);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.content.toLowerCase().includes(q)
      );
    }
    return result;
  }, [activeCategory, searchQuery, filterByCategory]);

  const stationCategories = useMemo(() => {
    const cats = new Set(stations.map((s) => s.category).filter(Boolean) as StationCategory[]);
    return categories.filter((c) => cats.has(c.key));
  }, [stations]);

  const categoryLabel = (cat: (typeof categories)[number]) => {
    if (cat.key === "tecnología") return t("trailFilterTecnología");
    if (cat.key === "filosofía") return t("trailFilterFilosofía");
    if (cat.key === "economía") return t("trailFilterEconomía");
    return t(`trailFilter${cat.key.charAt(0).toUpperCase() + cat.key.slice(1)}` as any);
  };

  return (
    <div className="pt-20 sm:pt-24">
      <section className="py-8 sm:py-12 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl font-bold text-foreground font-[Arimo]"
          >
            Magnolia Bitcoin Trail
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-muted-foreground font-[Arimo] max-w-2xl"
          >
            {locale === "es"
              ? "Explora cada estación del sendero y descubre la historia de Bitcoin."
              : "Explore each station of the trail and discover the story of Bitcoin."}
          </motion.p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar / Filters */}
          <aside className="lg:w-72 flex-shrink-0">
            {/* Mobile toggle */}
            <div className="lg:hidden mb-4">
              <Button
                variant="outline"
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                className="w-full flex items-center justify-between border-border font-[Arimo]"
                aria-expanded={mobileFiltersOpen}
              >
                <span className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  {t("trailFilterTitle")}
                </span>
                {activeCategory ? (
                  <Badge variant="secondary" className="ml-2">
                    {categoryLabel(stationCategories.find((c) => c.key === activeCategory)!)}
                  </Badge>
                ) : (
                  <span className="text-xs text-muted-foreground">{t("trailFilterAll")}</span>
                )}
              </Button>
            </div>

            {/* Filter content */}
            <AnimatePresence>
              <motion.div
                initial={false}
                animate={{ height: "auto", opacity: 1 }}
                className={`${mobileFiltersOpen ? "block" : "hidden"} lg:block`}
              >
                <div className="lg:sticky lg:top-28">
                  <div className="rounded-xl border border-border bg-card p-5 space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground font-[Arimo]">
                      {t("trailFilterTitle")}
                    </h3>

                    {/* Search field */}
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                      <input
                        type="search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={t("trailSearchPlaceholder")}
                        className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground font-[Arimo] outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring transition-colors"
                        aria-label={t("trailSearchPlaceholder")}
                      />
                    </div>

                    {/* Category title */}
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-[Arimo]">
                      {t("trailCategoryTitle")}
                    </h4>

                    {/* All stations */}
                    <button
                      onClick={() => setActiveCategory(null)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-[Arimo] font-medium transition-colors ${
                        activeCategory === null
                          ? "bg-accent text-white"
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      <span className="text-base">📋</span>
                      {t("trailFilterAll")}
                    </button>

                    {/* Category buttons with emojis */}
                    {stationCategories.map((cat) => (
                      <button
                        key={cat.key}
                        onClick={() => setActiveCategory(cat.key)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-[Arimo] font-medium transition-colors ${
                          activeCategory === cat.key
                            ? "bg-accent text-white"
                            : "text-foreground hover:bg-muted"
                        }`}
                      >
                        <span className="text-base">{categoryEmoji[cat.key]}</span>
                        {categoryLabel(cat)}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </aside>

          {/* Main content: Grid */}
          <div className="flex-1 min-w-0">
            {/* Active filter + search indicator */}
            {(activeCategory || searchQuery) && (
              <div className="flex items-center gap-2 mb-6 flex-wrap">
                <span className="text-sm text-muted-foreground font-[Arimo]">
                  {locale === "es" ? "Mostrando:" : "Showing:"}
                </span>
                {searchQuery && (
                  <Badge className="bg-muted text-foreground border-border font-[Arimo]">
                    {searchQuery}
                    <button
                      onClick={() => setSearchQuery("")}
                      className="ml-1 hover:text-accent transition-colors"
                      aria-label="Clear search"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
                {activeCategory && (
                  <Badge className="bg-accent/10 text-accent border-accent/20 font-[Arimo]">
                    {categoryEmoji[activeCategory]} {categoryLabel(stationCategories.find((c) => c.key === activeCategory)!)}
                    <button
                      onClick={() => setActiveCategory(null)}
                      className="ml-1 hover:text-accent transition-colors"
                      aria-label="Clear category filter"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
              </div>
            )}

            {filteredStations.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground font-[Arimo]">
                  {t("trailNoResults")}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredStations.map((station) => (
                  <StationCard key={station.slug} station={station} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
