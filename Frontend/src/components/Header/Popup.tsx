import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState, useAppDispatch } from '../../store';
import { SmallCard } from '../../pages/CartPage/SmallCard';
//import types
import { CartProduct } from '../../types';
import { setNavigation } from '../../reducers/navigationReducer';

export const Popup = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const notificationObject = useSelector(
    (state: RootState) => state.notification as CartProduct | null
  );

  const goToCart = () => {
    dispatch(setNavigation('cart'));
    navigate('/cart');
  };

  if (!notificationObject) return;

  return (
    notificationObject && (
      <div className={styles.popup}>
        <h3 className={styles.popup_heading}>product added to the cart</h3>
        <SmallCard
          id={notificationObject.id}
          color={notificationObject.color}
          size={notificationObject.size}
          type='small'
        />
        <button className={styles.popup_btn} onClick={goToCart}>
          Go to shopping cart
        </button>
      </div>
    )
  );
};
