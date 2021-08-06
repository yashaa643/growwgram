import { TfetchUser } from '../types';

const postsReducer = (state={}, action : TfetchUser) => {
    
    switch(action.type){
        case 'FETCH_USER':
            return action.payload;
        case 'CLEAR_USER' :
            return {};
        default:
            return state;
    }
}

export default postsReducer;