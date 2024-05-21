import { Eye } from '@/app/components/elements/eye';
import { Share } from '@/app/components/elements/share';
import { SpeechBubble } from '@/app/components/elements/speech-bubble';
import styles from './styles.module.css';

export const Info = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <SpeechBubble />
        <span className={styles.count}>98.94k</span>
      </div>
      <div className={styles.wrap}>
        <Eye />
        <span className={styles.count}>43.68k</span>
      </div>
      <div className={styles.wrap}>
        <Share />
        <span className={styles.count}>64.8k</span>
      </div>
    </div>
  );
};
