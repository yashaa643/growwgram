import { Dispatch } from 'react';

import unsplash from '../api/unsplash';
import {
  Terror,
  TfetchPosts,
  TfetchUser,
} from '../types';

function _setWithExpiry(key: string, value: any, ttl: number) {
    const now = new Date()
    const item = {
        value: value,
        expiry: now.getTime() + ttl,
    }
    localStorage.setItem(key, JSON.stringify(item))
}

function _getWithExpiry(key: string) {
    const itemStr = localStorage.getItem(key)
    if (!itemStr) {
        return null
    }
    const item = JSON.parse(itemStr)
    const now = new Date()
    if (now.getTime() > item.expiry) {
        localStorage.removeItem(key)
        return null
    }
    return item.value
}

function _dispatchError(error:any,dispatch: Dispatch<TfetchPosts | TfetchUser | Terror>){
    if (error.response) {        //request was made but server responded with status code different then 2xx
        if (error.response.status === 401) {
            dispatch({ type: 'FETCH_USER_ERROR', payload: { err: true, errMessage: "401" } })
        }                     
        else if (error.response.status === 404) {
            dispatch({ type: 'FETCH_USER_ERROR', payload: { err: true, errMessage: "404" } })
        }
    } else if (error.request) {                 //request was made but no response received
        dispatch({ type: 'FETCH_USER_ERROR', payload: { err: true, errMessage: error.message } })
    } else {                                    //error in request config
        console.log('Error', error.message);
    }
    console.log(error.config);
}


export const fetchPosts = () => async (dispatch: Dispatch<TfetchPosts| TfetchUser | Terror>) => {
    clearUser();
    clearUserPosts();
    const cache = _getWithExpiry("feedPosts")
    if(!cache){
        const response = await unsplash.get('/photos/random', {params: {count: 10},}).catch((error) => _dispatchError(error,dispatch));
        if (response) {
            _setWithExpiry("feedPosts",response.data,300000); //cache for 5 min
            dispatch({ type: 'FETCH_POSTS', payload: response.data });
        }
    }else{ dispatch({ type: 'FETCH_POSTS', payload: cache });}
}

export const fetchUser = (username: string) => async (dispatch: Dispatch<TfetchUser | Terror>) => {
    const url = '/users/' + username;
    const cache = _getWithExpiry("$" + username)
    if(!cache){
        const response = await unsplash.get(url, {params: {username},}).catch((error) => _dispatchError(error,dispatch));
        if (response) {
            _setWithExpiry("$"+username,response.data,300000); //cache for 5 min
            dispatch({ type: 'FETCH_USER', payload: response.data });
        }
    }
    else{dispatch({ type: 'FETCH_USER', payload: cache });}   
}

export const clearUser = () => (dispatch: Dispatch<TfetchUser>) => {
    dispatch({ type: 'CLEAR_USER', payload: {} });
}

export const clearUserPosts = () => (dispatch: Dispatch<TfetchPosts>) => {
    dispatch({ type: 'CLEAR_USER_POSTS', payload: [] });
}

export const fetchAUserPosts = (username: string, page: number) => async (dispatch: Dispatch<TfetchPosts | Terror>) => {
    const url = '/users/' + username + '/photos';
    const response = await unsplash.get(url, {
        params: {
            username: username,
            page: page,
            per_page: 9
        },
    }).catch(function (error) {
        
    });;

    if (response) {
        ((page === 1) ?
            dispatch({ type: 'FETCH_USER_POSTS_FIRST', payload: response.data }) :
            dispatch({ type: 'FETCH_USER_POSTS', payload: response.data }))
    }


}

export const clearPosts = () => (dispatch: Dispatch<TfetchPosts>) => {
    dispatch({ type: 'CLEAR_POSTS', payload: [] });
}


