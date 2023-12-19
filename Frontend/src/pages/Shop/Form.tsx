import styles from './Shop.module.css';
import { Reducer, useEffect, useReducer, useState } from 'react';
import countryService from '../../services/country';
import { InputComponent } from './InputComponent';
import { Countries } from './Countries';
import { FormTypes } from '../../types';
import { useNavigate } from 'react-router';
import { useAppDispatch } from '../../store';
import { setNavigation } from '../../reducers/navigationReducer';

// eslint-disable-next-line react-refresh/only-export-components
export const initialState: FormTypes = {
  name: {
    content: '',
    error: '',
  },
  surname: {
    content: '',
    error: '',
  },
  email: {
    content: '',
    error: '',
  },
  telephone: {
    content: '',
    error: '',
  },
  country: {
    content: '',
    error: '',
  },
  province: {
    content: '',
    error: '',
  },
  adress: {
    content: '',
    error: '',
  },
  city: {
    content: '',
    error: '',
  },
  postcode: {
    content: '',
    error: '',
  },
};

// eslint-disable-next-line react-refresh/only-export-components
export function reducer(
  state: FormTypes,
  action: { type: unknown; payload: unknown }
) {
  switch (action.type) {
    case 'initial': {
      return initialState;
    }
    case 'name': {
      return { ...state, name: { content: action.payload, error: '' } };
    }
    case 'surname': {
      return { ...state, surname: { content: action.payload, error: '' } };
    }
    case 'email': {
      return { ...state, email: { content: action.payload, error: '' } };
    }
    case 'telephone': {
      return { ...state, telephone: { content: action.payload, error: '' } };
    }
    case 'country': {
      return { ...state, country: { content: action.payload, error: '' } };
    }
    case 'province': {
      return { ...state, province: { content: action.payload, error: '' } };
    }
    case 'adress': {
      return { ...state, adress: { content: action.payload, error: '' } };
    }
    case 'city': {
      return { ...state, city: { content: action.payload, error: '' } };
    }
    case 'postcode': {
      return { ...state, postcode: { content: action.payload, error: '' } };
    }
    case 'error/name': {
      const length =
        typeof state.name.content === 'string' ? state.name.content.length : 0;
      const regex = /\d/;
      let nameError = '';
      if (!state.name.content) {
        nameError = "Name's field is empty.";
      } else if (length < 3) {
        nameError = 'Name is too short. It should be longer than 2 letters.';
      } else if (length > 14) {
        nameError = 'Name is too long. It should be less than 14 letters.';
      } else if (regex.test(state.name.content)) {
        nameError = 'Name should not be having numbers in it.';
      }
      return { ...state, name: { ...state.name, error: nameError } };
    }
    case 'error/surname': {
      const length =
        typeof state.surname.content === 'string'
          ? state.surname.content.length
          : 0;
      const regex = /\d/;
      let nameError = '';
      if (!state.surname.content) {
        nameError = "Surname's field is empty.";
      } else if (length < 4) {
        nameError = 'Surname is too short. It should be longer than 3 letters.';
      } else if (length > 14) {
        nameError = 'Surname is too long. It should be less than 14 letters.';
      } else if (regex.test(state.surname.content)) {
        nameError = 'Surname should not be having numbers in it.';
      }
      return { ...state, surname: { ...state.surname, error: nameError } };
    }
    case 'error/email': {
      const length =
        typeof state.email.content === 'string'
          ? state.email.content.length
          : 0;
      let nameError = '';
      if (!state.email.content) {
        nameError = "Email's field is empty.";
      } else if (length < 9) {
        nameError = 'Email is too short. It should be longer than 8 letters.';
      } else if (length > 30) {
        nameError = 'Email is too long. It should be less than 30 letters.';
      } else if (!state.email.content.includes('@')) {
        nameError = 'Email should be having @ sign.';
      }

      return { ...state, email: { ...state.email, error: nameError } };
    }
    case 'error/telephone': {
      const length =
        typeof state.telephone.content === 'string'
          ? state.telephone.content.length
          : 0;
      let nameError = '';
      if (!state.telephone.content) {
        nameError = "Telephone's field is empty.";
      } else if (length < 9) {
        nameError = `Number is too short. Its short ${9 - length} numbers.`;
      }

      return { ...state, telephone: { ...state.telephone, error: nameError } };
    }
    case 'error/country': {
      const countries = action.payload;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const checkCountries = (countries as any[]).find(
        (country: { name: { common: string } }) =>
          country.name.common.toLowerCase() ===
          state.country.content.toLowerCase()
      );
      let nameError = '';
      if (!state.country.content) {
        nameError = "Country's field is empty.";
      } else if (!checkCountries) {
        nameError = `There is no such country.`;
      }
      return { ...state, country: { ...state.country, error: nameError } };
    }
    case 'error/province': {
      const length =
        typeof state.province.content === 'string'
          ? state.province.content.length
          : 0;
      const regex = /\d/;
      let nameError = '';
      if (!state.province.content) {
        nameError = "Province's field is empty.";
      } else if (length < 6) {
        nameError =
          'Province is too short. It should be longer than 5 letters.';
      } else if (length > 25) {
        nameError = 'Province is too long. It should be less than 25 letters.';
      } else if (regex.test(state.name.content)) {
        nameError = 'Province should not be having numbers in it.';
      }
      return { ...state, province: { ...state.province, error: nameError } };
    }
    case 'error/adress': {
      const length =
        typeof state.adress.content === 'string'
          ? state.adress.content.length
          : 0;
      let nameError = '';
      if (!state.adress.content) {
        nameError = "Adress's field is empty.";
      } else if (length < 9) {
        nameError = 'Adress is too short. It should be longer than 8 letters.';
      } else if (length > 25) {
        nameError = 'Adress is too long. It should be less than 25 letters.';
      }
      return { ...state, adress: { ...state.adress, error: nameError } };
    }
    case 'error/city': {
      const length =
        typeof state.city.content === 'string' ? state.city.content.length : 0;
      const regex = /\d/;
      let nameError = '';
      if (!state.city.content) {
        nameError = "City's field is empty.";
      } else if (length < 6) {
        nameError = 'City is too short. It should be longer than 5 letters.';
      } else if (length > 25) {
        nameError = 'City is too long. It should be less than 25 letters.';
      } else if (regex.test(state.name.content)) {
        nameError = 'City should not be having numbers in it.';
      }
      return { ...state, city: { ...state.city, error: nameError } };
    }
    case 'error/postcode': {
      const length =
        typeof state.postcode.content === 'string'
          ? state.postcode.content.length
          : 0;

      let nameError = '';
      if (!state.postcode.content) {
        nameError = "Postcode's field is empty.";
      } else if (length < 5) {
        nameError =
          'Postcode is too short. It should be longer than 4 letters.';
      } else if (length > 25) {
        nameError = 'Postcode is too long. It should be less than 25 letters.';
      }
      return { ...state, postcode: { ...state.postcode, error: nameError } };
    }

    default:
      return state;
  }
}

export const Form = () => {
  const [state, dispatch] = useReducer(
    reducer as Reducer<FormTypes, { type: string; payload?: unknown }>,
    initialState
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [countries, setCountries] = useState<any[] | null>(null);
  const navigate = useNavigate();
  const appdispatch = useAppDispatch();

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

  const onChange = (name: string) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: name, payload: e.target.value });
    };
  };

  const checkErrors = async () => {
    dispatch({ type: 'error/name' });
    dispatch({ type: 'error/surname' });
    dispatch({ type: 'error/email' });
    dispatch({ type: 'error/telephone' });
    if (countries) {
      dispatch({ type: 'error/country', payload: countries });
    }
    dispatch({ type: 'error/province' });
    dispatch({ type: 'error/adress' });
    dispatch({ type: 'error/city' });
    dispatch({ type: 'error/postcode' });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await checkErrors();

    if (
      !(Object.values(state) as { content: string; error: string }[]).some(
        (field) => field.error && field.error.length > 0
      )
    ) {
      dispatch({ type: 'initial' });
      appdispatch(setNavigation('afterShopping'));
      navigate('/aftershopping');
    }
  };

  return (
    <div className={styles.form_wrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Fill in your details</h2>
        <InputComponent
          type='text'
          placeholder='Name'
          data={state.name}
          handleChange={onChange('name')}
        />
        <InputComponent
          type='text'
          placeholder='Surname'
          data={state.surname}
          handleChange={onChange('surname')}
        />
        <InputComponent
          type='email'
          placeholder='Email'
          data={state.email}
          handleChange={onChange('email')}
        />
        <InputComponent
          type='number'
          placeholder='Telephone'
          data={state.telephone}
          handleChange={onChange('telephone')}
        />
        <h2>
          Before filling in your location details, please choose your country:{' '}
        </h2>
        <InputComponent
          type='text'
          placeholder='Country'
          data={state.country}
          handleChange={onChange('country')}
        >
          {state.country.content.length > 0 && (
            <Countries
              countries={countries}
              filteredValue={state.country.content}
              dispatch={dispatch}
            />
          )}
        </InputComponent>
        <InputComponent
          type='text'
          placeholder='Province'
          data={state.province}
          handleChange={onChange('province')}
        />
        <InputComponent
          type='text'
          placeholder='Adress'
          data={state.adress}
          handleChange={onChange('adress')}
        />
        <InputComponent
          type='text'
          placeholder='City'
          data={state.city}
          handleChange={onChange('city')}
        />
        <InputComponent
          type='number'
          placeholder='Postcode'
          data={state.postcode}
          handleChange={onChange('postcode')}
        />
        <div className={styles.form_buttonWrapper}>
          <button>Continue</button>
        </div>
      </form>
    </div>
  );
};
