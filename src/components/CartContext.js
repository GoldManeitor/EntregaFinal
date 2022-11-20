import React  from "react";
import { useMemo } from "react";
import {useEffect, useState} from "react";

const cartContext = React.createContext();


export function CartProvider (props) {
    
    
    const [item , setCart] = useState([]);
    
    useEffect (() => {
        setCart(props);
    }, [props]);
    console.log(item);
    const value = useMemo(() => {
        return ({item})
    }, [item])
    return (<cartContext.Provider value = {value} {...props} />)

}

export function useCart() {
    const context = React.useContext(cartContext);
    return context; 
}