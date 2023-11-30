import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/productReducer';
import filterReducer from './reducers/filterReducer';
import notificationReducer from './reducers/notificationReducer';
import searchReducer from './reducers/searchReducer';

const store = configureStore({
  reducer: {
    products: productReducer,
    filteredProducts: filterReducer,
    notification: notificationReducer,
    searchTerm: searchReducer,
  },
});

store.subscribe(() => {
  console.log(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
