import React, { useReducer } from 'react';


export const ForumContext = React.createContext('');

const initialState = {
        token: '',
        user: null,
        categories: [],
        topics: [],
        replies: []
}


const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.payload
            };
        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            };
        case 'SET_CATEGORIES':
            return {
                ...state,
                categories: action.payload
            };
        case 'PUSH_CATEGORY':
            return {
                ...state,
                categories: [...state.categories, action.payload]
            };
        case 'SET_TOPICS':
            return {
                ...state,
                topics: action.payload
            };
        case 'PUSH_TOPIC':
            return {
                ...state,
                topics: [...state.topics, action.payload]
            };
        case 'PUSH_REPLY':
            return {
                ...state,
                replies: [...state.replies, action.payload]
            };
        case 'SET_REPLIES':
            return {
                ...state,
                replies: action.payload
            };
        default:
            return state;
    }
}
export const ForumContextProvider = ({ children }) => {

  const [ state, dispatch ] = useReducer(reducer, initialState)  
    return (
        <ForumContext.Provider value={[state, dispatch]}>
            {children}
        </ForumContext.Provider>
    )
};
