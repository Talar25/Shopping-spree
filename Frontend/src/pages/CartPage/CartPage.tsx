//import compontents
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
//import hooks
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeNotification } from '../../reducers/notificationReducer';
//import components
import { Cart } from './Cart';
import Authors from '../../components/Authors/Authors';

const CartPage = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(removeNotification());
  }, [pathname, dispatch]);
  return (
    <>
      <Header />
      <Cart />
      <Footer />
      <Authors />
    </>
  );
};

export default CartPage;
