import styles from './ProductDescription.module.css';
//import component
import { LazyLoadImage } from 'react-lazy-load-image-component';
//import images
import Jackets1 from '../../assets/Landscape_clothes.jpg';
import Jackets1_PLACEHOLDER from '../../assets/Landscape_clothes_PLACEHOLDER.jpg';
import Jackets2 from '../../assets/Landscape_clothes2.jpg';
import Jackets2_PLACEHOLDER from '../../assets/Landscape_clothes2_PLACEHOLDER.jpg';

export const JacketDescription = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <LazyLoadImage
          width='100%'
          height='auto'
          src={Jackets1}
          alt='product_description-img'
          placeholderSrc={Jackets1_PLACEHOLDER}
          effect='blur'
        />
      </div>
      <div className={styles.text}>
        <h2>Exceptional Quality</h2>
        <p>
          Elevate your style with jackets crafted from premium materials,
          ensuring long-lasting comfort and durability. Our commitment to
          quality guarantees a standout addition to your wardrobe.
        </p>
        <h2>On-Trend Designs</h2>
        <p>
          Stay fashion-forward with our jackets that seamlessly blend timeless
          appeal with the latest trends. Versatile and stylish, they're perfect
          for any occasion, adding a touch of sophistication to your look.
        </p>
      </div>
      <div className={styles.text}>
        <h2>Smart Functionality</h2>
        <p>
          Our jackets go beyond style, offering practical features for your
          daily needs. From ample pockets to adjustable details, experience the
          perfect fusion of fashion and functionality in every piece.
        </p>
        <h2>Sustainable Fashion</h2>
        <p>
          Make a conscious choice with our eco-friendly jackets. We prioritize
          sustainability in our production processes, ensuring you not only look
          good but also contribute to a greener future. Choose fashion with a
          purpose.
        </p>
      </div>
      <div className={styles.image}>
        <LazyLoadImage
          width='100%'
          height='auto'
          src={Jackets2}
          alt='product_description-img'
          placeholderSrc={Jackets2_PLACEHOLDER}
          effect='blur'
        />
      </div>
    </div>
  );
};
