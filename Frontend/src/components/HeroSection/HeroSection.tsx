import styles from './HeroSection.module.css';
import { Carousel } from './Carousel';

const HeroSection = ({ type }: { type: string }) => {
  return (
    <section className={`${type === 'about' && styles.hero_about}`}>
      {type === 'homepage' && <Carousel />}
      {type === 'about' && (
        <div className={styles.about_heading}>
          <h1 className={styles.headingPrimary}>Shopping spree</h1>
          <span>Your go-to destination for premium shopping.</span>
          <p>
            "Embark on a shopping spree of style and savings – where every
            purchase is a fashion-forward adventure!"
          </p>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
