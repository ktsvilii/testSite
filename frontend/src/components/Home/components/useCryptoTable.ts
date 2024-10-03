import { useEffect } from 'react';
import { useQuery } from 'react-query';

import { CRYPTO_LIMIT, DEFAULT_API_ENDPOINT } from '@utils/constants';
import { Coin } from '@utils/types';

const fetchCryptoData = async (page: number) => {
  try {
    const data = await fetch(`${DEFAULT_API_ENDPOINT}crypto/currency?limit=${CRYPTO_LIMIT}&page=${page}`);

    if (!data.ok) {
      throw new Error('Error fetching cryptocurrency, try later');
    }

    const crypto: Coin[] = await data.json();

    return crypto;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('Error fetching cryptocurrency, try later', error);
  }
};

export const useCryptoTable = (currentPage: number) => {
  const { data = [], isError } = useQuery({
    queryKey: ['coins', currentPage],
    queryFn: () => fetchCryptoData(currentPage),
    keepPreviousData: true,
  });

  useEffect(() => {
    if (isError) console.log('Error fetching coins');
  }, [isError]);

  return { coins: data };
};
