import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { addTopicReply, loadReplies } from '../actions/forumActions';
import { useForumContext } from '../context/forumContext';
import { useStoreContext } from '../context/Store';
import TopicReplies from './TopicReplies';

const Topic = () => {
    const { id } = useParams();
    const { user } = useStoreContext();
    const {topics,  replies, dispatch} = useForumContext();
    
    const getTopic = () => topics.filter(topic => topic._id === id)[0];

    const topic = getTopic();

    const [newReply, setNewReply] = useState('')

    const onChange = (e) => setNewReply({
        ...newReply,
        [e.target.name]: e.target.value
    });

    const onSubmit = (e) => {
        e.preventDefault();

        newReply.topic_id = topic._id;
        newReply.user_id = user._id;
        newReply.user_name = user.display_name;
        
        if (newReply.description) {
            addTopicReply(dispatch, newReply);
            setNewReply({ description: '' })
        };
    };

    useEffect(() => {
        if (topic) loadReplies(dispatch, topic._id)
    }, [])

    return ( 
        topic && user ?
            <div className='container'>
                <div>
                    <div class="jumbotron mt-3" style={{width: '50vw', margin: 'auto'}}>
                        <h1 class="display-3">{topic.title}</h1>
                        <p class="lead">{topic.description}</p>
                <hr className='mb-5' style={{ display: 'block', }} />
                    {'Replies'}
                    <TopicReplies replies={replies} />
                    <form onSubmit={onSubmit} onChange={onChange}>
                        <div class="form-group">
                            <label for="exampleTextarea">Comment as <span style={{ color: 'white' }} href={`/user/${user.display_name}`}>{user.display_name}</span></label>
                            <textarea value={newReply.description} name='description' class="form-control" id="description" rows="3"></textarea>
                        </div>
                        <button style={{ float: 'right' }} type="submit" class="btn btn-primary">Reply</button>
                    </form>
                </div> </div>
               
            </div> : <h1> No topic here... </h1>
    )
};

export default Topic;