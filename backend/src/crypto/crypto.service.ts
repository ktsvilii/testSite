import { Coin, CoinRawData, currencyFormatter, getVolumeToMarketCap } from '../utils';

export class CryptoService {
  async getCrypto(limit: string, page: string) {
    if (!process.env.FETCH_KEY) {
      throw new Error('FETCH_KEY is missing in the environment variables');
    }

    try {
      const response = await fetch(`https://openapiv1.coinstats.app/coins?limit=${limit}&page=${page}`, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'X-API-KEY': process.env.FETCH_KEY,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }

      const { result }: { result: CoinRawData[] } = await response.json();

      const coins: Coin[] = result.map(({ id, name, symbol, price, icon, volume, marketCap, rank }) => ({
        id,
        name,
        symbol,
        price: currencyFormatter.format(price),
        icon,
        rank,
        marketCap: currencyFormatter.format(marketCap),
        volumeToMarketCap: getVolumeToMarketCap(volume, marketCap).toFixed(2),
      }));

      return coins;
    } catch (error) {
      console.error('Error in fetching crypto data:', error);
      throw new Error('Failed to fetch crypto data');
    }
  }
}
