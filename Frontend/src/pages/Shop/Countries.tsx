import styles from './Shop.module.css';
import { useState } from 'react';

export function Countries({
  countries,
  filteredValue,
  dispatch,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  countries: any[] | null;
  filteredValue: string;
  dispatch: (action: { type: 'country'; payload?: string }) => void;
}) {
  const [countrySelected, setCountrySelected] = useState(false);
  let filteredCountries = [];

  const chooseCountry = (country: string) => {
    dispatch({ type: 'country', payload: country });
    setCountrySelected(true);
  };

  if (filteredValue.length > 0) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filteredCountries = (countries as any[]).filter((country) =>
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
