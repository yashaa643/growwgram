import { TfetchPosts } from '../types';

const postsReducer = (state=[], action : TfetchPosts) => {
    
    switch(action.type){
        case 'FETCH_POSTS':
            return [...state,...action.payload];
        case 'CLEAR_POSTS':
            return [];
        default:
            return state;
    }
}

export default postsReducer;