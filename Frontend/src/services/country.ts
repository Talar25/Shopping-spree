import axios from 'axios';

const getCountry = async (name: string) => {
  try {
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${name}?fullText=true`
    );

    return response.data[0];
  } catch (error) {
    // console.error('Error:', error);
    return { found: false };
  }
};

export default {
  getCountry,
};
