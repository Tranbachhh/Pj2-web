import HomePage from './components/Container/HomePage/HomePage'
import DetailProduct from "./components/Container/Product/DetailProduct/DetailProduct";
import ShowListProductOfCategory from './components/Container/Product/ShowListProductOfCategory/ShowListProductOfCategory';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Cart from './components/Container/Cart';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/product/detailproduct/:product_id" element={<DetailProduct />}></Route>
        <Route path="/product/ofcategory/:category" element={<ShowListProductOfCategory />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
