import styles from './Shop.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { RecapCard } from './RecapCard';

export const PurchaseRecap = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const cartLength = cart.reduce((acc, cur) => acc + cur.number, 0);
  const cost = cart.reduce((acc, cur) => acc + cur.number * cur.price, 0);

  return (
    <div className={styles.purchaseRecap}>
      <h2 className={styles.purchaseRecap_heading}>
        Purchase Summary ({cartLength})
      </h2>
      <ul className={styles.purchaseRecap_gallery}>
        {cart &&
          cart.map((c, index) => (
            <RecapCard
              id={c.id}
              key={c.id + c.color + c.number + index}
              color={c.color}
              size={c.size}
            />
          ))}
      </ul>
      <div className={styles.purchaseRecap_total}>
        <p>Total price:</p>
        <p>{cost + 4}.00€</p>
      </div>
    </div>
  );
};
