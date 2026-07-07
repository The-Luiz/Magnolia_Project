"use client";

import { motion } from "framer-motion";
import StationHeader from "@/components/StationHeader";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  es: {
    title: "Auditoría Financiera",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla at consectetur consequat, est neque viverra justo, at congue nulla erat non odio. Cras dapibus auctor justo, vitae faucibus nisi gravida vitae.\n\nDonec euismod, nulla at consectetur consequat, est neque viverra justo, at congue nulla erat non odio. Phasellus imperdiet, nulla at consectetur consequat, est neque viverra justo.\n\nSuspendisse potenti. Integer euismod, nulla at consectetur consequat, est neque viverra justo, at congue nulla erat non odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
  },
  en: {
    title: "Financial Audit",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla at consectetur consequat, est neque viverra justo, at congue nulla erat non odio. Cras dapibus auctor justo, vitae faucibus nisi gravida vitae.\n\nDonec euismod, nulla at consectetur consequat, est neque viverra justo, at congue nulla erat non odio. Phasellus imperdiet, nulla at consectetur consequat, est neque viverra justo.\n\nSuspendisse potenti. Integer euismod, nulla at consectetur consequat, est neque viverra justo, at congue nulla erat non odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
  },
};

export default function FinancialAudit() {
  const { locale } = useLanguage();
  const { title, body } = content[locale] || content.es;

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      <StationHeader hideBack />
      <main className="flex-1 pt-20 sm:pt-24">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl font-bold text-foreground font-[Arimo] leading-tight mb-8"
          >
            {title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {body.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="text-base sm:text-lg text-foreground/80 font-[Arimo] leading-relaxed mb-6 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
