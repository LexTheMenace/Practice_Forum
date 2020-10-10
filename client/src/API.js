import axios from 'axios';
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

export async function createCategory(newCategory){
  const res = await axios.post(`${API_URL}/categories`, newCategory,  {
    headers: {
    authorization: `Bearer ${localStorage.token}`
  }} )
  const category = await res.data
  return category
}
