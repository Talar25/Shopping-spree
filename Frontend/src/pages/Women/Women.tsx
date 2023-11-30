import './Women.module.css';
import Header from '../../components/Header/Header';

import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router';

const Women = () => {
  return (
    <>
      <Header />
      {/*  */}
      <Outlet />
      <Footer />
    </>
  );
};

export default Women;
