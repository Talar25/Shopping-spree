import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import './global_styles/index.css';
import './global_styles/normalize.css';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Homepage from './pages/Homepage/Homepage';
import { useEffect, useState } from 'react';
import productServie from './services/products';
import { Product } from './types';

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await productServie.getAll();
      setProducts(products);
    };
    fetchProducts();
  }, []);

  return (
    <Routes>
      <Route index element={<Homepage />}></Route>
      <Route path='women' element={<h1>Women</h1>}>
        <Route path='tshirts' element={<h1>Women tshirts</h1>}></Route>
        <Route path='jackets' element={<h1>Women jackets</h1>}></Route>
        <Route path='sweatshirts' element={<h1>Women sweatshirts</h1>}></Route>
        <Route path='trousers' element={<h1>Women trousers</h1>}></Route>
      </Route>
      <Route path='men' element={<h1>Men</h1>}>
        <Route path='tshirts' element={<h1>Men tshirts</h1>}></Route>
        <Route path='jackets' element={<h1>Men jackets</h1>}></Route>
        <Route path='sweatshirts' element={<h1>Men sweatshirts</h1>}></Route>
        <Route path='trousers' element={<h1>Men trousers</h1>}></Route>
      </Route>

      <Route path='product/:id' element={<h1>Product</h1>}></Route>
      <Route path='cart' element={<h1>Shopping cart</h1>}></Route>
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}

export default App;

