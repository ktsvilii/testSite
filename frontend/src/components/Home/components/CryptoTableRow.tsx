import { FC } from 'react';

import { Coin } from '@utils/types';

interface CryptoTableRowProps {
  coin: Coin;
}

export const CryptoTableRow: FC<CryptoTableRowProps> = ({ coin }) => {
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
