import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import productReducer from './reducers/productReducer';
import filterReducer from './reducers/filterReducer';
import notificationReducer from './reducers/notificationReducer';
import searchReducer from './reducers/searchReducer';
import gridReducer from './reducers/gridReducer';
import cartReducer from './reducers/cartReducer';
cartReducer;

const store = configureStore({
  reducer: {
    products: productReducer,
    filter: filterReducer,
    notification: notificationReducer,
    searchTerm: searchReducer,
    grid: gridReducer,
    cart: cartReducer,
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

// Use throughout your app instead of plain `useDispatch` and `useSelector`
type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
