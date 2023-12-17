import axios from 'axios';

const getCountries = async () => {
  try {
    const response = await axios.get(
      `https://studies.cs.helsinki.fi/restcountries/api/all`
    );

    return response.data;
  } catch (error) {
    // console.error('Error:', error);
    return { found: false };
  }
};

export default {
  getCountries,
};
