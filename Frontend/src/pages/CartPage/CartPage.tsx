//import compontents
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
//import hooks
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { removeNotification } from '../../reducers/notificationReducer';
import { RootState, useAppDispatch } from '../../store';
//import components
import { Cart } from './Cart';
import Authors from '../../components/Authors/Authors';
import { useSelector } from 'react-redux';
import PageNotFound from '../PageNotFound/PageNotFound';

const CartPage = () => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const navigation = useSelector((state: RootState) => state.navigation);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(removeNotification());
  }, [pathname, dispatch]);
  return navigation === 'cart' ? (
    <>
      <Header />
      <Cart />
      <Footer />
      <Authors />
    </>
  ) : (
    <PageNotFound />
  );
};

export default CartPage;
