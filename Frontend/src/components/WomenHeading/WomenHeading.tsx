import styles from './WomenHeading.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Image1 from '../../assets/Landscape_two_girls_laying.jpg';
import Image1Placeholder from '../../assets/Landscape_two_girls_laying_PLACEHOLDER.jpg';

const WomenHeading = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <LazyLoadImage
            width='100%'
            height='auto'
            src={Image1}
            alt='hero-img'
            placeholderSrc={Image1Placeholder}
            effect='black-and-white'
          />
        </div>
      </div>
    </section>
  );
};

export default WomenHeading;
