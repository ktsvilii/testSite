import { FC } from 'react';
import { useCryptoNews } from './useCryptoNews';
import { Loader } from '@components/Loader';
import { formatDate, shortenTitle } from '@utils/functions';

interface NewsProps {
  className?: string;
}

interface NewsItemProps {
  feedDate: number;
  id: string;
  link: string;
  searchKeyWords: string[];
  source: string;
  title: string;
}

const NewsItem: FC<NewsItemProps> = ({ feedDate, id, link, searchKeyWords, source, title }) => (
  <div key={id} className='collapse collapse-plus join-item border-base-300 border my-3'>
    <input type='radio' name='my-accordion-3' />
    <span className='text-sm font-bold ml-4'>{formatDate(feedDate)}</span>
    <div className='collapse-title text-lg font-medium'>{shortenTitle(title)}</div>
    <div className='collapse-content'>
      <p>
        Read full article on{' '}
        <a href={link} target='_blank' rel='noopener noreferrer' className='link'>
          {source}
        </a>
      </p>
      <div className='flex gap-2 mt-2'>
        {searchKeyWords.map(keyword => (
          <div key={id + keyword} className='badge font-mono font-bold badge-neutral'>
            {keyword}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const News: FC<NewsProps> = ({ className }) => {
  const { news, isLoading } = useCryptoNews(1);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={className}>
      {news.map(newsItem => (
        <NewsItem key={newsItem.id} {...newsItem} />
      ))}
    </div>
  );
};
