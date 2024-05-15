'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import styles from './styles.module.css';

export const Slider = () => {
  return (
    <div className={styles.root}>
      <Swiper
        className={styles.swiper}
        slidesPerView={'auto'}
        loop={true}
        speed={2000}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide className={styles.slide1}>Slide 1</SwiperSlide>
        <SwiperSlide className={styles.slide2}>Slide 2</SwiperSlide>
        <SwiperSlide className={styles.slide3}>Slide 3</SwiperSlide>
        <SwiperSlide className={styles.slide4}>Slide 4</SwiperSlide>
        <SwiperSlide className={styles.slide5}>Slide 5</SwiperSlide>
        <SwiperSlide className={styles.slide6}>Slide 6</SwiperSlide>
      </Swiper>
    </div>
  );
};
