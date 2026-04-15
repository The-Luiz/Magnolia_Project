"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { RefreshCw, ExternalLink, Wifi, WifiOff } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/contexts/LanguageContext";

interface BTCDalance {
  address: string;
  balance_satoshi: number;
  balance_btc: number;
  tx_count: number;
  usd_approximate: number;
  goal_usd: number;
  goal_btc: number;
  progress_percent: number;
}

function CountUp({ target, decimals = 8, prefix = "" }: { target: number; decimals?: number; prefix?: string }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = target * eased;
      setValue(start);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target]);

  return (
    <span>
      {prefix}
      {value.toFixed(decimals)}
    </span>
  );
}

export default function LiveCounter() {
  const { t } = useLanguage();
  const [data, setData] = useState<BTCDalance | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [isOnline, setIsOnline] = useState(true);

  const fetchBalance = useCallback(async () => {
    try {
      const res = await fetch("/api/btc-balance");
      if (!res.ok) throw new Error("Fetch failed");
      const json = await res.json();
      setData(json);
      setLastUpdated(new Date());
      setIsOnline(true);
    } catch {
      setIsOnline(false);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBalance();
    const interval = setInterval(fetchBalance, 30000);
    return () => clearInterval(interval);
  }, [fetchBalance]);

  const formatUSD = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section
      id="counter"
      className="py-20 sm:py-28 bg-gradient-to-b from-[#0A1C3A] via-[#0d2244] to-[#F8F9FA] dark:via-[#060e1a] dark:to-[#0A1C3A] relative overflow-hidden"
      aria-label="Live fundraising counter"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full border border-[#F89C24]/10"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full border border-[#1E3A6F]/20"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="bg-[#1E3A6F]/20 text-[#1E3A6F] dark:text-blue-300 border-[#1E3A6F]/30 mb-4 inline-flex items-center gap-2 px-4 py-1.5">
            <Wifi className="h-3.5 w-3.5" />
            {t("counterBadge")}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1C3A] dark:text-white font-[Arimo] mb-4">
            {t("counterTitle")}
          </h2>
          <p className="text-[#1E2A3E]/70 dark:text-white/60 max-w-2xl mx-auto font-[Arimo]">
            {t("counterSubtitle")}
          </p>
        </motion.div>

        {/* Counter Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white dark:bg-[#0d1b30] rounded-2xl shadow-2xl border border-[#1E3A6F]/10 dark:border-white/5 p-6 sm:p-10"
        >
          {/* Status bar */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div className={`w-2.5 h-2.5 rounded-full ${isOnline ? "bg-green-500" : "bg-red-500"} animate-pulse`} />
              <span className="text-sm text-[#1E2A3E]/60 dark:text-white/50 font-[Arimo]">
                {isOnline ? "● Live" : "● Offline"}
              </span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={fetchBalance}
              disabled={loading}
              className="text-[#1E3A6F] dark:text-white/70 hover:bg-[#1E3A6F]/10"
            >
              <RefreshCw className={`h-4 w-4 mr-1 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </Button>
          </div>

          {/* Main Balance */}
          {loading && !data ? (
            <div className="text-center py-12">
              <div className="inline-block w-12 h-12 border-4 border-[#F89C24]/20 border-t-[#F89C24] rounded-full animate-spin" />
              <p className="mt-4 text-[#1E2A3E]/60 dark:text-white/50 font-[Arimo]">
                {t("counterUpdated")}...
              </p>
            </div>
          ) : data ? (
            <>
              <div className="text-center mb-8">
                <p className="text-sm text-[#1E2A3E]/60 dark:text-white/50 mb-2 font-[Arimo] uppercase tracking-wider">
                  {t("counterRaised")}
                </p>
                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#0A1C3A] dark:text-white font-[Arimo] mb-2">
                  <CountUp target={data.balance_btc} decimals={8} />
                  <span className="text-2xl sm:text-3xl text-[#F89C24] ml-2">BTC</span>
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-[#1E3A6F] dark:text-[#F89C24] font-[Arimo]">
                  ≈ {formatUSD(data.usd_approximate)}
                </p>
              </div>

              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-[#1E2A3E]/70 dark:text-white/60 font-[Arimo]">
                    {t("counterOf")} {formatUSD(data.goal_usd)}
                  </span>
                  <span className="text-sm font-bold text-[#F89C24] font-[Arimo]">
                    {data.progress_percent.toFixed(1)}%
                  </span>
                </div>
                <Progress
                  value={data.progress_percent}
                  className="h-4 rounded-full bg-[#1E3A6F]/10 dark:bg-white/5 [&>div]:bg-gradient-to-r [&>div]:from-[#F89C24] [&>div]:to-[#fbbf24] [&>div]:rounded-full"
                />
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-[#F8F9FA] dark:bg-white/5 rounded-xl p-4 text-center">
                  <p className="text-xs text-[#1E2A3E]/50 dark:text-white/40 font-[Arimo] mb-1">{t("counterBTC")}</p>
                  <p className="text-lg font-bold text-[#0A1C3A] dark:text-white font-[Arimo]">
                    {data.balance_btc.toFixed(8)}
                  </p>
                </div>
                <div className="bg-[#F8F9FA] dark:bg-white/5 rounded-xl p-4 text-center">
                  <p className="text-xs text-[#1E2A3E]/50 dark:text-white/40 font-[Arimo] mb-1">{t("counterUSD")}</p>
                  <p className="text-lg font-bold text-[#0A1C3A] dark:text-white font-[Arimo]">
                    {formatUSD(data.usd_approximate)}
                  </p>
                </div>
                <div className="bg-[#F8F9FA] dark:bg-white/5 rounded-xl p-4 text-center">
                  <p className="text-xs text-[#1E2A3E]/50 dark:text-white/40 font-[Arimo] mb-1">{t("counterDonors")}</p>
                  <p className="text-lg font-bold text-[#0A1C3A] dark:text-white font-[Arimo]">{data.tx_count}</p>
                </div>
                <div className="bg-[#F8F9FA] dark:bg-white/5 rounded-xl p-4 text-center">
                  <p className="text-xs text-[#1E2A3E]/50 dark:text-white/40 font-[Arimo] mb-1">{t("counterUpdated")}</p>
                  <p className="text-sm font-bold text-[#0A1C3A] dark:text-white font-[Arimo]">
                    {lastUpdated?.toLocaleTimeString() || "--:--"}
                  </p>
                </div>
              </div>
            </>
          ) : null}

          {/* Blockchain Link */}
          {data && (
            <div className="mt-8 text-center">
              <a
                href={`https://mempool.space/address/${data.address}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#1E3A6F] dark:text-[#F89C24] hover:underline font-[Arimo] font-medium text-sm transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                {t("counterViewBlockchain")}
              </a>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
