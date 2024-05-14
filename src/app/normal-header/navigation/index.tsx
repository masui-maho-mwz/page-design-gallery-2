import styles from './styles.module.css';

export const Navigation = () => {
  return (
    <div className={styles.items}>
      <a href="" className={styles.item}>
        ナビ１
      </a>
      <a href="" className={styles.item}>
        ナビ２
      </a>
      <a href="" className={styles.item}>
        ナビ３
      </a>
      <a href="" className={styles.item}>
        ナビ４
      </a>
      <a href="" className={styles.item}>
        ナビ５
        <span className={styles.chip}>NEW</span>
      </a>
      <a href="" className={styles.item}>
        ナビ６
      </a>
    </div>
  );
};
