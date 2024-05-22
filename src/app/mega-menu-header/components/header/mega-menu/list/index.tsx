import styles from './styles.module.css';
type Props = {
  items: string[];
};

export const List = ({ items }: Props) => (
  <ul className={styles.root}>
    {items.map((item, index) => (
      <li key={index} className={styles.link}>
        {item}
      </li>
    ))}
  </ul>
);
