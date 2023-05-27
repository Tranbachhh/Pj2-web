import { faAppleAlt, faCameraAlt, faMobileScreen, faSdCard } from '@fortawesome/free-solid-svg-icons';
import styles from './Item.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Item( {item = {
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
},className=""}){

    const classes = [
        styles.item,
        className,
      ].join(" ");

    const convertPriceToString = (price) => {
        return price.toLocaleString("it-IT", {
          style: "currency",
          currency: "VND",
        });
      };

    return(
        
        <div className={classes}>
            <div className={styles.price_discount}> 
                <div className={[styles.price,"col-md-6"].join(" ")}>
                    Giảm {convertPriceToString(Math.round(item.price*item.discount/100))}
                </div>
                <div className={[styles.discount,"col-md-4"].join(" ")}>Trả góp  0%</div>
            </div>
            <img src={item.image[0]} alt={item.name} />
            <div className={styles.name}>
                {item.name}
            </div>
            <div className={styles.price_1}>{convertPriceToString(item.price)}</div>
            <div className={styles.price_discount}> 
                <div className={[styles.price,"col-md-6"].join(" ")}>
                    {convertPriceToString(item.price-Math.round(item.price*item.discount/100))}
                </div>
                <div className={[styles.discount,"col-md-4"].join(" ")}>Giảm : {item.discount}%</div>
            </div>
            <hr />
            <div className={styles.Info}>
                <span className={styles.infoItem}><FontAwesomeIcon icon={faAppleAlt} /> Hệ điều hành : {item.detail.operating_system}</span> 
                <span className={styles.infoItem}><FontAwesomeIcon icon={faSdCard} /> RAM: {item.detail.ram} G</span>
                <span className={styles.infoItem}><FontAwesomeIcon icon={faMobileScreen} /> Màn hình : {item.detail.display_size} Inch</span>
                <span className={styles.infoItem}><FontAwesomeIcon icon={faCameraAlt} /> Camera: {item.detail.rear_camera} MP</span>
            </div>
        </div>
    )

}

export default Item