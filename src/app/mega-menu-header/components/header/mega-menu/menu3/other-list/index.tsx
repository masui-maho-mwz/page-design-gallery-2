import { List } from '@/app/mega-menu-header/components/header/mega-menu/list';
import { others } from '@/app/mega-menu-header/components/header/mega-menu/menu3/data';
import styles from '@/app/mega-menu-header/components/header/mega-menu/menu3/styles.module.css';

export const OtherList = () => (
  <div className={styles.contents}>
    <div className={styles.title}>その他</div>
    <div className={styles.items}>
      <List items={others} className={styles.list} />
    </div>
  </div>
);
