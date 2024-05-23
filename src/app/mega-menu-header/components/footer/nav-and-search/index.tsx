import { navItems1, navItems2 } from '@/app/mega-menu-header/components/footer/nav-and-search/items-data';
import styles from './styles.module.css';

export const NavAndSearch = () => {
  return (
    <nav className={styles.root}>
      <div className={styles.lists}>
        <ul className={styles.list}>
          {navItems1.map((item, index) => (
            <li key={index} className={styles.item}>
              {item}
            </li>
          ))}
        </ul>
        <ul className={styles.list}>
          {navItems2.map((item, index) => (
            <li key={index} className={styles.item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <form className={styles.form}>
        <input type="text" placeholder="何かお探しですか？" className={styles.input} />
        <button className={styles.button}>検索</button>
      </form>
    </nav>
  );
};
