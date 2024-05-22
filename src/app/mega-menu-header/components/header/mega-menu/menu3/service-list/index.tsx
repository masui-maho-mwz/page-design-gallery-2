import { List } from '@/app/mega-menu-header/components/header/mega-menu/list';
import { services1, services2 } from '@/app/mega-menu-header/components/header/mega-menu/menu3/menu3-data';
import styles from './styles.module.css';

export const ServiceList = () => (
  <div className={styles.root}>
    <div className={styles.title}>サービス一覧</div>
    <div className={styles.items}>
      <List items={services1} />
      <List items={services2} />
    </div>
  </div>
);
