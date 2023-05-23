import Toolbar from '../../../Layout/Toolbar/Toolbar'
import Footer from '../../../Layout/Footer/Footer'
import styles from './DetailProduct.module.css'

function DetailProduct(){

    const product = {
        _id: "123456",
        images: [
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
      };

      const convertPriceToString = (price) => {
        return price.toLocaleString("it-IT", {
          style: "currency",
          currency: "VND",
        });
      };

    const measure = ["MP", "MP", "", "Inch", "mAh", "GB", "GB"];

    return(
        <div>
            <Toolbar />
            <div className={styles.wrapper}>
                {/* Phần bên trái */}
                <div className={styles.container}>
                    <div className={styles.image}>
                        <img alt={product.name} src={product.images[0]} ></img>
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.button} > Mô tả chi tiết </button>
                        <button className={styles.button}> Nhận xét </button>
                    </div>
                    <div className={styles.description}>
                        {product.name} <br />
                        {product.description}
                    </div>
                    <button className={styles.buttonDg}> Đánh giá sản phẩm</button>
                </div>
                {/* Phần bên phải */}
                <div className={styles.detail}>
                    <div className={styles.detailContent}>
                        <div>
                            <span className={styles.nameProduct}>
                                {product.name}
                            </span>
                            <div>
                                <span className={styles.priceProduct}>
                                    {convertPriceToString(Math.round((product.price-product.price*product.discount/100)/1000)*1000)}
                                </span>
                                <span>
                                    {convertPriceToString(product.price)}
                                </span>
                            </div>
                            <hr />
                        </div>
                        <div className={styles.parameter}>
                            <span className={styles.nameProduct}>
                                Thông số
                            </span>
                            <table>
                                {Object.keys(product.detail).map((key, index) => {
                                    let title = key.split("_").join(" ");
                                    let colorBg = '#FFFFFF' ;
                                    if(index % 2 === 0){colorBg='#D0D0D0'}
                                    return (
                                    <tr key={index} style={{'background-color':colorBg}}>
                                        <th>{title}: </th>
                                        <td>
                                        {product.detail[key]} {measure[index]}
                                        </td>
                                    </tr>
                                    );
                                })}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {/* Phần đánh giá */}
            <div className={styles.feedBack}>
                <h2>Nhận xét</h2>
                <textarea />
            </div>
            <Footer />
        </div>
    )
}

export default DetailProduct