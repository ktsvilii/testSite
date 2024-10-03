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

export interface News {
  id: string;
  title: string;
  searchKeyWords: string[];
  link: string;
  feedDate: number;
  source: string;
}
