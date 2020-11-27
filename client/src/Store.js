import React from 'react';
import { AuthContextProvider } from './context/AuthContext';
import { ErrorContextProvider } from './context/ErrorContext';

export const StoreContext = React.createContext('');


const Store = ({ children }) => {
    return (
        <StoreContext.Provider>
            <ErrorContextProvider>
                <AuthContextProvider>
                    {children}
                </AuthContextProvider>
            </ErrorContextProvider>
        </StoreContext.Provider>
    )
};

export default Store; 