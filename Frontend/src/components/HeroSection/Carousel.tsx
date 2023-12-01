import styles from './HeroSection.module.css';
import { useState, useEffect } from 'react';
import items from './images';
import { CarouselItem } from './CarouselItem';

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = () => {};

  useEffect(
    function () {
      const updateIndex = setInterval(() => {
        if (activeIndex < items.length - 1) {
          setActiveIndex(activeIndex + 1);
        } else {
          setActiveIndex(0);
        }
      }, 7000);

      return () => clearInterval(updateIndex);
    },
    [activeIndex]
  );

  return (
    <div className={styles.carousel} onClick={updateIndex}>
      <div
        className={styles.inner}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {items.map((item) => {
          return <CarouselItem item={item} key={item.src} />;
        })}
      </div>
    </div>
  );
};
