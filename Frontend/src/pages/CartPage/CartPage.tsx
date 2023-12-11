//import compontents
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
//import hooks
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Cart } from './Cart';
import { useDispatch } from 'react-redux';
import { setNotification } from '../../reducers/notificationReducer';

const CartPage = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(setNotification(null, 0));
  }, [pathname, dispatch]);
  return (
    <>
      <Header />
      <Cart />
      <Footer />
    </>
  );
};

export default CartPage;
