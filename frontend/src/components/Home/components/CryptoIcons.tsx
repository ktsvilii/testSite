import { FC } from 'react';
import { CiBitcoin } from 'react-icons/ci';
import { TbCurrencyEthereum, TbBrandTether, TbCurrencySolana, TbCurrencyXrp, TbCurrencyDogecoin } from 'react-icons/tb';
import { RiBnbLine } from 'react-icons/ri';
import { BsCoin } from 'react-icons/bs';
import { SiTon, SiCardano } from 'react-icons/si';
import { LuDroplet } from 'react-icons/lu';
import { GiCrownCoin } from 'react-icons/gi';

interface CryptoComponentProps {
  size?: number;
}

const withSize = (Icon: FC<{ size?: number }>) => {
  return ({ size = 32 }: CryptoComponentProps) => <Icon size={size} />;
};

export const CryptoIcons: { [key: string]: React.FC<CryptoComponentProps> } = {
  BTC: withSize(CiBitcoin),
  ETH: withSize(TbCurrencyEthereum),
  USDT: withSize(TbBrandTether),
  BNB: withSize(RiBnbLine),
  SOL: withSize(TbCurrencySolana),
  USDC: withSize(BsCoin),
  XRP: withSize(TbCurrencyXrp),
  DOGE: withSize(TbCurrencyDogecoin),
  TON: withSize(SiTon),
  ADA: withSize(SiCardano),
  LDO: withSize(LuDroplet),
  UNKNOWN: withSize(GiCrownCoin),
};
