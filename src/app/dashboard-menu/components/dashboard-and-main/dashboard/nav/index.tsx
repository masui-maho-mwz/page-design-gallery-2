'use client';

import { items } from '@/app/dashboard-menu/components/dashboard-and-main/dashboard/nav/items-data';
import { useState } from 'react';
import styles from './styles.module.css';

export const Nav = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <nav className={styles.root}>
      {items.map((item, index) => (
        <a
          key={index}
          href="#"
          className={`${styles.link} ${index === activeIndex ? styles.active : ''}`}
          onClick={() => handleClick(index)}
        >
          <div className={styles.label}>{item}</div>
        </a>
      ))}
    </nav>
  );
};
