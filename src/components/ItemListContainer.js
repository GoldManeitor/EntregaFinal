import { useEffect, useState } from "react";


function ItemListContainer () {
    
  

    return(
        <>
        <div className="items_in_cart_container">
                No he podido encontrar una forma de desplegar lo almacenado en LStorage 
            {/* {items.map((item) => (
                <div className="item_in_cart">
                    <p>{item.title}</p>
                    <p>${item.price}</p>
                </div>
                
            ))} */}
        </div>
    </>
    )
}

export default ItemListContainer;