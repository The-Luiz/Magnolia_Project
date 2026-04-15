"use client";

import { motion } from "framer-motion";
import { Landmark, TreePine, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

const projects = [
  {
    titleKey: "project1Title" as const,
    descKey: "project1Desc" as const,
    image: "/satoshi-statue.png",
    icon: Landmark,
    accent: "from-[#F89C24]/20 to-transparent",
    iconBg: "bg-[#F89C24]/10 text-[#F89C24]",
  },
  {
    titleKey: "project2Title" as const,
    descKey: "project2Desc" as const,
    image: "/bitcoin-trail.png",
    icon: TreePine,
    accent: "from-[#1E3A6F]/20 to-transparent",
    iconBg: "bg-[#1E3A6F]/10 text-[#1E3A6F] dark:text-blue-300",
  },
  {
    titleKey: "project3Title" as const,
    descKey: "project3Desc" as const,
    image: "/bitcoin-trail.png",
    icon: Building2,
    accent: "from-emerald-500/20 to-transparent",
    iconBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function FundUsage() {
  const { t } = useLanguage();

  return (
    <section
      id="fundUsage"
      className="py-20 sm:py-28 bg-[#F8F9FA] dark:bg-[#0A1C3A] relative overflow-hidden"
      aria-label="Fund usage projects"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231E3A6F' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="bg-[#1E3A6F]/10 text-[#1E3A6F] dark:text-blue-300 border-[#1E3A6F]/20 mb-4 inline-flex items-center gap-2 px-4 py-1.5">
            {t("fundBadge")}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1C3A] dark:text-white font-[Arimo] mb-4">
            {t("fundTitle")}
          </h2>
          <p className="text-[#1E2A3E]/70 dark:text-white/60 max-w-2xl mx-auto font-[Arimo]">
            {t("fundSubtitle")}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white dark:bg-[#0d1b30] rounded-2xl shadow-lg border border-[#1E3A6F]/5 dark:border-white/5 overflow-hidden hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${project.image}')` }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.accent}`} />
                <div className="absolute top-4 left-4">
                  <div className={`w-10 h-10 rounded-xl ${project.iconBg} flex items-center justify-center`}>
                    <project.icon className="h-5 w-5" />
                  </div>
                </div>
                {index === 0 && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#F89C24] text-white text-xs font-bold px-3 py-1 rounded-full font-[Arimo]">
                      Proyecto Principal
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0A1C3A] dark:text-white font-[Arimo] mb-3">
                  {t(project.titleKey)}
                </h3>
                <p className="text-[#1E2A3E]/70 dark:text-white/60 font-[Arimo] text-sm leading-relaxed">
                  {t(project.descKey)}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="h-1 w-full bg-gradient-to-r from-[#F89C24] via-[#1E3A6F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
