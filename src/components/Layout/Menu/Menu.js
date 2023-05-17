
import styles from './Menu.module.css'

function Menu(){
    return(
        <div className={styles.Menu}>
            <div className={styles.item}>
                <div className={styles.img}><img src='https://hc.com.vn/i/ecommerce/media/ckeditor_3370949.jpg' alt='iphone'></img></div>
                <span className={styles.name}>IPHONE</span>
            </div>
            <div className={styles.item}>
                <div className={styles.img}><img alt='samsung' src='https://img.websosanh.vn/v10/users/review/images/lj1ecjn91opdy/samsung-galaxy-a10s.jpg?compress=85'></img></div>
                <span className={styles.name}>SAMSUNG</span>
            </div>
            <div className={styles.item}>
                <div className={styles.img}><img alt='nokia' src='https://cdn-img-v2.webbnc.net/uploadv2/web/12/1260/media/2017/03/25/05/06/1490417679_e09a22ec-ec1a-4436-9902-3b55f7a4540c.jpg'></img></div>
                <span className={styles.name}>NOKIA</span>
            </div>
            <div className={styles.item}>
                <div className={styles.img}><img alt='xiaomi' src='https://cdn.tgdd.vn/Products/Images/42/234621/Xiaomi-12-xam-thumb-mau-600x600.jpg'></img></div>
                <span className={styles.name}>XIAOMI</span>
            </div>
            <div className={styles.item}>
                <div className={styles.img}><img alt='oppo' src='https://cdn.nguyenkimmall.com/images/detailed/604/10042579-dien-thoai-oppo-f11-pro-128bg-xam-1.jpg'></img></div>
                <span className={styles.name}>OPPO</span>
            </div>
        </div>
    )
}

export default Menu