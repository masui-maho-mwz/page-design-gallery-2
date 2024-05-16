import { List } from '@/app/mega-menu-header/header/nav-menu/list';
import { terms1, terms2 } from '@/app/mega-menu-header/header/nav-menu/menu4/data';
import styles from '@/app/mega-menu-header/header/nav-menu/menu4/styles.module.css';

export const TermsList = () => (
  <div className={styles.content}>
    <div className={styles.title}>利用規約</div>
    <div className={styles.items}>
      <List items={terms1} className={styles.list} />
      <List items={terms2} className={styles.list2} />
    </div>
  </div>
);
