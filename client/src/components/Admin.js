import React, { useContext, useEffect } from 'react'
import { Context, Consumer } from '../context'

function Admin() {
    const theme = useContext(Context);
    const { isAdmin, loadCategories } = theme.methods
    async function getAdmin() {
        const res = await isAdmin();
        return res
    }

    useEffect(() => {
        getAdmin()
            .then(admin => {
                if (!admin) {
                    window.location.hash = '/forum'
                } else {
                    loadCategories()
                }

            })
    }, [])
const { categories } = theme.state;
return (
   categories.map(category => {
 return(
                 <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start ">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{category.title}</h5>
                    <small>3 days ago</small>
                </div>
                <p class="mb-1">{category.description} </p>
            </a>
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">List group item heading</h5>
                    <small class="text-muted">3 days ago</small>
                </div>
                <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                <small class="text-muted">Donec id elit non mi porta.</small>
            </a>
        </div>
            )  
})
  
)

              
        
   
    
}

export default Admin

