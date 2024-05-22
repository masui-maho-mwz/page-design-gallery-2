'use client';

import { useState } from 'react';
import styles from './styles.module.css';

export const Nav = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <nav className={styles.root}>
      {['ナビ１', 'ナビ２', 'ナビ３', 'ナビ４', 'ナビ５', 'ナビ６'].map((label, index) => (
        <a
          key={index}
          href="#"
          className={`${styles.link} ${index === activeIndex ? styles.active : ''}`}
          onClick={() => handleClick(index)}
        >
          <div className={styles.label}>{label}</div>
        </a>
      ))}
    </nav>
  );
};
