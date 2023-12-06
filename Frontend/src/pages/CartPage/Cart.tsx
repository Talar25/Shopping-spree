import styles from './CartPage.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { SmallCard } from './SmallCard';

export const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart);
  console.log(cart);

  const numberOfProducts = cart.reduce((acc, cur) => acc + cur.number, 0);
  const cost = cart.reduce((acc, cur) => acc + cur.number * cur.price, 0);

  return (
    <section className={styles.cartSection}>
      <div className={styles.wrapper}>
        <div className={styles.productsHalf}>
          <h2>Shopping bag ({numberOfProducts})</h2>
          <div className={styles.productsGallery}>
            <ul className={styles.cartProducts}>
              {cart.map((c) => (
                <SmallCard
                  key={c.id + c.color + c.size}
                  id={c.id}
                  color={c.color}
                  size={c.size}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.purchaseHalf}>
          <h2>Order summary</h2>
          <div className={styles.productsSummary_row}>
            <p>{numberOfProducts} Products</p>
            <p>{cost}.00 EURO</p>
          </div>
          <div className={styles.productsSummary_row}>
            <p>Delievery charges</p>
            <p>4.00 EURO</p>
          </div>
          <div
            className={`${styles.productsSummary_row} ${styles.productsSummary_total}`}
          >
            <p>Total</p>
            <p>{cost + Number(4)}.00 EURO</p>
          </div>
          <button className={styles.productsSummary_btn}>Continue</button>
        </div>
      </div>
    </section>
  );
};
