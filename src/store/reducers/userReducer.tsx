import { TfetchUser } from '../../types';
import {
  ClearUser,
  FetchUser,
} from '../actionTypes';

const userReducer = (state={}, action : TfetchUser ) => {
    
    switch(action.type){
        case FetchUser:
            return action.payload;
        case ClearUser :
            return {};
        default:
            return state;
    }
}

export default userReducer;