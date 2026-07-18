"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ExternalLink } from "lucide-react";
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
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    return prefix + latest.toFixed(decimals);
  });

  useEffect(() => {
    const animation = animate(count, target, { duration: 2, ease: "easeOut" });
    return animation.stop;
  }, [target, count]);

  return <motion.span>{rounded}</motion.span>;
}

export default function LiveCounter() {
  const { t } = useLanguage();
  const [data, setData] = useState<BTCDalance | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchBalance = useCallback(async () => {
    try {
      const res = await fetch("/api/btc-balance");
      if (!res.ok) throw new Error("Fetch failed");
      const json = await res.json();
      setData(json);
      setLastUpdated(new Date());
    } catch {
      // silently fail, keep previous data
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBalance();
    const interval = setInterval(fetchBalance, 90000);
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
      className="py-20 sm:py-28 relative"
      aria-label="Live fundraising counter"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.05em] text-muted-foreground font-[Arimo] font-bold mb-4">
            {t("counterBadge").toUpperCase()}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-[Arimo] mb-4">
            {t("counterTitle")}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-[Arimo] text-sm leading-relaxed">
            {t("counterSubtitle")}
          </p>
        </motion.div>

        {/* Loading */}
        {loading && !data ? (
          <div className="text-center py-12">
            <div className="inline-block w-8 h-8 border-2 border-[#F89C24]/20 border-t-[#F89C24] rounded-full animate-spin" />
          </div>
        ) : data ? (
          <>
            {/* Main Balance */}
            <div className="text-center mb-12">
              <p className="text-xs tracking-[0.05em] text-muted-foreground font-[Arimo] font-bold mb-4">
                {t("counterRaised").toUpperCase()}
              </p>
              <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground font-[Arimo] mb-3 tracking-tight">
                <CountUp target={data.balance_btc} decimals={8} />
                <span className="text-2xl sm:text-3xl text-accent ml-3">BTC</span>
              </div>
              <p className="text-xl sm:text-2xl text-muted-foreground font-[Arimo]">
                ≈ {formatUSD(data.usd_approximate)}
              </p>
            </div>

            {/* Progress bar — hairline editorial */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-muted-foreground font-[Arimo]">
                  {t("counterOf")} {formatUSD(data.goal_usd)}
                </span>
                <span className="text-xs font-bold text-accent font-[Arimo] tabular-nums">
                  {data.progress_percent.toFixed(1)}%
                </span>
              </div>
              <Progress
                value={data.progress_percent}
                className="h-1 rounded-none bg-border [&>div]:bg-accent [&>div]:rounded-none"
              />
            </div>

            {/* Goal achieved */}
            {data.progress_percent >= 100 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-10 text-center"
              >
                <span className="text-sm text-[#10B981] font-[Arimo] font-medium">
                  {t("counterGoalAchieved")}
                </span>
              </motion.div>
            )}

            {/* Stats — no cards, pure typography */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-10">
              <div className="text-center">
                <p className="text-[10px] tracking-[0.15em] text-muted-foreground font-[Arimo] mb-1">
                  {t("counterBTC").toUpperCase()}
                </p>
                <p className="text-sm font-bold text-foreground font-mono tabular-nums">
                  {data.balance_btc.toFixed(8)}
                </p>
              </div>
              <div className="text-center">
                <p className="text-[10px] tracking-[0.15em] text-muted-foreground font-[Arimo] mb-1">
                  {t("counterUSD").toUpperCase()}
                </p>
                <p className="text-sm font-bold text-foreground font-[Arimo] tabular-nums">
                  {formatUSD(data.usd_approximate)}
                </p>
              </div>
              <div className="text-center">
                <p className="text-[10px] tracking-[0.15em] text-muted-foreground font-[Arimo] mb-1">
                  {t("counterDonors").toUpperCase()}
                </p>
                <p className="text-sm font-bold text-foreground font-[Arimo] tabular-nums">
                  {data.tx_count}
                </p>
              </div>
              <div className="text-center">
                <p className="text-[10px] tracking-[0.15em] text-muted-foreground font-[Arimo] mb-1">
                  {t("counterUpdated").toUpperCase()}
                </p>
                <p className="text-sm font-bold text-foreground font-[Arimo] tabular-nums">
                  {lastUpdated?.toLocaleTimeString() || "--:--"}
                </p>
              </div>
            </div>

            {/* Blockchain Link */}
            <div className="text-center">
              <a
                href={`https://mempool.space/address/${data.address}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-accent font-[Arimo] transition-colors"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                {t("counterViewBlockchain")}
              </a>
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}
