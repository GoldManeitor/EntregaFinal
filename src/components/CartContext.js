import React  from "react";
import {useEffect, useState} from "react";

export const CartContext = React.createContext();


export function CartProvider ({children}) {
    
    
    const [data, setData] = useState([]);
    
    return (
        <CartContext.Provider value = {{
            data,
            setData,
        }}>
            { children }
        </CartContext.Provider>
    )
}