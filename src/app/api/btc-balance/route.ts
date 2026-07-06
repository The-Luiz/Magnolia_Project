import { NextResponse } from "next/server";
import {
  BTC_ADDRESS,
  MEMPOOL_API,
  COINGECKO_API,
  BTC_FUNDRAISING_GOAL_USD,
  BTC_USD_FALLBACK_PRICE,
  BTC_BALANCE_CACHE_TTL_MS,
} from "@/lib/btc";

interface ChainStats {
  funded_txo_sum: number;
  spent_txo_sum: number;
  tx_count: number;
}

interface MempoolResponse {
  address: string;
  chain_stats: ChainStats;
  mempool_stats: ChainStats;
}

interface BTCDalanceResponse {
  address: string;
  balance_satoshi: number;
  balance_btc: number;
  tx_count: number;
  usd_approximate: number;
  goal_usd: number;
  goal_btc: number;
  progress_percent: number;
}

// In-memory cache to avoid rate-limiting mempool.space and coingecko.
let cache: { data: BTCDalanceResponse; timestamp: number } | null = null;

export async function GET() {
  try {
    const now = Date.now();

    if (cache && now - cache.timestamp < BTC_BALANCE_CACHE_TTL_MS) {
      return NextResponse.json(cache.data);
    }

    const response = await fetch(`${MEMPOOL_API}/${BTC_ADDRESS}`, {
      next: { revalidate: 30 },
      headers: { Accept: "application/json" },
    });

    if (!response.ok) {
      throw new Error(`Mempool API error: ${response.status}`);
    }

    const data: MempoolResponse = await response.json();

    const balance_satoshi =
      data.chain_stats.funded_txo_sum - data.chain_stats.spent_txo_sum;
    const balance_btc = balance_satoshi / 100_000_000;

    let usd_approximate = 0;
    try {
      const priceRes = await fetch(COINGECKO_API, {
        next: { revalidate: 60 },
      });
      if (priceRes.ok) {
        const priceData = await priceRes.json();
        usd_approximate = balance_btc * (priceData.bitcoin?.usd || 0);
      }
    } catch {
      usd_approximate = balance_btc * BTC_USD_FALLBACK_PRICE;
    }

    const progress_percent = Math.min(
      (usd_approximate / BTC_FUNDRAISING_GOAL_USD) * 100,
      100
    );

    const responseData: BTCDalanceResponse = {
      address: data.address,
      balance_satoshi,
      balance_btc,
      tx_count: data.chain_stats.tx_count,
      usd_approximate: Math.round(usd_approximate),
      goal_usd: BTC_FUNDRAISING_GOAL_USD,
      goal_btc: BTC_FUNDRAISING_GOAL_USD / BTC_USD_FALLBACK_PRICE,
      progress_percent,
    };

    cache = { data: responseData, timestamp: now };

    return NextResponse.json(responseData);
  } catch (error) {
    console.error("BTC Balance fetch error:", error);

    const fallbackData: BTCDalanceResponse = {
      address: BTC_ADDRESS,
      balance_satoshi: 0,
      balance_btc: 0,
      tx_count: 0,
      usd_approximate: 0,
      goal_usd: BTC_FUNDRAISING_GOAL_USD,
      goal_btc: BTC_FUNDRAISING_GOAL_USD / BTC_USD_FALLBACK_PRICE,
      progress_percent: 0,
    };

    return NextResponse.json(fallbackData, { status: 200 });
  }
}
