import React, { useEffect, useContext } from 'react';
import { login } from '../../actions/authActions';
import { ForumContext } from '../../context/forumContext';

export default function LoginToken() {
    const [state, dispatch] = useContext(ForumContext);


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
}
