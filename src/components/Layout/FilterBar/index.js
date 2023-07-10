import "./FilterBar.css";
function FilterBar() {
  return (
    <div className="container-fluid filter-bar-container">
      <div className="container">
        <h3>Lọc theo tiêu chí</h3>
        <div>
          <input
            type="checkbox"
            id="hasProduct"
          />
          <label htmlFor="hasProduct">Có hàng</label>

          <div className="dropdown d-inline-flex ms-3">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Giá
            </button>
            <div className="dropdown-menu row p-1">
              <button
                className="filter-btn btn col-2 m-1"
              >
                Bỏ chọn
              </button>
              <button
                className="filter-btn btn col-2 m-1"
              >
                Dưới 4 triệu
              </button>
              <button
                className="filter-btn btn col-2 m-1"
              >
                Từ 4 - 8 triệu
              </button>
              <button
                className="filter-btn btn col-2 m-1"
              >
                Từ 8 - 14 triệu
              </button>
              <button
                className="filter-btn btn col-2 m-1"
              >
                Từ 14 - 20
              </button>
              <button
                className="filter-btn btn col-2 m-1"
              >
                Trên 20 triệu
              </button>
            </div>
          </div>

          <div className="dropdown d-inline-flex ms-3">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dung lượng ram
            </button>
            <div className="dropdown-menu row p-1">
              <button
                className="filter-btn btn col-2 m-1"
              >
                Bỏ chọn
              </button>
              <button
                className="filter-btn btn col-2 m-1"
              >
                2GB
              </button>
              <button
                className="filter-btn btn col-2 m-1"
              >
                3GB
              </button>
              <button
                className="filter-btn btn col-2 m-1"
              >
                4GB
              </button>
              <button
                className="filter-btn btn col-2 m-1"
              >
                6GB
              </button>
              <button
                className="filter-btn btn col-2 m-1"
              >
                8GB
              </button>
              <button
                className="filter-btn btn col-2 m-1"
              >
                12GB
              </button>
            </div>
          </div>

          <div className="dropdown d-inline-flex ms-3">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Bộ nhớ trong
            </button>
            <div className="dropdown-menu row p-1">
              <button
                className="filter-btn btn col-2 m-1"
              >
                Bỏ chọn
              </button>
              <button
                className="filter-btn btn col-2 m-1"
              >
                32GB
              </button>
              <button
                className="filter-btn btn col-2 m-1"
              >
                64GB
              </button>
              <button
                className="filter-btn btn col-2 m-1"
              >
                128GB
              </button>
              <button
                className="filter-btn btn col-2 m-1"
              >
                256GB
              </button>
              <button
                className="filter-btn btn col-2 m-1"
              >
                512GB
              </button>
            </div>
          </div>

          <div className="dropdown d-inline-flex ms-3">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Màn hình
            </button>
            <div className="dropdown-menu row p-1">
              <button
                className="filter-btn btn col-2 m-1"
              >
                Bỏ chọn
              </button>

              <button
                className="filter-btn btn col-2 m-1"
              >
                Dưới 5 Inch
              </button>
              <button
                className="filter-btn btn col-2 m-1"
              >
                Từ 5-6 Inch
              </button>
              <button
                className="filter-btn btn col-2 m-1"
              >
                Từ 6 Inch
              </button>
            </div>
          </div>

          <div className="dropdown d-inline-flex ms-3">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Camera
            </button>
            <div className="dropdown-menu row p-1">
              <button
                className="filter-btn btn col-2 m-1"
              >
                Bỏ chọn
              </button>
              <button
                className="filter-btn btn col-2 m-1"
              >
                Dưới 16 MP
              </button>
              <button
                className="filter-btn btn col-2 m-1"
              >
                16MP - 32MP
              </button>
              <button
                className="filter-btn btn col-2 m-1"
              >
                32MP - 64MP
              </button>
              <button
                className="filter-btn btn col-2 m-1"
              >
                Trên 64MP
              </button>
            </div>
          </div>

          <div className="dropdown d-inline-flex ms-3">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dung lượng pin
            </button>
            <div className="dropdown-menu row p-1">
              <button
                className="filter-btn btn col-2 m-1"
              >
                Bỏ chọn
              </button>
              <button
                className="filter-btn btn col-2 m-1"
              >
                Dưới 3000mAh
              </button>
              <button
                className="filter-btn btn col-2 m-1"
              >
                3000 - 4500mAh
              </button>
              <button
                className="filter-btn btn col-2 m-1"
              >
                Trên 4500mAh
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h3>Sắp xếp theo</h3>
        <select
          className="form-select form-select-lg mb-3"
          aria-label=".form-select-lg example"
          defaultValue={0}
        >
          <option value={0}>Giảm nhiều nhất</option>
          <option value={1}>Giá tăng dần</option>
          <option value={2}>Giá giảm dần</option>
        </select>
      </div>
    </div>
  );
}

export default FilterBar;
