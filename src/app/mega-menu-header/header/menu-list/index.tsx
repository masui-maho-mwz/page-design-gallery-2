import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ListIcon from '@mui/icons-material/List';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SearchIcon from '@mui/icons-material/Search';
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
        <a href="" className={styles.item}>
          <ListIcon className={styles.icon} />
          リンク３
          <KeyboardArrowDownIcon />
        </a>
      </li>
      <li>
        <a href="" className={styles.item}>
          <LocalPhoneIcon className={styles.icon} />
          リンク４
        </a>
      </li>
      <li>
        <a href="" className={styles.item}>
          <CardGiftcardIcon className={styles.icon} />
          リンク５
        </a>
      </li>
      <li className={styles.item}>
        <SearchIcon className={styles.search} />
      </li>
    </ul>
  );
};
