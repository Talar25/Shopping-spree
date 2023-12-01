import { createSlice } from '@reduxjs/toolkit';
import { CartProduct } from '../types';

const initialState: CartProduct[] = [];

const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart(state, action) {
      return [...state, action.payload];
    },
    removeProductFromCart(state, action) {
      return state.filter((s) => s !== action.payload);
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartReducer.actions;
export default cartReducer.reducer;
