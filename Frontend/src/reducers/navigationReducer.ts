import { createSlice } from '@reduxjs/toolkit';

const initialState: string | null = null;

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setNavigation(_state, action) {
      return action.payload;
    },
  },
});

export const { setNavigation } = navigationSlice.actions;
export default navigationSlice.reducer;
