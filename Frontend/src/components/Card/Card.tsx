import styles from './Card.module.css';
//import hooks
import { getPhotos } from '../../utils';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
//import types
import { RootState } from '../../store';
//import components
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

export const Card = ({ id }: { id: string }) => {
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');
  const filter = useSelector((state: RootState) => state.filter);
  const products = useSelector((state: RootState) => state.products);
  const product = products.find((product) => product.id === id);

  useEffect(() => {
    if (product) {
      const { image, imagePlaceholder } = getPhotos(filter, product.type);
      setImage1(image);
      setImage2(imagePlaceholder);
    }
  }, [filter, product]);

  return (
    product && (
      <Link to={`/product/${id}`}>
        <div className={styles.card}>
          <div className={styles.card_image}>
            <LazyLoadImage
              width='100%'
              height='auto'
              src={image1}
              alt='hero-img'
              placeholderSrc={image2}
              effect='black-and-white'
            />
          </div>
          <div className={styles.text}>
            <h3>{product.name}</h3>
            <p>{product.price} €</p>
          </div>
        </div>
      </Link>
    )
  );
};
