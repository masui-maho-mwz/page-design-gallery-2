import { Navigation } from '@/app/normal-header/components/header/navigation';
import { navItems } from '@/app/normal-header/components/header/navigation/nav-items-data';
import { UserActionBar } from '@/app/normal-header/components/header/user-action-bar';
import styles from './styles.module.css';

export const Header = () => {
  return (
    <header className={styles.root}>
      <UserActionBar />
      <Navigation items={navItems} />
    </header>
  );
};
