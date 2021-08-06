import { TfetchPosts } from '../types';

const postsReducer = (state=[], action : TfetchPosts) => {
    
    switch(action.type){
        case 'FETCH_POSTS':
            return [...state,...action.payload];
        case 'FETCH_USER_POSTS':
            return [...state,...action.payload];
        default:
            return state;
    }
}

export default postsReducer;