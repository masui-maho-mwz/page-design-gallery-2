import { AbstractLogo } from '@/app/mega-menu-header/components/tech-quest-logo';
import styles from './styles.module.css';

export const LogoAndTitle = () => {
  return (
    <h1 className={styles.title}>
      <a href="" className={styles.logo}>
        <AbstractLogo />
      </a>
      <a href="" className={styles.text}>
        タイトル
      </a>
    </h1>
  );
};
