import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Checkout } from "./CartWidget";


export function ItemDeploy ({item}) {
    return (
        <div key={item.id} className="item_in_cart">               
            <p>{item.title}</p>
            <p>${item.price}</p>
        </div>
    )
}

function ItemListContainer () {
    
    const [productDB , setProduct] = useState([])
    const [checkIn, setCheckIn] = useState([])

    const db = getFirestore();
    useEffect(() => {
        

        const itemsCollection = collection(db, "items");
        getDocs(itemsCollection).then((snapshot) => {
        setProduct((snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))));
        setCheckIn(productDB.filter((item) => localStorage.getItem(item.id)));
      
      })
    }, [db, productDB]);
    
    
    
    return(
        <>
            <div className="items_in_cart_container">
                {checkIn.map((elem) => <ItemDeploy item={JSON.parse(localStorage.getItem(elem.id))}/>)}
                <button onClick={Checkout}>Comprar</button>
            </div>
            
            
        </>
    )
}

export default ItemListContainer;