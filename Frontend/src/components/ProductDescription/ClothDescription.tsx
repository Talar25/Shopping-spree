import styles from './ProductDescription.module.css';
//import component
import { LazyLoadImage } from 'react-lazy-load-image-component';
//import hooks
import { useEffect, useState } from 'react';
//import data
import clothes from './ClothesArray';
//import types
import { ClothesArr } from '../../types';

export const ClothDescription = ({ type }: { type: string }) => {
  const [data, setData] = useState<ClothesArr | null>(null);

  useEffect(() => {
    const foundArr = clothes.find((cloth) => cloth.name === type);
    if (foundArr) setData(foundArr);
  }, [type]);

  return (
    data && (
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <LazyLoadImage
            width='100%'
            height='auto'
            src={data.img1}
            alt='product_description-img'
            placeholderSrc={data.img1Placeholder}
            effect='blur'
          />
        </div>
        <div className={styles.text}>
          <h2>{data.text.text1.heading}</h2>
          <p>{data.text.text1.paragraph}</p>
          <h2>{data.text.text2.heading}</h2>
          <p>{data.text.text2.paragraph}</p>
        </div>
        <div className={styles.text}>
          <h2>{data.text.text3.heading}</h2>
          <p>{data.text.text3.paragraph}</p>
          <h2>{data.text.text4.heading}</h2>
          <p>{data.text.text4.paragraph}</p>
        </div>
        <div className={styles.image}>
          <LazyLoadImage
            width='100%'
            height='auto'
            src={data.img2}
            alt='product_description-img'
            placeholderSrc={data.img2Placeholder}
            effect='blur'
          />
        </div>
      </div>
    )
  );
};
