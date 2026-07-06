"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  es: {
    title: "Aviso Legal",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit.\n\nVestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec rutrum congue leo eget malesuada quisque velit nisi, pretium ut lacinia in, elementum id enim.\n\nCurabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum id orci porta dapibus.",
  },
  en: {
    title: "Legal Disclaimer",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit.\n\nVestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec rutrum congue leo eget malesuada quisque velit nisi, pretium ut lacinia in, elementum id enim.\n\nCurabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum id orci porta dapibus.",
  },
};

export default function LegalDisclaimer() {
  const { locale } = useLanguage();
  const { title, body } = content[locale] || content.es;

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      <Header />
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
