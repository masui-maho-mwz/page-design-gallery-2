import { CategoryList } from '@/app/mega-menu-header/components/header/mega-menu/menu3/category-list';
import { OtherList } from '@/app/mega-menu-header/components/header/mega-menu/menu3/other-list';
import { ServiceList } from '@/app/mega-menu-header/components/header/mega-menu/menu3/service-list';
import styles from '@/app/mega-menu-header/components/header/mega-menu/menu3/styles.module.css';

export const Menu3 = () => {
  return (
    <div className={styles.root}>
      <ServiceList />
      <CategoryList />
      <OtherList />
    </div>
  );
};
