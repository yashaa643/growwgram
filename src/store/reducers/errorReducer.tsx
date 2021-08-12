import {
  storeState,
  Terror,
} from '../../types';
import { FetchError } from '../actionTypes';

const userReducer = (state:storeState, action : Terror ) => {
    
    switch(action.type){
        case FetchError:
            return action.payload;
        default:
            return false;
    }
}

export default userReducer;