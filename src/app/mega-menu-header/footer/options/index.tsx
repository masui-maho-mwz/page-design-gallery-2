import { AbstractLogo } from '@/app/components/elements/logos/tech-quest-logo';
import styles from './styles.module.css';

export const Options = () => {
  const links = [
    { url: '#', text: '利用者情報の取り扱いについて' },
    { url: '#', text: '個人情報保護への取り組みについて' },
    { url: '#', text: '会社案内' },
    { url: '#', text: '電子公告' },
  ];

  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <div className={styles.logo}>
          <AbstractLogo />
        </div>
        <small className={styles.text}>Copyright ©xxxxx Corporation. All rights reserved.</small>
      </div>
      <ul className={styles.list}>
        {links.map((link, index) => (
          <li key={index} className={styles.item}>
            <a href={link.url} className={styles.link}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
