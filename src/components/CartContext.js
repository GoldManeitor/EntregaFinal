import React  from "react";
import {useEffect, useState} from "react";

export const CartContext = React.createContext();


export function CartProvider ({children}) {
    
    let cartList = [];
    const [data, setData] = useState(cartList);
    
    useEffect(()=> {
        setData(cartList);
    }, [cartList])
    
    return (
        <CartContext.Provider value = {{
            data,
            setData,
            cartList
        }}>
            { children }
        </CartContext.Provider>
    )
}