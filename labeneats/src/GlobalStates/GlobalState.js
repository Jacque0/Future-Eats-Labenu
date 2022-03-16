import React from "react";
import GlobalStateContext from "./GlobalStateContext";
import { useState } from "react";

const GlobalState = (props) => {
    const [cart, setCart] = useState([])
    const [idBuy, setIdBuy] = useState('')
    
    const states = {cart, idBuy}
    const setters = {setCart, setIdBuy}

    return (
        <GlobalStateContext.Provider value={{states, setters}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState