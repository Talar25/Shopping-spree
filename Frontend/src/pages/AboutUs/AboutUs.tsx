import styles from './AboutUs.module.css';
//import components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HeroSection from '../../components/HeroSection/HeroSection';
import { LazyLoadImage } from 'react-lazy-load-image-component';
//import hooks
import { useLocation } from 'react-router-dom';
//import images
import DescriptionImage from '../../assets/Portrait-two_girls_in_red.jpg';
import DescriptionImagePlaceholder from '../../assets/Portrait-two_girls_in_red_Placeholder.jpg';
import HeritageImage from '../../assets/Warsaw_oldtown.jpg';
import HeritageImagePlaceholder from '../../assets/Warsaw_oldtown_Placeholder.jpg';
import HeritageImage1 from '../../assets/Warsaw_castle.jpg';
import HeritageImage1Placeholder from '../../assets/Warsaw_castle_Placeholder.jpg';

const AboutUs = () => {
  const { pathname } = useLocation();

  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, [pathname]);
  return (
    <>
      <Header />
      <HeroSection type='about' />
      <Description />
      <Heritage />
      <Footer />
    </>
  );
};

export default AboutUs;

const Description = () => {
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

const Heritage = () => {
  return (
    <section className={styles.heritage}>
      <div className={styles.heritage_wrapper}>
        <div className={styles.heritage_image}>
          <LazyLoadImage
            width='100%'
            height='auto'
            src={HeritageImage}
            alt='product_description-img'
            placeholderSrc={HeritageImagePlaceholder}
            effect='blur'
          />
          <h3 className={styles.heritage_imageTxt}>Since 1923</h3>
        </div>
        <div className={styles.heritage_flexWrapper}>
          <div className={styles.heritage_text}></div>
        </div>
      </div>
    </section>
  );
};
