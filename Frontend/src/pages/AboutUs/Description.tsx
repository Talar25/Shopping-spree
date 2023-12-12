import styles from './AboutUs.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import DescriptionImage from '../../assets/Portrait-two_girls_in_red.jpg';
import DescriptionImagePlaceholder from '../../assets/Portrait-two_girls_in_red_Placeholder.jpg';

export const Description = () => {
  return (
    <section className={styles.description}>
      <div className={styles.description_wrapper}>
        <div className={styles.description_image}>
          <LazyLoadImage
            width='100%'
            height='auto'
            src={DescriptionImage}
            alt='product_description-img'
            placeholderSrc={DescriptionImagePlaceholder}
            effect='blur'
          />
        </div>
        <div className={styles.description_text}>
          <h2>Shopping spree</h2>
          <p>
            Embark on a seamless journey through the world of curated
            collections and unparalleled choices. We are more than just a
            shopping destination; we are your partners in crafting an exquisite
            lifestyle. Discover the perfect blend of style, quality, and
            convenience right at your fingertips.
          </p>

          <p>
            At Shopping spree, we believe in redefining the shopping experience.
            Our commitment goes beyond offering products – we're here to inspire
            and elevate every moment. From fashion-forward trends to innovative
            home essentials, we've curated a diverse selection to cater to your
            unique tastes and preferences.
          </p>
        </div>
      </div>
    </section>
  );
};
