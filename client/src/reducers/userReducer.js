import {
    SET_TOKEN,
    SET_USER,
    LOGOUT
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
            case LOGOUT:
            return {
                ...state,
                user: null,
                token: null
            };
        default: throw new Error(`Unrecognized action type: ${action.type}`)
    }
};

export default userReducer;