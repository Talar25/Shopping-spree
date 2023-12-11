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
    addColorFilter(state, action) {
      if (!state.color) return { ...state, color: [action.payload] };

      if (!state.color.includes(action.payload)) {
        const arr = [...state.color, action.payload];
        return { ...state, color: arr };
      }
    },
    removeColorFilter(state, action) {
      if (state.color && state.color?.includes(action.payload)) {
        const newArr = state.color.filter((color) => color !== action.payload);
        return { ...state, color: newArr };
      }
    },
    addSizeFilter(state, action) {
      if (!state.size) return { ...state, size: [action.payload] };

      if (!state.size.includes(action.payload)) {
        const arr = [...state.size, action.payload];
        return { ...state, size: arr };
      }
    },
    removeSizeFilter(state, action) {
      if (state.size && state.size?.includes(action.payload)) {
        const newArr = state.size.filter((size) => size !== action.payload);
        return { ...state, size: newArr };
      }
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
  addColorFilter,
  addSizeFilter,
  removeColorFilter,
  removeSizeFilter,
} = filterSlice.actions;
export default filterSlice.reducer;
