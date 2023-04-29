import React, { useEffect } from 'react';
import styles from './Animatable.module.scss';
import { useRouter } from 'next/router';

const Animatable = ({ children, shouldNotReflow }) => {
  const router = useRouter();
  useEffect(() => {
    if (!shouldNotReflow) {
      var el = document.getElementById('animated');
      el.style.animation = 'none';
      el.offsetHeight; /* trigger reflow */
      el.style.animation = null;
    }
  }, [router.query.view]);

  return (
    <div className={styles.animate} id="animated">
      {children}
    </div>
  );
};

export default Animatable;
