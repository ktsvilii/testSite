export const getVolumeToMarketCap = (volume24h: number, marketCap: number) => {
  return (volume24h / marketCap) * 100;
};

export const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
