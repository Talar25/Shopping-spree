import styles from './HeroSection.module.css';
import { CarouselItemInterface } from '../../types';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const CarouselItem = ({ item }: { item: CarouselItemInterface }) => {
  return (
    <div className={styles.carouselItem}>
      <LazyLoadImage
        width='100%'
        height='auto'
        src={item.src}
        alt='hero-img'
        placeholderSrc={item.placeholder}
        effect='blur'
      />
    </div>
  );
};
