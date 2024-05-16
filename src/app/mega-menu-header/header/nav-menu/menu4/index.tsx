import { FaqList } from '@/app/mega-menu-header/header/nav-menu/menu4/faq-list';
import { TermsList } from '@/app/mega-menu-header/header/nav-menu/menu4/terms-list';
import styles from './styles.module.css';

export const Menu4 = () => {
  return (
    <div className={styles.root}>
      <FaqList />
      <TermsList />
    </div>
  );
};
