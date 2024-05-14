'use client';

import { MainContents } from '@/app/normal-header/main/main-contents';
import { RightSidePanel } from '@/app/normal-header/main/right-side-panel';
import styles from './styles.module.css';

export const Main = () => {
  return (
    <main className={styles.root}>
      <RightSidePanel />
      <MainContents />
    </main>
  );
};
