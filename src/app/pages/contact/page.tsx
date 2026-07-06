"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  es: {
    title: "Contacto",
    body: "¿Tienes preguntas sobre el proyecto Magnolia Bitcoin Trail? Nos encantaría saber de ti.\n\nCorreo electrónico: contacto@magnoliabitcoin.org\nUbicación: 118 acres, El Salvador\n\nPara consultas sobre donaciones, colaboraciones o visitas guiadas, no dudes en escribirnos.",
  },
  en: {
    title: "Contact",
    body: "Do you have questions about the Magnolia Bitcoin Trail project? We would love to hear from you.\n\nEmail: contacto@magnoliabitcoin.org\nLocation: 118 acres, El Salvador\n\nFor inquiries about donations, partnerships, or guided tours, feel free to reach out.",
  },
};

export default function Contact() {
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
