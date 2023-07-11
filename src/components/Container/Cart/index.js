import { useNavigate } from "react-router-dom";
import "./Cart.css";
import {useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import Toolbar from "../../Layout/Toolbar/Toolbar";
import Footer from "../../Layout/Footer/Footer";

function Cart() {
  const navigate = useNavigate();
  const [coupon, setCoupon] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  const convertPriceToString = (price) => {
    return price.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
  };

  return (
    <>
      <Toolbar />
      <div className="col-11 m-auto mb-5">
        <div className="cart-wrapper container-fluid mb-5">
          <div className="m-3">
            <button className="goback-btn" onClick={() => navigate("/")}>
              {"< "}Tiếp tục mua sắm
            </button>
          </div>
          <div className="row p-0">
            <div className="col-8 ps-0">
              <div className="products-container bg-white">
                <h3>
                  <FontAwesomeIcon icon={faBasketShopping} color="red" /> Giỏ
                  hàng
                </h3>

                <table className="table-borderless w-100">
                  <thead>
                    <tr>
                      <th scope="col" className="col-4">
                        Tên sản phẩm
                      </th>
                      <th scope="col" className="col-2">
                        Đơn giá
                      </th>
                      <th scope="col" className="col-2">
                        Số lượng
                      </th>
                      <th scope="col" className="col-2">
                        Thành tiền
                      </th>
                      <th scope="col" className="col-2 text-center">
                        Thao tác
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
            <div className="col-4 pe-0">
              <div className="coupon-container bg-white">
                <div className="coupon-input">
                  <h5>Bạn có mã ưu đãi?</h5>
                  <div className="row p-0">
                    <div className="col-8 p-0">
                      <input
                        className="w-100 h-100 p-2"
                        style={{
                          borderRadius: 10,
                        }}
                        type="text"
                        value={coupon}
                        onChange={(e) => setCoupon(e.target.value)}
                        placeholder="Mã giảm giá"
                      />
                    </div>
                    <div className="col-4">
                      <button
                        className="btn btn-primary h-100 w-100"
                      >
                        Áp dụng
                      </button>
                    </div>
                  </div>
                </div>

                <div className="pricing mt-4">
                  <div className="pricing-title">
                    <h5>
                      <FontAwesomeIcon icon={faDatabase} color="red" /> Thanh
                      toán
                    </h5>
                    <div className="row">
                      <span className="col-8">Tổng giá trị sản phẩm</span>
                      <span className="col-4 text-end">
                        {convertPriceToString(totalPrice)}
                      </span>
                    </div>

                    <div className="row">
                      <span className="col-8">Discount</span>
                    </div>

                    <div className="row">
                      <span className="col-8">Số tiền cần thanh toán</span>
                      <span className="col-4 text-end">
                      </span>
                    </div>

                    <div className="row px-4">
                      <button
                        className="btn btn-danger"
                      >
                        Đặt hàng
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
