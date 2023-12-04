import styles from './ProductPage.module.css';
import { CarouselItem } from '../../components/HeroSection/CarouselItem';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CircleIcon from '@mui/icons-material/Circle';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CarouselItemInterface } from '../../types';

export function ProductCarousel({ items }: { items: CarouselItemInterface[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hover, setHover] = useState(false);

  const goRight = () => {
    if (activeIndex < items.length - 1) {
      setActiveIndex((n) => n + 1);
    }
  };

  const goLeft = () => {
    if (activeIndex > 0) {
      setActiveIndex((n) => n - 1);
    }
  };

  const setIndex = (id: number) => {
    setActiveIndex(id);
  };

  return (
    <div
      className={styles.carousel}
      onMouseMove={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <ArrowBackIosIcon
        sx={{
          fontSize: '45px',
          color: 'white ',
          display: `${hover ? '' : 'none'}`,
        }}
        className={styles.arrowLeft}
        onClick={goLeft}
      />
      <ArrowForwardIosIcon
        sx={{
          fontSize: '45px',
          color: 'white',
          display: `${hover ? '' : 'none'}`,
        }}
        className={styles.arrowRight}
        onClick={goRight}
      />
      <div className={styles.dots}>
        <ul>
          {items.map((_, index) => (
            <li key={index}>
              <CircleIcon
                onClick={() => setIndex(index)}
                sx={{
                  color: `${activeIndex === index ? 'black' : 'white'}`,
                  fontSize: `${activeIndex === index ? '22px' : '20px'}`,
                }}
              />
            </li>
          ))}
        </ul>
      </div>
      <div
        className={styles.inner}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {items.map((item, index) => {
          return <CarouselItem item={item} key={item.src + index} />;
        })}
      </div>
    </div>
  );
}
