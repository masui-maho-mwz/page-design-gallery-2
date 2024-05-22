import { MenuListContainer } from '@/app/mega-menu-header/components/header/mega-menu/menu-list-container';
import {
  categories,
  others,
  services1,
  services2,
} from '@/app/mega-menu-header/components/header/mega-menu/menu3/menu3-data';
import styles from '@/app/mega-menu-header/components/header/mega-menu/menu3/styles.module.css';

export const Menu3 = () => {
  return (
    <div className={styles.root}>
      <MenuListContainer title="サービス一覧" items={[services1, services2]} width={450} showBorderRight={true} />
      <MenuListContainer title="カテゴリ一覧" items={[categories]} width={225} showBorderRight={true} />
      <MenuListContainer title="その他" items={[others]} width={225} showBorderRight={false} />
    </div>
  );
};
