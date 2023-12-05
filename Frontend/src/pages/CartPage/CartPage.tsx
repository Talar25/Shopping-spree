import './CartPage.module.css';
//import compontents
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
//import hooks
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Cart = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Header />

      <Footer />
    </>
  );
};

export default Cart;
