import React, { Component } from 'react'


//Makes info available everywhere in the app
const Context = React.createContext();

const reducer = (state, action) => {
    console.log('Welcome to the Reducer');

    switch (action.type) {
        case 'SET_TOKEN':
        
            return {
                ...state,
                token: action.payload
            };
        case 'SET_USER':
            return {
                ...state,
                user: action.payload.user
            };
        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        token: '',
        user: null,
        dispatch: action => this.setState(state => reducer(state, action))
    };
    
    render() {

        return (
            // passing state as value to access anywhere you bring this in
            <Context.Provider value={{
                state: this.state,
            }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;