import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { doc, getDoc, getFirestore} from "firebase/firestore";
import { CartContext } from "./CartContext";


function ProductView () {

    const comicID = useParams();
    const [productDB , setProduct] = useState([]);
    const { setDataHelper } = useContext(CartContext);

    const db = getFirestore();
    useEffect(()=> {
        
  
        const comicRef = doc(db, "items", `${comicID.productId}`);
         getDoc(comicRef).then((snapshot) => {
            if(snapshot.exists()) {
                setProduct({id : snapshot.id, ...snapshot.data()})  
            }
        })
    }, [db]);
    
        
    return (
        <>
            <h1>View</h1>
           
            <div className="product_deploy_container">
                <img className="card view_Card" alt="personaje" src={`${productDB.imageID}`}></img>
                <h3>{productDB.title}</h3>
                
            </div> 
            <p>{productDB.description}</p>
            <button className="addCart" onClick = {() => setDataHelper(productDB)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                                    </svg>
            </button>
        </>
        
    )
}

export default ProductView;