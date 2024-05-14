import { Article } from '@/app/normal-header/main/main-contents/article';
import styles from './styles.module.css';

type Props = {
  setActiveSection: (section: string) => void;
};

export const MainContents = ({ setActiveSection }: Props) => {
  return (
    <div className={styles.root}>
      <Article setActiveSection={setActiveSection} />
    </div>
  );
};
