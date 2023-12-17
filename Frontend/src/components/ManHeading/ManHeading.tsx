import styles from './ManHeading.module.css';
//import component
import { LazyLoadImage } from 'react-lazy-load-image-component';
//import images
import Image1 from '../../assets/Landscape_four_men.jpg';
import Image1Placeholder from '../../assets/Landscape_four_men_PLACEHOLDER.jpg';

const ManHeading = () => {
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
          <div className={styles.text}>
            <h2>Refined Classics for the Modern Gentleman</h2>
            <p>Elevate Your Wardrobe with Timeless Sophistication</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManHeading;
