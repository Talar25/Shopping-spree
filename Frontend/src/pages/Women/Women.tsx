import './Women.module.css';
//importing compontents
import Header from '../../components/Header/Header';
import WomenHeading from '../../components/WomenHeading/WomenHeading';
import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router';

//import hooks
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Women = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Header />
      <WomenHeading />
      <Outlet />
      <Footer />
    </>
  );
};

export default Women;
