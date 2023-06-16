import Item from "../Item/Item";

import sytles from './ShowListItem.module.css'


function ShowListItem({items }){
    return (
        <div className={sytles.showListItem} >
            {items.map((item,index)=> 
                    <Item key={index} item={item} className={sytles.item}/>
            )}
        </div>
    )
}

export default ShowListItem