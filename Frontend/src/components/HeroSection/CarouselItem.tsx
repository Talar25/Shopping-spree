import styles from './HeroSection.module.css';
//import types
import { CarouselItemInterface } from '../../types';
//import component
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const CarouselItem = ({
  item,
  type,
}: {
  item: CarouselItemInterface;
  type?: string;
}) => {
  return (
    <div
      className={`${type !== 'product' && styles.carouselItem} ${
        type === 'product' && styles.productItem
      }`}
    >
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
