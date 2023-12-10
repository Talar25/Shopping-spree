import styles from './CartPage.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import RectangleIcon from '@mui/icons-material/Rectangle';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { getPhotos } from '../../utils';
import {
  addTheSameProduct,
  removeProductFromCart,
  removeTheSameProduct,
} from '../../reducers/cartReducer';

export const SmallCard = ({
  id,
  color,
  size,
  type = '',
}: {
  id: string;
  color: string;
  size: string;
  type: string;
}) => {
  const dispatch = useDispatch();
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

  const addNumber = () => {
    if (product) {
      dispatch(addTheSameProduct(product));
    }
  };

  const substractNumber = () => {
    if (product) {
      dispatch(removeTheSameProduct(product));
    }
  };

  const deleteProduct = () => {
    if (product) {
      dispatch(removeProductFromCart(product));
    }
  };

  return (
    <li>
      {!product && 'Loading'}
      {product && (
        <div
          className={`${
            type === 'small' ? styles.smallCard_CartNav : styles.smallCard
          }`}
        >
          <Link to={`/product/${product.id}`}>
            <div className={styles.image}>
              <LazyLoadImage
                width='90%'
                height='auto'
                src={image1}
                alt='hero-img'
                placeholderSrc={image2}
                effect='black-and-white'
              />
            </div>
          </Link>
          <div className={styles.cardText}>
            <div className={styles.cardTop}>
              <Link to={`/product/${product.id}`}>
                <div className={styles.heading}>{product?.name}</div>
              </Link>
              <div className={styles.price}>
                {product?.price * product.number}.00€
              </div>
            </div>
            <div className={styles.color}>
              <RectangleIcon sx={{ color: product.color }} /> {product?.color}
            </div>
            <div className={styles.cardBottom}>
              <div className={styles.addButtons}>
                <div className={styles.addAmount}>
                  <AddIcon
                    sx={{ fontSize: '20px', cursor: 'pointer' }}
                    onClick={addNumber}
                  />
                  <span>{product.number}</span>
                  <RemoveIcon
                    sx={{ fontSize: '20px', cursor: 'pointer' }}
                    onClick={substractNumber}
                  />
                </div>
                <div className={styles.changeSize}>
                  <span>Size: {product.size}</span>
                </div>
              </div>
              <div className={styles.removeBtn}>
                <DeleteIcon
                  sx={{ fontSize: '20px', cursor: 'pointer' }}
                  onClick={deleteProduct}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </li>
  );
};
