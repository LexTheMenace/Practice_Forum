import React, { useEffect } from 'react'
import { Consumer } from '../context';

export default function LoginToken() {
 
    return (
        <Consumer>
            { value => {
                const { dispatch } = value.state
                const location = window.location.hash.split('/');
                const token = location[location.length - 1];
        
                if (token) {
                    console.log('Dispatching');
                    dispatch({
                        type: 'SET_TOKEN',
                        payload: token
                    });
        
                    const base64Url = token.split('.')[1];
                    const base64 = base64Url.replace('-', '+').replace('_', '/');
                    const user = JSON.parse(window.atob(base64));
        
                    dispatch({
                        type: 'SET_USER',
                        payload: user
                    });
                    window.location.hash = '/forum'
        
                } else {
                    window.location.hash = '/'
                }
        
                return <h1 > Logging in... </h1>
            }}
        </Consumer>

    )
}
