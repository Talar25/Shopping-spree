import styles from './Header.module.css';

//import components
import CloseIcon from '@mui/icons-material/Close';
import { PurchaseSummary } from '../../pages/CartPage/PurchaseSummary';
//import hooks
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '../../store';
import { ProductsGallery } from './ProductsGallery';
import { useEffect, useRef } from 'react';
import { EmpyCart } from './EmpyCart';
import { useParams } from 'react-router';

export const CartModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const cartRef = useRef(null);
  const cart = useSelector((state: RootState) => state.cart);
  const cartLength = cart.reduce((acc, cur) => acc + cur.number, 0);
  const cost = cart.reduce((acc, cur) => acc + cur.number * cur.price, 0);

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setOpen(false);
      }
    };

    const closeOnClickOutside = (e) => {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', close);
    document.addEventListener('mousedown', closeOnClickOutside);
    return () => {
      window.removeEventListener('keydown', close);
      document.removeEventListener('mousedown', closeOnClickOutside);
    };
  }, [setOpen]);
  return (
    <section
      ref={cartRef}
      className={styles.cartModal}
      style={open ? { right: '0' } : { right: '-40rem' }}
    >
      <div className={styles.cartModal_Nav}>
        <h2>Shopping cart ({cartLength})</h2>
        <CloseIcon
          sx={{ fontSize: 25, cursor: 'pointer' }}
          onClick={() => setOpen(false)}
        />
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
