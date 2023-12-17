import Footer from '../../components/Footer/Footer';

import styles from './Shop.module.css';
import { useNavigate } from 'react-router';
import { PurchaseRecap } from './PurchaseRecap';
import { useEffect, useReducer, useState } from 'react';
import countryService from '../../services/country';
import { FormTypes } from '../../types';

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

const initialState: FormTypes = {
  name: '',
  surname: '',
  email: '',
  telephone: 0,
  country: '',
  province: '',
  adress: '',
  city: '',
  postcode: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'name': {
      return { ...state, name: action.payload };
    }
    case 'surname': {
      return { ...state, surname: action.payload };
    }
    case 'email': {
      return { ...state, email: action.payload };
    }
    case 'telephone': {
      return { ...state, telephone: action.payload };
    }
    case 'country': {
      return { ...state, country: action.payload };
    }
    case 'province': {
      return { ...state, province: action.payload };
    }
    case 'adress': {
      return { ...state, adress: action.payload };
    }
    case 'city': {
      return { ...state, city: action.payload };
    }
    case 'postcode': {
      return { ...state, postcode: action.payload };
    }
  }
  //
}

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [countries, setCountries] = useState(null);
  const [countryInput, setCountryInput] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const countriesData = await countryService.getCountries();
      if (!countriesData) {
        return null;
      }
      setCountries(countriesData);
    };
    fetchData();
  }, []);

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
        <div className={styles.countryInput_box}>
          <input
            className={styles.countryInput}
            type='text'
            placeholder='Country'
            required
            value={state.country}
            onChange={(e) =>
              dispatch({ type: 'country', payload: e.target.value })
            }
          ></input>
          {state.country.length > 0 && (
            <Countries
              countries={countries}
              filteredValue={state.country}
              dispatch={dispatch}
            />
          )}
        </div>
        <input type='text' placeholder='Province' required></input>
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

function Countries({ countries, filteredValue, dispatch }) {
  const [countrySelected, setCountrySelected] = useState(false);
  let filteredCountries = [];

  const chooseCountry = (country) => {
    dispatch({ type: 'country', payload: country });
    setCountrySelected(true);
  };

  if (filteredValue.length > 0) {
    filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(filteredValue.toLowerCase())
    );
  }

  if (
    filteredCountries.length > 10 ||
    filteredCountries.length === 0 ||
    countrySelected
  ) {
    return <div></div>;
  }

  return (
    <div className={styles.countries_modal}>
      <ul>
        {filteredCountries.map((country) => (
          <li
            key={country.name.common}
            onClick={() => chooseCountry(country.name.common)}
          >
            {country.name.common}
          </li>
        ))}
      </ul>
    </div>
  );
}
