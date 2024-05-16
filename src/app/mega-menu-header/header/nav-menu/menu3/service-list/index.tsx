import { List } from '@/app/mega-menu-header/header/nav-menu/list';
import { services1, services2 } from '@/app/mega-menu-header/header/nav-menu/menu3/data';
import styles from '@/app/mega-menu-header/header/nav-menu/menu3/styles.module.css';

export const ServiceList = () => (
  <div className={`${styles.content} ${styles.contentWithBorder}`}>
    <div className={styles.title}>サービス一覧</div>
    <div className={styles.items}>
      <List items={services1} className={styles.list} />
      <List items={services2} className={styles.list2} />
    </div>
  </div>
);
