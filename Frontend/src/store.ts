import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import productReducer from './reducers/productReducer';
import filterReducer from './reducers/filterReducer';
import notificationReducer from './reducers/notificationReducer';
import searchReducer from './reducers/searchReducer';
import gridReducer from './reducers/gridReducer';

const store = configureStore({
  reducer: {
    products: productReducer,
    filter: filterReducer,
    notification: notificationReducer,
    searchTerm: searchReducer,
    grid: gridReducer,
  },
});

// store.subscribe(() => {
//   console.log(store.getState());
// });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
