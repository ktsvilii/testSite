import { FC, useContext } from 'react';
import { CryptoTableRow } from './CryptoTableRow';
import { Coin, ThemeName } from '@utils/types';
import { useSort } from '@hooks/useSort';
import { ThemeContext } from '@context';

import { BiSolidCaretUpSquare, BiCaretUpSquare, BiSolidCaretDownSquare, BiCaretDownSquare } from 'react-icons/bi';
import { TbCaretUpDownFilled, TbCaretUpDown } from 'react-icons/tb';

interface CryptoTableProps {
  coins: Coin[] | [];
}

export const CryptoTable: FC<CryptoTableProps> = ({ coins }) => {
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
    <div className='overflow-x-auto'>
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* rows */}
          {sortedCoins.length ? (
            sortedCoins.map((coin: Coin) => <CryptoTableRow coin={coin} key={coin.id} />)
          ) : (
            <tr>
              <td>No coins here</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
