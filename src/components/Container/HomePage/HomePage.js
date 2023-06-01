import Toolbar from "../../Layout/Toolbar/Toolbar"
import ListImg from "../../Layout/ListImg/ListImg"
import Footer from "../../Layout/Footer/Footer"
import Item from "../../Layout/Item/Item"

function HomePage() {

  const hotProducts = [
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
    }]
  
    const iphoneProducts = [
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
      }]
  
      const samsungProducts = [
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
        }]
  return (
      <div className="container g-0 homepage-wrapper">
        <Toolbar />
        <ListImg />
        <div className="row mt-3 container-fluid block-content">
          <div className="block-content-title">
            <h2>Khuyến mãi hot</h2>
            <span>Xem tất cả</span>
          </div>
          {hotProducts.map((product, index) => {
            return (
              <div
                key={index}
                className="col-lg-3 col-md-4 col-sm-6 col-12 no-gutter"
              >
                <Item product={product} />
              </div>
            );
          })}
        </div>

        {iphoneProducts.length > 0 && (
          <div className="row mt-3 container-fluid block-content">
            <div className="block-content-title">
              <h2>Điện thoại Iphone</h2>
              <span>Xem tất cả</span>
            </div>
            {iphoneProducts.map((product, index) => {
              return (
                <div
                  key={index}
                  className="col-lg-3 col-md-4 col-sm-6 col-12 no-gutter"
                >
                  <Item product={product} />
                </div>
              );
            })}
          </div>
        )}

        {samsungProducts.length > 0 && (
          <div className="row mt-3 container-fluid block-content">
            <div className="block-content-title">
              <h2>Điện thoại Samsung</h2>
              <span>Xem tất cả</span>
            </div>
            {samsungProducts.map((product, index) => {
              return (
                <div
                  key={index}
                  className="col-lg-3 col-md-4 col-sm-6 col-12 no-gutter"
                >
                  <Item product={product} />
                </div>
              );
            })}
          </div>
        )}
      <Footer />
      </div>
  );
}

export default HomePage;
