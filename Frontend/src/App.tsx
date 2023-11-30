import { Routes, Route } from 'react-router-dom';
import './global_styles/index.css';
import './global_styles/normalize.css';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Homepage from './pages/Homepage/Homepage';
import Women from './pages/Women/Women';
import Men from './pages/Men/Men';
import Cart from './pages/Cart/Cart';
import ClothesSection from './pages/ClothesSection/ClothesSection';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initializeProducts } from './reducers/productReducer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeProducts());
  }, []);

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

      <Route path='product/:id' element={<h1>Product</h1>}></Route>
      <Route path='cart' element={<Cart />}></Route>
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}

export default App;

