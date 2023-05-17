import styles from './Toolbar.module.css'

function Toolbar() {
  return (
    <div className={styles.main}>
      <div className={styles.Logo}>
        <p>Logo</p>
      </div>
      <div className={styles.Timkiem}>
        <input placeholder='  Tìm kiếm ...' />
        <button>Tìm kiếm</button>
      </div>
      <div className={styles.Taikhoan}>
        <a href='https://www.facebook.com/'>Tài Khoản</a> 
      </div>
      <div className={styles.Taikhoan}>
        <a href='https://www.facebook.com/'>Giỏ hàng</a>
      </div>

      <div className={styles.menu}>
          <div className={styles.itemMenu}>ĐIỆN THOẠI</div>
          <div className={styles.itemMenu}>IPHONE</div>
          <div className={styles.itemMenu}>TABLET</div>
          <div className={styles.itemMenu}>PHỤ KIỆN</div>
          <div className={styles.itemMenu}>ĐIỆN THOẠI CŨ</div>
      </div>
    </div>
  );
}

export default Toolbar;