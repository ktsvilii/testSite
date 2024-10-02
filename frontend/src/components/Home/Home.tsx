import { FC } from 'react';
import { useHome } from './useHome';
import { CryptoTable } from './components';
import { usePagination } from '@hooks';

export const Home: FC = () => {
  const { currentPage, nextPage, prevPage } = usePagination(1);
  const { coins } = useHome(currentPage);

  return (
    <>
      <CryptoTable coins={coins} />

      <div className='join grid grid-cols-2'>
        <button onClick={prevPage} className='join-item btn btn-outline' disabled={currentPage === 1}>
          Previous page
        </button>
        <button onClick={nextPage} className='join-item btn btn-outline'>
          Next
        </button>
      </div>
    </>
  );
};
