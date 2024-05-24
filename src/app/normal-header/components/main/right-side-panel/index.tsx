'use client';

import Link from 'next/link';
import styles from './styles.module.css';

export const RightSidePanel = () => {
  return (
    <div className={styles.root}>
      <ul>
        <li className={styles.item}>
          <Link href="" className={styles.link}>
            セクション１
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="" className={styles.link}>
            セクション２
          </Link>
          <ul className={styles.index}>
            <li className={styles.item}>
              <Link href="" className={styles.link}>
                サブセクション2-1
              </Link>
            </li>
          </ul>
        </li>
        <li className={styles.item}>
          <Link href="" className={styles.link}>
            セクション３
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="" className={styles.link}>
            セクション４
          </Link>
          <ul className={styles.index}>
            <li className={styles.item}>
              <Link href="" className={styles.link}>
                サブセクション4-1
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="" className={styles.link}>
                サブセクション4-2
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="" className={styles.link}>
                サブセクション4-3
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="" className={styles.link}>
                サブセクション4-4
              </Link>
            </li>
          </ul>
        </li>
        <li className={styles.item}>
          <Link href="" className={styles.link}>
            セクション５
          </Link>
        </li>
      </ul>
    </div>
  );
};
