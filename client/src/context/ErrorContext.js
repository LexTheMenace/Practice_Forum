import React, { useReducer, createContext } from "react";

export const ErrorContext = createContext();

const initialState = {
    msg: {},
    status: null,
    id: null
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_ERRORS':
            return {
                msg: action.payload.msg,
                status: action.payload.status,
                id: action.payload.id
            };

        case 'CLEAR_ERRORS':
            return {
                msg: {},
                status: null,
                id: null
            };
        
        default: 
        throw new Error(`Unhandled type: ${action.type}`)
    }
}

export const ErrorContextProvider = ({ children }) => {
    const [ state, errDispatch ] = useReducer( reducer, initialState );
  
    return (
      <ErrorContext.Provider value={[ state, errDispatch ]}>
        { children }
      </ErrorContext.Provider>
    );
  };
