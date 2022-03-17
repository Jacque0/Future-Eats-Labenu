import React from "react";
import GlobalStateContext from "./GlobalStateContext";
import { useState } from "react";

const GlobalState = (props) => {
    const [cart, setCart] = useState([])
    const [selectedRestaurantId, setSelectedRestaurantId] = useState('')
    
    const states = {cart, selectedRestaurantId}
    const setters = {setCart, setSelectedRestaurantId}

    return (
        <GlobalStateContext.Provider value={{states, setters}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState