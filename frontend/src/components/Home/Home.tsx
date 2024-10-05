import { FC } from 'react';
import { CryptoTable, News } from './components';

export const Home: FC = () => {
  return (
    <div className='grid grid-cols-12 content-start place-content-stretch items-start gap-4 px-8'>
      <CryptoTable className='col-span-9' />
      <News className='col-span-3' />
    </div>
  );
};
