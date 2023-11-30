import { createSlice } from '@reduxjs/toolkit';
import productService from '../services/products';
import { Product } from '../types';

const initialState: Product[] = [];

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(_state, action) {
      return action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;

export const initializeProducts = () => {
  return async (
    dispatch: (arg0: {
      payload: Product[];
      type: 'products/setProducts';
    }) => void
  ) => {
    const products = await productService.getAll();
    dispatch(setProducts(products));
  };
};

export default productSlice.reducer;
