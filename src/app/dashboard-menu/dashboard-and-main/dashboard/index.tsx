import { AbstractLogo } from '@/app/dashboard-menu/components/tech-quest-logo';
import { Nav } from '@/app/dashboard-menu/dashboard-and-main/dashboard/nav';
import { Profile } from '@/app/dashboard-menu/dashboard-and-main/dashboard/profile';
import styles from './styles.module.css';

export const DashBord = () => {
  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <AbstractLogo />
      </div>
      <Profile />
      <Nav />
    </div>
  );
};
