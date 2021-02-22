import {
    SET_TOKEN,
    SET_USER
} from '../actions/types';

const userReducer = (state, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload
            };
        case SET_USER:
            return {
                ...state,
                user: action.payload
            };
        default: throw new Error(`Unrecognized action type: ${action.type}`)
    }
};

export default userReducer;