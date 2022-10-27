import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";


function ProductView () {

    const comicId = useParams();

    const [cardMarvel, setCardMarvel] = useState([]);
    const [cardDc, setCardDC] = useState([])

    

useEffect(() => {
    axios.get("http://gateway.marvel.com/v1/public/comics?ts=1&apikey=dedf70a9ee245ce7f248df8b78d95bb5&hash=cc5c514a529d9d839ec30e6eae671f4e").then(res => {
        setCardMarvel(res.data.data.results)
        
    }).catch(error => console.log(error))

}, [])

useEffect (() => {
    
    fetch("https://akabab.github.io/superhero-api/api/all.json")
        .then ((res) => res.json())
        .then((json) => { setCardDC(json) })
        .catch((err) => console.log(err));

   
    
    
}, [])


let cuttedDc = cardDc.slice(0,20);

let cardView = (cuttedDc.find((card) => JSON.stringify(card.id) === comicId.productId) || cardMarvel.find((card) => JSON.stringify(card.id) === comicId.productId));
let awaiter = cardView !== undefined;
console.log(cardView)
if (awaiter && (cardView.id >= 100)) {
    return (
        <>
            <h1>View</h1>
           
            <div className="product_deploy_container">
                <img className="card view_Card" alt="personaje" src={`${cardView.thumbnail.path}.${cardView.thumbnail.extension}`}></img>
                <h3>{cardView.title}</h3>
                
            </div> 
            <p>Detalles coming soon</p>
        </>
        
    )
   }

else if(awaiter) {
    return (
        <>
            <h1>View</h1>
           
            <div className="product_deploy_container">
                <img className="card view_Card" alt="personaje" src={`${cardView.images.sm}`}></img>
                <h3>{cardView.name}</h3>
                
            </div> 
            <p>Detalles coming soon</p>
        </>
        
    )
}




    
}

export default ProductView;