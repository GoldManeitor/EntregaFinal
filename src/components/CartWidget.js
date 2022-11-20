import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
import {CartProvider, useCart} from "./CartContext";


function Checkout () {

}

function CartWidget () {
    const {item} = useCart();
    console.log(item)
    if (item){
    return (
        <>
            <div className="items_in_cart_container">
                {item.map((item) => {
                    <div className="item_in_cart">
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                    </div>
                    
                })}
            </div>
        </>
    )
    }
}

export default CartWidget ;