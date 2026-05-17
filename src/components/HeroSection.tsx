"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

function AnimatedLine({ delay, className }: { delay: number; className?: string }) {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: [0, 1, 0.7, 1] }}
      transition={{
        duration: 2.5,
        delay,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut" as const,
      }}
      className={`origin-bottom rounded-full bg-gradient-to-t from-[#F89C24] via-[#F89C24]/40 to-transparent ${className}`}
    />
  );
}

function FloatingParticle({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.6, 0.3, 0.6, 0],
        scale: [0, 1, 0.8, 1.2, 0],
        y: [0, -30, -15, -40, -60],
        x: [0, -10, 5, -5, 0],
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut" as const,
      }}
      className="absolute rounded-full bg-[#F89C24]/30"
      style={{ left: x, top: y, width: size, height: size }}
    />
  );
}

export default function HeroSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <div className="absolute inset-0">
          <Image
            src="/Parque_Imagen.jpg"
            alt="Magnolia Park Background"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            quality={75}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1C3A]/80 via-[#0A1C3A]/60 to-[#0A1C3A]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1C3A]/50 to-transparent" />
      </motion.div>

      {/* Floating Particles */}
      <FloatingParticle delay={0} x="10%" y="70%" size={6} />
      <FloatingParticle delay={1.5} x="25%" y="80%" size={4} />
      <FloatingParticle delay={3} x="75%" y="60%" size={8} />
      <FloatingParticle delay={0.5} x="85%" y="75%" size={5} />
      <FloatingParticle delay={2} x="50%" y="85%" size={3} />
      <FloatingParticle delay={4} x="15%" y="50%" size={5} />
      <FloatingParticle delay={1} x="90%" y="45%" size={4} />
      <FloatingParticle delay={2.5} x="60%" y="90%" size={6} />

      {/* Decorative Lines */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        <AnimatedLine delay={0} className="absolute left-[8%] bottom-0 w-[2px] h-[40%]" />
        <AnimatedLine delay={0.3} className="absolute left-[12%] bottom-0 w-[1px] h-[25%]" />
        <AnimatedLine delay={0.6} className="absolute right-[10%] bottom-0 w-[2px] h-[35%]" />
        <AnimatedLine delay={0.9} className="absolute right-[14%] bottom-0 w-[1px] h-[20%]" />
        <AnimatedLine delay={1.2} className="absolute left-[20%] bottom-0 w-[1px] h-[15%]" />
        <AnimatedLine delay={1.5} className="absolute right-[22%] bottom-0 w-[1.5px] h-[28%]" />

        {/* Horizontal decorative lines */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: [0, 1, 0.8, 1] }}
          transition={{ duration: 3, delay: 0.5, repeat: Infinity, repeatType: "reverse" as const, ease: "easeInOut" as const }}
          className="absolute top-[30%] left-[5%] w-[15%] h-[1px] origin-left bg-gradient-to-r from-[#F89C24] to-transparent"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: [0, 1, 0.7, 1] }}
          transition={{ duration: 3.5, delay: 1, repeat: Infinity, repeatType: "reverse" as const, ease: "easeInOut" as const }}
          className="absolute top-[35%] left-[5%] w-[10%] h-[1px] origin-left bg-gradient-to-r from-[#1E3A6F] to-transparent"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: [0, 1, 0.85, 1] }}
          transition={{ duration: 2.8, delay: 1.5, repeat: Infinity, repeatType: "reverse" as const, ease: "easeInOut" as const }}
          className="absolute bottom-[30%] right-[5%] w-[15%] h-[1px] origin-right bg-gradient-to-l from-[#F89C24] to-transparent"
        />
      </div>

      {/* Content */}
      <motion.div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{ y: textY, opacity }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Badge className="bg-[#F89C24]/15 text-[#F89C24] border-[#F89C24]/30 px-4 py-2 text-sm font-[Arimo] font-bold mb-8 inline-flex items-center gap-2">
            <Coins className="h-4 w-4" />
            {t("heroBadge")}
          </Badge>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-[Arimo] leading-tight">
            <span className="block text-white/90">{t("heroTitle")}</span>
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="inline-block mt-2 bg-gradient-to-r from-[#F89C24] via-[#fbbf24] to-[#F89C24] bg-clip-text text-transparent"
            >
              {t("heroTitleHighlight")}
            </motion.span>
          </h1>
        </motion.div>

        {/* Decorative line under title */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mx-auto w-32 h-[2px] bg-gradient-to-r from-transparent via-[#F89C24] to-transparent mb-8"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-10 font-[Arimo] leading-relaxed"
        >
          {t("heroSubtitle")}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#donate">
            <Button
              size="lg"
              className="bg-[#F89C24] text-white hover:bg-[#e08b1a] font-[Arimo] font-bold text-lg px-8 py-6 shadow-xl shadow-[#F89C24]/25 hover:shadow-[#F89C24]/40 transition-all duration-300 hover:scale-105"
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
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as const }}
        >
          <ArrowDown className="h-6 w-6 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
