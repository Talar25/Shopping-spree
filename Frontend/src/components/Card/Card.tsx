import styles from './Card.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { getPhotos } from '../../utils';
import { Link } from 'react-router-dom';

export const Card = ({ id }: { id: string }) => {
  const filter = useSelector((state: RootState) => state.filter);
  const products = useSelector((state: RootState) => state.products);
  const {
    name: title,
    price,
    type,
  } = products.find((product) => product.id === id);
  const { image, imagePlaceholder } = getPhotos(filter, type);

  return (
    <Link to={`/product/${id}`}>
      <div className={styles.card}>
        <div className={styles.card_image}>
          <LazyLoadImage
            width='100%'
            height='auto'
            src={image}
            alt='hero-img'
            placeholderSrc={imagePlaceholder}
            effect='black-and-white'
          />
        </div>
        <div className={styles.text}>
          <h3>{title}</h3>
          <p>{price} EURO</p>
        </div>
      </div>
    </Link>
  );
};
