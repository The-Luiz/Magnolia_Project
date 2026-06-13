"use client";

import { useState, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Search, X, ArrowUpRight } from "lucide-react";
import { useStations } from "@/hooks/useStations";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/components/ThemeProvider";
import { categories, type StationCategory } from "@/lib/stations";

/* ────────────────────────────────────────────────────────────────────────────
 * Trail visual language
 *
 * The 5 categories each get one intentional color, no rainbow. The palette
 * reuses the system's navy + Bitcoin-orange tokens and adds three accents
 * that belong to the subject: ledger green for "history / money that lasts",
 * muted violet for "philosophy" (low chroma, deliberate), and deep teal for
 * "economics" (trust, depth).
 *
 *   fundamentos  →  navy           (primary system token)
 *   historia     →  ledger green   (subject-evoking: old money, paper, age)
 *   tecnología   →  bitcoin orange (the only place we use accent at all)
 *   filosofía    →  muted violet   (low chroma, deliberate)
 *   economía     →  deep teal      (trust, depth, water)
 *
 * Light values are AA on cream #fafaf9. Dark variants are tuned for the
 * deep-navy #0A1C3A background and keep the same hue identity.
 * ────────────────────────────────────────────────────────────────────────── */

type CatToken = { line: string; text: string; bg: string; ink: string };

const categoryTokens: Record<StationCategory, { light: CatToken; dark: CatToken }> = {
  fundamentos: {
    light: { line: "#0A1C3A", text: "#0A1C3A", bg: "rgba(10,28,58,0.06)",  ink: "#0A1C3A" },
    dark:  { line: "#7B95C2", text: "#B8C8E0", bg: "rgba(123,149,194,0.10)", ink: "#E8EDF3" },
  },
  historia: {
    light: { line: "#1F4D38", text: "#1F4D38", bg: "rgba(31,77,56,0.08)",  ink: "#1F4D38" },
    dark:  { line: "#6FA88A", text: "#9DC4AE", bg: "rgba(111,168,138,0.10)", ink: "#D6E8DC" },
  },
  tecnología: {
    light: { line: "#B0681A", text: "#8A4F12", bg: "rgba(248,156,36,0.10)", ink: "#B0681A" },
    dark:  { line: "#F89C24", text: "#FFB959", bg: "rgba(248,156,36,0.12)", ink: "#FFD08A" },
  },
  filosofía: {
    light: { line: "#5B4B8A", text: "#5B4B8A", bg: "rgba(91,75,138,0.08)",  ink: "#5B4B8A" },
    dark:  { line: "#9B8FC4", text: "#BDB3DC", bg: "rgba(155,143,196,0.10)", ink: "#D4CCE8" },
  },
  economía: {
    light: { line: "#0E5C66", text: "#0E5C66", bg: "rgba(14,92,102,0.08)",  ink: "#0E5C66" },
    dark:  { line: "#5BA8B3", text: "#85C2CC", bg: "rgba(91,168,179,0.10)", ink: "#BDDDE2" },
  },
};

const categoryLabel: Record<StationCategory, { es: string; en: string }> = {
  fundamentos: { es: "Fundamentos", en: "Fundamentals" },
  historia:    { es: "Historia",    en: "History"      },
  tecnología:  { es: "Tecnología",  en: "Technology"   },
  filosofía:   { es: "Filosofía",   en: "Philosophy"   },
  economía:    { es: "Economía",    en: "Economics"    },
};

/* ────────────────────────────────────────────────────────────────────────────
 * Helpers
 * ────────────────────────────────────────────────────────────────────────── */

function readingTime(text: string): string {
  const words = text.trim().split(/\s+/).length;
  const min = Math.max(1, Math.round(words / 220));
  return `${min} min`;
}

/* ────────────────────────────────────────────────────────────────────────────
 * Marker — the "trail blaze" on the path. Renders the station number in
 * monospace inside a small circle that adopts the category color. The number
 * is the design — no pill badge, no emoji, no "Station" prefix.
 * ────────────────────────────────────────────────────────────────────────── */

function Marker({
  number,
  category,
  isLast,
}: {
  number: number;
  category: StationCategory;
  isLast: boolean;
}) {
  const { theme } = useTheme();
  const t = theme === "dark"
    ? categoryTokens[category].dark
    : categoryTokens[category].light;

  return (
    <div
      className="relative flex-shrink-0 w-14 sm:w-[3.75rem] flex flex-col items-center"
      aria-hidden
    >
      <div
        className="relative z-10
          w-10 h-10 sm:w-11 sm:h-11
          rounded-full bg-background
          flex items-center justify-center
          border-2 transition-colors duration-300"
        style={{ borderColor: t.line }}
      >
        <span
          className="font-mono text-[11px] sm:text-xs font-semibold tracking-tight"
          style={{ color: t.text }}
        >
          {String(number).padStart(2, "0")}
        </span>
      </div>

      {!isLast && (
        <div
          className="w-px flex-1 mt-3 mb-1 transition-colors duration-300"
          style={{
            backgroundImage: `repeating-linear-gradient(
              to bottom,
              ${t.line} 0,
              ${t.line} 4px,
              transparent 4px,
              transparent 9px
            )`,
          }}
        />
      )}
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
 * Station row — the marker on the path, the card with title + highlight +
 * "open" affordance, and a single connecting dashed line to the next station.
 * ────────────────────────────────────────────────────────────────────────── */

function TrailStation({
  station,
  isLast,
  index,
  isReducedMotion,
}: {
  station: import("@/lib/stations").Station;
  isLast: boolean;
  index: number;
  isReducedMotion: boolean;
}) {
  const { locale } = useLanguage();
  const { theme } = useTheme();
  const category: StationCategory = station.category ?? "fundamentos";
  const t = theme === "dark"
    ? categoryTokens[category].dark
    : categoryTokens[category].light;

  return (
    <motion.article
      initial={isReducedMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        isReducedMotion
          ? { duration: 0 }
          : { duration: 0.45, delay: Math.min(index * 0.04, 0.6) }
      }
      className="flex items-stretch gap-3 sm:gap-4"
    >
      <Marker number={station.number} category={category} isLast={isLast} />

      <Link
        href={`/trail/${station.slug}`}
        className="group flex-1 min-w-0 block py-1 pb-12 sm:pb-16 focus:outline-none"
      >
        {/* Category + reading time row */}
        <div className="flex items-center gap-2 mb-2 sm:mb-3 transition-colors duration-300">
          <span
            className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] font-semibold"
            style={{ color: t.text }}
          >
            {categoryLabel[category][locale]}
          </span>
          <span aria-hidden className="text-border">/</span>
          <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
            {readingTime(station.content)}
          </span>
        </div>

        {/* Title — display weight, tight tracking. The typographic
            "personality" the skill asks for: not the same Inter everyone
            reaches for. */}
        <h3
          className="
            text-[1.4rem] sm:text-2xl lg:text-[1.85rem]
            font-bold font-[Arimo]
            leading-[1.08] tracking-[-0.01em]
            text-foreground
            transition-colors duration-300
            group-hover:text-accent
            group-focus-visible:text-accent
          "
        >
          {station.title}
        </h3>

        {/* Highlight — italic Arimo. NOT a left-border accent callout (which
            the skill flags as AI-cliché). We use a different device: a
            leading em-dash like a printed chapter epigraph. */}
        <p className="mt-2 sm:mt-3 text-sm sm:text-base font-[Arimo] italic text-foreground/65 leading-relaxed max-w-xl">
          <span aria-hidden className="text-muted-foreground/60 mr-1.5">—</span>
          {station.highlight}
        </p>

        {/* Affordance — the only interactive hint at the row level. Text link,
            not a button. Mobile tap targets are honored by the surrounding
            Link's full hit area. */}
        <div className="mt-3 sm:mt-4 flex items-center gap-1.5 text-xs sm:text-sm font-[Arimo] font-semibold text-muted-foreground group-hover:text-accent transition-colors">
          <span>
            {locale === "es" ? "Caminar a esta estación" : "Walk to this station"}
          </span>
          <ArrowUpRight
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={2.25}
          />
        </div>
      </Link>
    </motion.article>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
 * Filter chip — full-width row, scrollable. NOT a sidebar (mobile users hate
 * sidebars). Each chip carries a small color dot keyed to the category.
 * ────────────────────────────────────────────────────────────────────────── */

function FilterChip({
  active,
  onClick,
  label,
  count,
  color,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  count: number;
  color?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`
        group inline-flex items-center gap-1.5 sm:gap-2
        flex-shrink-0
        px-3 sm:px-3.5 py-1.5
        rounded-full
        text-xs sm:text-sm font-[Arimo] font-medium
        border transition-all duration-200
        focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background
        ${
          active
            ? "border-foreground bg-foreground text-background"
            : "border-border bg-background text-foreground hover:border-foreground/40"
        }
      `}
    >
      {color && !active && (
        <span
          aria-hidden
          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
          style={{ backgroundColor: color }}
        />
      )}
      <span>{label}</span>
      <span
        className={`font-mono text-[10px] tabular-nums ${
          active ? "opacity-70" : "text-muted-foreground"
        }`}
      >
        {count}
      </span>
    </button>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
 * TrailProgress — the page's signature element: a tiny horizontal map of all
 * 21 stations, with the current filter (or position) marked. This is the
 * visual cousin of the vertical line: same metaphor, orthogonal axis.
 * ────────────────────────────────────────────────────────────────────────── */

function TrailProgress({
  total,
  visible,
  activeCategory,
}: {
  total: number;
  visible: number;
  activeCategory: StationCategory | null;
}) {
  const { locale } = useLanguage();
  return (
    <div className="space-y-2">
      <div className="flex items-baseline justify-between font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        <span>
          {activeCategory
            ? `${visible} / ${total} ${locale === "es" ? "visibles" : "visible"}`
            : `${total} ${locale === "es" ? "estaciones" : "stations"}`}
        </span>
        <span>
          {locale === "es" ? "21 M BTC · 2 mi" : "21M BTC · 2 mi"}
        </span>
      </div>
      <div className="relative h-[3px] bg-border/40 rounded-full overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: total > 0 ? visible / total : 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left center" }}
          className="absolute inset-y-0 left-0 right-0 bg-accent"
        />
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
 * Page
 * ────────────────────────────────────────────────────────────────────────── */

export default function TrailIndexPage() {
  const { t, locale } = useLanguage();
  const { theme } = useTheme();
  const { stations, filterByCategory } = useStations();
  const [activeCategory, setActiveCategory] = useState<StationCategory | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const isReducedMotion = useReducedMotion() ?? false;
  const isDark = theme === "dark";

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
    const cats = new Set(
      stations.map((s) => s.category).filter(Boolean) as StationCategory[]
    );
    return categories.filter((c) => cats.has(c.key));
  }, [stations]);

  const countFor = (key: StationCategory) =>
    stations.filter((s) => s.category === key).length;

  const dotColor = (key: StationCategory) =>
    isDark ? categoryTokens[key].dark.line : categoryTokens[key].light.line;

  return (
    <div className="pt-16 sm:pt-20">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="py-10 sm:py-16 border-b border-border">
        <div className="max-w-2xl mx-auto px-5 sm:px-6">
          <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4 sm:mb-5">
            Magnolia · Canadensis, PA
          </p>
          <h1 className="text-[2.5rem] sm:text-5xl lg:text-6xl font-bold font-[Arimo] leading-[0.98] tracking-[-0.02em] text-foreground">
            {locale === "es" ? (
              <>
                El Sendero
                <br />
                <span className="text-accent">de Bitcoin</span>
              </>
            ) : (
              <>
                The Bitcoin
                <br />
                <span className="text-accent">Trail</span>
              </>
            )}
          </h1>
          <p className="mt-5 sm:mt-7 text-base sm:text-lg font-[Arimo] text-foreground/70 leading-relaxed max-w-xl">
            {locale === "es"
              ? "Veintiún estaciones a lo largo de dos millas. Una por cada millón de Bitcoin que existirá."
              : "Twenty-one stations along two miles. One for every million Bitcoin that will ever exist."}
          </p>
          <div className="mt-7 sm:mt-9">
            <TrailProgress
              total={stations.length}
              visible={filteredStations.length}
              activeCategory={activeCategory}
            />
          </div>
        </div>
      </section>

      {/* ── Search + Filters (sticky) ────────────────────────────────── */}
      <section className="sticky top-16 sm:top-20 z-30 bg-background/85 backdrop-blur-md border-b border-border">
        <div className="max-w-2xl mx-auto px-5 sm:px-6 py-3.5 sm:py-4 space-y-3">
          <div className="relative">
            <Search
              aria-hidden
              className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("trailSearchPlaceholder")}
              className="
                w-full pl-7 pr-8 py-2
                bg-transparent
                border-b border-border
                text-sm sm:text-base
                font-[Arimo]
                text-foreground
                placeholder:text-muted-foreground
                outline-none
                focus:border-accent
                transition-colors
              "
              aria-label={t("trailSearchPlaceholder")}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-0 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={locale === "es" ? "Limpiar búsqueda" : "Clear search"}
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div
            className="
              flex gap-2
              overflow-x-auto
              -mx-5 px-5 sm:mx-0 sm:px-0
              pb-1
              [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
            "
          >
            <FilterChip
              active={activeCategory === null}
              onClick={() => setActiveCategory(null)}
              label={t("trailFilterAll")}
              count={stations.length}
            />
            {stationCategories.map((cat) => (
              <FilterChip
                key={cat.key}
                active={activeCategory === cat.key}
                onClick={() =>
                  setActiveCategory(activeCategory === cat.key ? null : cat.key)
                }
                label={categoryLabel[cat.key][locale]}
                count={countFor(cat.key)}
                color={dotColor(cat.key)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Trail pathway (the signature) ────────────────────────────── */}
      <section className="max-w-2xl mx-auto px-5 sm:px-6 py-10 sm:py-14">
        {filteredStations.length === 0 ? (
          <p className="text-center text-muted-foreground font-[Arimo] py-20">
            {t("trailNoResults")}
          </p>
        ) : (
          <div role="list">
            {filteredStations.map((station, i) => (
              <div role="listitem" key={station.slug}>
                <TrailStation
                  station={station}
                  isLast={i === filteredStations.length - 1}
                  index={i}
                  isReducedMotion={isReducedMotion}
                />
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
