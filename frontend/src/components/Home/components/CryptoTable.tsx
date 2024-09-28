import { FC } from 'react';
import { CryptoTableRow } from './CryptoTableRow';

import { Coin } from '@utils/types';

interface CryptoTableProps {
  coins: Coin[];
}

export const CryptoTable: FC<CryptoTableProps> = ({ coins }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='table table-zebra'>
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Cryptocurrency</th>
            <th>Price & MarketCap</th>
            <th>% of MCap Traded Daily</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* rows */}
          {coins.map((coin: Coin) => (
            <CryptoTableRow coin={coin} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
