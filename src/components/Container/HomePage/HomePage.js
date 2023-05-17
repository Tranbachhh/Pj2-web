import Toolbar from "../../Layout/Toolbar/Toolbar"
import ShowListItem from '../../Layout/ShowListItem/ShowListItem'
import ListImg from "../../Layout/ListImg/ListImg"
import Menu from "../../Layout/Menu/Menu"
import Footer from "../../Layout/Footer/Footer"

import styles from './HomePage.module.css'

const items = [
    {
        _id: "123456",
        image: [
          "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/1896224739.jpeg",
        ],
        name: "Iphone 14 Pro Max 128Gb",
        description: "Sản phẩm mới nhất của nhãn hàng Iphone",
        price: 29999990,
        discount: 5,
      },
      {
        _id: "123456",
        image: [
          "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/1896224739.jpeg",
        ],
        name: "Iphone 14 Pro Max 128Gb",
        description: "Sản phẩm mới nhất của nhãn hàng Iphone",
        price: 29999990,
        discount: 5,
      },
      {
        _id: "123456",
        image: [
          "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/1896224739.jpeg",
        ],
        name: "Iphone 14 Pro Max 128Gb",
        description: "Sản phẩm mới nhất của nhãn hàng Iphone",
        price: 29999990,
        discount: 5,
      },
      {
        _id: "123456",
        image: [
          "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/1896224739.jpeg",
        ],
        name: "Iphone 14 Pro Max 128Gb",
        description: "Sản phẩm mới nhất của nhãn hàng Iphone",
        price: 29999990,
        discount: 5,
      },
      {
        _id: "123456",
        image: [
          "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/1896224739.jpeg",
        ],
        name: "Iphone 14 Pro Max 128Gb",
        description: "Sản phẩm mới nhất của nhãn hàng Iphone",
        price: 29999990,
        discount: 5,
      },
      {
        _id: "123456",
        image: [
          "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/1896224739.jpeg",
        ],
        name: "Iphone 14 Pro Max 128Gb",
        description: "Sản phẩm mới nhất của nhãn hàng Iphone",
        price: 29999990,
        discount: 5,
      }
]


function HomePage(){

    return(
        <div className={styles.homePage}>
            <Toolbar />
            <ListImg />
            <Menu />
            <div>
              <img alt='khuyenmai' src={require('./km.png')} width={1440} />
            </div>
            <div className={styles.khuyenmai}>
              <span className={styles.kmhot}>KHUYẾN MÃI HOT</span>
              <ShowListItem items={items}/>
            </div>
            <div className={styles.iphone}> 
              <span className={styles.ipname}>ĐIỆN THOẠI IPHONE</span>
              <ShowListItem items={items}/>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage