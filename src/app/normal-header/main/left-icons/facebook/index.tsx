import styles from './styles.module.css';

export const Facebook = () => {
  return (
    <button aria-label="facebookでシェア" title="Facebookでシェア" type="button" className={styles.root}>
      <svg height="20" viewBox="0 0 20 20" width="20" className={styles.svg}>
        <path d="m20 10c0-5.52-4.48-10-10-10s-10 4.48-10 10c0 4.99 3.66 9.13 8.44 9.88v-6.99h-2.54v-2.89h2.54v-2.2c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.77l-.44 2.89h-2.33v6.99c4.78-.75 8.44-4.89 8.44-9.88z"></path>
        <path
          d="m13.89 12.89.44-2.89h-2.77v-1.88c0-.79.39-1.56 1.63-1.56h1.26v-2.46s-1.14-.2-2.24-.2c-2.28 0-3.78 1.38-3.78 3.89v2.2h-2.54v2.89h2.54v6.99c.51.08 1.03.12 1.56.12s1.05-.04 1.56-.12v-6.99h2.33z"
          fill="#ffffff"
        ></path>
      </svg>
    </button>
  );
};
