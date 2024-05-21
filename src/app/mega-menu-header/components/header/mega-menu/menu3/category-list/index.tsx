import { List } from '@/app/mega-menu-header/components/header/mega-menu/list';
import { categories } from '@/app/mega-menu-header/components/header/mega-menu/menu3/data';
import styles from '@/app/mega-menu-header/components/header/mega-menu/menu3/styles.module.css';

export const CategoryList = () => (
  <div className={`${styles.contents} ${styles.contentWithBorder}`}>
    <div className={styles.title}>カテゴリ一覧</div>
    <div className={styles.items}>
      <List items={categories} className={styles.list} />
    </div>
  </div>
);
