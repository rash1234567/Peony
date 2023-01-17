import { createContext, useContext, useState, useEffect, Children } from "react";

const cartContext = createContext();

export function CartContextProvider ({children}) {
      const [cart, setCart ] = useState([]);   

    return (
        <cartContext.Provider value={{cart, setCart}}>
            {children}
        </cartContext.Provider>
    )
}

export function useCartContext() {
    return useContext(cartContext)
}