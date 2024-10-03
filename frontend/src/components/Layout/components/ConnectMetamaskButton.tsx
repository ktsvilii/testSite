import { FC, useState } from 'react';
import { ethers } from 'ethers';

export const ConnectMetamaskButton: FC = () => {
  const [address, setAddress] = useState<string | null>(null);

  const connectMetamask = async () => {
    let provider;
    if (window.ethereum == null) {
      provider = ethers.getDefaultProvider();
    } else {
      provider = new ethers.BrowserProvider(window.ethereum);

      const { address } = await provider.getSigner();
      setAddress(address);
    }
  };

  return (
    <button className='btn btn-outline text-xl' onClick={!address ? connectMetamask : undefined}>
      {address ? `Connected: ${address.slice(0, 6)}...${address.slice(-4)}` : 'Connect Metamask'}
    </button>
  );
};
