import React, { Component } from 'react'

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

    dispatch = action => this.setState(state => reducer(state, action))
    isLoggedIn = () => !!this.state.user
    isAdmin = () => {
        if (this.state.user !== null) return this.state.user.role_id === '5f7c93fd189c9a186c9ed6d9'
    }
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
}
/* componentDidMount(){
    this.login(localStorage.token)
} */
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
                    login: this.login
                 }}} >
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;