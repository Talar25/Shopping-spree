//import components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HeroSection from '../../components/HeroSection/HeroSection';
import styles from './AboutUs.module.css';
//import hooks
import { useLocation } from 'react-router-dom';
//import images

import { Heritage } from './Heritage';
import { Description } from './Description';

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

const WorkWithUs = () => {
  return (
    <section className={styles.workWithUs}>
      <div className={styles.workWithUs_wrapper}></div>
    </section>
  );
};
