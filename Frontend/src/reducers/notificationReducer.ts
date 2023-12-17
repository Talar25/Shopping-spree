import { createSlice } from '@reduxjs/toolkit';
import { CartProduct } from '../types';
import { AppThunk } from '../store';

const initialState: CartProduct | null = null;

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    changeNotification(_state, action) {
      return action.payload;
    },
    removeNotification() {
      return null;
    },
  },
});

export const { changeNotification, removeNotification } =
  notificationSlice.actions;

export const setNotification = (
  content: CartProduct,
  time: number
): AppThunk => {
  return async (
    dispatch: (arg0: {
      payload: { content: CartProduct; time: number };
      type: 'notification/changeNotification';
    }) => void
  ) => {
    try {
      dispatch(changeNotification(content));
      setTimeout(() => {
        dispatch(changeNotification(null));
      }, time * 1000);
    } catch (error) {
      console.error('Error: :', error);
    }
  };
};

export default notificationSlice.reducer;
