import { useNavigate } from 'react-router';
import styles from './CartPage.module.css';

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

  const handleNavigation = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (type === 'small') navigate('/cart');
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
