import { setNavigation } from '../../reducers/navigationReducer';
import { useAppDispatch } from '../../store';
import styles from './CartPage.module.css';
//import hooks
import { useNavigate } from 'react-router';

export const PurchaseSummary = ({
  numberOfProducts,
  cost,
  type = '',
}: {
  numberOfProducts: number;
  cost: number;
  type: string;
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleNavigation = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (type === 'small') {
      dispatch(setNavigation('cart'));
      navigate('/cart');
    } else {
      dispatch(setNavigation('shop'));
      navigate('/shop');
    }
  };

  return (
    <div className={styles.purchaseHalf}>
      <h2>Order summary</h2>
      <div className={styles.productsSummary_row}>
        <p>{numberOfProducts} Products</p>
        <p>{cost}.00 €</p>
      </div>
      <div className={styles.productsSummary_row}>
        <p>Delievery charges</p>
        <p>4.00 €</p>
      </div>
      <div
        className={`${styles.productsSummary_row} ${styles.productsSummary_total}`}
      >
        <p>Total</p>
        <p>{cost + Number(4)}.00 €</p>
      </div>
      <button
        onClick={(e) => handleNavigation(e)}
        className={styles.productsSummary_btn}
      >
        Continue
      </button>
    </div>
  );
};
