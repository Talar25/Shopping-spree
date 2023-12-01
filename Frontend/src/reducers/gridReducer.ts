import { createSlice } from '@reduxjs/toolkit';

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
