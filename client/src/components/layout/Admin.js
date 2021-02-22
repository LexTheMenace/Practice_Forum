import React, { useState } from 'react';
import { addCategory } from '../../actions/forumActions';
import { useForumContext } from '../../context/forumContext';
import CategoryList from '../CategoryList';

const Admin = () => {
    const { dispatch } = useForumContext(); 
 
    const initialState = {
        title: '',
        description: '',
        image_url: ''
    };

    const [ newCategory, setNewCategory ] = useState(initialState);

    const onChange = (e) => setNewCategory({ 
        ...newCategory,
     [e.target.name]: e.target.value 
    });

    const onSubmit = (e) => {
        e.preventDefault();
        addCategory(dispatch, newCategory)
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

