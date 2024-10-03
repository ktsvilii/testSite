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

export interface NewsRawData {
  id: string;
  searchKeyWords: string[];
  feedDate: number;
  source: string;
  title: string;
  sourceLink: string;
  isFeatured: boolean;
  imgUrl: string;
  reactionsCount: Record<string, number>;
  reactions: any[];
  shareURL: string;
  relatedCoins: string[];
  content: boolean;
  link: string;
  bigImg: boolean;
}

export interface News {
  id: string;
  title: string;
  searchKeyWords: string[];
  link: string;
  feedDate: number;
  source: string;
}
