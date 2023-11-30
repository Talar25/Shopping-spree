import { createSlice } from '@reduxjs/toolkit';
import { FilterTypes } from '../types';

const initialState: FilterTypes = {
  name: null,
  gender: null,
  type: null,
  price: null,
  size: null,
  color: null,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setToInitial() {
      return initialState;
    },
    setTypeFilter(state, action) {
      return { ...state, type: action.payload };
    },

    setGenderFilter(state, action) {
      return { ...state, gender: action.payload };
    },
    setNameFilter(state, action) {
      return { ...state, name: action.payload };
    },
    setPriceFilter(state, action) {
      return { ...state, price: action.payload };
    },
    setSizeFilter(state, action) {
      return { ...state, size: action.payload };
    },
    setColorFilter(state, action) {
      return { ...state, color: action.payload };
    },
  },
});

export const {
  setToInitial,
  setGenderFilter,
  setColorFilter,
  setNameFilter,
  setPriceFilter,
  setSizeFilter,
  setTypeFilter,
} = filterSlice.actions;
export default filterSlice.reducer;
