import { union } from 'lodash';

import { TfetchPosts } from '../../types';
import {
  ClearPosts,
  FetchPosts,
} from '../actionTypes';

const postsReducer = (state=[], action : TfetchPosts) => {
    
    switch(action.type){
        case FetchPosts:
            return union(state,action.payload);
        case ClearPosts:
            return [];
        default:
            return state;
    }
}

export default postsReducer;