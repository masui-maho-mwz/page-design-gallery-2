import { Articles } from '@/app/dashboard-menu/components/dashboard-and-main/main/articles';
import { ContentsHeader } from '@/app/dashboard-menu/components/dashboard-and-main/main/contents-header';
import styles from './styles.module.css';

export const Main = () => {
  return (
    <main className={styles.root}>
      <div className={styles.contents}>
        <ContentsHeader />
        <Articles />
      </div>
    </main>
  );
};
