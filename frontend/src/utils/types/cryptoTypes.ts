export interface Coin {
  id: number;
  rank: number;
  name: string;
  symbol: string;
  price: number;
  marketCap: number;
  volumeToMarketCap: number;
}

export interface CoinRawData {
  id: number;
  rank: number;
  slug: string;
  name: string;
  symbol: string;
  category: string;
  type: string;
  volume24hBase: number;
  circulatingSupply: number;
  totalSupply: number;
  maxSupply: number;
  values: {
    USD: {
      price: number;
      volume24h: number;
      high24h: number;
      low24h: number;
      marketCap: number;
      percentChange24h: number;
      percentChange7d: number;
      percentChange30d: number;
      percentChange3m: number;
      percentChange6m: number;
    };
  };
  lastUpdated: string;
  tokens: Array<{
    tokenAddress: string;
    platform: {
      id: number;
      name: string;
      slug: string;
    };
  }>;
}
