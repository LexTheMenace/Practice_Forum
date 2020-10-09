import React, { useEffect } from 'react'
import { Consumer } from '../context';

export default function LoginToken() {
    const location = window.location.hash.split('/');
    const token = location[location.length - 1];

    const login = (dispatch) => {
        dispatch({
            type: 'SET_TOKEN',
            payload: { token }
        });

        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        const user = JSON.parse(window.atob(base64));

        dispatch({
            type: 'SET_USER',
            payload: user.user
        });
}
    return (
        <Consumer>
            { value => {
                const { dispatch } = value;
                if (token) {
                    if(value.token !== "") return; 
                    login(dispatch)
                    window.location.hash = '/forum'
                } else {
                    window.location.hash = '/'
                }
                return <h1 > Logging in... </h1>
            }}
        </Consumer>

    )
}
