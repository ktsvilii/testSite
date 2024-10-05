import { NEWS_LENGTH_LIMIT } from './constants';

export const getVolumeToMarketCap = (volume24h: number, marketCap: number) => {
  return (volume24h / marketCap) * 100;
};

export const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const shortenTitle = (title: string): string => {
  if (title.length > NEWS_LENGTH_LIMIT) {
    return `${title.slice(0, NEWS_LENGTH_LIMIT)}...`;
  }

  const lastPeriodIndex = title.lastIndexOf('.');
  if (lastPeriodIndex !== -1) {
    return title.slice(0, lastPeriodIndex + 1);
  }

  return title;
};

export const formatDate = (ms: number): string => {
  const date = new Date(ms);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};
