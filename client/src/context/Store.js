import React, { useContext, useEffect, useReducer } from 'react';
import userReducer from '../reducers/userReducer';

const initialState = {
    token: null,
    user: null
};

const StoreContext = React.createContext();

const Store = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialState);
    useEffect(() => console.log(state.user), [state.user]);

    return (
        <StoreContext.Provider
            value={{
                ...state,
                dispatch
            }}
        >
            {children}
        </StoreContext.Provider>
    )
};

// export values
export const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreContext, Store };