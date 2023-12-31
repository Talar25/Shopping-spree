import axios from 'axios';
import { Product } from '../types';
import { apiBaseUrl } from '../constants';

const getAll = async () => {
  const { data } = await axios.get<Product[]>(apiBaseUrl);

  return data;
};

export default {
  getAll,
};
