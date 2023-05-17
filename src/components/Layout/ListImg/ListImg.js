import { useState, useEffect } from "react"
import styles from './ListImg.module.css'

const dataImg = [
    "https://www.xtmobile.vn/vnt_upload/news/04_2022/29/man-hinh-iphone-14-pro-xtmobile.jpg",
    "https://cdn.tgdd.vn/Files/2022/02/23/1416901/caidat.jpg",
    "https://didongviet.vn/dchannel/wp-content/uploads/2018/09/tren-tay-iphone-xs-xs-max-gold-didongviet.jpg",
    "https://img5.thuthuatphanmem.vn/uploads/2021/07/15/anh-nen-dep-cho-iphone_030104560.png"
]

function ListImg(){

    const [img, setImg] = useState(0)

    useEffect((
        () => {
            setTimeout(()=>{setImg((img+1)%dataImg.length)},3000)
        }
    ),[img])

    return(
        <div className={styles.main} >
            <img src={dataImg[img]} alt={img}  className={styles.imgClass}></img>
        </div>
    )
}

export default ListImg