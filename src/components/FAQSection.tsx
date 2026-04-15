"use client";

import { motion } from "framer-motion";
import { ExternalLink, HelpCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const BTC_ADDRESS = "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh";

const faqItems = [
  { questionKey: "faqQ1" as const, answerKey: "faqA1" as const },
  { questionKey: "faqQ2" as const, answerKey: "faqA2" as const },
  { questionKey: "faqQ3" as const, answerKey: "faqA3" as const },
  { questionKey: "faqQ4" as const, answerKey: "faqA4" as const },
  { questionKey: "faqQ5" as const, answerKey: "faqA5" as const },
  { questionKey: "faqQ6" as const, answerKey: "faqA6" as const },
];

export default function FAQSection() {
  const { t } = useLanguage();

  return (
    <section
      id="faq"
      className="py-20 sm:py-28 bg-[#F8F9FA] dark:bg-[#060e1a] relative overflow-hidden"
      aria-label="Frequently asked questions"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-10 w-32 h-32 rounded-full border border-[#F89C24]/10"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-10 w-24 h-24 rounded-full border border-[#1E3A6F]/10"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="bg-[#1E3A6F]/10 text-[#1E3A6F] dark:text-blue-300 border-[#1E3A6F]/20 mb-4 inline-flex items-center gap-2 px-4 py-1.5">
            <HelpCircle className="h-3.5 w-3.5" />
            {t("faqBadge")}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1C3A] dark:text-white font-[Arimo] mb-4">
            {t("faqTitle")}
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white dark:bg-[#0d1b30] rounded-2xl shadow-lg border border-[#1E3A6F]/10 dark:border-white/5 overflow-hidden"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-[#1E3A6F]/5 dark:border-white/5 px-6"
              >
                <AccordionTrigger className="text-[#0A1C3A] dark:text-white font-[Arimo] font-bold text-left hover:text-[#F89C24] dark:hover:text-[#F89C24] transition-colors hover:no-underline">
                  {t(item.questionKey)}
                </AccordionTrigger>
                <AccordionContent className="text-[#1E2A3E]/70 dark:text-white/60 font-[Arimo] leading-relaxed">
                  {t(item.answerKey)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Blockchain Verification CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white dark:bg-[#0d1b30] rounded-xl border border-[#1E3A6F]/10 dark:border-white/5 px-6 py-4 shadow-sm">
            <p className="text-sm text-[#1E2A3E]/70 dark:text-white/60 font-[Arimo]">
              {t("faqA1").split(".")[0]}.
            </p>
            <a
              href={`https://mempool.space/address/${BTC_ADDRESS}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#0A1C3A] dark:bg-[#F89C24] text-white hover:bg-[#1E3A6F] dark:hover:bg-[#e08b1a] font-[Arimo] font-bold text-sm shadow-lg transition-all duration-300">
                <ExternalLink className="h-4 w-4 mr-2" />
                {t("faqViewBlockchain")}
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
