import styles from './Toolbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones, faMobile, faMobileScreen, faMobileScreenButton, faSearch,faShoppingCart,faTabletScreenButton,faUser } from '@fortawesome/free-solid-svg-icons';

function Toolbar() {
  return (
    <div className={styles.main}>
      <div className={styles.Logo}>
        <FontAwesomeIcon icon={faMobileScreenButton} />
      </div>
      <div className={styles.Timkiem}>
        <input className='col-md-5' placeholder='Tìm kiếm ...' />
        <button className='col-md-2 btn btn-success'><FontAwesomeIcon icon={faSearch} /> Search</button>
      </div>
      <div className={styles.Taikhoan}>
        <a href='https://www.facebook.com/'><FontAwesomeIcon icon={faUser} />Tài khoản</a>
      </div>
      <div className={styles.Taikhoan}>
        <a href='https://www.facebook.com/'><FontAwesomeIcon icon={faShoppingCart} /> Giỏ hàng</a>
      </div>

      <div className={styles.menu}>
          <div className={styles.itemMenu}><FontAwesomeIcon icon={faMobile} />ĐIỆN THOẠI</div>
          <div className={styles.itemMenu}><FontAwesomeIcon icon={faMobileScreen}/>IPHONE</div>
          <div className={styles.itemMenu}><FontAwesomeIcon icon={faTabletScreenButton}/>TABLET</div>
          <div className={styles.itemMenu}><FontAwesomeIcon icon={faHeadphones}/>PHỤ KIỆN</div>
          <div className={styles.itemMenu}><FontAwesomeIcon icon={faMobileScreenButton}/>ĐIỆN THOẠI CŨ</div>
      </div>
    </div>
  );
}

export default Toolbar;