import { List } from '@/app/mega-menu-header/components/header/mega-menu/list';
import { terms1, terms2 } from '@/app/mega-menu-header/components/header/mega-menu/menu4/menu4-data';
import styles from './styles.module.css';

export const TermsList = () => (
  <div className={styles.root}>
    <div className={styles.title}>利用規約</div>
    <div className={styles.items}>
      <List items={terms1} />
      <List items={terms2} />
    </div>
  </div>
);
