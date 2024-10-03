import { FC } from 'react';
import { CryptoTable, News } from './components';

export const Home: FC = () => {
  return (
    <div className='grid grid-cols-12 gap-4 px-8'>
      <CryptoTable className='col-span-8' />
      <News className='col-span-4' />
    </div>
  );
};
