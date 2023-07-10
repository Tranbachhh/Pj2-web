import { faArrowDown, faMicrochip, faMobileScreen, faSdCard } from '@fortawesome/free-solid-svg-icons';
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
                <div className='col-lg-8 col-md-12 bg-danger text-light border rounded mb-3'>
                    Giảm {convertPriceToString(Math.round(item.price*item.discount/100))}
                </div>
            </div>
            <motion.img
      whileHover={{scale:1.1}} src={item.image[0]} alt={item.name} className='boder rounded col-10 mb-3' />
            <div style={{ fontWeight: 600 }}>
                {item.name}
            </div>
            <div className="text-decoration-line-through mb-4 mt-2">{convertPriceToString(item.price)}</div>
            <div className="row m-2"> 
                <div className="col-7 bg-danger text-light border rounded-5 m-auto" >
                    {convertPriceToString(item.price-Math.round(item.price*item.discount/100))}
                </div>
                <div className="col-4 bg-primary text-light border rounded-5"><FontAwesomeIcon icon={faArrowDown} /> {item.discount}%</div>
            </div>
            <div className={[styles.productdetail,"container-fluid row g-0"].join(" ")}>
              <div className="col-6 col-sm-12 col-md-12 col-lg-6">
                <FontAwesomeIcon icon={faMicrochip} />{" "}
                {item.detail.operating_system}
              </div>
              <div className="col-6 col-sm-12 col-md-12 col-lg-6">
                <FontAwesomeIcon icon={faMobileScreen} />{" "}
                {item.detail.display_size} Inch
              </div>
              <div className="col-6 col-sm-12 col-md-12 col-lg-6">
                <FontAwesomeIcon icon={faSdCard} /> {item.detail.ram} Gb
              </div>
              <div className="col-6 col-sm-12 col-md-12 col-lg-6">
                <FontAwesomeIcon icon={faSdCard} /> {item.detail.memory} Gb
              </div>
            </div>
          </Link>
        </div>
      </div>
    )

}

export default Item