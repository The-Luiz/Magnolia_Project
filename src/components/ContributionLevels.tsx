"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const levels = [
  {
    amountKey: "level1Amount" as const,
    titleKey: "level1Title" as const,
    descKey: "level1Desc" as const,
    amountColor: "text-[#1E3A6F] dark:text-blue-300",
  },
  {
    amountKey: "level2Amount" as const,
    titleKey: "level2Title" as const,
    descKey: "level2Desc" as const,
    amountColor: "text-accent",
  },
  {
    amountKey: "level3Amount" as const,
    titleKey: "level3Title" as const,
    descKey: "level3Desc" as const,
    amountColor: "text-[#7FB3FF]",
  },
  {
    amountKey: "level4Amount" as const,
    titleKey: "level4Title" as const,
    descKey: "level4Desc" as const,
    amountColor: "text-[#FFD166]",
  },
];

export default function ContributionLevels() {
  const { t } = useLanguage();

  return (
    <section
      id="levels"
      className="py-20 sm:py-28"
      aria-label="Contribution levels"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.05em] text-muted-foreground font-[Arimo] font-bold mb-4">
            {t("levelsBadge").toUpperCase()}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-[Arimo] mb-4 tracking-tight">
            {t("levelsTitle")}
          </h2>
          <p className="text-muted-foreground font-[Arimo] text-sm leading-relaxed">
            {t("levelsSubtitle")}
          </p>
        </motion.div>

        {/* Tiers — typographic table */}
        <div className="border-t border-border">
          {levels.map((level, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b border-border py-8 sm:py-10"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8">
                {/* Amount — display, semantic color */}
                <div className="sm:w-32 flex-shrink-0">
                  <span className={`text-3xl sm:text-4xl font-bold font-[Arimo] tracking-tight ${level.amountColor}`}>
                    {t(level.amountKey)}
                  </span>
                </div>

                {/* Title + Description */}
                <div>
                  <h3 className="text-lg font-bold text-foreground font-[Arimo] mb-1 tracking-tight">
                    {t(level.titleKey)}
                  </h3>
                  <p className="text-sm text-muted-foreground font-[Arimo] leading-relaxed max-w-lg">
                    {t(level.descKey)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
