import styles from './WomenHeading.module.css';
//import component
import { LazyLoadImage } from 'react-lazy-load-image-component';
//import images
import Image1 from '../../assets/Landscape_two_girls_laying.webp';
import Image1Placeholder from '../../assets/Landscape_two_girls_laying_PLACEHOLDER.webp';

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
          <div className={styles.text}>
            <h2>Empower Your Style</h2>
            <p> Discover a Collection as Unique as You Are.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WomenHeading;
