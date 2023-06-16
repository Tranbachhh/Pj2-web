import HomePage from '../components/Container/HomePage/HomePage'
import DetailProduct from '../components/Container/Product/DetailProduct/DetailProduct' 
import ShowListProductOfCategory from '../components/Container/Product/DetailProduct/ShowListProductOfCategory'

const Routes = [
    { path: "/", component: HomePage },
    { path: "/product/detailproduct", component: DetailProduct },
    { path: "/product/ofcategory:category", component: ShowListProductOfCategory}
]

export default Routes