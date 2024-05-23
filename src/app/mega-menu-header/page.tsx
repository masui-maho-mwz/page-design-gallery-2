import { Slider } from '@/app/mega-menu-header/components/slider';

import styles from './styles.module.css';

export default function MegaMenuHeaderHome() {
  return (
    <div>
      <Slider />
      <div className={styles.main}>main</div>
    </div>
  );
}
