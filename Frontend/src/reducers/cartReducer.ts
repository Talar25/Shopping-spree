import { createSlice } from '@reduxjs/toolkit';
import { CartProduct } from '../types';

const retrieveCart = (): CartProduct | [] => {
  const userData = localStorage.getItem('cart');
  return userData ? (JSON.parse(userData) as CartProduct) : [];
};

const initialState: CartProduct[] = retrieveCart();

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
        localStorage.setItem('cart', JSON.stringify(updatedProducts));
        return updatedProducts;
      }
      if (!searchedProduct) {
        const newObject = {
          ...action.payload,
          number: 1,
        };
        localStorage.setItem('cart', JSON.stringify([...state, newObject]));
        return [...state, newObject];
      }
    },
    removeProductFromCart(state, action) {
      const id = action.payload.id;
      const color = action.payload.color;
      const size = action.payload.size;
      const searchedProduct = state.find(
        (p) => p.id === id && p.color === color && p.size === size
      );
      const newArr = state.filter((p) => p !== searchedProduct);
      localStorage.setItem('cart', JSON.stringify(newArr));
      return newArr;
    },

    addTheSameProduct(state, action) {
      const id = action.payload.id;
      const color = action.payload.color;
      const size = action.payload.size;
      const searchedProduct = state.find(
        (p) => p.id === id && p.color === color && p.size === size
      );

      if (searchedProduct) {
        const newArr = state.map((product) =>
          product.id === id && product.color === color && product.size === size
            ? { ...product, number: product.number + 1 }
            : product
        );
        localStorage.setItem('cart', JSON.stringify(newArr));
        return newArr;
      }
    },
    removeTheSameProduct(state, action) {
      const id = action.payload.id;
      const color = action.payload.color;
      const size = action.payload.size;
      const searchedProduct = state.find(
        (p) => p.id === id && p.color === color && p.size === size
      );

      if (searchedProduct && searchedProduct.number > 1) {
        const newArr = state.map((product) =>
          product.id === id && product.color === color && product.size === size
            ? { ...product, number: product.number - 1 }
            : product
        );
        localStorage.setItem('cart', JSON.stringify(newArr));
        return newArr;
      }
      if (searchedProduct && searchedProduct.number === 1) {
        const newArr = state.filter((p) => p !== searchedProduct);
        localStorage.setItem('cart', JSON.stringify(newArr));
        return newArr;
      }
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  addTheSameProduct,
  removeTheSameProduct,
} = cartReducer.actions;
export default cartReducer.reducer;
