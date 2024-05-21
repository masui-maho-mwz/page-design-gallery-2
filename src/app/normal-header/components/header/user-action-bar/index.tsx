import { AbstractLogo } from '@/app/normal-header/components/icons/tech-quest-logo';
import styles from './styles.module.css';

export const UserActionBar = () => {
  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <AbstractLogo />
      </div>
      <div className={styles.menu}>
        <form action="" aria-label="検索" className={styles.form}>
          <input type="search" placeholder="検索" className={styles.input}></input>
        </form>
        <div className={styles.wrap}>
          <a href="" className={styles.login}>
            ログイン
          </a>
        </div>
        <div className={styles.wrap}>
          <a href="" className={styles.registrations}>
            新規登録
          </a>
        </div>
      </div>
    </div>
  );
};
