import React, { useContext, useReducer } from 'react';
import reducer from '../reducers/forumReducer';

export const ForumContext = React.createContext('');

const initialState = {
        categories: [],
        topics: [],
        replies: []
};

export const ForumContextProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(reducer, initialState)  
    return (
        <ForumContext.Provider value={{ ...state, dispatch }}>
            {children}
        </ForumContext.Provider>
    )
};

export const useForumContext = () => {
    return useContext(ForumContext);
};