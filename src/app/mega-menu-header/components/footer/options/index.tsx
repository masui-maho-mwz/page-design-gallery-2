import { AbstractLogo } from '@/app/mega-menu-header/components/icons/tech-quest-logo';
import styles from './styles.module.css';

type Link = {
  url: string;
  text: string;
};

type Props = {
  links: Link[];
};

export const Options = ({ links }: Props) => {
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
