//import components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HeroSection from '../../components/HeroSection/HeroSection';
//import hooks
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
//import images
import { Heritage } from './Heritage';
import { Description } from './Description';
import { WorkWithUs } from './WorkWithUs';
import Authors from '../../components/Authors/Authors';

const AboutUs = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Header />
      <HeroSection type='about' />
      <Description />
      <Heritage />
      <WorkWithUs />
      <Footer />
      <Authors />
    </>
  );
};

export default AboutUs;
