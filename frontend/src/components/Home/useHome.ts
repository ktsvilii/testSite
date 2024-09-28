import { CRYPTO_LIMIT, DEFAULT_API_ENDPOINT } from '@utils/constants';
import { currencyFormatter, getVolumeToMarketCap } from '@utils/functions';
import { Coin, CoinRawData } from '@utils/types';
import { useEffect, useState } from 'react';

const fetchCryptoData = async () => {
  try {
    const data = await fetch(`${DEFAULT_API_ENDPOINT}top-crypto?limit=${1}`);

    if (!data.ok) {
      throw new Error('Error fetching cryptocurrency, try later');
    }

    const crypto: CoinRawData[] = await data.json();
    const coins: Coin[] = crypto.map(
      ({
        id,
        name,
        symbol,
        values: {
          USD: { price, marketCap, volume24h },
        },
        rank,
      }) => ({
        id,
        name,
        symbol,
        price: currencyFormatter.format(price),
        rank,
        marketCap: currencyFormatter.format(marketCap),
        volumeToMarketCap: getVolumeToMarketCap(volume24h, marketCap).toFixed(2),
      }),
    );

    return coins;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('Error fetching cryptocurrency, try later', error);
  }
};

export const useHome = () => {
  const [coins, setCoins] = useState<Coin[] | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchCryptoData();
      setCoins(result || []);
    };

    fetchData();
  }, []);

  return { coins };
};
