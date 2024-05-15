import styles from './styles.module.css';

type Props = {
  isHovering: string | null;
  setIsHovering: (hoverState: string | null) => void;
};

export const NavMenu = ({ isHovering, setIsHovering }: Props) => {
  if (!isHovering) return null;

  return (
    <nav
      className={styles.navMenu}
      onMouseEnter={() => setIsHovering(isHovering)}
      onMouseLeave={() => setIsHovering(null)}
    >
      {isHovering === 'navMenu3' ? 'NavMenu3' : 'NavMenu4'}
    </nav>
  );
};
