import { articlesData } from '@/app/dashboard-menu/components/dashboard-and-main/main/articles/articles-data';
import { Info } from '@/app/dashboard-menu/components/dashboard-and-main/main/articles/info';
import styles from './styles.module.css';

export const Articles = () => {
  return (
    <div className={styles.root}>
      {articlesData.map((article, index) => (
        <div key={index} className={styles.wrap}>
          <div className={styles.card}>
            <div className={styles.images}>
              <span></span>
              <div className={styles.icon}>icon</div>
              <img src="" alt="" />
            </div>
            <div className={styles.article}>
              <div className={styles.date}>{article.date}</div>
              <div className={styles.title}>{article.title}</div>
              <Info />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
