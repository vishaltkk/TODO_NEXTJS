import React from 'react';

import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="rounded-lg bg-white p-4 shadow-md">{children}</div>
    </div>,
    document.getElementById('modal-root')!
  );
};

export { Modal };
