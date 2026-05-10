"use client";

import { motion } from "framer-motion";
import {
  Shield,
  FileText,
  Scale,
  ExternalLink,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#0A1C3A] text-white relative overflow-hidden font-[Arimo]"
      role="contentinfo"
    >
      {/* Top decorative line */}
      <div className="h-1 bg-gradient-to-r from-[#F89C24] via-[#1E3A6F] to-[#F89C24]" />

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#F89C24]/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#1E3A6F]/10 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Columna 1: Marca */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img src="/logo.svg" alt="Magnolia Logo" className="h-8 mb-4" />
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              {t("footerAboutDesc")}
            </p>
            <p className="text-white/40 text-sm leading-relaxed">
              {t("footerTagline")}
            </p>
          </motion.div>

          {/* Columna 2: Enlaces Legales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/80 mb-4">
              {t("footerLegal")}
            </h3>
            <div className="flex flex-col space-y-2 text-sm text-white/80">
              <a href="#" className="flex items-center gap-2 hover:text-[#F89C24] transition-colors">
                <Shield className="h-3.5 w-3.5" />
                {t("footerPrivacy")}
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-[#F89C24] transition-colors">
                <Scale className="h-3.5 w-3.5" />
                {t("footerTerms")}
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-[#F89C24] transition-colors">
                <FileText className="h-3.5 w-3.5" />
                {t("footerAudit")}
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-[#F89C24] transition-colors">
                <ExternalLink className="h-3.5 w-3.5" />
                {t("footerDisclaimer")}
              </a>
            </div>
          </motion.div>

          {/* Columna 3: Ubicación */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-sm font-bold uppercase tracking-wider text-[#F89C24] mb-4">
              {t("footerLocationLabel")}
            </p>
            <div className="rounded-xl overflow-hidden border border-white/10 h-48">
              <iframe
                title="Magnolia Memorial Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3002.0589796420695!2d-75.24899972378601!3d41.198687707678296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c49137e784a725%3A0xd31b7584fef8d0e5!2sMagnolia%20Streamside%20Resort%20Weddings%20%7C%20Pocono%20Wedding%20and%20Event%20Venue!5e0!3m2!1ses-419!2ssv!4v1778453848122!5m2!1ses-419!2ssv"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © {currentYear} Magnolia Bitcoin Memorial. {t("footerRights")}
          </p>
          <p className="text-white/30 text-xs text-center sm:text-right max-w-md">
            {t("footerDisclaimerText")}
          </p>
        </div>
      </div>
    </footer>
  );
}
