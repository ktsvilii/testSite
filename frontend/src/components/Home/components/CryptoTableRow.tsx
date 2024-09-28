import { FC, useState } from 'react';

import { Coin } from '@utils/types';

import { CryptoIcons } from './CryptoIcons';
import { Modal } from './Modal';

interface CryptoTableRowProps {
  coin: Coin;
}

interface CryptoComponentProps {
  symbol: string;
  size?: number;
}

export const CryptoTableRow: FC<CryptoTableRowProps> = ({ coin }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { name, rank, symbol, volumeToMarketCap, price, marketCap } = coin;

  const CryptoIcon: FC<CryptoComponentProps> = CryptoIcons[symbol] || (() => CryptoIcons['UNKNOWN']);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <tr>
        <td>{rank}</td>
        <td>
          <div className='flex items-center gap-3'>
            <div className='avatar'>
              <div className='mask mask-squircle h-8 w-8'>{<CryptoIcon symbol={symbol} />}</div>
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
        <th>
          <button className='btn btn-ghost btn-xs' onClick={showModal}>
            Details
          </button>
        </th>
      </tr>
      {isModalVisible && <Modal onClose={hideModal} />}
    </>
  );
};
