import { useEffect } from 'react';
import { useQuery } from 'react-query';

import { DEFAULT_API_ENDPOINT, NEWS_LIMIT } from '@utils/constants';
import { News, NewsType } from '@utils/types';

const fetchCryptoNews = async (newsType: NewsType) => {
  try {
    const data = await fetch(`${DEFAULT_API_ENDPOINT}crypto/news?limit=${NEWS_LIMIT}&type=${newsType}`);

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

export const useCryptoNews = (newsType: NewsType) => {
  const {
    data = [],
    isError,
    isFetching,
  } = useQuery({
    queryKey: ['news', newsType],
    queryFn: () => fetchCryptoNews(newsType),
    keepPreviousData: true,
    enabled: !!newsType,
  });

  useEffect(() => {
    if (isError) console.log('Error fetching news');
  }, [isError]);

  return { news: data, isFetching };
};
