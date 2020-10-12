import React, { Component } from 'react'
import { getAllCategories, createCategory } from './API'
//Makes info available everywhere in the app
export const Context = React.createContext();


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
        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        token: '',
        user: null,
        categories: []

    };

    dispatch = action => this.setState(state => reducer(state, action));

    isLoggedIn = () => !!this.state.user;

    isAdmin = () => {
        if (this.state.user !== null) return this.state.user.role_id === '5f7c93fd189c9a186c9ed6d9'
    };

    login = (token) => {
        
        this.dispatch({
            type: 'SET_TOKEN',
            payload: token
        });
        localStorage.token = token;
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        const user = JSON.parse(window.atob(base64));

        this.dispatch({
            type: 'SET_USER',
            payload: user.user
        });
    };

    loadCategories = async () => {
        const categories = await getAllCategories();
        this.dispatch({
            type: 'SET_CATEGORIES',
            payload: categories
        })
    }
    addCategory = async (newCategory) => {
        const category = await createCategory(newCategory);
        this.dispatch({
            type: 'PUSH_CATEGORY',
            payload: category
        })
    }
     componentDidMount(){
        this.login(localStorage.token)
        this.loadCategories()
    } 
    render() {

        return (
            // passing state as value to access anywhere you bring this in
            <Context.Provider
                value={{
                    state: this.state,
                    methods: {
                        dispatch: this.dispatch,
                        isLoggedIn: this.isLoggedIn,
                        isAdmin: this.isAdmin,
                        login: this.login,
                        loadCategories: this.loadCategories,
                        addCategory: this.addCategory

                    }
                }} >
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;