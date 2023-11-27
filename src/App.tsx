import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import './global_styles/index.css';
import './global_styles/normalize.css';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Homepage from './pages/Homepage/Homepage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />}></Route>
      <Route path='/women' element={<h1>Women</h1>}>
        <Route path='/women-tshirts' element={<h1>Women tshirts</h1>}></Route>
        <Route path='/women-jackets' element={<h1>Women jackets</h1>}></Route>
        <Route
          path='/women-sweatshirts'
          element={<h1>Women sweatshirts</h1>}
        ></Route>
        <Route path='/women-trousers' element={<h1>Women trousers</h1>}></Route>
      </Route>
      <Route path='/men' element={<h1>Men</h1>}>
        <Route path='/men-tshirts' element={<h1>Men tshirts</h1>}></Route>
        <Route path='/men-jackets' element={<h1>Men jackets</h1>}></Route>
        <Route
          path='/men-sweatshirts'
          element={<h1>Men sweatshirts</h1>}
        ></Route>
        <Route path='/men-trousers' element={<h1>Men trousers</h1>}></Route>
      </Route>

      <Route path='/product/:id' element={<h1>Product</h1>}></Route>
      <Route path='/cart' element={<h1>Shopping cart</h1>}></Route>
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}

export default App;

