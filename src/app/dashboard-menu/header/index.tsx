import styles from './styles.module.css';

export const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.wrap}>
        <button className={styles.search}>虫眼鏡あいこん</button>
        <div className={styles.buttons}>
          <button className={styles.button}>○</button>
          <button className={styles.button}>△</button>
          <button className={styles.button}>◻︎</button>
        </div>
      </div>
    </header>
  );
};
