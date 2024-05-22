import { List } from '@/app/mega-menu-header/components/header/mega-menu/list';
import { faq1, faq2 } from '@/app/mega-menu-header/components/header/mega-menu/menu4/menu4-data';
import styles from './styles.module.css';

export const FaqList = () => (
  <div className={styles.root}>
    <div className={styles.title}>よくある質問</div>
    <div className={styles.items}>
      <List items={faq1} />
      <List items={faq2} />
    </div>
  </div>
);
