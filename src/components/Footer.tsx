"use client";

import { motion } from "framer-motion";
import {
  Bitcoin,
  Mail,
  MapPin,
  Shield,
  FileText,
  Scale,
  ExternalLink,
  Heart,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#0A1C3A] text-white relative overflow-hidden"
      role="contentinfo"
    >
      {/* Top decorative line */}
      <div className="h-1 bg-gradient-to-r from-[#F89C24] via-[#1E3A6F] to-[#F89C24]" />

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#F89C24]/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#1E3A6F]/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <Bitcoin className="h-7 w-7 text-[#F89C24]" />
              <span className="text-xl font-bold font-[Arimo]">Magnolia</span>
            </div>
            <p className="text-white/50 text-sm font-[Arimo] leading-relaxed mb-4">
              {t("footerTagline")}
            </p>
            <div className="flex items-center gap-2 text-[#F89C24]">
              <Heart className="h-4 w-4" />
              <span className="text-sm font-[Arimo]">Bitcoin</span>
            </div>
          </motion.div>

          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-sm font-bold font-[Arimo] uppercase tracking-wider text-white/80 mb-4">
              {t("footerAbout")}
            </h3>
            <p className="text-white/50 text-sm font-[Arimo] leading-relaxed mb-4">
              {t("footerAboutDesc")}
            </p>
            <div className="space-y-2">
              <a
                href="#hero"
                className="block text-white/50 hover:text-[#F89C24] text-sm font-[Arimo] transition-colors"
              >
                {t("navHome")}
              </a>
              <a
                href="#counter"
                className="block text-white/50 hover:text-[#F89C24] text-sm font-[Arimo] transition-colors"
              >
                {t("navCounter")}
              </a>
              <a
                href="#donate"
                className="block text-white/50 hover:text-[#F89C24] text-sm font-[Arimo] transition-colors"
              >
                {t("navDonate")}
              </a>
            </div>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-sm font-bold font-[Arimo] uppercase tracking-wider text-white/80 mb-4">
              {t("footerLegal")}
            </h3>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center gap-2 text-white/50 hover:text-[#F89C24] text-sm font-[Arimo] transition-colors"
              >
                <Shield className="h-3.5 w-3.5" />
                {t("footerPrivacy")}
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-white/50 hover:text-[#F89C24] text-sm font-[Arimo] transition-colors"
              >
                <Scale className="h-3.5 w-3.5" />
                {t("footerTerms")}
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-white/50 hover:text-[#F89C24] text-sm font-[Arimo] transition-colors"
              >
                <FileText className="h-3.5 w-3.5" />
                {t("footerAudit")}
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-white/50 hover:text-[#F89C24] text-sm font-[Arimo] transition-colors"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                {t("footerDisclaimer")}
              </a>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-sm font-bold font-[Arimo] uppercase tracking-wider text-white/80 mb-4">
              {t("footerContact")}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#F89C24] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/50 text-sm font-[Arimo]">{t("footerAddress")}</p>
                  <p className="text-white/50 text-sm font-[Arimo]">{t("footerAddressDetail")}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#F89C24] flex-shrink-0" />
                <a
                  href={`mailto:${t("footerEmail")}`}
                  className="text-white/50 hover:text-[#F89C24] text-sm font-[Arimo] transition-colors"
                >
                  {t("footerEmail")}
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs font-[Arimo] text-center sm:text-left">
            © {currentYear} Magnolia Bitcoin Memorial. {t("footerRights")}
          </p>
          <p className="text-white/30 text-xs font-[Arimo] text-center sm:text-right max-w-md">
            {t("footerDisclaimerText")}
          </p>
        </div>
      </div>
    </footer>
  );
}
