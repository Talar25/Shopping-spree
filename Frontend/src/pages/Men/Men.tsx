import './Men.module.css';
import Header from '../../components/Header/Header';

import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router';
import ManHeading from '../../components/ManHeading/ManHeading';
//hooks
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Men = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Header />
      <ManHeading />
      <Outlet />
      <Footer />
    </>
  );
};

export default Men;
