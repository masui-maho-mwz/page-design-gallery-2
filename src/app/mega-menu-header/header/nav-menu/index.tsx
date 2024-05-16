import { Menu3 } from '@/app/mega-menu-header/header/nav-menu/menu3';
import { Menu4 } from '@/app/mega-menu-header/header/nav-menu/menu4';
import styles from './styles.module.css';

type Props = {
  isHovering: string | null;
  setIsHovering: (hoverState: string | null) => void;
};

export const NavMenu = ({ isHovering, setIsHovering }: Props) => {
  if (!isHovering) return null;

  return (
    <nav
      className={styles.root}
      onMouseEnter={() => setIsHovering(isHovering)}
      onMouseLeave={() => setIsHovering(null)}
    >
      {isHovering === 'navMenu3' ? <Menu3 /> : <Menu4 />}
    </nav>
  );
};
