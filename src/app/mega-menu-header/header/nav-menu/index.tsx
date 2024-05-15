import styles from './styles.module.css';

type Props = {
  isHovering: boolean;
};

export const NavMenu = ({ isHovering }: Props) => {
  if (!isHovering) return null;

  return <nav className={styles.navMenu}>navMenu</nav>;
};
