import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../types';

const initialState: Product[] = [];

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilteredProducts(_state, action) {
      return action.payload;
    },
  },
});

export const { setFilteredProducts } = filterSlice.actions;
export default filterSlice.reducer;
