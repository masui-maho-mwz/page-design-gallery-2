import styles from './styles.module.css';

export const HatenaBookMark = () => {
  return (
    <a
      className={styles.root}
      aria-label="はてなブックマーク"
      href="https://b.hatena.ne.jp/entry/s/qiita.com/non_cal/items/a8fee0b7ad96e67713eb"
      rel="noopener noreferrer"
      target="_blank"
      title="はてなブックマーク"
    >
      <svg viewBox="0 0 20 20" className={styles.svg}>
        <rect height="18" rx="3.67" width="18" x="1" y="1" fill="#1d9bf0"></rect>
        <g fill="#ffffff">
          <path d="m11.01 10.29c-.33-.36-.78-.57-1.36-.61.52-.14.89-.35 1.13-.62s.35-.64.35-1.11c0-.37-.08-.69-.24-.97s-.39-.5-.69-.67c-.26-.15-.58-.25-.94-.31-.37-.06-1.01-.09-1.93-.09h-2.24v8.18h2.31c.93 0 1.6-.03 2.01-.09s.75-.17 1.03-.32c.34-.18.61-.44.79-.77s.28-.72.28-1.15c0-.61-.16-1.09-.49-1.46zm-3.85-2.57h.48c.55 0 .93.06 1.12.19s.29.34.29.65-.1.5-.31.63c-.21.12-.58.18-1.13.18h-.45v-1.64zm1.9 4.69c-.22.13-.59.2-1.12.2h-.78v-1.79h.81c.54 0 .91.07 1.11.2.2.14.3.38.3.72 0 .31-.11.53-.33.66z"></path>
          <path d="m13.87 12.02c-.57 0-1.04.46-1.04 1.04s.46 1.04 1.04 1.04 1.04-.46 1.04-1.04-.46-1.04-1.04-1.04z"></path>
          <path d="m12.97 5.91h1.8v5.45h-1.8z"></path>
        </g>
      </svg>
    </a>
  );
};
