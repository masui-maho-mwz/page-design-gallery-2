import styles from './styles.module.css';

type Props = {
  setIsHovering: (isHovering: string | null) => void;
};

export const MenuList = ({ setIsHovering }: Props) => {
  return (
    <ul className={styles.root}>
      <li>
        <a href="" className={styles.link}>
          リンク１
        </a>
      </li>
      <li>
        <a href="" className={styles.link}>
          リンク２
        </a>
      </li>
      <li
        className={styles.list}
        onMouseEnter={() => setIsHovering('navMenu3')}
        onMouseLeave={() => setIsHovering(null)}
      >
        <a href="" className={`${styles.link} ${styles.arrow}`}>
          リンク３
        </a>
      </li>
      <li
        className={styles.list}
        onMouseEnter={() => setIsHovering('navMenu4')}
        onMouseLeave={() => setIsHovering(null)}
      >
        <a href="" className={`${styles.link} ${styles.arrow}`}>
          リンク４
        </a>
      </li>
    </ul>
  );
};
