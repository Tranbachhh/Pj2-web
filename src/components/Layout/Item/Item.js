import styles from './Item.module.css'

function Item( {item = {
    _id: "123456",
    image: [
      "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/1896224739.jpeg",
      "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/1896224739.jpeg",
      "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/1896224739.jpeg",
      "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/1896224739.jpeg",
      "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/1896224739.jpeg",
    ],
    name: "Iphone 14 Pro Max 128Gb",
    description: "Sản phẩm mới nhất của nhãn hàng Iphone",
    price: 29999990,
    discount: 5,
  },className=""}){

    const classes = [
        styles.item,
        className,
      ].join(" ");

    return(
        
        <div className={classes}>
            <div className={styles.price_discount}> 
                <div className={styles.price}>
                    Giảm {Math.round(item.price*item.discount/100)}đ
                </div>
                <div className={styles.discount}>Trả góp : 0%</div>
            </div>
            <img src={item.image[0]} alt={item.name} />
            <div className={styles.name}>
                {item.name}
            </div>
            <div className={styles.price_1}>{item.price}đ</div>
            <div className={styles.price_discount}> 
                <div className={styles.price}>
                    {item.price-Math.round(item.price*item.discount/100)} đ
                </div>
                <div className={styles.discount}>Giảm : {item.discount}%</div>
            </div>
            <hr />
            <div className={styles.Info}>
                <span className={styles.infoItem}>CPU : ...</span> <span className={styles.infoItem}>RAM: 8G</span>
                <span className={styles.infoItem}>Màn hình : ...</span><span className={styles.infoItem}>Camera: ...</span>
            </div>
        </div>
    )

}

export default Item