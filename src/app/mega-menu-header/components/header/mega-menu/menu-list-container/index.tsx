import styles from './styles.module.css';

type Props = {
  title: string;
  items: string[][];
  width: number;
  showBorderRight?: boolean;
};

export const MenuListContainer = (props: Props) => {
  const { title, items, width, showBorderRight = true } = props;
  const rootClassName = `${styles.root} ${showBorderRight ? styles.withBorder : ''}`;

  return (
    <div className={rootClassName} style={{ width: `${width}px` }}>
      <div className={styles.title}>{title}</div>
      <div className={styles.items}>
        {items.map((itemList, index) => (
          <ul key={index} className={styles.list}>
            {itemList.map((item, itemIndex) => (
              <li key={itemIndex} className={styles.link}>
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};
