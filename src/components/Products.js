import { useState, useEffect, useContext } from "react";
import { collection, getDocs, getFirestore} from "firebase/firestore";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";


// publ: dedf70a9ee245ce7f248df8b78d95bb5
// priv: 2dd161f8b5062c1d6bd4c38bc4f9cf9b532e3ff4
// ts: 1
// ts + publ + priv : 12dd161f8b5062c1d6bd4c38bc4f9cf9b532e3ff4dedf70a9ee245ce7f248df8b78d95bb5
// hash : cc5c514a529d9d839ec30e6eae671f4e

// http://gateway.marvel.com/v1/public/comics?ts=1&apikey=dedf70a9ee245ce7f248df8b78d95bb5&hash=cc5c514a529d9d839ec30e6eae671f4e


function Comics (productDB, setData) {
    return(
        
        <>
            
                <div className="cards_container">
                {productDB.data.map((item) => (
                    <div className="eachCard_container" key={item.id}>
                        <div className="eachCard" >
                            <img className="card" alt="personaje" src={`${item.imageID}`}></img>
                            <p className="cardName">{item.title}</p>
                            <div className="button_container">
                                <button className="addCart" onClick={() => setData(item)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                                    </svg>
                                </button>
                                <Link to={`/product/${item.id}`} >
                                    <button className="view">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eyeglasses" viewBox="0 0 16 16">
                                        <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )

          )}
                </div>
            
        </>
        )
}


function Products(prop){

    const { setData } = useContext(CartContext);
    const [cardMarvel, setCardMarvel] = useState([]);
    const [cardDc, setCardDC] = useState([])

    
    const [productDB , setProduct] = useState([])

    async function cargar() {
      const db = getFirestore();

      const itemsCollection = collection(db, "items");
      await getDocs(itemsCollection).then((snapshot) => {
        setProduct((snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))));
      })
    };
    cargar();

    return <Comics data = {productDB} setData = {setData} />

}

export default Products;