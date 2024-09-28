import { FC } from 'react';
import { createPortal } from 'react-dom';

export const Modal: FC<{ onClose: () => void }> = ({ onClose }) => {
  return createPortal(
    <dialog className='modal' open>
      <div className='modal-box'>
        <h3 className='font-bold text-lg'>Hello!</h3>
        <p className='py-4'>Press ESC key or click outside to close</p>
        <button onClick={onClose}>Close</button>
      </div>
      <form method='dialog' className='modal-backdrop' onClick={onClose}>
        <button>Close</button>
      </form>
    </dialog>,
    document.body,
  );
};
