import { createSlice } from '@reduxjs/toolkit';
import { CartProduct } from '../types';

const initialState: CartProduct[] = [];

const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart(state, action) {
      const id = action.payload.id;
      const color = action.payload.color;
      const size = action.payload.size;
      const searchedProduct = state.find(
        (p) => p.id === id && p.color === color && p.size === size
      );

      if (searchedProduct) {
        const updatedProducts = state.map((product) =>
          product.id === id && product.color === color && product.size === size
            ? { ...product, number: product.number + 1 }
            : product
        );

        return updatedProducts;
      }
      if (!searchedProduct) {
        const newObject = {
          ...action.payload,
          number: 1,
        };

        return [...state, newObject];
      }
    },
    removeProductFromCart(state, action) {
      return state.filter((s) => s !== action.payload);
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartReducer.actions;
export default cartReducer.reducer;
