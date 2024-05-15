'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { LogoAndTitle } from '@/app/mega-menu-header/header/logo-and-title';
import { MenuList } from '@/app/mega-menu-header/header/menu-list';
import { NavMenu } from '@/app/mega-menu-header/header/nav-menu';
import { useState } from 'react';
import styles from './styles.module.css';

export const Header = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className={styles.root}>
      <LogoAndTitle />
      <NavMenu isHovering={isHovering} />
      <MenuList setIsHovering={setIsHovering} />
    </div>
  );
};
