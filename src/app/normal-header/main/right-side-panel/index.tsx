'use client';

import { ContentsNav } from '@/app/normal-header/main/right-side-panel/contents-nav';
import styles from './styles.module.css';

export const RightSidePanel = () => {
  return (
    <div className={styles.root}>
      <div></div>
      <div>
        <ContentsNav />
      </div>
    </div>
  );
};
