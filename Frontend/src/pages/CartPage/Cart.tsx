import styles from './CartPage.module.css';
//import hooks
import { useSelector } from 'react-redux';
//import types
import { RootState } from '../../store';
//import components
import { SmallCard } from './SmallCard';
import { PurchaseSummary } from './PurchaseSummary';
import { EmpyCart } from '../../components/Header/EmpyCart';

export const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart);

  const numberOfProducts = cart.reduce((acc, cur) => acc + cur.number, 0);
  const cost = cart.reduce((acc, cur) => cur.number * +cur.price + acc, 0);

  return (
    <section className={styles.cartSection}>
      {numberOfProducts > 0 ? (
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
          <PurchaseSummary
            numberOfProducts={numberOfProducts}
            cost={cost}
            type=''
          />
        </div>
      ) : (
        <div style={{ marginTop: '15%' }}>
          <EmpyCart />
        </div>
      )}
    </section>
  );
};
