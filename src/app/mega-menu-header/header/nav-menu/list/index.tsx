import styles from '@/app/mega-menu-header/header/nav-menu/menu3/styles.module.css';

type Props = {
  items: string[];
  className: string;
};

export const List = ({ items, className }: Props) => (
  <ul className={className}>
    {items.map((item, index) => (
      <li key={index} className={styles.link}>
        {item}
      </li>
    ))}
  </ul>
);
