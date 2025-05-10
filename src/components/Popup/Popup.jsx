import React, { useEffect, useRef } from 'react';
import styles from './Popup.module.css';

export const Popup = ({ isOpen, onClose, onRestart, isTimeOut = false }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popupContainer} ref={popupRef}>
        {/* Try Again section */}
        <div className={styles.tryAgainSection}>
          <div className={styles.bgTitleTryAgain}>
            <div className={styles.titleTryAgain} />
          </div>
        </div>

        <div className={styles.popupContent}>
          <div className={styles.platformImage} />
          
          <div className={styles.titleContainer}>
            <div className={styles.titleOps} />
            <div className={styles.titleTimesOut} />
          </div>
        </div>
        
        <div className={styles.buttonsWrapper}>
          <div className={styles.buttonsContainer}>
            <button className={`${styles.button} ${styles.quitButton}`} onClick={onClose}>
              <span className={styles.btnLabelQuit} />
            </button>
            <button className={`${styles.button} ${styles.restartButton}`} onClick={onRestart}>
              <span className={styles.btnLabelRestart} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};