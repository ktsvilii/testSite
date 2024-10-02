import { FC } from 'react';
import { Size } from '@utils/types';

interface LoaderProps {
  size?: Size;
}

export const Loader: FC<LoaderProps> = ({ size = Size.LG }) => {
  return <span className={`loading loading-bars loading-${size}`}></span>;
};
