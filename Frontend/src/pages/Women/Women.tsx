import './Women.module.css';
import Header from '../../components/Header/Header';
import WomenHeading from '../../components/WomenHeading/WomenHeading';

import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router';

const Women = () => {
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
