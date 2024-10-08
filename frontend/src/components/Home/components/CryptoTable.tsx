import { FC, useContext } from 'react';
import { Coin, ThemeName } from '@utils/types';
import { useSort } from '@hooks/useSort';
import { ThemeContext } from '@context';

import { useCryptoTable } from './useCryptoTable';
import { usePagination } from '@hooks';

import { BiSolidCaretUpSquare, BiCaretUpSquare, BiSolidCaretDownSquare, BiCaretDownSquare } from 'react-icons/bi';
import { TbCaretUpDownFilled, TbCaretUpDown } from 'react-icons/tb';
import classNames from 'classnames';
import { Loader } from '@components/Loader';

interface CryptoTableProps {
  className?: string;
}

interface CryptoTableRowProps {
  coin: Coin;
}

const CryptoTableRow: FC<CryptoTableRowProps> = ({ coin }) => {
  const { id, name, rank, symbol, icon, volumeToMarketCap, price, marketCap } = coin;

  return (
    <tr>
      <td>{rank}</td>
      <td>
        <div className='flex items-center gap-3'>
          <div className='avatar'>
            <div className='mask mask-squircle h-8 w-8'>
              <img src={icon} alt={id} />
            </div>
          </div>
          <div>
            <div className='font-bold'>{name}</div>
            <div className='text-sm opacity-50'>{symbol}</div>
          </div>
        </div>
      </td>
      <td>
        {price}
        <br />
        <span className='badge-sm p-0'>{marketCap}</span>
      </td>
      <td>{volumeToMarketCap}%</td>
    </tr>
  );
};

export const CryptoTable: FC<CryptoTableProps> = ({ className }) => {
  const { currentPage, nextPage, prevPage } = usePagination(1);
  const { coins, isFetching } = useCryptoTable(currentPage);

  const { sortConfig, sortedCoins, requestSort } = useSort(coins);

  const { theme } = useContext(ThemeContext);

  const getSortIcon = () => {
    switch (sortConfig) {
      case 'ascending':
        return theme === ThemeName.CYBERPUNK ? <BiSolidCaretUpSquare size={16} /> : <BiCaretUpSquare size={16} />;

      case 'descending':
        return theme === ThemeName.CYBERPUNK ? <BiSolidCaretDownSquare size={16} /> : <BiCaretDownSquare size={16} />;

      default:
        return theme === ThemeName.CYBERPUNK ? <TbCaretUpDownFilled size={16} /> : <TbCaretUpDown size={16} />;
    }
  };

  return (
    <div className={classNames('overflow-x-auto', className)}>
      <table className='table table-zebra'>
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Cryptocurrency</th>
            <th>Price & MarketCap</th>
            <th onClick={requestSort} className='flex cursor-pointer'>
              % of MCap Traded Daily
              {getSortIcon()}
            </th>
          </tr>
        </thead>
        <tbody>
          {/* rows */}
          {isFetching ? (
            <tr>
              <td colSpan={4}>
                <Loader />
              </td>
            </tr>
          ) : (
            sortedCoins.map((coin: Coin) => <CryptoTableRow coin={coin} key={coin.id} />)
          )}
        </tbody>
      </table>

      <div className='join grid grid-cols-2'>
        <button onClick={prevPage} className='join-item btn btn-outline' disabled={currentPage === 1}>
          Previous page
        </button>
        <button onClick={nextPage} className='join-item btn btn-outline'>
          Next
        </button>
      </div>
    </div>
  );
};
