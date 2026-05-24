"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { useParams, notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import StationNav from "@/components/StationNav";
import StationCarousel from "@/components/StationCarousel";
import { useStations } from "@/hooks/useStations";
import { useLanguage } from "@/contexts/LanguageContext";

export default function StationPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { locale } = useLanguage();
  const { stations, getBySlug, getAdjacent } = useStations();

  const station = useMemo(() => getBySlug(slug), [slug, getBySlug]);
  const adjacent = useMemo(() => getAdjacent(slug), [slug, getAdjacent]);

  if (!station) {
    notFound();
  }

  return (
    <div className="pt-20 sm:pt-24">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Station number badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Badge className="bg-accent/10 text-accent border-accent/20 font-[Arimo] font-bold text-sm px-4 py-1.5 mb-6">
            {locale === "es" ? "Estación" : "Station"} {station.number}
          </Badge>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-[Arimo] leading-tight mb-8"
        >
          {station.title}
        </motion.h1>

        {/* Highlight block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="border-l-4 border-accent bg-muted/50 rounded-2xl p-5 sm:p-7 mb-10"
        >
          <p className="text-base sm:text-lg text-foreground/90 font-[Arimo] leading-relaxed italic">
            &ldquo;{station.highlight}&rdquo;
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-base sm:text-lg text-foreground/80 font-[Arimo] leading-relaxed whitespace-pre-line">
            {station.content}
          </p>
        </motion.div>

        {/* Image carousel */}
        {station.images && station.images.length > 0 && (
          <StationCarousel images={station.images} />
        )}

        {/* Station navigation */}
        <div className="mt-16">
          <StationNav prev={adjacent.prev} next={adjacent.next} />
        </div>
      </article>
    </div>
  );
}
