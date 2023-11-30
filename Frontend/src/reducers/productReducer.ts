import { createSlice } from '@reduxjs/toolkit';
import productService from '../services/products';
import { Product } from '../types';
import { AppThunk } from '../store';

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

export const initializeProducts = (): AppThunk => async (dispatch) => {
  try {
    const products = await productService.getAll();
    dispatch(setProducts(products));
  } catch (error) {
    // Handle errors if needed
    console.error('Error initializing products:', error);
  }
};

export default productSlice.reducer;
