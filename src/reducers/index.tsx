import { combineReducers } from 'redux';

import postsReducer from './postsReducer';
import userPostsReducer from './userPostsReducer';
import userReducer from './userReducer';

export default combineReducers({
    posts: postsReducer,
    user: userReducer,
    userPosts: userPostsReducer
});