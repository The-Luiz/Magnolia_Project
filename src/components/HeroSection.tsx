"use client";

import { ArrowDown, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0">
          <Image
            src="/Parque_Imagen.avif"
            alt="Magnolia Park Background"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            quality={30}
            loading="eager"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1C3A]/80 via-[#0A1C3A]/60 to-[#0A1C3A]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1C3A]/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <div className="mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-[Arimo] leading-tight">
            <span className="block text-white/90">{t("heroTitle")}</span>
            <span className="inline-block mt-2 bg-gradient-to-r from-[#F89C24] via-[#fbbf24] to-[#F89C24] bg-clip-text text-transparent">
              {t("heroTitleHighlight")}
            </span>
          </h1>
        </div>

        {/* Decorative line under title */}
        <div className="mx-auto w-32 h-[2px] bg-gradient-to-r from-transparent via-[#F89C24] to-transparent mb-8" />

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-10 font-[Arimo] leading-relaxed">
          {t("heroSubtitle")}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#donate">
            <Button
              size="lg"
              className="bg-[#F89C24] text-white hover:bg-[#e08b1a] font-[Arimo] font-bold text-lg px-8 py-6 shadow-xl shadow-[#F89C24]/25 hover:shadow-[#F89C24]/40 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Coins className="mr-2 h-5 w-5" />
              {t("heroCTA")}
            </Button>
          </a>
          <a href="#fundUsage">
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white font-[Arimo] font-medium text-lg px-8 py-6 transition-all duration-300"
            >
              {t("heroLearnMore")}
            </Button>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10" aria-hidden="true">
        <ArrowDown className="h-6 w-6 text-white/50" />
      </div>
    </section>
  );
}