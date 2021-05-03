import React, {createContext, useContext, useReducer } from 'react';

// Prepares the dataLayer
const StateContext = createContext();

// Wrap our app and Provide the Data layer
export function StateProvider({ reducer, initialState, children}){
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    )
}

// pull information from the data layer
export const useStateValue = () => useContext(StateContext);