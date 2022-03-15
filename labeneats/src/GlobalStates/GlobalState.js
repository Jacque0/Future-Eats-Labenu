import React from "react";
import GlobalStateContext from "./GlobalStateContext";
import { useState } from "react";

const GlobalState = (props) => {
    const states = {}
    const setters = {}

    return (
        <GlobalStateContext.Provider value={{states, setters}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState