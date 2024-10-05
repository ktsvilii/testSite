import { FC, useState } from 'react';
import { useCryptoNews } from './useCryptoNews';
import { formatDate, shortenTitle } from '@utils/functions';
import classNames from 'classnames';
import { NewsType } from '@utils/types';
import { Loader } from '@components/Loader';

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
  <div key={id} className='collapse collapse-plus max-w-[370px] w-full join-item border-base-300 border my-3'>
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
  const [currentlySelectedTab, setCurrentlySelectedTab] = useState<NewsType>(NewsType.LATEST);
  const { news, isFetching } = useCryptoNews(currentlySelectedTab);

  const handleChangeTab = (tabName: NewsType) => {
    setCurrentlySelectedTab(tabName);
  };

  return (
    <div role='tablist' className={classNames('tabs tabs-bordered justify-self-stretch overflow-hidden', className)}>
      {Object.values(NewsType).map(type => {
        return (
          <>
            <input
              type='radio'
              name='my_tabs_1'
              role='tab'
              className='tab text-nowrap'
              aria-label={type}
              checked={currentlySelectedTab === type}
              onChange={() => handleChangeTab(type)}
              disabled={isFetching}
            />
            <div role='tabpanel' className='tab-content'>
              {isFetching ? (
                <div className='flex justify-center items-center min-h-[400px]'>
                  <Loader />
                </div>
              ) : (
                news?.map(newsItem => <NewsItem key={newsItem.id} {...newsItem} />)
              )}
            </div>
          </>
        );
      })}
    </div>
  );
};
