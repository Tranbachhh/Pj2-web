import HomePage from './components/Container/HomePage/HomePage'
import DetailProduct from "./components/Container/Product/DetailProduct/DetailProduct";
import ShowListProductOfCategory from './components/Container/Product/ShowListProductOfCategory/ShowListProductOfCategory';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/product/detailproduct/:product_id" element={<DetailProduct />}></Route>
        <Route path="/product/ofcategory/:category" element={<ShowListProductOfCategory />}></Route>
      </Routes>
    </div>
  );
}

export default App;
