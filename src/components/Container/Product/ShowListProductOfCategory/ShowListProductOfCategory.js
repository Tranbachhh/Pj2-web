import ShowListItem from '../../../Layout/ShowListItem/ShowListItem'
import Toolbar from '../../../Layout/Toolbar/Toolbar'
import Footer from '../../../Layout/Footer/Footer'
import ListImg from '../../../Layout/ListImg/ListImg';
import {motion} from 'framer-motion'


import { useParams } from 'react-router-dom';

const data = {
    'Iphone':[
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
        }, {
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
        }, {
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
        }],
    'Tablet' : [{_id: "t1",
    image: [
        "https://www.techone.vn/wp-content/uploads/2022/03/ip-trang-768x768.jpg",
    ],
    name: "Máy Tính Bảng iPad Air 5 (2022) 256GB Wifi",
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
    discount: 15,},{_id: "t1",
    image: [
        "https://www.techone.vn/wp-content/uploads/2022/03/ip-trang-768x768.jpg",
    ],
    name: "Máy Tính Bảng iPad Air 5 (2022) 256GB Wifi",
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
    discount: 15,},{_id: "t1",
    image: [
        "https://www.techone.vn/wp-content/uploads/2022/03/ip-trang-768x768.jpg",
    ],
    name: "Máy Tính Bảng iPad Air 5 (2022) 256GB Wifi",
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
    discount: 15,}],
    'Samsung' : [{_id: "s1",
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
    discount: 15,},{_id: "s1",
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
    discount: 15,},{_id: "s1",
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
    discount: 15,}],
    'Headphone' : [{_id: "h1",
    image: [
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX3X2?wid=2104&hei=2980&fmt=jpeg&qlt=95&.v=1580420156213",
    ],
    name: "Beats Studio3 Wireless Over‑Ear Headphones - Matte Black",
    description: "Beats Studio3 Wireless Over‑Ear Headphones - Matte Black",
    detail: {
      rear_camera: "0",
      front_camera: "0",
      operating_system: "0",
      display_size: "0",
      power: "3279",
      memory: "0",
      ram: "0",
    },
    category: "Headphone",
    price: 8000000,
    discount: 20,},{_id: "h1",
    image: [
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX3X2?wid=2104&hei=2980&fmt=jpeg&qlt=95&.v=1580420156213",
    ],
    name: "Beats Studio3 Wireless Over‑Ear Headphones - Matte Black",
    description: "Beats Studio3 Wireless Over‑Ear Headphones - Matte Black",
    detail: {
      rear_camera: "0",
      front_camera: "0",
      operating_system: "0",
      display_size: "0",
      power: "3279",
      memory: "0",
      ram: "0",
    },
    category: "Headphone",
    price: 8000000,
    discount: 20,},{_id: "h1",
    image: [
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX3X2?wid=2104&hei=2980&fmt=jpeg&qlt=95&.v=1580420156213",
    ],
    name: "Beats Studio3 Wireless Over‑Ear Headphones - Matte Black",
    description: "Beats Studio3 Wireless Over‑Ear Headphones - Matte Black",
    detail: {
      rear_camera: "0",
      front_camera: "0",
      operating_system: "0",
      display_size: "0",
      power: "3279",
      memory: "0",
      ram: "0",
    },
    category: "Headphone",
    price: 8000000,
    discount: 20,}]
}

function ShowListProductOfCategory(){

    const params = useParams();
    const category = params.category;
    const categoryN = category.substring(1);

    return(
        <div className='contaier-fluid row'>
            <Toolbar />
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}>
              <ListImg />
              <div className='bg-light col-11 m-auto borderRadius mb-5'>
                <h1 className='text-danger px-5' style={{'text-transform' : 'capitalize'}}>{categoryN}</h1>
                <ShowListItem items={data[categoryN]} />
              </div>
            </motion.div>
            <Footer />            
        </div>
    )
}

export default ShowListProductOfCategory