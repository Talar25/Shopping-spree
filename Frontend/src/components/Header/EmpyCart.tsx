import styles from './Header.module.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const EmpyCart = () => {
  return (
    <div className={styles.emptycart}>
      <div>
        <ShoppingCartIcon sx={{ fontSize: '25px', marginBottom: '1rem' }} />
        <h4>empty cart</h4>
        <p>Your cart is still empty, discover our collection</p>
      </div>
    </div>
  );
};
