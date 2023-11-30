import './Men.module.css';
import Header from '../../components/Header/Header';

import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router';
import ManHeading from '../../components/ManHeading/ManHeading';

const Men = () => {
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
