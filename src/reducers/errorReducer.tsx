import { Terror } from '../types';

const userReducer = (state={}, action : Terror ) => {
    
    switch(action.type){
        case 'FETCH_USER_ERROR':
            return action.payload;
        default:
            return false;
    }
}

export default userReducer;