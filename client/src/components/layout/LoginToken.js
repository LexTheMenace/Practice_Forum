import React, { useEffect } from 'react';
import { login } from '../../actions/authActions';
import { useStoreContext } from '../../context/Store';

const LoginToken = () => {
    const { dispatch } = useStoreContext();
    
    useEffect(() => {
        const location = window.location.hash.split('/');
        const token = location[location.length - 1];
        if(token) {
            login(dispatch, token)
            window.location.hash = '/forum'
            
        } else {
            window.location.hash = '/'
        }
    }, [login])
    return <h1 > Logging in... </h1>
};

export default LoginToken;