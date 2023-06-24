import Toolbar from '../../../Layout/Toolbar/Toolbar'
import Footer from '../../../Layout/Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag,faCartPlus, faComment, faList, faStar, faGear } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import {motion} from 'framer-motion' ;
import Table from 'react-bootstrap/Table';

function DetailProduct(){

    const params = useParams();
    const product_id1 = params.product_id;
    const product_id = product_id1.substring(1);

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
        discount: 20,}],
        'Iphone6' : [{_id: "123456a",
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
        discount: 20,}]
    }

    const product = data[product_id][0]

      const convertPriceToString = (price) => {
        return price.toLocaleString("it-IT", {
          style: "currency",
          currency: "VND",
        });
      };

    const measure = ["MP", "MP", "", "Inch", "mAh", "GB", "GB"];

    const handleClick = ()=>{
        alert("Có cái nịt");
    }

    return(
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className='container-fluid'>
            <Toolbar />
            <div className='row px-5 mt-5 mb-5'>
                {/* Phần bên trái */}
                <div className=' row col-lg-5 col-md-12 justify-content-center align-self-start'>
                    <div className='row col-11 justify-content-center'>
                        <motion.img
                        whileHover={{scale:1.3}}
                        className='img-fluid rounded' alt={product.name} src={product.image[0]} ></motion.img>
                    </div>
                    <div className='row col-12 justify-content-around m-5'>
                        <button className='btn btn-primary col-5' ><FontAwesomeIcon icon={faList}/> Mô tả chi tiết </button>
                        <button className='btn btn-primary col-5'><FontAwesomeIcon icon={faComment}/> Nhận xét </button>
                    </div>
                    <div className='col-8 bg-light rounded text-center p-3 text-dark m-3'>
                        {product.name} <br />
                        {product.description}
                    </div>
                    <button  className='btn btn-warning col-8'><FontAwesomeIcon icon={faStar}/> Đánh giá sản phẩm</button>
                </div>
                {/* Phần bên phải */}
                <div className='row col-lg-7 col-md-12 justify-content-center p-3 bg-light rounded'>
                    <div className=''>
                        <div>
                            <span className='col-12 lead text-dark display-5'>
                                {product.name}
                            </span>
                            <div className='row col-12 m-2'>
                                <span className='col-5 text-danger h1'>
                                    {convertPriceToString(Math.round((product.price-product.price*product.discount/100)/1000)*1000)}
                                </span>
                                <span className='col-3'>
                                   <br />{convertPriceToString(product.price)}
                                </span>
                            </div>
                            <div className='row col-12 justify-content-around m-3'>
                                <motion.button
                                whileHover={{scale:1.4}}
                                className='btn btn-danger col-5' onClick={handleClick}><FontAwesomeIcon icon={faShoppingBag}/>MUA NGAY</motion.button>
                                <motion.button
                                whileHover={{scale:1.4}}
                                className='btn btn-primary col-5'><FontAwesomeIcon icon={faCartPlus}/>THÊM VÀO GIỎ HÀNG</motion.button>
                            </div>
                            <hr />
                        </div>
                        {/* Thông số */}
                        <div className='col-12'>
                            <span className='col-12 m-3' style={{'font-size':'36px'}}>
                                <FontAwesomeIcon icon={faGear}/> Thông số
                            </span>
                            <Table striped bordered hover className='col-10 m-3 rounded' style={{'font-size':'24px'}}>
                                <tbody>
                                    {Object.keys(product.detail).map((key,index)=>{
                                        let title = key.split("_").join(" ");
                                        return(
                                            <tr>
                                                <td>{title}:</td>
                                                <td>{product.detail[key]} {measure[index]}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
                {/* Phần đánh giá */}
                <div className='col-12 mt-5 bg-light p-3 rounded'>
                    <h2>Nhận xét</h2>
                    <textarea className='col-10 form-control' rows='10' />
                    <button className='btn btn-primary m-2'>Gửi</button>
                </div>
            </div>
            <Footer />
        </motion.div>
    )
}

export default DetailProduct