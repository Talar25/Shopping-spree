import { Routes, Route } from 'react-router-dom';
import './global_styles/index.css';
import './global_styles/normalize.css';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Homepage from './pages/Homepage/Homepage';
import Women from './pages/Women/Women';
import Men from './pages/Men/Men';
import CartPage from './pages/CartPage/CartPage';
import ClothesSection from './pages/ClothesSection/ClothesSection';
import AboutUs from './pages/AboutUs/AboutUs';
import Shop from './pages/Shop/Shop';
import { useEffect } from 'react';
import { useAppDispatch } from './store';
import { initializeProducts } from './reducers/productReducer';
import ProductPage from './pages/ProductPage/ProductPage';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeProducts());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<Homepage />}></Route>
      <Route path='women' element={<Women />}>
        <Route index element={<ClothesSection genderType='female' />}></Route>
        <Route
          path=':tshirt'
          element={<ClothesSection genderType='female' />}
        ></Route>
        <Route
          path=':jacket'
          element={<ClothesSection genderType='female' />}
        ></Route>
        <Route
          path=':sweatshirt'
          element={<ClothesSection genderType='female' />}
        ></Route>
        <Route
          path=':trousers'
          element={<ClothesSection genderType='female' />}
        ></Route>
      </Route>
      <Route path='men' element={<Men />}>
        <Route index element={<ClothesSection genderType='men' />}></Route>
        <Route
          path=':tshirt'
          element={<ClothesSection genderType='men' />}
        ></Route>
        <Route
          path=':jacket'
          element={<ClothesSection genderType='men' />}
        ></Route>
        <Route
          path=':sweatshirt'
          element={<ClothesSection genderType='men' />}
        ></Route>
        <Route
          path=':trousers'
          element={<ClothesSection genderType='men' />}
        ></Route>
      </Route>
      <Route path='about' element={<AboutUs />}></Route>
      <Route path='shop' element={<Shop />}></Route>
      <Route path='product/:id' element={<ProductPage />}></Route>
      <Route path='/cart' element={<CartPage />}></Route>
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}

export default App;

