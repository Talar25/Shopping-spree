import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '../../store';
import { SmallCard } from '../../pages/CartPage/SmallCard';

export const Popup = () => {
  const navigate = useNavigate();
  const notificationObject = useSelector(
    (state: RootState) => state.notification
  );

  const goToCart = () => {
    navigate('/cart');
  };

  if (!notificationObject) return;

  if (notificationObject) {
    return (
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
    );
  }
};