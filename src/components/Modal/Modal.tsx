import React, { useEffect, useState } from 'react';

import ReactDOM from 'react-dom';

import styles from './Modal.module.css';

// Need to add types to the below components

const Modal = ({ show, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent =
    show === 0 ? (
      <div className={styles.styledModalOverlay}>
        <div className={styles.styledModal}>
          <div className={styles.styledModalBody}>{children}</div>
        </div>
      </div>
    ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root')
    );
  }
  return null;
};

export { Modal };
