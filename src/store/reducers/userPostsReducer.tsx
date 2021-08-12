import { TfetchPosts } from '../../types';
import {
  ClearUserPosts,
  FetchUserPosts,
  FetchUserPostsFirst,
} from '../actionTypes';

const userPostsReducer = (state=[], action : TfetchPosts) => {
    
    switch(action.type){
        case FetchUserPostsFirst:
            return [...action.payload];
        case FetchUserPosts:
            return [...state,...action.payload];
        case ClearUserPosts:
            return [];
        default:
            return state;
    }
}

export default userPostsReducer;