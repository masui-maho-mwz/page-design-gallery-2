import styles from './styles.module.css';

export const NavAndSearch = () => {
  const navItems1 = ['ナビ１', 'ナビ１', 'ナビ１', 'ナビ１'];
  const navItems2 = ['ナビ２', 'ナビ２', 'ナビ２', 'ナビ２'];

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
