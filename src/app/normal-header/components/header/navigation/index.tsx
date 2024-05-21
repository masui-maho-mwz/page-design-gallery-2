import styles from './styles.module.css';

export const Navigation = () => {
  const navItems = [
    { id: 1, name: 'ナビ１' },
    { id: 2, name: 'ナビ２' },
    { id: 3, name: 'ナビ３' },
    { id: 4, name: 'ナビ４' },
    { id: 5, name: 'ナビ５', isNew: true },
    { id: 6, name: 'ナビ６' },
  ];

  return (
    <nav className={styles.root}>
      {navItems.map((item) => (
        <a href="" className={styles.item} key={item.id}>
          {item.name}
          {item.isNew && <span className={styles.chip}>NEW</span>}
        </a>
      ))}
    </nav>
  );
};
