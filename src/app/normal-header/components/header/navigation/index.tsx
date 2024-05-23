import { navItems } from '@/app/normal-header/components/header/navigation/nav-items-data';
import styles from './styles.module.css';

export const Navigation = () => {
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
