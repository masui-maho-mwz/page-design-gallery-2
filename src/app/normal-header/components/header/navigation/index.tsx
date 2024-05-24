import styles from './styles.module.css';

type NavItem = {
  id: number;
  name: string;
  href: string;
  isNew?: boolean;
};

type Props = {
  items: NavItem[];
};

export const Navigation = ({ items }: Props) => {
  return (
    <nav className={styles.root}>
      {items.map(({ id, name, href, isNew }) => (
        <a href={href} className={styles.item} key={id}>
          {name}
          {isNew && <span className={styles.chip}>NEW</span>}
        </a>
      ))}
    </nav>
  );
};
