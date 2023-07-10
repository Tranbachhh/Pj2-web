import { faAppleAlt, faArrowDown, faCameraAlt, faMobileScreen, faSdCard } from '@fortawesome/free-solid-svg-icons';
import styles from './Item.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Item( {item = {
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
},className=""}){

    const classes = [
        'col-lg-3',
        'col-md-4',
        'col-sm-6',
        'container-fluid',
        'px-2',
        'mb-5',
        className,
      ].join(" ");

    const convertPriceToString = (price) => {
        return price.toLocaleString("it-IT", {
          style: "currency",
          currency: "VND",
        });
      };

      function handleLinkClick() {
        window.scrollTo(0, 0);
      }

    return(
      <div
      className={classes}>
        <div className={styles.item} onClick={handleLinkClick}>
          <Link to={`/product/detailproduct/:${item.category}`}>
            <div className='row m-2'> 
                <div className='col-lg-7 col-md-12 bg-danger text-light border rounded m-auto'>
                    Giảm {convertPriceToString(Math.round(item.price*item.discount/100))}
                </div>
                <div className='col-lg-4 bg-primary text-light border rounded'>Trả góp  0%</div>
            </div>
            <motion.img
      whileHover={{scale:1.3}} src={item.image[0]} alt={item.name} className='boder rounded col-8' />
            <div className={styles.name}>
                {item.name}
            </div>
            <div className={styles.price_1}>{convertPriceToString(item.price)}</div>
            <div className="row m-2"> 
                <div className="col-7 bg-danger text-light border rounded m-auto" >
                    {convertPriceToString(item.price-Math.round(item.price*item.discount/100))}
                </div>
                <div className="col-4 bg-primary text-light border rounded"><FontAwesomeIcon icon={faArrowDown} /> {item.discount}%</div>
            </div>
            <hr />
            <div className='row'>
                <span className='col-lg-6 col-md-12'><FontAwesomeIcon icon={faAppleAlt} /> Hệ điều hành : {item.detail.operating_system}</span> 
                <span className='col-lg-6 col-md-12'><FontAwesomeIcon icon={faSdCard} /> RAM: {item.detail.ram} G</span>
                <span className='col-lg-6 col-md-12'><FontAwesomeIcon icon={faMobileScreen} /> Màn hình : {item.detail.display_size} Inch</span>
                <span className='col-lg-6 col-md-12'><FontAwesomeIcon icon={faCameraAlt} /> Camera: {item.detail.rear_camera} MP</span>
            </div>
          </Link>
        </div>
      </div>
    )

}

export default Item