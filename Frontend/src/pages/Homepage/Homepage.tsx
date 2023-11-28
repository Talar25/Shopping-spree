import './Homepage.module.css';
import Header from '../../components/Header/Header';
import HeroSection from '../../components/HeroSection/HeroSection';
import Advertisement from '../../components/Advertisement/Advertisement';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';

const Homepage = () => {
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
