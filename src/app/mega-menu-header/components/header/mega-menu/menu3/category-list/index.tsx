import { List } from '@/app/mega-menu-header/components/header/mega-menu/list';
import { categories } from '@/app/mega-menu-header/components/header/mega-menu/menu3/menu3-data';
import styles from './styles.module.css';

export const CategoryList = () => (
  <div className={styles.root}>
    <div className={styles.title}>カテゴリ一覧</div>
    <div className={styles.item}>
      <List items={categories} />
    </div>
  </div>
);
