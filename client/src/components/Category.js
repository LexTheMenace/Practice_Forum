import React, { useState, useContext } from 'react';
import { useParams} from 'react-router-dom'
import { addTopic } from '../context/topicContext'
import { Context } from '../context';
import TopicList from './TopicList'
export default function Category() {
    const initialState = {
        title: '',
        description: ''
    }

    const [newTopic, setNewTopic] = useState(initialState)
    const [show, setShow] = useState(false);
    const context = useContext(Context);
    const { addTopic } = context.methods
const { name  } = useParams()

    const onChange = (e) => setNewTopic({ 
        ...newTopic,
     [e.target.name]: e.target.value 
    });
    const onSubmit = (e) => {
        e.preventDefault();
        newTopic.category_name = name;

        if(newTopic.title && newTopic.description) {
            addTopic(newTopic); 
            setNewTopic(initialState);
            setShow(false);
        }

    }
    return (
        <div>
            {name}<br />
            <button class="btn btn-primary" onClick={() => setShow(!show)}>{show ? 'x' : '+'}</button>
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

                    <button type="submit" class="btn btn-primary">Submit</button>
                </fieldset>
            </form>
            <TopicList category={name}/>
        </div>
    )
}
