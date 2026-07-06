"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  es: {
    title: "Sobre Nosotros",
    body: "Magnolia es un proyecto dedicado a preservar y celebrar el legado de Satoshi Nakamoto y la revolución de Bitcoin. Nuestro objetivo es construir un monumento vivo de 118 acres que eduque e inspire a las futuras generaciones sobre el dinero sólido, la libertad financiera y la innovación tecnológica.\n\nCreemos que Bitcoin es una de las invenciones más importantes de la humanidad y merece un lugar sagrado donde las personas puedan aprender, reflexionar y conectarse con esta tecnología transformadora.",
  },
  en: {
    title: "About Us",
    body: "Magnolia is a project dedicated to preserving and celebrating the legacy of Satoshi Nakamoto and the Bitcoin revolution. Our goal is to build a 118-acre living monument that educates and inspires future generations about sound money, financial freedom, and technological innovation.\n\nWe believe Bitcoin is one of humanity's most important inventions and deserves a sacred place where people can learn, reflect, and connect with this transformative technology.",
  },
};

export default function AboutUs() {
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
