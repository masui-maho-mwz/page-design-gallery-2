import { Slider } from '@/app/mega-menu-header/components/slider';

import { Footer } from '@/app/mega-menu-header/components/footer';
import { Header } from '@/app/mega-menu-header/components/header';
import styles from './styles.module.css';

export default function MegaMenuHeaderHome() {
  return (
    <div>
      <Header />
      <div>
        <Slider />
        <div className={styles.main}>main</div>
      </div>
      <Footer />
    </div>
  );
}
