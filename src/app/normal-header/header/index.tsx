import { Navigation } from '@/app/normal-header/header/navigation';
import { UserActionBar } from '@/app/normal-header/header/user-action-bar';
import styles from './styles.module.css';

export const Header = () => {
  return (
    <header className={styles.root}>
      <UserActionBar />
      <Navigation />
    </header>
  );
};
