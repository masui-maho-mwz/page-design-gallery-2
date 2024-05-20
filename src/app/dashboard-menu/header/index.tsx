'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

export const Header = () => {
  const [isSearch, setIsSearch] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const toggleSearch = () => {
    setIsSearch((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && event.target instanceof Node && !ref.current.contains(event.target)) {
      setIsSearch(false);
    }
  };

  useEffect(() => {
    if (isSearch) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearch]);

  return (
    <header className={styles.root}>
      <div className={styles.wrap}>
        <button className={styles.searchIcon} onClick={toggleSearch}>
          虫眼鏡あいこん
        </button>
        {isSearch && (
          <div className={`${styles.searchBar} ${isSearch ? styles.rootVisible : ''}`} ref={ref}>
            <input type="text" placeholder="Search…" className={styles.input} />
            <button className={styles.searchButton}>Search</button>
          </div>
        )}
        <div className={styles.buttons}>
          <button className={styles.button}>○</button>
          <button className={styles.button}>△</button>
          <button className={styles.button}>◻︎</button>
        </div>
      </div>
    </header>
  );
};
