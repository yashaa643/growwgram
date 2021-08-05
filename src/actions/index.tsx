import { Dispatch } from 'react';

import unsplash from '../api/unsplash';
import { FETCH_POSTS } from '../types';

export const fetchPosts = () => async (dispatch: Dispatch<FETCH_POSTS>) =>{
    const response = await unsplash.get('/photos/random',{
        params: {
           count: 10     
        },
    });
    dispatch({type: 'FETCH_POSTS', payload: response.data});
}