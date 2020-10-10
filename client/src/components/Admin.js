import React, { useContext, useEffect, useState } from 'react'
import { Context, Consumer } from '../context'

function Admin() {
    const theme = useContext(Context);
    const { isAdmin, loadCategories, addCategory } = theme.methods
    const { categories } = theme.state;
   
    const initialState = {
        title: '',
        description: '',
        image_url: ''
    }
    const [ newCategory, setNewCategory ] = useState(initialState);
   
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

    const onChange = (e) => setNewCategory({ 
        ...newCategory,
     [e.target.name]: e.target.value 
    });
    const onSubmit = (e) => {
        e.preventDefault();
        addCategory(newCategory)
        setNewCategory(initialState)
    }
    return (
        <div>
            <h1>Admin Page</h1>
            <div className="list-group">
                {categories.map(category => {
                    return (
                        <a key={category._id} href="#" className="list-group-item list-group-item-action flex-column align-items-start ">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">{category.title}</h5>
                                {/* <small>3 days ago</small> */}
                            </div>
                            <p className="mb-1">{category.description} </p>
                        </a>
                    )
                })}
            </div>
            <div className='mt-4'>

            <h3>Add Categories</h3>
            <form onChange={onChange} onSubmit={onSubmit}>
                <div className='form-group'>
                <label for='title' >Title</label>
                <input name='title' className='form-control' id='title' value={newCategory.title} ></input>
                </div>
                <div className='form-group'>
                <label for='description' >Description</label>
                <textarea name='description' className='form-control' id='description' value={newCategory.description} rows='3'></textarea>
                </div>
                <div className='form-group'>
                <label for='image' >Description</label>
                <input name='image_url' className='form-control' id='image' value={newCategory.image_url}></input>
                </div>
                <button type='submit' className='btn btn-success'> Add Category </button>
            </form>
            </div>
        </div>
    )





}

export default Admin

