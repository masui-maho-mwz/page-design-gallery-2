'use client';

import { Bell } from '@/app/components/elements/bell';
import { Loupe } from '@/app/components/elements/loupe';
import { UnionJack } from '@/app/components/elements/union-jack';
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
          <Loupe />
        </button>
        {isSearch && (
          <div className={`${styles.searchBar} ${isSearch ? styles.rootVisible : ''}`} ref={ref}>
            <div className={styles.inputWrapper}>
              <Loupe />
              <input type="text" placeholder="Search…" className={styles.input} />
            </div>
            <button className={styles.searchButton}>Search</button>
          </div>
        )}
        <div className={styles.buttons}>
          <button className={styles.button}>
            <UnionJack />
          </button>
          <button className={styles.button}>
            <Bell />
          </button>
          <button className={styles.button}>
            <div className={styles.icon}>icon</div>
          </button>
        </div>
      </div>
    </header>
  );
};
