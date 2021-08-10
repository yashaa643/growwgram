import { Dispatch } from 'react';

import unsplash from '../api/unsplash';
import {
  Terror,
  TfetchPosts,
  TfetchUser,
} from '../types';

export const fetchPosts = () => async (dispatch: Dispatch<TfetchPosts>) => {
    const response = await unsplash.get('/photos/random', {
        params: {
            count: 10
        },
    }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }
        console.log(error.config);
    });
    if (response)
        dispatch({ type: 'FETCH_POSTS', payload: response.data });
}

export const fetchUser = (username: string) => async (dispatch: Dispatch<TfetchUser | Terror>) => {

    console.log("fetching users");
    const url = '/users/' + username;
    const response = await unsplash.get(url, {
        params: {
            username: username,
        },
    }).catch(
        (error) => {
            if(error.response){
                console.log("error",error)
                dispatch({type: 'FETCH_USER_ERROR', payload: true})
            }
        }
    );
    if (response) {
        dispatch({ type: 'FETCH_USER', payload: response.data });
    }
}

export const clearUser = () => (dispatch: Dispatch<TfetchUser>) => {
    dispatch({ type: 'CLEAR_USER', payload: {} });
}

export const clearUserPosts = () => (dispatch: Dispatch<TfetchPosts>) => {
    dispatch({ type: 'CLEAR_USER_POSTS', payload: [] });
}

export const fetchAUserPosts = (username: string, page: number) => async (dispatch: Dispatch<TfetchPosts>) => {
    const url = '/users/' + username + '/photos';
    const response = await unsplash.get(url, {
        params: {
            username: username,
            page: page,
            per_page: 9
        },
    });

    dispatch({ type: 'FETCH_USER_POSTS', payload: response.data });
}

export const clearPosts = () => (dispatch: Dispatch<TfetchPosts>) => {
    dispatch({ type: 'CLEAR_POSTS', payload: [] });
}


