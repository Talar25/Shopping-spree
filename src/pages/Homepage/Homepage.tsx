import './Homepage.module.css';
import Header from '../../components/Header/Header';
import HeroSection from '../../components/HeroSection/HeroSection';
import Advertisement from '../../components/Advertisement/Advertisement';
import Banner from '../../components/Banner/Banner';

const Homepage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Advertisement />
      <Banner />
    </>
  );
};

export default Homepage;
