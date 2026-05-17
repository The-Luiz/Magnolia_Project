import { NextResponse } from "next/server";

const BTC_ADDRESS = "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"; // Example address
const MEMPOOL_API = "https://mempool.space/api/address";

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

// Cache to avoid rate limiting
let cache: { data: BTCDalanceResponse; timestamp: number } | null = null;
const CACHE_TTL = 90_000; // 30 seconds

export async function GET() {
  try {
    const now = Date.now();

    // Return cached data if still valid
    if (cache && now - cache.timestamp < CACHE_TTL) {
      return NextResponse.json(cache.data);
    }

    const response = await fetch(`${MEMPOOL_API}/${BTC_ADDRESS}`, {
      next: { revalidate: 30 },
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Mempool API error: ${response.status}`);
    }

    const data: MempoolResponse = await response.json();

    // Calculate net balance: funded - spent (in satoshis)
    const balance_satoshi =
      data.chain_stats.funded_txo_sum - data.chain_stats.spent_txo_sum;
    const balance_btc = balance_satoshi / 100_000_000;

    // Approximate USD value (you can use a price API for real-time)
    // Using a rough estimate; in production, fetch from CoinGecko or similar
    let usd_approximate = 0;
    try {
      const priceRes = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd",
        { next: { revalidate: 60 } }
      );
      if (priceRes.ok) {
        const priceData = await priceRes.json();
        usd_approximate = balance_btc * (priceData.bitcoin?.usd || 0);
      }
    } catch {
      // Fallback estimate
      usd_approximate = balance_btc * 95000;
    }

    const goal_usd = 22000;
    const progress_percent = Math.min(
      (usd_approximate / goal_usd) * 100,
      100
    );

    const responseData: BTCDalanceResponse = {
      address: data.address,
      balance_satoshi,
      balance_btc,
      tx_count: data.chain_stats.tx_count,
      usd_approximate: Math.round(usd_approximate),
      goal_usd,
      goal_btc: goal_usd / 95000, // approximate
      progress_percent,
    };

    cache = { data: responseData, timestamp: now };

    return NextResponse.json(responseData);
  } catch (error) {
    console.error("BTC Balance fetch error:", error);

    // Return fallback data
    const fallbackData: BTCDalanceResponse = {
      address: BTC_ADDRESS,
      balance_satoshi: 0,
      balance_btc: 0,
      tx_count: 0,
      usd_approximate: 0,
      goal_usd: 22000,
      goal_btc: 0.2316,
      progress_percent: 0,
    };

    return NextResponse.json(fallbackData, { status: 200 });
  }
}
