import Toolbar from "../../Layout/Toolbar/Toolbar"
import ShowListItem from '../../Layout/ShowListItem/ShowListItem'
import ListImg from "../../Layout/ListImg/ListImg"
import Menu from "../../Layout/Menu/Menu"
import Footer from "../../Layout/Footer/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import styles from './HomePage.module.css'
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons"

const items=[
  {
    _id: "123456",
    image: [
      "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/1896224739.jpeg",
      "product-1681974909771-iphone-13-starlight.jpg",
      "product-1681974909771-iPhone-14.jpg",
    ],
    name: "Iphone 14 Pro Max 128Gb",
    description: "Sản phẩm mới nhất của nhãn hàng Iphone",
    detail: {
      rear_camera: "14",
      front_camera: "14",
      operating_system: "IOS",
      display_size: "6.1",
      power: "3279",
      memory: "128",
      ram: "4",
    },
    category: "Iphone",
    price: 29999990,
    discount: 5,
  },{
    _id: "123456",
    image: [
      "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/1896224739.jpeg",
      "product-1681974909771-iphone-13-starlight.jpg",
      "product-1681974909771-iPhone-14.jpg",
    ],
    name: "Iphone 14 Pro Max 128Gb",
    description: "Sản phẩm mới nhất của nhãn hàng Iphone",
    detail: {
      rear_camera: "14",
      front_camera: "14",
      operating_system: "IOS",
      display_size: "6.1",
      power: "3279",
      memory: "128",
      ram: "4",
    },
    category: "Iphone",
    price: 29999990,
    discount: 5,
  },{
    _id: "123456",
    image: [
      "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/1896224739.jpeg",
      "product-1681974909771-iphone-13-starlight.jpg",
      "product-1681974909771-iPhone-14.jpg",
    ],
    name: "Iphone 14 Pro Max 128Gb",
    description: "Sản phẩm mới nhất của nhãn hàng Iphone",
    detail: {
      rear_camera: "14",
      front_camera: "14",
      operating_system: "IOS",
      display_size: "6.1",
      power: "3279",
      memory: "128",
      ram: "4",
    },
    category: "Iphone",
    price: 29999990,
    discount: 5,
  },{
    _id: "123456",
    image: [
      "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/1896224739.jpeg",
      "product-1681974909771-iphone-13-starlight.jpg",
      "product-1681974909771-iPhone-14.jpg",
    ],
    name: "Iphone 14 Pro Max 128Gb",
    description: "Sản phẩm mới nhất của nhãn hàng Iphone",
    detail: {
      rear_camera: "14",
      front_camera: "14",
      operating_system: "IOS",
      display_size: "6.1",
      power: "3279",
      memory: "128",
      ram: "4",
    },
    category: "Iphone",
    price: 29999990,
    discount: 5,
  },{
    _id: "123456",
    image: [
      "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/1896224739.jpeg",
      "product-1681974909771-iphone-13-starlight.jpg",
      "product-1681974909771-iPhone-14.jpg",
    ],
    name: "Iphone 14 Pro Max 128Gb",
    description: "Sản phẩm mới nhất của nhãn hàng Iphone",
    detail: {
      rear_camera: "14",
      front_camera: "14",
      operating_system: "IOS",
      display_size: "6.1",
      power: "3279",
      memory: "128",
      ram: "4",
    },
    category: "Iphone",
    price: 29999990,
    discount: 5,
  },{
    _id: "123456",
    image: [
      "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/1896224739.jpeg",
      "product-1681974909771-iphone-13-starlight.jpg",
      "product-1681974909771-iPhone-14.jpg",
    ],
    name: "Iphone 14 Pro Max 128Gb",
    description: "Sản phẩm mới nhất của nhãn hàng Iphone",
    detail: {
      rear_camera: "14",
      front_camera: "14",
      operating_system: "IOS",
      display_size: "6.1",
      power: "3279",
      memory: "128",
      ram: "4",
    },
    category: "Iphone",
    price: 29999990,
    discount: 5,
  },{
    _id: "123456",
    image: [
      "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/1896224739.jpeg",
      "product-1681974909771-iphone-13-starlight.jpg",
      "product-1681974909771-iPhone-14.jpg",
    ],
    name: "Iphone 14 Pro Max 128Gb",
    description: "Sản phẩm mới nhất của nhãn hàng Iphone",
    detail: {
      rear_camera: "14",
      front_camera: "14",
      operating_system: "IOS",
      display_size: "6.1",
      power: "3279",
      memory: "128",
      ram: "4",
    },
    category: "Iphone",
    price: 29999990,
    discount: 5,
  },{
    _id: "123456",
    image: [
      "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/1896224739.jpeg",
      "product-1681974909771-iphone-13-starlight.jpg",
      "product-1681974909771-iPhone-14.jpg",
    ],
    name: "Iphone 14 Pro Max 128Gb",
    description: "Sản phẩm mới nhất của nhãn hàng Iphone",
    detail: {
      rear_camera: "14",
      front_camera: "14",
      operating_system: "IOS",
      display_size: "6.1",
      power: "3279",
      memory: "128",
      ram: "4",
    },
    category: "Iphone",
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
              <span className={styles.kmhot}><FontAwesomeIcon icon={faBoltLightning}/> KHUYẾN MÃI HOT</span>
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