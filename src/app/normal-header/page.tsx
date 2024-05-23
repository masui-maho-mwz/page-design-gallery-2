import { MainContents } from '@/app/normal-header/components/main/main-contents';
import { RightSidePanel } from '@/app/normal-header/components/main/right-side-panel';
import styles from './styles.module.css';

export default function NormalHeaderHome() {
  return (
    <main className={styles.root}>
      <MainContents />
      <RightSidePanel />
    </main>
  );
}
