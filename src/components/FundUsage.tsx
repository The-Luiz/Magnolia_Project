"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const projects = [
  {
    titleKey: "project1Title" as const,
    descKey: "project1Desc" as const,
    image: "/satoshi-statue.avif",
  },
  {
    titleKey: "project2Title" as const,
    descKey: "project2Desc" as const,
    image: "/paisaje-magnolia.avif",
  },
  {
    titleKey: "project3Title" as const,
    descKey: "project3Desc" as const,
    image: "/centro-visitantes.avif",
  },
];

export default function FundUsage() {
  const { t } = useLanguage();

  return (
    <section
      id="fundUsage"
      className="py-20 sm:py-28"
      aria-label="Fund usage projects"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-xs tracking-[0.05em] text-muted-foreground font-[Arimo] font-bold mb-4">
            {t("fundBadge").toUpperCase()}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-[Arimo] mb-4 tracking-tight">
            {t("fundTitle")}
          </h2>
          <p className="text-muted-foreground max-w-xl font-[Arimo] text-sm leading-relaxed">
            {t("fundSubtitle")}
          </p>
        </motion.div>

        {/* Staggered Projects */}
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-12`}>
                {/* Image — 40% */}
                <div className="md:w-[40%] flex-shrink-0">
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-md">
                    <Image
                      src={project.image}
                      alt={t(project.titleKey)}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Text — 60% */}
                <div className="md:w-[60%] flex flex-col justify-center">
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground font-[Arimo] mb-3 tracking-tight">
                    {t(project.titleKey)}
                  </h3>
                  <p className="text-sm text-muted-foreground font-[Arimo] leading-relaxed max-w-lg">
                    {t(project.descKey)}
                  </p>
                </div>
              </div>

              {/* Hairline separator — not after the last item */}
              {index < projects.length - 1 && (
                <hr className="border-t border-border my-16" />
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
