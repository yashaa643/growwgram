import { TfetchPosts } from '../types';

const userPostsReducer = (state=[], action : TfetchPosts) => {
    
    switch(action.type){
        case 'FETCH_USER_POSTS':
            return [...state,...action.payload];
        case 'CLEAR_USER_POSTS':
            return [];
        default:
            return state;
    }
}

export default userPostsReducer;