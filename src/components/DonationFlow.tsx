"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Copy,
  Check,
  ExternalLink,
  Shield,
  QrCode,
  Wallet,
  DollarSign,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const BTC_ADDRESS = "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh";

const steps = [
  { icon: Wallet, titleKey: "donateStep1Title" as const, descKey: "donateStep1Desc" as const },
  { icon: QrCode, titleKey: "donateStep2Title" as const, descKey: "donateStep2Desc" as const },
  { icon: DollarSign, titleKey: "donateStep3Title" as const, descKey: "donateStep3Desc" as const },
  { icon: Check, titleKey: "donateStep4Title" as const, descKey: "donateStep4Desc" as const },
];

export default function DonationFlow() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [qrData, setQrData] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadQR() {
      try {
        const res = await fetch(`/api/qr-code?address=${encodeURIComponent(BTC_ADDRESS)}`);
        if (res.ok && !cancelled) {
          const data = await res.json();
          setQrData(data.qr);
        }
      } catch {
        // QR generation failed silently
      }
    }

    loadQR();

    return () => {
      cancelled = true;
    };
  }, []);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(BTC_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = BTC_ADDRESS;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <section
      id="donate"
      className="py-20 sm:py-28 bg-[#FFFFFF] dark:bg-[#0A1C3A] relative overflow-hidden"
      aria-label="Donation flow"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F89C24] rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.03, 0.05, 0.03] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1E3A6F] rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="bg-[#F89C24]/10 text-[#F89C24] border-[#F89C24]/20 mb-4 inline-flex items-center gap-2 px-4 py-1.5">
            <Wallet className="h-3.5 w-3.5" />
            {t("donateBadge")}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1C3A] dark:text-white font-[Arimo] mb-4">
            {t("donateTitle")}
          </h2>
          <p className="text-[#1E2A3E]/70 dark:text-white/60 max-w-2xl mx-auto font-[Arimo]">
            {t("donateSubtitle")}
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: QR + Wallet Address */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#F8F9FA] dark:bg-[#0d1b30] rounded-2xl border border-[#1E3A6F]/10 dark:border-white/5 p-6 sm:p-8 flex flex-col items-center"
          >
            {/* QR Code */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-white/5 mb-6">
              {qrData ? (
                <img
                  src={qrData}
                  alt="Bitcoin donation QR code"
                  className="w-56 h-56 sm:w-64 sm:h-64 mx-auto"
                  width={256}
                  height={256}
                />
              ) : (
                <div className="w-56 h-56 sm:w-64 sm:h-64 mx-auto flex items-center justify-center bg-gray-100 dark:bg-white/5 rounded-xl">
                  <QrCode className="h-16 w-16 text-gray-300 dark:text-white/10 animate-pulse" />
                </div>
              )}
            </div>

            {/* Wallet Address */}
            <div className="w-full mb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#F89C24]/10 flex items-center justify-center">
                  <Wallet className="h-5 w-5 text-[#F89C24]" />
                </div>
                <h3 className="text-lg font-bold text-[#0A1C3A] dark:text-white font-[Arimo]">
                  {t("donateWalletLabel")}
                </h3>
              </div>
              <code className="block text-xs sm:text-sm text-[#0A1C3A] dark:text-white font-mono break-all leading-relaxed mb-3">
                {BTC_ADDRESS}
              </code>
              <Button
                onClick={copyAddress}
                className="w-full bg-[#0A1C3A] dark:bg-white text-white dark:text-[#0A1C3A] hover:bg-[#1E3A6F] dark:hover:bg-white/90 font-[Arimo] font-medium text-sm transition-all duration-300 rounded-xl"
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.span
                      key="copied"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="inline-flex items-center gap-2 text-green-400 dark:text-green-500"
                    >
                      <Check className="h-4 w-4" />
                      {t("donateCopied")}
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copy"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="inline-flex items-center gap-2"
                    >
                      <Copy className="h-4 w-4" />
                      {t("donateCopyButton")}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Button>
            </div>

            {/* Blockchain Verify Link */}
            <a
              href={`https://mempool.space/address/${BTC_ADDRESS}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#1E3A6F] dark:text-[#F89C24] hover:underline font-[Arimo] font-medium text-sm transition-colors"
            >
              <Shield className="h-4 w-4" />
              {t("donateVerify")}
              <ExternalLink className="h-3 w-3" />
            </a>
          </motion.div>

          {/* Right: Step-by-step instructions */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#F8F9FA] dark:bg-[#0d1b30] rounded-2xl border border-[#1E3A6F]/10 dark:border-white/5 p-6 sm:p-8"
          >
            <h3 className="text-xl font-bold text-[#0A1C3A] dark:text-white font-[Arimo] mb-6">
              {t("donateInstructionsTitle")}
            </h3>

            <ul className="space-y-6">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#0A1C3A] dark:bg-white/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-white dark:text-white/80" />
                    </div>
                    <div>
                      <strong className="block text-[#0A1C3A] dark:text-white font-[Arimo] group-hover:text-[#F89C24] dark:group-hover:text-[#F89C24] transition-colors">
                        {t(step.titleKey)}
                      </strong>
                      <span className="text-[#1E2A3E]/70 dark:text-white/60 font-[Arimo] text-sm">
                        {t(step.descKey)}
                      </span>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
