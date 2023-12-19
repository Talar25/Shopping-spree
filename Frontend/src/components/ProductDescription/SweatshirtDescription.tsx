import styles from './ProductDescription.module.css';
//import component
import { LazyLoadImage } from 'react-lazy-load-image-component';
//import images
import Sweatshirt1 from '../../assets/Landscape_sweatshirt1.webp';
import Sweatshirt1_PLACEHOLDER from '../../assets/Landscape_sweatshirt1_PLACEHOLDER.webp';
import Sweatshirt2 from '../../assets/Landscape_sweatshirt2.webp';
import Sweatshirt2_PLACEHOLDER from '../../assets/Landscape_sweatshirt2_PLACEHOLDER.webp';

export const SweatshirtDescription = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <LazyLoadImage
          width='100%'
          height='auto'
          src={Sweatshirt1}
          alt='product_description-img'
          placeholderSrc={Sweatshirt1_PLACEHOLDER}
          effect='blur'
        />
      </div>
      <div className={styles.text}>
        <h2>Cozy Comfort</h2>
        <p>
          Wrap yourself in warmth and comfort with our sweatshirts. Crafted from
          the softest fabrics, our designs provide a cozy embrace, making them
          your go-to choice for chilly days and relaxed evenings.
        </p>
        <h2>Effortless Style Upgrade</h2>
        <p>
          Elevate your casual look effortlessly with our stylish sweatshirts.
          From minimalist designs to bold statements, our collection offers
          versatile options that effortlessly blend comfort with fashion-forward
          flair.
        </p>
      </div>
      <div className={styles.text}>
        <h2>Relaxed Versatility</h2>
        <p>
          Embrace the perfect balance of comfort and style with our versatile
          sweatshirts. Whether you're lounging at home or heading out for a
          casual outing, our designs adapt seamlessly to your relaxed lifestyle.
        </p>
        <h2>Durability Meets Trend</h2>
        <p>
          Invest in sweatshirts that stand up to both style and wear. Our
          commitment to durability ensures that you not only stay on-trend but
          also enjoy long-lasting quality, making each piece a valuable addition
          to your wardrobe.
        </p>
      </div>
      <div className={styles.image}>
        <LazyLoadImage
          width='100%'
          height='auto'
          src={Sweatshirt2}
          alt='product_description-img'
          placeholderSrc={Sweatshirt2_PLACEHOLDER}
          effect='blur'
        />
      </div>
    </div>
  );
};
