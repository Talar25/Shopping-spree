import Footer from '../../components/Footer/Footer';

import styles from './Shop.module.css';
import { useNavigate } from 'react-router';
import { PurchaseRecap } from './PurchaseRecap';
import { useEffect, useState } from 'react';
import countryService from '../../services/country';

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

const Form = () => {
  const [country, setCountry] = useState(null);
  const [countryInput, setCountryInput] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async (name: string) => {
      const country = await countryService.getCountry(name);
      if (!country) {
        return null;
      }
      setCountry(country);
      console.log(country);
    };
    if (countryInput) fetchData(countryInput);
  }, [countryInput]);

  return (
    <div className={styles.form_wrapper}>
      <form className={styles.form}>
        <h2>Fill in your details</h2>
        <input type='text' placeholder='Name' required></input>
        <input type='text' placeholder='Surname' required></input>
        <input type='email' placeholder='Email' required></input>
        <input type='tel' placeholder='Telephone' required></input>

        <h2>
          Before filling in your location details, please choose your country:{' '}
        </h2>
        <input
          type='text'
          placeholder='Country'
          required
          onChange={(e) => setCountryInput(e.target.value)}
        ></input>
        <select defaultValue=''>
          <option value='' disabled>
            Province
          </option>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </select>
        <input type='text' placeholder='Adress' required></input>
        <input type='text' placeholder='City' required></input>
        <input type='text' placeholder='Postcode' required></input>

        <div className={styles.form_buttonWrapper}>
          <button>Continue</button>
        </div>
      </form>
    </div>
  );
};
