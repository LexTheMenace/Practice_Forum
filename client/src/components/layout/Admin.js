import React, { useContext, useEffect, useState } from 'react'
import { Context, Consumer } from '../../context'
import CategoryList from '../CategoryList';

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
         <CategoryList />
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
                <label for='image_url' >Image</label>
                <input name='image_url' className='form-control' id='image' value={newCategory.image_url}></input>
                </div>
                <button type='submit' className='btn btn-success'> Add Category </button>
            </form>
            </div>
        </div>
    )





}

export default Admin

