import axios from 'axios';
/* import { Context, useContext } from 'react' */
let BASE_URL = 'http:deployed.url';

 if(window.location.hostname === 'localhost') {
    BASE_URL = 'http://localhost:3000'
  } 
  const API_URL = `${BASE_URL}/api/v1`

export async function getAllCategories(){
  const res = await axios.get(`${API_URL}/categories`)
  const categories = await res.data
  return categories
}
/* 
  export function onLoad(Context){
    const theme = useContext(Context);
    const { login } = theme.methods;
    login(localStorage.token);

  } */