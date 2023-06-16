import { useState, useEffect } from "react"

const dataImg = [
    "https://www.xtmobile.vn/vnt_upload/news/04_2022/29/man-hinh-iphone-14-pro-xtmobile.jpg",
    "https://cdn.tgdd.vn/Files/2022/02/23/1416901/caidat.jpg",
    "https://images.samsung.com/au/smartphones/galaxy-s23/images/galaxy-s23-share-image.jpg",
]

function ListImg(){

    const [img, setImg] = useState(0)

    useEffect((
        () => {
            setTimeout(()=>{setImg((img+1)%dataImg.length)},3000)
        }
    ),[img])

    return(
        
        <div className='row container-fluid p-5'>
            <div className='col-lg-8 col-md-11 mx-auto' >
            <img src={dataImg[img]} alt={img}  className='img-fluid rounded'></img>
            </div>
        </div>

    )
}

export default ListImg