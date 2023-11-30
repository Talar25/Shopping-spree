import './Homepage.module.css';
import Header from '../../components/Header/Header';
import HeroSection from '../../components/HeroSection/HeroSection';
import Advertisement from '../../components/Advertisement/Advertisement';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import { useDispatch } from 'react-redux';
import { setToInitial } from '../../reducers/filterReducer';

const Homepage = () => {
  const dispatch = useDispatch();
  dispatch(setToInitial());
  return (
    <>
      <Header />
      <HeroSection />
      <Advertisement />
      <Banner />
      <Footer />
    </>
  );
};

export default Homepage;
