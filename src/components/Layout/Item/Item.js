import {
  faArrowDown,
  faMicrochip,
  faMobileScreen,
  faSdCard,
} from "@fortawesome/free-solid-svg-icons";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Item({
  product = 
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
  },
  className = "",
}) {
  //const classes = ["product", className].join(" ");

  // convert number of price to VND format
  const convertPriceToString = (price) => {
    return price.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
  };


  const handleClickCard = ()=>{

  }

  return product !== null ? (
    <div className="card-container container-fluid" onClick={handleClickCard}>
      <div className="row flex-column">
        <span className="col-12">Giảm {convertPriceToString(3000000)}</span>
        <span className="col-12">Trả góp 0%</span>
      </div>
      <div
        className="product-image container-fluid"
        style={{
          backgroundImage: `url(${product.image[0]})`,
        }}
      ></div>
      <div className="product-info container-fluid">
        <div className="row">
          <h5
            style={{
              padding: 0,
              textTransform: "capitalize",
            }}
          >
            {product.name}
          </h5>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6 px-2 price">
            {product.discount > 0
              ? convertPriceToString(
                  (product.price * (100 - product.discount)) / 100
                )
              : convertPriceToString(product.price)}
          </div>

          {product.discount > 0 && (
            <div className="col-12 col-lg-6 px-2 discount">
              <FontAwesomeIcon icon={faArrowDown} />
              {product.discount}%
            </div>
          )}
        </div>
      </div>
      <div className="product-detail container-fluid row g-0">
        <div className="col-6 col-sm-12 col-md-12 col-lg-6">
          <FontAwesomeIcon icon={faMicrochip} />{" "}
          {product.detail.operating_system}
        </div>
        <div className="col-6 col-sm-12 col-md-12 col-lg-6">
          <FontAwesomeIcon icon={faMobileScreen} />{" "}
          {product.detail.display_size} Inch
        </div>
        <div className="col-6 col-sm-12 col-md-12 col-lg-6">
          <FontAwesomeIcon icon={faSdCard} /> {product.detail.ram} Gb
        </div>
        <div className="col-6 col-sm-12 col-md-12 col-lg-6">
          <FontAwesomeIcon icon={faSdCard} /> {product.detail.memory} Gb
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default Item;
