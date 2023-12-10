import styles from './CartPage.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { SmallCard } from './SmallCard';
import { PurchaseSummary } from './PurchaseSummary';

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
                  type=''
                />
              ))}
            </ul>
          </div>
        </div>
        <PurchaseSummary numberOfProducts={numberOfProducts} cost={cost} />
      </div>
    </section>
  );
};
