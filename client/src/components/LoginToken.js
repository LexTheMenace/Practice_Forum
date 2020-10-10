import React, { useEffect, useContext } from 'react';
import { Context, Consumer } from '../context';

export default function LoginToken() {
    const theme = useContext(Context);
const { login } = theme.methods;

useEffect(() => {
     const location = window.location.hash.split('/');
    const token = location[location.length - 1];
    if(token) {
        login(token);
        window.location.hash = '/forum'

    } else {
        window.location.hash = '/'
    }
}, [])
   
                return <h1 > Logging in... </h1>
}
