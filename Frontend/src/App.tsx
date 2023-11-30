import { Routes, Route } from 'react-router-dom';
import './global_styles/index.css';
import './global_styles/normalize.css';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Homepage from './pages/Homepage/Homepage';
import Women from './pages/Women/Women';
import Men from './pages/Men/Men';
import Cart from './pages/Cart/Cart';
import AllClothes from './pages/AllClothes/AllClothes';
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
      <Route path=':women' element={<Women />}>
        <Route index element={<AllClothes />}></Route>
        <Route path=':tshirt' element={<AllClothes />}></Route>
        <Route path=':jacket' element={<h1>Women jackets</h1>}></Route>
        <Route path=':sweatshirt' element={<h1>Women sweatshirts</h1>}></Route>
        <Route path=':trousers' element={<h1>Women trousers</h1>}></Route>
      </Route>
      <Route path=':men' element={<Men />}>
        <Route path=':tshirt' element={<h1>Men tshirts</h1>}></Route>
        <Route path=':jacket' element={<h1>Men jackets</h1>}></Route>
        <Route path=':sweatshirt' element={<h1>Men sweatshirts</h1>}></Route>
        <Route path=':trousers' element={<h1>Men trousers</h1>}></Route>
      </Route>

      <Route path='product/:id' element={<h1>Product</h1>}></Route>
      <Route path='cart' element={<Cart />}></Route>
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}

export default App;

