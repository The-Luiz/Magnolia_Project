"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Copy,
  Check,
  ExternalLink,
  Shield,
  AlertTriangle,
  QrCode,
  Wallet,
  ArrowRight,
  Eye,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const BTC_ADDRESS = "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh";

export default function DonationFlow() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [qrData, setQrData] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  // Fetch QR code via external subscription pattern
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
      // Fallback for older browsers
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

  const steps = [
    { num: "01", textKey: "donateStep1" as const },
    { num: "02", textKey: "donateStep2" as const },
    { num: "03", textKey: "donateStep3" as const },
    { num: "04", textKey: "donateStep4" as const },
    { num: "05", textKey: "donateStep5" as const },
  ];

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

        {/* Donation Card Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Wallet Address Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#F8F9FA] dark:bg-[#0d1b30] rounded-2xl border border-[#1E3A6F]/10 dark:border-white/5 p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#F89C24]/10 flex items-center justify-center">
                <Wallet className="h-5 w-5 text-[#F89C24]" />
              </div>
              <h3 className="text-lg font-bold text-[#0A1C3A] dark:text-white font-[Arimo]">
                {t("donateWalletLabel")}
              </h3>
            </div>

            {/* Address with copy */}
            <div className="bg-white dark:bg-[#0A1C3A] rounded-xl border border-[#1E3A6F]/10 dark:border-white/5 p-4 mb-6">
              <code className="text-xs sm:text-sm text-[#0A1C3A] dark:text-white font-mono break-all leading-relaxed">
                {BTC_ADDRESS}
              </code>
              <Button
                onClick={copyAddress}
                className="mt-3 w-full bg-[#0A1C3A] dark:bg-white text-white dark:text-[#0A1C3A] hover:bg-[#1E3A6F] dark:hover:bg-white/90 font-[Arimo] font-medium text-sm transition-all duration-300"
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

            {/* Blockchain Verify */}
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

          {/* QR Code Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#F8F9FA] dark:bg-[#0d1b30] rounded-2xl border border-[#1E3A6F]/10 dark:border-white/5 p-6 sm:p-8 flex flex-col items-center justify-center"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#1E3A6F]/10 flex items-center justify-center">
                <QrCode className="h-5 w-5 text-[#1E3A6F] dark:text-blue-300" />
              </div>
              <h3 className="text-lg font-bold text-[#0A1C3A] dark:text-white font-[Arimo]">
                {t("donateQRTitle")}
              </h3>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-white/5 mb-4">
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

            <p className="text-xs text-[#1E2A3E]/50 dark:text-white/40 font-[Arimo] text-center">
              Bitcoin: {BTC_ADDRESS.slice(0, 12)}...{BTC_ADDRESS.slice(-8)}
            </p>
          </motion.div>
        </div>

        {/* Transfer Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#F8F9FA] dark:bg-[#0d1b30] rounded-2xl border border-[#1E3A6F]/10 dark:border-white/5 p-6 sm:p-8 mb-8"
        >
          <h3 className="text-xl font-bold text-[#0A1C3A] dark:text-white font-[Arimo] mb-6 flex items-center gap-2">
            <ArrowRight className="h-5 w-5 text-[#F89C24]" />
            {t("donateInstructionsTitle")}
          </h3>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0A1C3A] dark:bg-white/10 flex items-center justify-center text-white text-sm font-bold font-[Arimo]">
                  {step.num}
                </div>
                <p className="text-[#1E2A3E]/80 dark:text-white/70 font-[Arimo] pt-2 group-hover:text-[#0A1C3A] dark:group-hover:text-white transition-colors">
                  {t(step.textKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Warning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/30 rounded-xl p-4 sm:p-5 flex items-start gap-3"
        >
          <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800 dark:text-amber-200 font-[Arimo] leading-relaxed">
            {t("donateWarning")}
          </p>
        </motion.div>

        {/* Visual Feedback Toggle */}
        <div className="mt-8 text-center">
          <Button
            variant="outline"
            onClick={() => setShowFeedback(!showFeedback)}
            className="border-[#1E3A6F]/20 dark:border-white/10 text-[#1E3A6F] dark:text-white/70 hover:bg-[#1E3A6F]/5 font-[Arimo]"
          >
            <Eye className="h-4 w-4 mr-2" />
            {t("donateFeedbackTitle")}
          </Button>

          <AnimatePresence>
            {showFeedback && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 overflow-hidden"
              >
                <div className="bg-[#F8F9FA] dark:bg-[#0d1b30] rounded-xl border border-[#1E3A6F]/10 dark:border-white/5 p-6 max-w-lg mx-auto text-center">
                  <Shield className="h-12 w-12 text-[#F89C24] mx-auto mb-3" />
                  <p className="text-[#1E2A3E]/70 dark:text-white/60 font-[Arimo] text-sm">
                    {t("donateFeedbackDesc")}
                  </p>
                  <a
                    href={`https://mempool.space/address/${BTC_ADDRESS}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#1E3A6F] dark:text-[#F89C24] hover:underline font-[Arimo] font-medium text-sm mt-3"
                  >
                    {t("donateVerify")}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
