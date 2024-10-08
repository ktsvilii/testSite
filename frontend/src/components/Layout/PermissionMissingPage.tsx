import { FC } from 'react';

export const PermissionsMissingPage: FC = () => {
  return (
    <div className='flex flex-col items-center text-neutral-content justify-center h-screen'>
      <div className='p-6 border border-black bg-neutral rounded-lg shadow-2xl text-center max-w-md'>
        <h2 className='card-title font-bold text-red-600 mb-4'>Access Denied</h2>
        <p className='primary-content'>Please authenticate using Metamask wallet.</p>
      </div>
    </div>
  );
};
