import { TfetchUser } from '../types';

const userReducer = (state={}, action : TfetchUser ) => {
    
    switch(action.type){
        case 'FETCH_USER':
            return action.payload;
        case 'CLEAR_USER' :
            return {};
        default:
            return state;
    }
}

export default userReducer;