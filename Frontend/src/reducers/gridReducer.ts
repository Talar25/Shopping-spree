import { createSlice } from '@reduxjs/toolkit';
import { FilterTypes } from '../types';

const initialState: number = 2;

const gridSlice = createSlice({
  name: 'grid',
  initialState,
  reducers: {
    setGrid(_state, action) {
      return action.payload;
    },
  },
});

export const { setGrid } = gridSlice.actions;
export default gridSlice.reducer;
