import { Header } from '@/app/mega-menu-header/header';
import { Slider } from '@/app/mega-menu-header/slider';

import { Footer } from '@/app/mega-menu-header/footer';
import styles from './styles.module.css';

// const images = [
//   'public/images/sample_img1jpg.jpg',
//   './../../../public/images/sample_img1jpg.jpg',
//   './../../../public/images/sample_img1jpg.jpg',
//   './../../../public/images/sample_img1jpg.jpg',
//   './../../../public/images/sample_img1jpg.jpg',
//   './../../../public/images/sample_img1jpg.jpg',
//   './../../../public/images/sample_img1jpg.jpg',
//   './../../../public/images/sample_img1jpg.jpg',
//   './../../../public/images/sample_img1jpg.jpg',
// ];

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
