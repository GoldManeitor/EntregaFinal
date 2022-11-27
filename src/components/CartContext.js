import React  from "react";
import {useEffect, useState} from "react";

export const CartContext = React.createContext();


function keepInStorage (data) {
    let newData = JSON.parse(localStorage.getItem(`${data.id}`));
    if (data?.id){
        if (newData) {
            newData.quantity ++;
            newData.price *= newData.quantity;
            localStorage.setItem(`${newData.id}`, JSON.stringify(newData))
        }
        else { newData = {...data, quantity : 1}
                localStorage.setItem(`${newData.id}`, JSON.stringify(newData))
                }
    }
}
export function CartProvider ({children}) {
    
    
    const [data, setData] = useState([]);
    const setDataHelper = (data) => setData({...data})
    
    useEffect(() => {
        keepInStorage(data);
    }, [data]);
    
  
    return (
        <CartContext.Provider value = {{
            data,
            setDataHelper,
        }}>
            { children }
        </CartContext.Provider>
    )
}