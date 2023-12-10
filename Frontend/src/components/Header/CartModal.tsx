import styles from './Header.module.css';

//import components
import CloseIcon from '@mui/icons-material/Close';
import { PurchaseSummary } from '../../pages/CartPage/PurchaseSummary';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//import hooks
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '../../store';
import { ProductsGallery } from './ProductsGallery';

export const CartModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const cart = useSelector((state: RootState) => state.cart);
  const cartLength = cart.reduce((acc, cur) => acc + cur.number, 0);
  const cost = cart.reduce((acc, cur) => acc + cur.number * cur.price, 0);
  return (
    <section
      className={styles.cartModal}
      style={open ? { right: '0' } : { right: '-40rem' }}
    >
      <div className={styles.cartModal_Nav}>
        <h2>Shopping cart ({cartLength})</h2>
        <CloseIcon sx={{ fontSize: 25 }} onClick={() => setOpen(false)} />
      </div>
      {cartLength > 0 ? (
        <>
          <ProductsGallery cart={cart} />

          <PurchaseSummary
            numberOfProducts={cartLength}
            cost={cost}
            type='small'
          />
        </>
      ) : (
        <EmpyCart />
      )}
    </section>
  );
};

const EmpyCart = () => {
  return (
    <div className={styles.emptycart}>
      <div>
        <ShoppingCartIcon sx={{ fontSize: '25px', marginBottom: '1rem' }} />
        <h4>YOUR SHOPPING CART IS EMPTY</h4>
        <p>Your cart is still empty, discover everything we’ve got for you</p>
      </div>
    </div>
  );
};
