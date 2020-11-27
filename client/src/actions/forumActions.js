import {
    getAllCategories, createCategory,
    createTopic, getAllTopics,
    createTopicReply, getAllReplies
} from '../API';

export const loadCategories = async (dispatch) => {
        const categories = await getAllCategories();
        dispatch({
            type: 'SET_CATEGORIES',
            payload: categories
        })
    }
    export const addCategory = async (dispatch, newCategory) => {
        const category = await createCategory(newCategory);
        dispatch({
            type: 'PUSH_CATEGORY',
            payload: category
        })
    }

    export const   addTopic = async (dispatch, newTopic, user) => {
        const topic = await createTopic(newTopic, user);
        dispatch({
            type: 'PUSH_TOPIC',
            payload: topic
        })
    }
    export const loadTopics = async (dispatch, id) => {
        const topics = await getAllTopics(id);
        dispatch({
            type: 'SET_TOPICS',
            payload: topics
        })
    }

    export const addTopicReply = async (dispatch, newReply) => {

        const reply = await createTopicReply(newReply);

        dispatch({
            type: 'PUSH_REPLY',
            payload: reply
        })
    }
    export const loadReplies = async (dispatch, id) => {
        const replies = await getAllReplies(id);
        dispatch({
            type: 'SET_REPLIES',
            payload: replies
        })
    }