"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Station } from "@/lib/stations";

interface StationNavProps {
  prev: Station | null;
  next: Station | null;
}

export default function StationNav({ prev, next }: StationNavProps) {
  const { locale } = useLanguage();

  const prevLabel = locale === "es" ? "Anterior" : "Previous";
  const nextLabel = locale === "es" ? "Siguiente" : "Next";

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-8 border-t border-border"
      aria-label="Station navigation"
    >
      {prev ? (
        <Link href={`/trail/${prev.slug}`} className="group flex-1">
          <Button
            variant="outline"
            className="w-full h-auto flex-col items-start gap-1 p-4 rounded-xl border-border hover:border-accent/50 hover:bg-accent/5 transition-all"
          >
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground group-hover:text-accent transition-colors">
              <ArrowLeft className="h-3.5 w-3.5" />
              {prevLabel}
            </span>
            <span className="text-sm font-semibold text-foreground text-left leading-tight group-hover:text-accent transition-colors">
              {locale === "es" ? "Estación" : "Station"} {prev.number}: {prev.title}
            </span>
          </Button>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {next ? (
        <Link href={`/trail/${next.slug}`} className="group flex-1">
          <Button
            variant="outline"
            className="w-full h-auto flex-col items-end gap-1 p-4 rounded-xl border-border hover:border-accent/50 hover:bg-accent/5 transition-all"
          >
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground group-hover:text-accent transition-colors">
              {nextLabel}
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
            <span className="text-sm font-semibold text-foreground text-right leading-tight group-hover:text-accent transition-colors">
              {locale === "es" ? "Estación" : "Station"} {next.number}: {next.title}
            </span>
          </Button>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </motion.nav>
  );
}
