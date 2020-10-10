import axios from 'axios';
/* import { Context, useContext } from 'react' */
let API_URL = 'http:deployed.url';

 if(window.location.hostname === 'localhost') {
    API_URL = 'http://localhost:3000'
  } 

  export async function isAdmin() {
      const res = await axios.get(`${API_URL}/auth/isAdmin`)
      return res.data.isAdmin
        
  }
/* 
  export function onLoad(Context){
    const theme = useContext(Context);
    const { login } = theme.methods;
    login(localStorage.token);

  } */