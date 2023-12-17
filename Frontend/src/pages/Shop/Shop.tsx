import Footer from '../../components/Footer/Footer';

import styles from './Shop.module.css';
import { useNavigate } from 'react-router';
import { PurchaseRecap } from './PurchaseRecap';

import { Form } from './Form';

const Shop = () => {
  return (
    <>
      <ShopForm />
      <Footer />
    </>
  );
};

export default Shop;

const ShopForm = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.shopForm}>
      <header className={styles.heading}>
        <h1 onClick={() => navigate('/')} className={styles.headingText}>
          Shopping Spree
        </h1>
      </header>
      <div className={styles.shopForm_wrapper}>
        <Form />
        <PurchaseRecap />
      </div>
    </section>
  );
};
