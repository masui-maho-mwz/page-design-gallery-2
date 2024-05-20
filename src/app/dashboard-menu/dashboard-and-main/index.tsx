import { DashBord } from '@/app/dashboard-menu/dashboard-and-main/dashboard';
import { Main } from '@/app/dashboard-menu/dashboard-and-main/main';
import styles from './styles.module.css';

export const DashBordAndMain = () => {
  return (
    <div className={styles.root}>
      <DashBord />
      <Main />
    </div>
  );
};
