import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<h1>Homepage</h1>}></Route>
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
        <Route path='men-tshirts' element={<h1>Men tshirts</h1>}></Route>
        <Route path='men-jackets' element={<h1>Men jackets</h1>}></Route>
        <Route
          path='men-sweatshirts'
          element={<h1>Men sweatshirts</h1>}
        ></Route>
        <Route path='men-trousers' element={<h1>Men trousers</h1>}></Route>
      </Route>
      <Route path='/children' element={<h1>Children</h1>}>
        <Route
          path='/children-tshirts'
          element={<h1>Children tshirts</h1>}
        ></Route>
        <Route
          path='/children-jackets'
          element={<h1>Children jackets</h1>}
        ></Route>
        <Route
          path='/children-sweatshirts'
          element={<h1>Children sweatshirts</h1>}
        ></Route>
        <Route
          path='/children-trousers'
          element={<h1>Children trousers</h1>}
        ></Route>
      </Route>
      <Route path='/cart' element={<h1>Shopping cart</h1>}></Route>
      <Route path='*' element={<h1>page not found</h1>} />
    </Routes>
  );
}

export default App;

