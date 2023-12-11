import { createSlice } from '@reduxjs/toolkit';
import { CartProduct } from '../types';

const initialState: CartProduct | null = null;

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    changeNotification(_state, action) {
      return action.payload;
    },
  },
});

export const { changeNotification } = notificationSlice.actions;

export const setNotification = (content: CartProduct, time: number) => {
  return async (
    dispatch: (arg0: {
      payload: { content: CartProduct; time: number };
      type: 'notification/changeNotification';
    }) => void
  ) => {
    dispatch(changeNotification(content));
    setTimeout(() => {
      dispatch(changeNotification(null));
    }, time * 1000);
  };
};

export default notificationSlice.reducer;
