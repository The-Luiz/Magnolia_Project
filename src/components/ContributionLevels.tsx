"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  MapPin,
  Ticket,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

const levels = [
  {
    amountKey: "level1Amount" as const,
    titleKey: "level1Title" as const,
    descKey: "level1Desc" as const,
    icon: Monitor,
    color: "from-[#073b9f] to-[#173771]",
    iconBg: "bg-[#1E3A6F] text-white",
    borderColor: "border-[#1E3A6F]/20 dark:border-[#1E3A6F]/30",
    hoverBorder: "hover:border-[#1E3A6F]/50",
  },
  {
    amountKey: "level2Amount" as const,
    titleKey: "level2Title" as const,
    descKey: "level2Desc" as const,
    icon: MapPin,
    color: "from-[#F89C24] to-[#fbbf24]",
    iconBg: "bg-[#F89C24] text-white",
    borderColor: "border-[#F89C24]/20 dark:border-[#F89C24]/30",
    hoverBorder: "hover:border-[#F89C24]/50",
    featured: true,
  },
  {
    amountKey: "level3Amount" as const,
    titleKey: "level3Title" as const,
    descKey: "level3Desc" as const,
    icon: Ticket,
    color: "from-amber-600 to-amber-400",
    iconBg: "bg-amber-600 text-white",
    borderColor: "border-amber-600/20 dark:border-amber-500/30",
    hoverBorder: "hover:border-amber-600/50",
  },
  {
    amountKey: "level4Amount" as const,
    titleKey: "level4Title" as const,
    descKey: "level4Desc" as const,
    icon: Sparkles,
    color: "from-[#c2c0c9] to-[#7a7981]",
    iconBg: "bg-[#0A1C3A] text-white",
    borderColor: "border-[#0A1C3A]/20 dark:border-[#0A1C3A]/30",
    hoverBorder: "hover:border-[#0A1C3A]/50",
    premium: true,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function ContributionLevels() {
  const { t } = useLanguage();

  return (
    <section
      id="levels"
      className="py-20 sm:py-28 bg-[#F8F9FA] dark:bg-[#060e1a] relative overflow-hidden"
      aria-label="Contribution levels"
    >
      {/* Animated background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-0 w-96 h-96 bg-[#F89C24]/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -40, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#1E3A6F]/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="bg-[#F89C24]/10 text-[#F89C24] border-[#F89C24]/20 mb-4 inline-flex items-center gap-2 px-4 py-1.5">
            {t("levelsBadge")}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1C3A] dark:text-white font-[Arimo] mb-4">
            {t("levelsTitle")}
          </h2>
          <p className="text-[#1E2A3E]/70 dark:text-white/60 max-w-2xl mx-auto font-[Arimo]">
            {t("levelsSubtitle")}
          </p>
        </motion.div>

        {/* Levels Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {levels.map((level, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative bg-white dark:bg-[#0d1b30] rounded-2xl border ${level.borderColor} ${level.hoverBorder} p-6 transition-all duration-300 shadow-md hover:shadow-xl group overflow-hidden ${
                level.premium ? "ring-2 ring-[#F89C24]/30 dark:ring-[#F89C24]/20" : ""
              }`}
            >
              {/* Premium badge */}
              {level.premium && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-l from-[#F89C24] to-[#fbbf24] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl font-[Arimo] uppercase tracking-wider">
                    Premium
                  </div>
                </div>
              )}

              {/* Featured indicator */}
              {level.featured && (
                <div className="absolute -top-1 left-1/2 -translate-x-1/2">
                  <div className="w-6 h-6 bg-[#F89C24] rotate-45" />
                </div>
              )}

              {/* Icon */}
              <div className="mb-5">
                <div className={`w-14 h-14 rounded-2xl ${level.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <level.icon className="h-7 w-7" />
                </div>
              </div>

              {/* Amount */}
              <div className="mb-3">
                <span className={`text-3xl font-bold bg-gradient-to-r ${level.color} bg-clip-text text-transparent font-[Arimo]`}>
                  {t(level.amountKey)}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#0A1C3A] dark:text-white font-[Arimo] mb-2">
                {t(level.titleKey)}
              </h3>

              {/* Description */}
              <p className="text-[#1E2A3E]/70 dark:text-white/60 font-[Arimo] text-sm leading-relaxed">
                {t(level.descKey)}
              </p>

              {/* Bottom gradient */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${level.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
