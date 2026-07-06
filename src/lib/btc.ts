/**
 * Single source of truth for the Magnolia Bitcoin Memorial donation address.
 * If this address ever changes, update ONLY this file — every consumer
 * (API route, counter, donation flow, FAQ) imports BTC_ADDRESS from here.
 */
export const BTC_ADDRESS = "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh";

export const MEMPOOL_API = "https://mempool.space/api/address";
export const COINGECKO_API =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";
export const BTC_FUNDRAISING_GOAL_USD = 22000;
export const BTC_USD_FALLBACK_PRICE = 95000;
export const BTC_BALANCE_CACHE_TTL_MS = 90_000;

export function isValidBTCAddress(address: string): boolean {
  const btcRegex = /^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/;
  return btcRegex.test(address);
}
