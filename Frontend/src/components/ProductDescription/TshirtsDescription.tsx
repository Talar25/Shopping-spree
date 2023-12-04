import styles from './ProductDescription.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Tshirts1 from '../../assets/Landscape_tshirts.jpg';
import Tshirts1_PLACEHOLDER from '../../assets/Landscape_tshirts_PLACEHOLDER.jpg';
import Tshirts2 from '../../assets/Landscape_tshirts2.jpg';
import Tshirts2_PLACEHOLDER from '../../assets/Landscape_tshirts2_PLACEHOLDER.jpg';

export const TshirtsDescription = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <LazyLoadImage
          width='100%'
          height='auto'
          src={Tshirts1}
          alt='product_description-img'
          placeholderSrc={Tshirts1_PLACEHOLDER}
          effect='blur'
        />
      </div>
      <div className={styles.text}>
        <h2>Supreme Comfort</h2>
        <p>
          Experience unparalleled comfort with our T-shirts, crafted from the
          softest and most breathable fabrics. Our commitment to quality ensures
          a second-skin feel that keeps you comfortable throughout the day.
        </p>
        <h2>Effortless Style</h2>
        <p>
          Elevate your casual wardrobe with our effortlessly stylish T-shirts.
          Designed to be versatile, our collection effortlessly combines comfort
          with on-trend looks, making it easy to stay fashion-forward in any
          setting.
        </p>
      </div>
      <div className={styles.text}>
        <h2>Everyday Versatility</h2>
        <p>
          Our T-shirts are more than just basics – they're versatile essentials.
          Whether you're dressing up or down, our designs effortlessly adapt to
          your style, providing the perfect foundation for a variety of looks.
        </p>
        <h2>Sustainable Chic</h2>
        <p>
          Make a statement for the planet with our eco-conscious T-shirts. Each
          piece is crafted with sustainability in mind, ensuring you not only
          look good but also contribute to a more environmentally friendly
          fashion industry. Choose fashion that cares.
        </p>
      </div>
      <div className={styles.image}>
        <LazyLoadImage
          width='100%'
          height='auto'
          src={Tshirts2}
          alt='product_description-img'
          placeholderSrc={Tshirts2_PLACEHOLDER}
          effect='blur'
        />
      </div>
    </div>
  );
};
