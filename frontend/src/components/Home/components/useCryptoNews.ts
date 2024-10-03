import { useEffect } from 'react';
import { useQuery } from 'react-query';

import { DEFAULT_API_ENDPOINT } from '@utils/constants';
import { News } from '@utils/types';

const fetchCryptoNews = async (page: number) => {
  try {
    const data = await fetch(`${DEFAULT_API_ENDPOINT}crypto/news?page=${page}`);

    if (!data.ok) {
      throw new Error('Error fetching cryptocurrency, try later');
    }

    const news: News[] = await data.json();

    return news;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('Error fetching cryptocurrency, try later', error);
  }
};

export const useCryptoNews = (currentPage: number) => {
  const {
    data = [],
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['news', currentPage],
    queryFn: () => fetchCryptoNews(currentPage),
    keepPreviousData: true,
  });

  useEffect(() => {
    if (isError) console.log('Error fetching news');
  }, [isError]);

  return { news: data, isLoading };
};
