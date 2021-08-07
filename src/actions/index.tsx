import { Dispatch } from 'react';

import unsplash from '../api/unsplash';
import {
  TfetchPosts,
  TfetchUser,
} from '../types';

export const fetchPosts = () => async (dispatch: Dispatch<TfetchPosts>) =>{
    const response = await unsplash.get('/photos/random',{
        params: {
           count: 10     
        },
    });
    dispatch({type: 'FETCH_POSTS', payload: response.data});
}

export const fetchUser = (username:string) => async (dispatch: Dispatch<TfetchUser>) =>{
    const url = '/users/' + username;
    const response = await unsplash.get(url,{
        params: {
           username: username,  
        },
    });
    dispatch({type: 'FETCH_USER', payload: response.data});
}

export const clearUser = () => (dispatch: Dispatch<TfetchUser>) =>{
    dispatch({type: 'CLEAR_USER', payload:{}});
}

export const clearUserPosts = () => (dispatch: Dispatch<TfetchUser>) =>{
    dispatch({type: 'CLEAR_USER_POSTS', payload:[]});
}

export const fetchAUserPosts = (username:string,page:number) => async (dispatch: Dispatch<TfetchPosts>) =>{
    const url = '/users/' + username + '/photos';
    const response = await unsplash.get(url,{
        params: {
           username: username,  
           page: page,
           per_page: 9
        },
    });

    dispatch({type: 'FETCH_USER_POSTS', payload: response.data});
}

export const clearPosts = () => (dispatch: Dispatch<TfetchPosts>) =>{
    dispatch({type: 'CLEAR_POSTS', payload:[]});
}


