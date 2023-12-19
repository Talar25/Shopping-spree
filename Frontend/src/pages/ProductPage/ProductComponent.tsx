import styles from './ProductPage.module.css';
import RectangleIcon from '@mui/icons-material/Rectangle';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { RootState, useAppDispatch } from '../../store';
import { capitalizeFirstLetter, getPhotos } from '../../utils';
import { CarouselItemInterface, CartProduct } from '../../types';
import { addProductToCart } from '../../reducers/cartReducer';
import { ProductCarousel } from './ProductCarousel';
import { setNotification } from '../../reducers/notificationReducer';

export const ProductComponent = () => {
  //dispatch
  const dispatch = useAppDispatch();

  //state for images
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');
  //state for chosing
  const [color, setColor] = useState<string | null>(null);
  const [size, setSize] = useState<string | null>(null);
  //get id from params
  const params = useParams();
  const id = (params && Object.values(params)).toString();
  //find object
  const product = useSelector((state: RootState) => state.products).find(
    (product) => product.id === id
  );

  //we dont have images in object and we need to create array for carousel
  const carouselImages: CarouselItemInterface[] = [
    { src: image1, placeholder: image2 },
    { src: image1, placeholder: image2 },
    { src: image1, placeholder: image2 },
    { src: image1, placeholder: image2 },
  ];

  useEffect(() => {
    if (product) {
      const { image, imagePlaceholder } = getPhotos(product, product.type);
      setImage1(image);
      setImage2(imagePlaceholder);
      setColor(capitalizeFirstLetter(product.color[0]));
      setSize(product.size[0].toUpperCase());
    }
  }, [product]);

  const AddObjectToCart = () => {
    if (product && color && size) {
      const object: CartProduct = {
        ...product,
        color: color,
        size: size,
        number: 1,
      };
      dispatch(addProductToCart(object));
      dispatch(setNotification(object, 10));
    }
  };

  return (
    <section className={styles.productSection}>
      <div className={styles.productSection_wrapper}>
        <div className={styles.productSection_image}>
          <ProductCarousel items={carouselImages} />
        </div>
        <div className={styles.productSection_text}>
          <h2>{product?.name}</h2>
          <p>{product?.description}</p>
          <p style={{ fontWeight: '700', fontSize: '1.6rem' }}>
            {product?.price}.00 €
          </p>
          <p>Color: {color}</p>
          <div>
            <ul className={styles.colors}>
              {product?.color.map((c) => (
                <li key={c}>
                  <RectangleIcon
                    onClick={() => setColor(capitalizeFirstLetter(c))}
                    sx={{
                      color: c,
                      fontSize: '25px',
                      stroke: `${
                        color?.toLowerCase() === c ? 'black' : 'white'
                      }`,
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
          <p>Size: {size}</p>
          <div className={styles.sizes}>
            <ul className={styles.colors}>
              {product?.size.map((c) => (
                <li
                  key={c}
                  onClick={() => setSize(c.toUpperCase())}
                  style={{
                    color: `${size?.toLowerCase() === c ? 'black' : 'inherit'}`,
                  }}
                >
                  {c.toUpperCase()}
                </li>
              ))}
            </ul>
          </div>
          <button onClick={AddObjectToCart}>Add to cart</button>
        </div>
      </div>
    </section>
  );
};
