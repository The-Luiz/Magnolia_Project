"use client";

import { motion } from "framer-motion";
import StationHeader from "@/components/StationHeader";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  es: {
    title: "Términos de Uso",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum turpis at nisl scelerisque, non feugiat libero tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.\n\nNullam auctor felis eget urna pulvinar, vel placerat velit tempor. Curabitur vel nisi vitae urna sollicitudin euismod. Vivamus eget nisi vitae nunc volutpat convallis. Integer euismod, nulla at consectetur consequat, est neque viverra justo, at congue nulla erat non odio.\n\nMaecenas ut enim non libero maximus efficitur. Donec euismod, nulla at consectetur consequat, est neque viverra justo, at congue nulla erat non odio. Fusce vitae nisi vitae nunc volutpat convallis.",
  },
  en: {
    title: "Terms of Use",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum turpis at nisl scelerisque, non feugiat libero tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.\n\nNullam auctor felis eget urna pulvinar, vel placerat velit tempor. Curabitur vel nisi vitae urna sollicitudin euismod. Vivamus eget nisi vitae nunc volutpat convallis. Integer euismod, nulla at consectetur consequat, est neque viverra justo, at congue nulla erat non odio.\n\nMaecenas ut enim non libero maximus efficitur. Donec euismod, nulla at consectetur consequat, est neque viverra justo, at congue nulla erat non odio. Fusce vitae nisi vitae nunc volutpat convallis.",
  },
};

export default function TermsOfUse() {
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
