import { Info } from '@/app/dashboard-menu/components/dashboard-and-main/main/articles/info';
import styles from './styles.module.css';

const articlesData = [
  { date: '26 Aug 2023', title: 'Article 1' },
  { date: '27 Aug 2023', title: 'Article 2' },
  { date: '28 Aug 2023', title: 'Article 3' },
  { date: '29 Aug 2023', title: 'Article 4' },
  { date: '30 Aug 2023', title: 'Article 5' },
  { date: '31 Aug 2023', title: 'Article 6' },
  { date: '01 Sep 2023', title: 'Article 7' },
  { date: '02 Sep 2023', title: 'Article 8' },
  { date: '03 Sep 2023', title: 'Article 9' },
  { date: '04 Sep 2023', title: 'Article 10' },
  { date: '05 Sep 2023', title: 'Article 11' },
  { date: '06 Sep 2023', title: 'Article 12' },
  { date: '07 Sep 2023', title: 'Article 13' },
  { date: '08 Sep 2023', title: 'Article 14' },
  { date: '09 Sep 2023', title: 'Article 15' },
  { date: '10 Sep 2023', title: 'Article 16' },
  { date: '11 Sep 2023', title: 'Article 17' },
  { date: '12 Sep 2023', title: 'Article 18' },
  { date: '13 Sep 2023', title: 'Article 19' },
  { date: '14 Sep 2023', title: 'Article 20' },
  { date: '15 Sep 2023', title: 'Article 21' },
  { date: '16 Sep 2023', title: 'Article 22' },
  { date: '17 Sep 2023', title: 'Article 23' },
  { date: '18 Sep 2023', title: 'Article 24' },
];

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
