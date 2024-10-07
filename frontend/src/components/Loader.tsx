import { FC } from 'react';
import { Size } from '@utils/types';

interface LoaderProps {
  size?: Size;
}

export const Loader: FC<LoaderProps> = ({ size = Size.LG }) => {
  return (
    <div className='flex justify-center items-center min-h-[100vh]'>
      <span className={`loading loading-bars loading-${size}`}></span>
    </div>
  );
};
