import { List } from '@/app/mega-menu-header/components/header/mega-menu/list';
import { others } from '@/app/mega-menu-header/components/header/mega-menu/menu3/menu3-data';
import styles from './styles.module.css';

export const OtherList = () => (
  <div className={styles.root}>
    <div className={styles.title}>その他</div>
    <div className={styles.item}>
      <List items={others} />
    </div>
  </div>
);
