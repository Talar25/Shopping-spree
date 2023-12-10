import styles from './Header.module.css';
import { CartProduct } from '../../types';
import { SmallCard } from '../../pages/CartPage/SmallCard';

export const ProductsGallery = ({ cart }: { cart: CartProduct[] }) => {
  return (
    <ul className={styles.cartModal_gallery}>
      {cart.map((c) => (
        <SmallCard
          key={c.id + c.color + c.size}
          id={c.id}
          color={c.color}
          size={c.size}
          type='small'
        />
      ))}
    </ul>
  );
};
