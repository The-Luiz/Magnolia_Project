"use client";

import { motion } from "framer-motion";
import { useParams, notFound } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

const pageContent: Record<string, { title: Record<string, string>; content: Record<string, string> }> = {
  "sobre-nosotros": {
    title: { es: "Sobre Nosotros", en: "About Us" },
    content: {
      es: "Magnolia es un proyecto dedicado a preservar y celebrar el legado de Satoshi Nakamoto y la revolución de Bitcoin. Nuestro objetivo es construir un monumento vivo de 118 acres que eduque e inspire a las futuras generaciones sobre el dinero sólido, la libertad financiera y la innovación tecnológica.\n\nCreemos que Bitcoin es una de las invenciones más importantes de la humanidad y merece un lugar sagrado donde las personas puedan aprender, reflexionar y conectarse con esta tecnología transformadora.",
      en: "Magnolia is a project dedicated to preserving and celebrating the legacy of Satoshi Nakamoto and the Bitcoin revolution. Our goal is to build a 118-acre living monument that educates and inspires future generations about sound money, financial freedom, and technological innovation.\n\nWe believe Bitcoin is one of humanity's most important inventions and deserves a sacred place where people can learn, reflect, and connect with this transformative technology.",
    },
  },
  "contacto": {
    title: { es: "Contacto", en: "Contact" },
    content: {
      es: "¿Tienes preguntas sobre el proyecto Magnolia Bitcoin Trail? Nos encantaría saber de ti.\n\nCorreo electrónico: contacto@magnoliabitcoin.org\nUbicación: 118 acres, El Salvador\n\nPara consultas sobre donaciones, colaboraciones o visitas guiadas, no dudes en escribirnos.",
      en: "Do you have questions about the Magnolia Bitcoin Trail project? We would love to hear from you.\n\nEmail: contacto@magnoliabitcoin.org\nLocation: 118 acres, El Salvador\n\nFor inquiries about donations, partnerships, or guided tours, feel free to reach out.",
    },
  },
};

export default function GenericPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { locale } = useLanguage();

  const page = pageContent[slug];

  if (!page) {
    notFound();
  }

  const title = page.title[locale] || page.title["es"];
  const content = page.content[locale] || page.content["es"];

  return (
    <div className="pt-20 sm:pt-24">
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
          {content.split("\n\n").map((paragraph, i) => (
            <p
              key={i}
              className="text-base sm:text-lg text-foreground/80 font-[Arimo] leading-relaxed mb-6 last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </motion.div>
      </article>
    </div>
  );
}
