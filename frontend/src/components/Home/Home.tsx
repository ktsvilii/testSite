import { FC } from 'react';
import { useHome } from './useHome';
import { CryptoTable } from './components';

export const Home: FC = () => {
  const { coins } = useHome();
  return <CryptoTable coins={coins} />;
};
