import { Coin } from '@utils/types';
import { useMemo, useState } from 'react';

type Sort = 'ascending' | 'descending' | null;

export const useSort = (coins: Coin[]) => {
  const [sortConfig, setSortConfig] = useState<Sort>(null);

  const sortedCoins = useMemo(() => {
    const sortableCoins = [...coins];

    if (sortConfig !== null) {
      sortableCoins.sort((a, b) => {
        if (a.volumeToMarketCap < b.volumeToMarketCap) {
          return sortConfig === 'ascending' ? -1 : 1;
        }
        if (a.volumeToMarketCap > b.volumeToMarketCap) {
          return sortConfig === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }

    return sortableCoins;
  }, [coins, sortConfig]);

  const requestSort = () => {
    let direction: Sort = 'ascending';
    if (sortConfig && sortConfig === 'ascending') {
      direction = 'descending';
    }
    setSortConfig(direction);
  };

  return { sortConfig, sortedCoins, requestSort };
};
