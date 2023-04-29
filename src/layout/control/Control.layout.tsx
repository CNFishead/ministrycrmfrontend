import styles from './Control.module.scss';
import { useState } from 'react';
import { useLayoutStore } from '@/state/ui/layout';
import { useUser } from '@/state/auth';
type Props = {
  navigation: Array<{
    icon: React.ReactNode;
    children: React.ReactNode;
  }>;
};

const Control = (props: Props) => {
  const [currentControlPage, setCurrentControlPage] = useState(0);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {props.navigation[currentControlPage].children}
      </div>

      <div className={styles.navigationContainer}>
        {props.navigation.map((item, index) => {
          return (
            <div
              className={`${styles.navigationItem} ${
                currentControlPage === index && styles.active
              }`}
              onClick={() => setCurrentControlPage(index)}
            >
              <div className={styles.icon}>{item.icon}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Control;
