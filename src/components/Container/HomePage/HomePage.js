import Toolbar from "../../Layout/Toolbar/Toolbar"
import ShowListItem from '../../Layout/ShowListItem/ShowListItem'
import ListImg from "../../Layout/ListImg/ListImg"
import Footer from "../../Layout/Footer/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"

const itemsIP=[
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
  },
]

const itemsSS=[{_id: "s1",
image: [
  "https://images.samsung.com/is/image/samsung/p6pim/vn/2302/gallery/vn-galaxy-s23-s911-sm-s911bzgcxxv-thumb-534848033?imwidth=480",
],
name: "Giá Samsung Galaxy Z Fold4",
description: "Sản phẩm mới nhất của nhãn hàng Samsung",
detail: {
  rear_camera: "14",
  front_camera: "14",
  operating_system: "Apk",
  display_size: "6.1",
  power: "3279",
  memory: "258",
  ram: "8",
},
category: "Samsung",
price: 32000000,
discount: 15,},
{_id: "s1",
    image: [
      "https://images.samsung.com/is/image/samsung/p6pim/vn/2302/gallery/vn-galaxy-s23-s911-sm-s911bzgcxxv-thumb-534848033?imwidth=480",
    ],
    name: "Giá Samsung Galaxy Z Fold4",
    description: "Sản phẩm mới nhất của nhãn hàng Samsung",
    detail: {
      rear_camera: "14",
      front_camera: "14",
      operating_system: "Apk",
      display_size: "6.1",
      power: "3279",
      memory: "258",
      ram: "8",
    },
    category: "Samsung",
    price: 32000000,
    discount: 15,},
    {_id: "s1",
    image: [
      "https://images.samsung.com/is/image/samsung/p6pim/vn/2302/gallery/vn-galaxy-s23-s911-sm-s911bzgcxxv-thumb-534848033?imwidth=480",
    ],
    name: "Giá Samsung Galaxy Z Fold4",
    description: "Sản phẩm mới nhất của nhãn hàng Samsung",
    detail: {
      rear_camera: "14",
      front_camera: "14",
      operating_system: "Apk",
      display_size: "6.1",
      power: "3279",
      memory: "258",
      ram: "8",
    },
    category: "Samsung",
    price: 32000000,
    discount: 15,}
]

const itemsKM = [
    {
      _id: "123456",
      image: [
        "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/1896224739.jpeg",
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
    },
{_id: "t1",
image: [
    "https://www.techone.vn/wp-content/uploads/2022/03/ip-trang-768x768.jpg",
],
name: "Máy Tính Bảng iPad Air 5",
description: "Sản phẩm mới nhất của nhãn hàng Iphone",
detail: {
  rear_camera: "14",
  front_camera: "14",
  operating_system: "IOS",
  display_size: "6.1",
  power: "3279",
  memory: "258",
  ram: "8",
},
category: "Tablet",
price: 20000000,
discount: 15,},
{_id: "s1",
image: [
  "https://images.samsung.com/is/image/samsung/p6pim/vn/2302/gallery/vn-galaxy-s23-s911-sm-s911bzgcxxv-thumb-534848033?imwidth=480",
],
name: "Giá Samsung Galaxy Z Fold4",
description: "Sản phẩm mới nhất của nhãn hàng Samsung",
detail: {
  rear_camera: "14",
  front_camera: "14",
  operating_system: "Apk",
  display_size: "6.1",
  power: "3279",
  memory: "258",
  ram: "8",
},
category: "Samsung",
price: 32000000,
discount: 15,},
{_id: "123456a",
image: [
    "https://m.media-amazon.com/images/I/81jMdUBtRDL.jpg",
],
name: "APPLE iPhone 6s Plus (Gold, 32 GB)",
description: "APPLE iPhone 6s Plus (Gold, 32 GB)",
detail: {
  rear_camera: "12",
  front_camera: "6",
  operating_system: "IOS",
  display_size: "0",
  power: "3279",
  memory: "32",
  ram: "4",
},
category: "Iphone6",
price: 1000000,
discount: 20,}
]


function HomePage(){

    return(
        <div className="row container-fluid m-0">
            <Toolbar />
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}>
              <ListImg />
              <div className='row col-11 m-auto bg-danger mb-5 borderRadius'>
              <span className='col-12 text-warning m-3 h3'><FontAwesomeIcon icon={faBoltLightning}/> KHUYẾN MÃI HOT</span>
              <ShowListItem items={itemsKM}/>
              </div>
              <div className='row col-11 m-auto bg-light mb-5 borderRadius'> 
                <span className='col-12 text-warning m-3 h3'>ĐIỆN THOẠI IPHONE</span>
                <ShowListItem items={itemsIP}/>
              </div>
              <div className='row col-11 m-auto bg-light mb-5 borderRadius'> 
                <span className='col-12 text-warning m-3 h3'>ĐIỆN THOẠI SAMSUNG</span>
                <ShowListItem items={itemsSS}/>
              </div>
            </motion.div>
            <Footer />
        </div>
    )
}

export default HomePage