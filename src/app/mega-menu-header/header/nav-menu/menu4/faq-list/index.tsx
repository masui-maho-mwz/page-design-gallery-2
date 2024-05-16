import { List } from '@/app/mega-menu-header/header/nav-menu/list';
import { faq1, faq2 } from '@/app/mega-menu-header/header/nav-menu/menu4/data';
import styles from '@/app/mega-menu-header/header/nav-menu/menu4/styles.module.css';

export const FaqList = () => (
  <div className={`${styles.content} ${styles.contentWithBorder}`}>
    <div className={styles.title}>よくある質問</div>
    <div className={styles.items}>
      <List items={faq1} className={styles.list} />
      <List items={faq2} className={styles.list2} />
    </div>
  </div>
);
