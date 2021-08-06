import { FETCH_POSTS } from '../types';

const postsReducer = (state=[], action : FETCH_POSTS) => {
    
    switch(action.type){
        case 'FETCH_POSTS':
            return [...state,...action.payload];
        default:
            return state;
    }
}

export default postsReducer;