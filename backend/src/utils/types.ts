export interface CoinRawData {
  id: string;
  icon: string;
  name: string;
  symbol: string;
  rank: number;
  price: number;
  priceBtc: number;
  volume: number;
  marketCap: number;
  availableSupply: number;
  totalSupply: number;
  fullyDilutedValuation: number;
  priceChange1h: number;
  priceChange1d: number;
  priceChange1w: number;
  redditUrl: string;
  twitterUrl: string;
  explorers: string[];
}

export interface Coin {
  id: string;
  rank: number;
  name: string;
  symbol: string;
  price: string;
  marketCap: string;
  volumeToMarketCap: string;
  icon: string;
}
