'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { AbstractLogo } from '@/app/components/elements/logos/tech-quest-logo';
import { NavMenu } from '@/app/mega-menu-header/header/nav-menu';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ListIcon from '@mui/icons-material/List';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import styles from './styles.module.css';

export const Header = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>
        <a href="" className={styles.logo}>
          <AbstractLogo />
        </a>
        <a href="" className={styles.text}>
          タイトル
        </a>
      </h1>
      <NavMenu isHovering={isHovering} />

      <ul className={styles.items}>
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
    </div>
  );
};
