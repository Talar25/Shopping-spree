import styles from './HeroSection.module.css';
import { Carousel } from './Carousel';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <Carousel />
    </section>
  );
};

export default HeroSection;
