import { SET_CATEGORIES, 
    PUSH_CATEGORY,
    SET_TOPICS,
    PUSH_TOPIC,
    PUSH_REPLY,
    SET_REPLIES
} from '../actions/types';

const reducer = (state, action) => {
    if(process.env.NODE_ENV === 'development') console.log(action);
    
    switch (action.type) {
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            };
        case PUSH_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, action.payload]
            };
        case SET_TOPICS:
            return {
                ...state,
                topics: action.payload
            };
        case PUSH_TOPIC:
            return {
                ...state,
                topics: [...state.topics, action.payload]
            };
        case PUSH_REPLY:
            return {
                ...state,
                replies: [...state.replies, action.payload]
            };
        case SET_REPLIES:
            return {
                ...state,
                replies: action.payload
            };
        default:
            return state;
    }
}

export default reducer;