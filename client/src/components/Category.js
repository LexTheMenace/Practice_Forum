import React, { useState } from 'react';
import { useParams} from 'react-router-dom';
import { addTopic } from '../actions/forumActions';
import { useForumContext } from '../context/forumContext';
import { useStoreContext } from '../context/Store';
import TopicList from './TopicList';
import { isGuest } from '../actions/authActions';
const initialState = {
        title: '',
        description: ''
    };

const Category = () => {
    const { categories, dispatch } = useForumContext();
    const { user } = useStoreContext();
    const { name  } = useParams();
    const category = categories.filter(category => category.title === name)[0];

    const disabled = (isGuest(user) && category._id !== "60367440a7eabd9b101f2fde");
  
    const [newTopic, setNewTopic] = useState(initialState)
    const [show, setShow] = useState(false);
       
    const onChange = (e) => setNewTopic({ 
        ...newTopic,
     [e.target.name]: e.target.value 
    });

    const onSubmit = (e) => {
        e.preventDefault();
        newTopic.category_name = name;

        if(newTopic.title && newTopic.description) {
            addTopic(dispatch, newTopic, user); 
            setNewTopic(initialState);
            setShow(false);
        }

    }
    // Bring get topics function in here eventually

    return (
category ? <div>
            <h2>{name}</h2><br />
            <button 
            class={`btn btn-primary ${disabled && 'disabled'}`} 
            onClick={() => setShow(!show)}
            disabled={disabled}
            >
                {show ? 'x' : 'Post Topic'}
                </button>
            
            <img 
            style={{float: 'right', 
            width: '50px', 
            height: '50px', 
            overflow: 'hidden'}} 
            src={category ? category.image_url : null}></img>
            
            <form onSubmit={onSubmit} onChange={onChange} style={{ display: show ? 'block' : 'none' }}>
                <fieldset>
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input name='title' type="text" class="form-control" id="title" aria-describedby="emailHelp" placeholder="Title" />
                    </div>
                    <div class="form-group">
                        <label for="description"> Description </label>
                        <textarea name='description' class="form-control" id="description" rows="3"></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </fieldset>
            </form>
            <TopicList category={category}/>
        </div> : <h1>no</h1>
    )
}
export default Category;