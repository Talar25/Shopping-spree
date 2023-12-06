//import compontents
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
//import hooks
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Cart } from './Cart';

const CartPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Header />
      <Cart />
      <Footer />
    </>
  );
};

export default CartPage;
