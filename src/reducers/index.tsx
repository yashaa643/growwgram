import { combineReducers } from 'redux';

import errorReducer from './errorReducer';
import postsReducer from './postsReducer';
import userPostsReducer from './userPostsReducer';
import userReducer from './userReducer';

export default combineReducers({
    posts: postsReducer,
    user: userReducer,
    userPosts: userPostsReducer,
    error: errorReducer
});