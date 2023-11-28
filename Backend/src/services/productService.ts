import products from '../../data/products';
import { NewProduct, Product } from '../types';
import { v1 as uuid } from 'uuid';

const getProducts = (): Product[] => {
  return products;
};

const getOneProduct = (id: string): Product | undefined => {
  const product = products.find((product: { id: string }) => product.id === id);
  return product;
};

const addProduct = (product: NewProduct): Product => {
  const newProduct = {
    id: uuid(),
    ...product,
  };
  products.push(newProduct);
  return newProduct;
};

export default {
  getOneProduct,
  getProducts,
  addProduct,
};
