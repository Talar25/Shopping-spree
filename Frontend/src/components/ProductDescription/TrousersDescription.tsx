import styles from './ProductDescription.module.css';
//import component
import { LazyLoadImage } from 'react-lazy-load-image-component';
//import images
import Trousers1 from '../../assets/Landscape_trousers.webp';
import Trousers1_PLACEHOLDER from '../../assets/Landscape_trousers_PLACEHOLDER.webp';
import Trousers2 from '../../assets/Landscape_trousers2.webp';
import Trousers2_PLACEHOLDER from '../../assets/Landscape_trousers2_PLACEHOLDER.webp';

export const TrousersDescription = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <LazyLoadImage
          width='100%'
          height='auto'
          src={Trousers1}
          alt='product_description-img'
          placeholderSrc={Trousers1_PLACEHOLDER}
          effect='blur'
        />
      </div>
      <div className={styles.text}>
        <h2>Tailored Comfort</h2>
        <p>
          Our trousers are crafted with precision and comfort in mind. Enjoy the
          perfect fit and freedom of movement with our tailored designs,
          ensuring you stay comfortable and stylish all day long.
        </p>
        <h2>Timeless Elegance</h2>
        <p>
          Elevate your wardrobe with trousers that exude timeless elegance. From
          classic cuts to modern styles, our collection offers a versatile
          range, ensuring you make a sophisticated statement wherever you go.
        </p>
      </div>
      <div className={styles.text}>
        <h2>Functional Fashion</h2>
        <p>
          Experience the perfect blend of fashion and functionality. Our
          trousers are designed with practical features, including ample pockets
          and smart detailing, making them a practical and stylish choice for
          any occasion.
        </p>
        <h2>Quality Craftsmanship</h2>
        <p>
          Invest in trousers that stand the test of time. Our commitment to
          quality craftsmanship ensures durable and long-lasting pieces,
          allowing you to build a wardrobe that combines style with enduring
          quality.
        </p>
      </div>
      <div className={styles.image}>
        <LazyLoadImage
          width='100%'
          height='auto'
          src={Trousers2}
          alt='product_description-img'
          placeholderSrc={Trousers2_PLACEHOLDER}
          effect='blur'
        />
      </div>
    </div>
  );
};
