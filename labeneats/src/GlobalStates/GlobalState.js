import React from "react";
import GlobalStateContext from "./GlobalStateContext";
import { useState } from "react";

const GlobalState = (props) => {
    const [selectedRestaurantId, setSelectedRestaurantId] = useState()
    const states = {selectedRestaurantId}
    const setters = {setSelectedRestaurantId}

    return (
        <GlobalStateContext.Provider value={{states, setters}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState