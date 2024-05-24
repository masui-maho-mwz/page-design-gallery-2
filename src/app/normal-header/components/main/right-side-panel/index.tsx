'use client';

import Link from 'next/link';
import styles from './styles.module.css';

export const RightSidePanel = () => {
  return (
    <div className={styles.root}>
      <ul>
        <li className={`${styles.item} unItemization`}>
          <Link href="" className={`${styles.link} ununderlined`}>
            セクション１
          </Link>
        </li>
        <li className={`${styles.item} unItemization`}>
          <Link href="" className={`${styles.link} ununderlined`}>
            セクション２
          </Link>
          <ul className={styles.index}>
            <li className={`${styles.item} unItemization`}>
              <Link href="" className={`${styles.link} ununderlined`}>
                サブセクション2-1
              </Link>
            </li>
          </ul>
        </li>
        <li className={`${styles.item} unItemization`}>
          <Link href="" className={`${styles.link} ununderlined`}>
            セクション３
          </Link>
        </li>
        <li className={`${styles.item} unItemization`}>
          <Link href="" className={`${styles.link} ununderlined`}>
            セクション４
          </Link>
          <ul className={styles.index}>
            <li className={`${styles.item} unItemization`}>
              <Link href="" className={`${styles.link} ununderlined`}>
                サブセクション4-1
              </Link>
            </li>
            <li className={`${styles.item} unItemization`}>
              <Link href="" className={`${styles.link} ununderlined`}>
                サブセクション4-2
              </Link>
            </li>
            <li className={`${styles.item} unItemization`}>
              <Link href="" className={`${styles.link} ununderlined`}>
                サブセクション4-3
              </Link>
            </li>
            <li className={`${styles.item} unItemization`}>
              <Link href="" className={`${styles.link} ununderlined`}>
                サブセクション4-4
              </Link>
            </li>
          </ul>
        </li>
        <li className={`${styles.item} unItemization`}>
          <Link href="" className={`${styles.link} ununderlined`}>
            セクション５
          </Link>
        </li>
      </ul>
    </div>
  );
};
