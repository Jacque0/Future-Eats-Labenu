import React from "react";
import GlobalStateContext from "./GlobalStateContext";
import { useState } from "react";

const GlobalState = (props) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])
    const [selectedRestaurantId, setSelectedRestaurantId] = useState(JSON.parse(localStorage.getItem('restaurantId')) || '')
    
    const states = {cart, selectedRestaurantId}
    const setters = {setCart, setSelectedRestaurantId}

    return (
        <GlobalStateContext.Provider value={{states, setters}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState