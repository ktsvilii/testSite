import { Coin, CoinRawData, currencyFormatter, getVolumeToMarketCap, News, NewsRawData } from '../utils';

export class CryptoService {
  private async fetchFromApi(url: string): Promise<any> {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'X-API-KEY': process.env.FETCH_KEY!,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    return response.json();
  }

  private transformCoinData(rawData: CoinRawData[]): Coin[] {
    return rawData.map(({ id, name, symbol, price, icon, volume, marketCap, rank }) => ({
      id,
      name,
      symbol,
      price: currencyFormatter.format(price),
      icon,
      rank,
      marketCap: currencyFormatter.format(marketCap),
      volumeToMarketCap: getVolumeToMarketCap(volume, marketCap).toFixed(2),
    }));
  }

  private transformNewsData(rawData: NewsRawData[]): News[] {
    return rawData.map(({ id, title, searchKeyWords, link, feedDate, source }) => ({
      id,
      title,
      searchKeyWords,
      link,
      feedDate,
      source,
    }));
  }

  async getCrypto(limit: string, page: string): Promise<Coin[]> {
    const url = `https://openapiv1.coinstats.app/coins?limit=${limit}&page=${page}`;
    try {
      const { result }: { result: CoinRawData[] } = await this.fetchFromApi(url);
      return this.transformCoinData(result);
    } catch (error) {
      console.error('Error in fetching crypto data:', error);
      throw new Error('Failed to fetch crypto data');
    }
  }

  async getCryptoNews(limit: string, page: string): Promise<News[]> {
    const url = `https://openapiv1.coinstats.app/news?limit=${limit}&page=${page}`;
    try {
      const { result }: { result: NewsRawData[] } = await this.fetchFromApi(url);
      return this.transformNewsData(result);
    } catch (error) {
      console.error('Error in fetching crypto news:', error);
      throw new Error('Failed to fetch crypto news');
    }
  }
}
