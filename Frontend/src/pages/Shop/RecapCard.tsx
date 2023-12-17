import styles from './Shop.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { getPhotos } from '../../utils';

export const RecapCard = ({
  id,
  color,
  size,
}: {
  id: string;
  color: string;
  size: string;
}) => {
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');
  const cart = useSelector((state: RootState) => state.cart);
  const product = cart.find(
    (product) =>
      product.id === id && product.color === color && product.size === size
  );

  useEffect(() => {
    if (product) {
      const { image, imagePlaceholder } = getPhotos(product, product.type);
      setImage1(image);
      setImage2(imagePlaceholder);
    }
  }, [product]);

  return (
    product && (
      <li className={styles.recapCard}>
        <div className={styles.recapCard_image}>
          <LazyLoadImage
            width='100%'
            height='auto'
            src={image1}
            alt='hero-img'
            placeholderSrc={image2}
            effect='black-and-white'
          />
        </div>
        <div className={styles.recapCard_text}>
          <div className={styles.recapCard_top}>
            <h3>{product.name}</h3>
            <p>{+product.price * product.number} €</p>
          </div>
          <span>{product.color}</span>
          <span>Number: {product.number}</span>
        </div>
      </li>
    )
  );
};
