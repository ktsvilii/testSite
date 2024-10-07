import { FC, memo, useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { AuthContext } from '@context';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ConnectMetamaskButton: FC = memo(() => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const [address, setAddress] = useState<string | null>(null);

  const notify = () => toast.error('Metamask is not found!');

  const connectMetamask = async () => {
    let provider;
    if (window.ethereum == null) {
      notify();
      provider = ethers.getDefaultProvider();
      localStorage.removeItem('isAuth');
      setIsAuthenticated(false);
      return;
    } else {
      provider = new ethers.BrowserProvider(window.ethereum);

      const { address } = await provider.getSigner();

      if (address) {
        localStorage.setItem('isAuth', 'true');
        setAddress(address);
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem('isAuth');
      }
    }
  };

  useEffect(() => {
    connectMetamask();
  }, []);

  return (
    <>
      <button className='btn btn-outline text-xl' onClick={!address && !isAuthenticated ? connectMetamask : undefined}>
        {address && isAuthenticated ? `Connected: ${address.slice(0, 6)}...${address.slice(-4)}` : 'Connect Metamask'}
      </button>
      <ToastContainer
        position='top-center'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme='dark'
      />
    </>
  );
});
