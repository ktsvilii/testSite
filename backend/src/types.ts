export interface CategoriesResponse {
  id: string;
  name: string;
  title: string;
  description: string;
  num_tokens: number;
  avg_price_change: number;
  market_cap: number;
  market_cap_change: number;
  volume: number;
  volume_change: number;
  last_updated: string;
}
