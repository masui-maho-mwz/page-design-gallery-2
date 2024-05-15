import styles from './styles.module.css';

type Props = {
  setIsHovering: (isHovering: boolean) => void;
};

export const MenuList = ({ setIsHovering }: Props) => {
  return (
    <ul className={styles.root}>
      <li>
        <a href="" className={styles.item}>
          リンク１
        </a>
      </li>
      <li>
        <a href="" className={styles.item}>
          リンク２
        </a>
      </li>
      <li onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
        <a href="" className={`${styles.item} ${styles.arrow}`}>
          リンク３
        </a>
      </li>
      <li>
        <a href="" className={`${styles.item} ${styles.arrow}`}>
          リンク４
        </a>
      </li>
    </ul>
  );
};
