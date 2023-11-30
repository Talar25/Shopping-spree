import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: null,
  reducers: {
    changeNotification(_state, action) {
      return action.payload;
    },
  },
});

export const { changeNotification } = notificationSlice.actions;

export const setNotification = (content: string, time: number) => {
  return async (
    dispatch: (arg0: {
      payload: { content: string; time: number };
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
