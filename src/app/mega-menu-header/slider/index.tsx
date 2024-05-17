'use client';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './styles.module.css';

import cat from '../../../../public/cat.jpg';
import dog from '../../../../public/dog.jpg';
import sea from '../../../../public/sea.jpg';
import shadow from '../../../../public/shadow.jpg';
import skyEarth from '../../../../public/sky-earth.jpg';

export const Slider = () => {
  return (
    <div className={styles.root}>
      <Swiper
        className={styles.swiper}
        slidesPerView={'auto'}
        loop={true}
        speed={2000}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <Image src={dog} alt="dog" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sea} alt="sea" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={cat} alt="cat" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={shadow} alt="shadow" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={skyEarth} alt="sky-earth" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
