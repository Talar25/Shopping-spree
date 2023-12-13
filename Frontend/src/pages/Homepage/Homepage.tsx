import './Homepage.module.css';
//import components
import Header from '../../components/Header/Header';
import HeroSection from '../../components/HeroSection/HeroSection';
import Advertisement from '../../components/Advertisement/Advertisement';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
//import hooks
import { useDispatch } from 'react-redux';
import { setToInitial } from '../../reducers/filterReducer';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Authors from '../../components/Authors/Authors';

const Homepage = () => {
  const dispatch = useDispatch();
  dispatch(setToInitial());
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Header />

      <HeroSection type='homepage' />
      <Advertisement />
      <Banner />
      <Footer />
      <Authors />
    </>
  );
};

export default Homepage;
