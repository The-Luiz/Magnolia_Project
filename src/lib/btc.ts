export function isValidBTCAddress(address: string): boolean {
  const btcRegex = /^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/;
  return btcRegex.test(address);
}
