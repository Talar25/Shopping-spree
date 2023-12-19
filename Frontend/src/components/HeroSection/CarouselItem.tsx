import styles from './HeroSection.module.css';
//import types
import { CarouselItemInterface } from '../../types';
//import component
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const CarouselItem = ({ item }: { item: CarouselItemInterface }) => {
  return (
    <div className={styles.carouselItem}>
      <LazyLoadImage
        width='100%'
        height='100%'
        src={item.src}
        alt='hero-img'
        placeholderSrc={item.placeholder}
        effect='blur'
      />
    </div>
  );
};
